using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/User
        [HttpGet]
        public  List<User> Get()
        {
            UserUtility utility = new UserUtility();
            return utility.GetAllUsers();
        }
 
        // POST: api/User
        [HttpPost]
        public void Post([FromBody] User value)
        {
            UserUtility utility = new UserUtility();
            utility.AddUser(value);
        }
 
 
        // DELETE: api/User/
        [HttpDelete]
        public void Delete([FromBody] User value)
        {
            UserUtility utility = new UserUtility();
            utility.DeleteUser(value);
 
        }
    }
}