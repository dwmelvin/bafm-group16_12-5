using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using api.Controllers;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BusinessController : ControllerBase
    {
        // GET: api/Business
        [HttpGet]
        public List<Business> Get()
        {
            BusinessUtility utility = new BusinessUtility();
            return utility.GetAllBusinesses();
        }

        // POST: api/Business
        [HttpPost]
        public void Post([FromBody] Business value)
        {
            BusinessUtility utility = new BusinessUtility();
            utility.AddBusiness(value);
        }

        // PUT: api/Business
        [HttpPut]
        //  [FromBody] Exercise value
        public void Put([FromBody] Business value)
        {
            BusinessUtility utility = new BusinessUtility();
            utility.UpdateBusiness(value);
        }

        // DELETE: api/Business
        [HttpDelete]
        public void Delete([FromBody] Business value)
        {
            BusinessUtility utility = new BusinessUtility();
            utility.DeleteBusiness(value);
        }
    }
}
