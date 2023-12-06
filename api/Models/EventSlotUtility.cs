using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
 
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
                    EventDate = rdr.GetString("eventDate"),
                    Location = rdr.GetString("location"),
 
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
                                                                                                                                           
            string stm = @"INSERT INTO eventSlot (eventSlotID, eventDate, location) VALUES (@eventSlotID, @eventdate, @location)";
            using var cmd = new MySqlCommand(stm, con);
 
            // check @'s for data mistargeting/labeling
            cmd.Parameters.AddWithValue("@eventSlotID", eventSlot.EventSlotID);
            cmd.Parameters.AddWithValue("@eventDate", eventSlot.EventDate);
            cmd.Parameters.AddWithValue("@location", eventSlot.Location);
 
 
            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}