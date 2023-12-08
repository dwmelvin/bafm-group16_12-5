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
            string stm = "NEEDS JOIN QUERY";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){
                // format may not be alias a.fieldname and instead be fieldname from each table
                var bookedSlot = new BookedSlot  
                {
                    Date = rdr.GetInt32("e.eventDate"),
                    Location = rdr.GetString("e.location"),
                    BusinessName = rdr.GetString("b.businessName"),
                };
                bookedSlotList.Add(business);
            }
            con.Close();
            return businessList;
        }
        public void AddBookedSlot(EventSlot eventSlot, Business business)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"INSERT INTO bookedSlot (eventSlotID, businessID) VALUES (@eventSlotID, @businessID)";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@eventSlotID", eventSlot.EventSlotID);
            cmd.Parameters.AddWithValue("@businessID", business.BusinessID);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        // we don't have a deleted field for deleted on bookedSlot table
        // public void DeleteBookedSlot(BookedSlot bookedSlot)
        // {
        //     ConnectionString db = new ConnectionString();
        //     using var con = new MySqlConnection(db.cs);
        //     con.Open();

        //     string stm = @"UPDATE businesses SET deleted = @deleted WHERE businessID = @BusinessID";
        //     using var cmd = new MySqlCommand(stm, con);

        //     cmd.Parameters.AddWithValue("@BusinessID", bookedSlot.BusinessID);
        //     cmd.Parameters.AddWithValue("@deleted", 1);
        //     cmd.Prepare();
        //     cmd.ExecuteNonQuery();
        // }
    }
}
