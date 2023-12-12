using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
using api.Controllers;

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

            while(rdr.Read()){
                var admin = new Admin  
                {
                    AdminID = rdr.GetInt32("adminID"),
                    AdminEmail = rdr.GetString("adminEmail"),
                    AdminPassword = rdr.GetString("adminPassword"),
                    AdminName = rdr.GetString("adminName"),

                };
                adminList.Add(admin);
            }
            con.Close();
            return adminList;
        }
    }
}
