namespace api.Controllers
{
    public class Business
    {
        public int BusinessID {get; set;}
        public string BusinessEmail {get; set;}
        public string BusinessPassword {get; set;}
        public string BusinessName {get; set;}
        public string Description {get; set;}
        public string CoverImage {get; set;}
        public bool Deleted {get; set;}

    }
}