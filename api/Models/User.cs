namespace api.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string UserEmail { get; set; }
        public string UserPassword { get; set; }
        public string UserName { get; set; }
        public string UserType { get; set; }
        public bool Delete {get; set;}
    }
}