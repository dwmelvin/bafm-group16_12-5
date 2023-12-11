using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookedSlotController : ControllerBase
    {
        [HttpGet]
        public List<BookedSlot> Get()
        {
            BookedSlotUtility utility = new BookedSlotUtility();
            return utility.GetAllBookedSlots();
        }
 
        [HttpPost]
        public void Post()
        {
            
            BookedSlotUtility utility = new BookedSlotUtility();
            utility.AddBookedSlot();
        }
 
        [HttpPut]
        public void Put([FromBody] BookedSlot value)
        {
            // BookedSlotUtility utility = new BookedSlotUtility();
            // utility.UpdateBookedSlot(value);
        }
 
        [HttpDelete]
        public void Delete([FromBody] BookedSlot value)
        {
            BookedSlotUtility utility = new BookedSlotUtility();
            utility.DeleteBookedSlot(value);
        }
    }
}