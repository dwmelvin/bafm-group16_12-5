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
            string stm = "SELECT businessID, eventSlotID FROM bookedSlot";
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
        // public void AddBookedSlot(BookedSlotRequest bookedSlotRequest)
        // {
        //     ConnectionString db = new ConnectionString();
        //     using var con = new MySqlConnection(db.cs);
        //     con.Open();

        //     string stm = @"INSERT INTO bookedSlot (eventSlotID, businessID) VALUES (@eventSlotID, @businessID)";
        //     using var cmd = new MySqlCommand(stm, con);

        //     cmd.Parameters.AddWithValue("@eventSlotID", bookedSlotRequest.EventSlotID);
        //     cmd.Parameters.AddWithValue("@businessID", bookedSlotRequest.BusinessID);

        //     cmd.Prepare();
        //     cmd.ExecuteNonQuery();
        // }
        // public void DeleteBookedSlot(BookedSlot bookedSlot)
        // {
        //     // ConnectionString db = new ConnectionString();
        //     // using var con = new MySqlConnection(db.cs);
        //     // con.Open();

        //     // string stm = @"UPDATE businesses SET deleted = @deleted WHERE businessID = @BusinessID";
        //     // using var cmd = new MySqlCommand(stm, con);

        //     // cmd.Parameters.AddWithValue("@BusinessID", bookedSlot.BusinessID);
        //     // cmd.Parameters.AddWithValue("@deleted", 1);
        //     // cmd.Prepare();
        //     // cmd.ExecuteNonQuery();
        // }
    }
}
