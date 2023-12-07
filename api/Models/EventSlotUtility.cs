using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
using api.Controllers;

namespace api.Models
{
    public class EventSlotUtility
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
                    BusinessID = rdr.GetInt32("businessID"),
                    BusinessEmail = rdr.GetString("businessEmail"),
                    BusinessPassword = rdr.GetString("businessPassword"),
                    BusinessName = rdr.GetString("businessName"),
                    Description = rdr.GetString("description"),
                    CoverImage = rdr.GetString("coverImage"),
                    Deleted = rdr.GetBoolean("deleted")
                };
                businessList.Add(business);
            }
            con.Close();
            return businessList;
        }
        public void AddBusiness(Business business)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"INSERT INTO businesses (businessEmail, businessPassword, businessName) VALUES (@businessemail, @businesspassword, @businessname)";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@businessemail", business.BusinessEmail);
            cmd.Parameters.AddWithValue("@businesspassword", business.BusinessPassword);
            cmd.Parameters.AddWithValue("@businessname", business.BusinessName);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        public void DeleteBusiness(Business business)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"UPDATE businesses SET deleted = @deleted WHERE businessID = @BusinessID";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@BusinessID", business.BusinessID);
            cmd.Parameters.AddWithValue("@deleted", 1);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        public void UpdateBusiness(Business business)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"UPDATE businesses 
               SET                    
                   description = @description, 
                   coverImage = @coverImage 
               WHERE businessID = @businessID";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@businessID", business.BusinessID);
            cmd.Parameters.AddWithValue("@description", business.Description);
            cmd.Parameters.AddWithValue("@coverImage", business.CoverImage);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}
