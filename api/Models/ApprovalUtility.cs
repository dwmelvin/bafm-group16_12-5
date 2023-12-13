using MySql.Data.MySqlClient;
using System.Collections.Generic;
using api;
using api.Models;
using api.Controllers;

namespace api.Models
{
    public class ApprovalUtility
    {
        public List<Approval> GetAllApprovals()
        {
            ConnectionString db = new ConnectionString();
            using var con = new MySqlConnection(db.cs);
            con.Open();
            var approvalList = new List<Approval>();
            string stm = @"SELECT b.businessName, es.eventDate, es.location
                            FROM bookedSlot bs
                            JOIN businesses b ON bs.businessID = b.businessID
                            JOIN eventSlot es ON bs.eventSlotID = es.eventSlotID
                            WHERE bs.approved = 1;";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            while (rdr.Read())
            {
                var approval = new Approval
                {
                    BusinessName = rdr.GetString(0),
                    Date = rdr.GetString(1),
                    Location = rdr.GetString(2)
                };
                approvalList.Add(approval);
            }
            con.Close();
            return approvalList;
        }
    }
}
