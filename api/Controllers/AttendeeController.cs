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
    public class AttendeeController : ControllerBase
    {
      // GET: api/Attendee
        [HttpGet]
        public List<Attendee> Get()
        {
            AttendeeUtility utility = new AttendeeUtility();
            return utility.GetAllAttendees();
        }

        // POST: api/Attendee
        [HttpPost]
        public void Post([FromBody] Attendee value)
        {
            AttendeeUtility utility = new AttendeeUtility();
            utility.AddAttendee(value);
        }

        // // PUT: api/Business
        // [HttpPut]
        // //  [FromBody] Business value
        // public void Put([FromBody] Business value)
        // {
        //     BusinessUtility utility = new BusinessUtility();
        //     utility.PinExercise(value);
        // }

        // DELETE: api/Attendee/5
        [HttpDelete]
        public void Delete([FromBody] Attendee value)
        {
            AttendeeUtility utility = new AttendeeUtility();
            utility.DeleteAttendee(value);
        }
    }
}