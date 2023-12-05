using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
 
namespace api.Models
{
    public class UserUtility
    {
        public List<User> GetAllUsers()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var userList = new List<User>();
            string stm = "SELECT * FROM users WHERE deleted = 0";
            using var cmd = new MySqlCommand(stm, con);
 
            using MySqlDataReader rdr = cmd.ExecuteReader();
 
            while (rdr.Read())
            {
                var user = new User
                {
                    UserID = rdr.GetInt32("userID"),
                    UserEmail = rdr.GetString("userEmail"),
                    UserPassword = rdr.GetString("userPassword"),
                    UserName = rdr.GetString("userName"),
                    Delete = rdr.GetBoolean("deleted")
                };
                userList.Add(user);
            }
            con.Close();
            return userList;
        }
 
        public int AddUser(User user)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"INSERT INTO users (userEmail, userPassword, userName, deleted) VALUES (@useremail, @userpassword, @username, @deleted); SELECT LAST_INSERT_ID();";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@useremail", user.UserEmail);
            cmd.Parameters.AddWithValue("@userpassword", user.UserPassword); // Make sure this is hashed
            cmd.Parameters.AddWithValue("@username", user.UserName);
            cmd.Parameters.AddWithValue("@deleted", false);
 
            cmd.Prepare();
            int userID = Convert.ToInt32(cmd.ExecuteScalar()); // Get the ID of the newly added user
            return userID;
        }
 
 
        public void DeleteUser(User user)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"UPDATE users SET deleted = @deleted WHERE userid = @UserID";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@UserID", user.UserID);
            cmd.Parameters.AddWithValue("@deleted", true);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}