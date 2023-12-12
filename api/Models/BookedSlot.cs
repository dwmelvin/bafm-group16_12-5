namespace api.Controllers
{
    public class BookedSlot
    {
        public int BookedSlotID {get; set;}
        public int BusinessID {get; set;}
        public int EventSlotID {get; set;}
        public bool Approved {get; set;}
    }
}