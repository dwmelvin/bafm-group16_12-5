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
            string stm = @"SELECT b.businessName, es.eventDate, es.location
                            FROM businesses b
                            JOIN bookedSlot bs ON b.businessID = bs.businessID
                            JOIN eventSlot es ON bs.eventSlotID = es.eventSlotID;
                            ";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){

                var bookedSlot = new BookedSlot  
                {
                    Date = rdr.GetString("es.eventDate"),
                    Location = rdr.GetString("es.location"),
                    BusinessName = rdr.GetString("b.businessName"),
                };
                bookedSlotList.Add(bookedSlot);
            }
            con.Close();
            return bookedSlotList;
        }
        public void AddBookedSlot()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = "SELECT businessID, eventSlotID FROM bookedSlotRequest";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var businessID = rdr.GetInt32("businessID");
            var eventSlotID = rdr.GetInt32("eventSlotID");
            while(rdr.Read()){

                string newstm = @"INSERT INTO bookedSlot (eventSlotID, businessID) VALUES (@eventSlotID, @businessID)";
                using var newcmd = new MySqlCommand(newstm, con);

                newcmd.Parameters.AddWithValue("@eventSlotID", eventSlotID);
                newcmd.Parameters.AddWithValue("@businessID", businessID);

                newcmd.Prepare();
                newcmd.ExecuteNonQuery();
            }

            string neweststm = "DELETE FROM bookedSlotRequest WHERE businessID = @businessID AND eventSlotID = @eventSlotID";
            using var newestcmd = new MySqlCommand(neweststm, con);

            newestcmd.Parameters.AddWithValue("@businessID", businessID);
            newestcmd.Parameters.AddWithValue("@eventSlotID", eventSlotID);
            newestcmd.Prepare();
            newestcmd.ExecuteNonQuery();

            con.Close();
        }
        public void DeleteBookedSlot(BookedSlot bookedSlot)
        {
            // ConnectionString db = new ConnectionString();
            // using var con = new MySqlConnection(db.cs);
            // con.Open();

            // string stm = @"UPDATE businesses SET deleted = @deleted WHERE businessID = @BusinessID";
            // using var cmd = new MySqlCommand(stm, con);

            // cmd.Parameters.AddWithValue("@BusinessID", bookedSlot.BusinessID);
            // cmd.Parameters.AddWithValue("@deleted", 1);
            // cmd.Prepare();
            // cmd.ExecuteNonQuery();
        }
    }
}
