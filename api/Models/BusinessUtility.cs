using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
 
namespace api.Models
{
    public class BusinessUtility
    {
         public List<Business> GetAllBusinesses()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var businessList = new List<Business>();
            string stm = "SELECT * FROM businesses";
            using var cmd = new MySqlCommand(stm, con);
 
            using MySqlDataReader rdr = cmd.ExecuteReader();
 
            while(rdr.Read()){
                var business = new Business  
                {
                    UserID = rdr.GetInt32("userID"),
                    BusinessName = rdr.GetString("businessName"),
                    Description = rdr.GetString("description"),
                    CoverImageURL = rdr.GetString("imageURL"),
                    Delete = rdr.GetBoolean("deleted")
                };
                businessList.Add(business);
            }
            con.Close();
            return businessList;
        }
 
        public void AddBusiness(int userID, Business business)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"INSERT INTO businesses (userID, businessName, description, imageURL, deleted) VALUES (@userID, @businessName, @description, @imageURL, @deleted)";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@userID", userID);
            cmd.Parameters.AddWithValue("@businessName", business.BusinessName);
            cmd.Parameters.AddWithValue("@description", business.Description);
            cmd.Parameters.AddWithValue("@imageURL", business.CoverImageURL);
            cmd.Parameters.AddWithValue("@deleted", business.Delete);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
 
        public void DeleteBusiness(int businessID)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"UPDATE businesses SET deleted = @deleted WHERE businessID = @BusinessID";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@BusinessID", businessID);
            cmd.Parameters.AddWithValue("@deleted", true); 

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }

 
        public int FindUserID()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"SELECT * FROM users ORDER BY userID DESC LIMIT 1";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
           
            return rdr.GetInt32("userID");
        }
 
        public int FindUserName()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"SELECT * FROM users ORDER BY userID DESC LIMIT 1";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
           
            return rdr.GetInt32("userName");
        }
    }
}