using System.Data;
using MySql.Data;
using MySql.Data.MySqlClient;
 
namespace api
{
    public class ConnectionString
    {
        private string host {get; set;}
        private string database {get; set;}
        private string username {get; set;}
        private string port {get; set;}
        private string password {get; set;}
        public string cs {get; set;}
        public ConnectionString()
        {
            string host = "ble5mmo2o5v9oouq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "vghzt6em72k0szu6";
            string username = "nape2t3tx2od6cpu";
            string port = "3306";
            string password = "mlzlmr9y6autmlbz";
 
            cs = $@"server={host};user={username};database={database};port={port};password={password};";
        }
    }
}