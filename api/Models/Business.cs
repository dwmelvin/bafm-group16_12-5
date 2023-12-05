namespace api.Models
{
    public class Business : User
    {
        public int UserID {get; set;}
        public int BusinessID {get; set;}
        public string BusinessName {get; set;}
        public string Description {get; set;}
        public string CoverImageURL {get; set;}
        public bool Delete {get; set;}
    }
}