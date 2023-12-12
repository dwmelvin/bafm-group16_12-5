using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpGet]
        public List<Admin> Get()
        {
            AdminUtility utility = new AdminUtility();
            return utility.GetAllAdmins();
        }
    }
}