using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
using api.Controllers;

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
            string stm = @"SELECT * FROM bookedSlot";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){

                var bookedSlot = new BookedSlot  
                {
                    BookedSlotID = rdr.GetInt32("bookedSlotID"),
                    BusinessID = rdr.GetInt32("businessID"),
                    EventSlotID = rdr.GetInt32("eventSlotID"),
                    Approved = rdr.GetBoolean("approved"),
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

            string stm = @"INSERT INTO bookedSlot (businessID, eventSlotID, approved) VALUES (@businessID, @eventSlotID, @approved)";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@businessID", bookedSlot.BusinessID);
            cmd.Parameters.AddWithValue("@eventSlotID", bookedSlot.EventSlotID);
            cmd.Parameters.AddWithValue("@approved", bookedSlot.Approved);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        public void ApproveBookedSlot(BookedSlot bookedSlot)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"UPDATE eventslot 
               SET                    
                   businessID = @businessID, 
                   eventSlotID = @eventSlotID,
                   approved = @approved 
               WHERE bookedSlotID = @bookedSlotID";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@bookedSlotID", bookedSlot.BookedSlotID);
            cmd.Parameters.AddWithValue("@businessID", bookedSlot.BusinessID);
            cmd.Parameters.AddWithValue("@eventSlotID", bookedSlot.EventSlotID);
            cmd.Parameters.AddWithValue("@approved", bookedSlot.Approved);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}
