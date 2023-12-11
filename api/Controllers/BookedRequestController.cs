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


        [HttpPost]
        public void Post([FromBody] BookedSlotRequest value)
        {
            BookedSlotRequestUtility utility = new BookedSlotRequestUtility();
            utility.AddBookedSlotRequest(value);
        }
    }
}