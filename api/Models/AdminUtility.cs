using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api.Models;
 
namespace api.Models
{
    public class AdminUtility
    {
        public List<Admin> GetAllAdmins()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            var adminList = new List<Admin>();
            string stm = "SELECT * FROM admins";
            using var cmd = new MySqlCommand(stm, con);
 
            using MySqlDataReader rdr = cmd.ExecuteReader();
 
            while (rdr.Read())
            {
                var admin = new Admin
                {
                    UserID = rdr.GetInt32("userid"),
                    AdminName = rdr.GetString("adminname"),
                    Delete = rdr.GetBoolean("delete")
                };
                adminList.Add(admin);
            }
            con.Close();
            return adminList;
        }
 
        public void AddAdmin(Admin admin)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"INSERT INTO admins (adminname, delete) VALUES (@adminname, @delete)";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@adminname", admin.AdminName);
            cmd.Parameters.AddWithValue("@delete", admin.Delete);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
 
        public void DeleteAdmin(int userId)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"UPDATE admins SET delete = @Delete WHERE userid = @UserID";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@UserID", userId);
            cmd.Parameters.AddWithValue("@Delete", true);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
 
    }
}