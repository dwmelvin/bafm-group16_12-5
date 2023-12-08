using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventSlotController : ControllerBase
    {
        [HttpGet]
        public List<EventSlot> Get()
        {
            EventSlotUtility utility = new EventSlotUtility();
            return utility.GetAllEventSlots();
        }
 
        [HttpPost]
        public void Post([FromBody] EventSlot value)
        {
            EventSlotUtility utility = new EventSlotUtility();
            utility.AddEventSlot(value);
        }
 
        [HttpPut]
        public void Put([FromBody] EventSlot value)
        {
            EventSlotUtility utility = new EventSlotUtility();
            utility.UpdateEventSlot(value);
        }
 
        [HttpDelete]
        public void Delete([FromBody] EventSlot value)
        {
            EventSlotUtility utility = new EventSlotUtility();
            utility.DeleteEventSlot(value);
        }
    }
}