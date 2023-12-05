namespace api.Models
{
    public class Attendee : User
    {
        public string AttendeeName { get; set; }
        public string AttendeeEmail { get; set; }
        public string AttendeePassword { get; set; }

    }
}