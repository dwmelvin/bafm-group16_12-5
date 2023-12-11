using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
using api.Controllers;

namespace api.Models
{
    public class BookedSlotRequestUtility
    {
        public List<BookedSlotRequest> GetAllBookedSlotRequests()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var bookedSlotRequestList = new List<BookedSlotRequest>();
            string stm = "SELECT businessID, eventSlotID FROM bookedSlotRequest";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){

                var bookedSlotRequest = new BookedSlotRequest  
                {
                    BusinessID = rdr.GetInt32("businessID"),
                    EventSlotID = rdr.GetInt32("eventSlotID"),
                };
                bookedSlotRequestList.Add(bookedSlotRequest);
            }
            con.Close();
            return bookedSlotRequestList;
        }
        
         public void AddBookedSlotRequest(BookedSlotRequest bookedSlotRequest)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"INSERT INTO bookedSlotRequest (businessID, eventSlotID) VALUES (@businessID, @eventSlotID)";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@businessID", bookedSlotRequest.BusinessID);
            cmd.Parameters.AddWithValue("@eventSlotID", bookedSlotRequest.EventSlotID);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}
