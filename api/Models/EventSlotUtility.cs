using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
using api.Controllers;

namespace api.Models
{
    public class EventSlotUtility
    {
        public List<EventSlot> GetAllEventSlots()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var eventSlotList = new List<EventSlot>();
            string stm = "SELECT * FROM eventSlot";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while(rdr.Read()){
                var eventSlot = new EventSlot  
                {
                    EventSlotID = rdr.GetInt32("eventSlotID"),
                    Date = rdr.GetString("eventDate"),
                    Location = rdr.GetString("location")
                };
                eventSlotList.Add(eventSlot);
            }
            con.Close();
            return eventSlotList;
        }
        public void AddEventSlot(EventSlot eventSlot)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"INSERT INTO eventSlot (eventDate, location) VALUES (@eventdate, @location)";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@eventdate", eventSlot.Date);
            cmd.Parameters.AddWithValue("@location", eventSlot.Location);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
        // we don't have a deleted field on eventSlot table
        // public void DeleteEventSlot(EventSlot eventSlot)
        // {
        //     ConnectionString db = new ConnectionString();
        //     using var con = new MySqlConnection(db.cs);
        //     con.Open();

        //     string stm = @"UPDATE eventSlot SET deleted = @deleted WHERE eventSlotID = @eventSlotID";
        //     using var cmd = new MySqlCommand(stm, con);

        //     cmd.Parameters.AddWithValue("@eventSlotID", eventSlot.EventSlotID);
        //     cmd.Parameters.AddWithValue("@deleted", 1);
        //     cmd.Prepare();
        //     cmd.ExecuteNonQuery();
        // }
        public void UpdateEventSlot(EventSlot eventSlot)
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();

            string stm = @"UPDATE eventSlot 
               SET                    
                   date = @date, 
                   location = @location 
               WHERE eventSlotID = @eventSlotID";
            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@eventSlotID", eventSlot.EventSlotID);
            cmd.Parameters.AddWithValue("@date", eventSlot.Date);
            cmd.Parameters.AddWithValue("@location", eventSlot.Location);
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}
