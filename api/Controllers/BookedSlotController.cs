using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookedSlotController : ControllerBase
    {
      // GET: api/EventSlot
        [HttpGet]
        public List<BookedSlot> Get()
        {
            BookedSlotUtility utility = new BookedSlotUtility();
            return utility.GetAllBookedSlots();
        }
 
        // POST: api/EventSlot
        [HttpPost]
        public void Post([FromBody] BookedSlot value)
        {
            BookedSlotUtility utility = new BookedSlotUtility();
            utility.AddBookedSlot(value);
        }
    }
}