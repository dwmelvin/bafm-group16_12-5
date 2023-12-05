using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
 
        // GET: api/Admin
        [HttpGet]
        public ActionResult<List<Admin>> Get()
        {
            AdminUtility utility = new AdminUtility();
            return utility.GetAllAdmins();
        }
 
        // POST: api/Admin
        [HttpPost]
        public void Post([FromBody] Admin admin)
        {
            AdminUtility utility = new AdminUtility();
            utility.AddAdmin(admin);
        }
 
        // DELETE: api/Admin
        [HttpDelete]
        public void Delete([FromBody] Admin admin)
        {
           AdminUtility utility = new AdminUtility();
            utility.DeleteAdmin(admin.UserID);
        }
    }
}