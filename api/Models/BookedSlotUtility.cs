using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;

namespace api.Models
{
    public class BookedSlotUtility
    {
        public List<BookedSlot> GetAllBookedSlots()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var bookedSlotList = new List<BookedSlot>();
            string stm = "SELECT * FROM bookedSlot";
            using var cmd = new MySqlCommand(stm, con);
 
            using MySqlDataReader rdr = cmd.ExecuteReader();
 
            while(rdr.Read()){
                var bookedSlot = new BookedSlot  
                {
                    BookedSlotID = rdr.GetInt32("bookedSlotID"),
                    EventSlotID = rdr.GetInt32("eventSlotID"),
                    BusinessID = rdr.GetInt32("businessID"),
 
                };
                bookedSlotList.Add(bookedSlot);
            }
            con.Close();
            return bookedSlotList;
        }
 
        public void AddBookedSlot(BookedSlot bookedSlot)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
                                                                                                                                           
            string stm = @"INSERT INTO bookedSlot (bookedSlotID, businessID, eventSlotID) VALUES (@bookedSlotID, @businessID, @eventSlotID)";
            using var cmd = new MySqlCommand(stm, con);
 
            // check @'s for data mistargeting/labeling
            cmd.Parameters.AddWithValue("@bookedSlotID", bookedSlot.BookedSlotID);
            cmd.Parameters.AddWithValue("@businessID", bookedSlot.BusinessID);
            cmd.Parameters.AddWithValue("@eventSlotID", bookedSlot.EventSlotID);
 
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}