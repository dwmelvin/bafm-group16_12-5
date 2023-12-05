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
    public class EventSlotController : ControllerBase
    {
      // GET: api/EventSlot
        [HttpGet]
        public List<EventSlot> Get()
        {
            EventSlotUtility utility = new EventSlotUtility();
            return utility.GetAllEventSlots();
        }
 
        // POST: api/EventSlot
        [HttpPost]
        public void Post([FromBody] EventSlot value)
        {
            EventSlotUtility utility = new EventSlotUtility();
            utility.AddEventSlot(value);
        }
    }
}