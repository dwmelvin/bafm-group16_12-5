using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookedRequestController : ControllerBase
    {
        [HttpGet]
        public List<BookedSlotRequest> Get()
        {
            BookedSlotRequestUtility utility = new BookedSlotRequestUtility();
            return utility.GetAllBookedSlotRequests();
        }
 
        // [HttpPost]
        // public void Post([FromBody] EventSlot value1, Business value2)
        // {
        //     BookedSlotUtility utility = new BookedSlotUtility();
        //     utility.AddBookedSlot(value1, value2);
        // }
 
        // [HttpPut]
        // public void Put([FromBody] BookedSlot value)
        // {
        //     // BookedSlotUtility utility = new BookedSlotUtility();
        //     // utility.UpdateBookedSlot(value);
        // }
 
        // [HttpDelete]
        // public void Delete([FromBody] BookedSlot value)
        // {
        //     BookedSlotUtility utility = new BookedSlotUtility();
        //     utility.DeleteBookedSlot(value);
        // }
    }
}