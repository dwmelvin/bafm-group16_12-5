using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using api.Models;
 
namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApprovalController : ControllerBase
    {
        [HttpGet]
        public List<Approval> Get()
        {
            ApprovalUtility utility = new ApprovalUtility();
            return utility.GetAllApprovals();
        }
    }
}