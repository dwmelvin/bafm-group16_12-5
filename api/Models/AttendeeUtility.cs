using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
 
namespace api.Models
{
    public class AttendeeUtility
    {
        public List<Attendee> GetAllAttendees()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var attendeeList = new List<Attendee>();
            string stm = "SELECT * FROM attendee";
            using var cmd = new MySqlCommand(stm, con);
 
            using MySqlDataReader rdr = cmd.ExecuteReader();
 
            while(rdr.Read()){
                var attendee = new Attendee  
                {
                    UserID = rdr.GetInt32("userid"),
                    AttendeeEmail = rdr.GetString("attendeeemail"),
                    AttendeePassword = rdr.GetString("attendeepassword"),
                    AttendeeName = rdr.GetString("attendeename"),
                    Delete = rdr.GetBoolean("deleted")
                };
                attendeeList.Add(attendee);
            }
            con.Close();
            return attendeeList;
        }
        public void AddAttendee(Attendee attendee)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"INSERT INTO attendee (attendeeName, deleted) VALUES (@attendeename, @deleted)";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@attendeename", attendee.AttendeeName);
            cmd.Parameters.AddWithValue("@deleted", attendee.Delete);
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        public void DeleteAttendee(Attendee attendee)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
 
            string stm = @"UPDATE attendee SET deleted = @deleted WHERE attendeeid = @AttendeeID";
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@AttendeeID", attendee.UserID);
            cmd.Parameters.AddWithValue("@deleted", attendee.Delete);
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