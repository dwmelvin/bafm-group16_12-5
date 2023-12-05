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
    public class BusinessController : ControllerBase
    {
      // GET: api/Business
        [HttpGet]
        public List<Business> Get()
        {
            BusinessUtility utility = new BusinessUtility();
            return utility.GetAllBusinesses();
        }

        [HttpPost]
        public void Post([FromBody] Business value)
        {

            User newUser = new User {
                UserEmail = value.UserEmail,
                UserPassword = value.UserPassword,
                UserName = value.UserName,
                UserType = value.UserType 
            };
            UserUtility userUtility = new UserUtility();
            int newUserID = userUtility.AddUser(newUser);


            Business newBusiness = new Business {
                UserID = newUserID,
                BusinessName = value.BusinessName,
                Description = value.Description,
                CoverImageURL = value.CoverImageURL 
            };
            BusinessUtility businessUtility = new BusinessUtility();
            businessUtility.AddBusiness(newUserID, newBusiness); 
        }

        // DELETE: api/Business/5
        [HttpDelete]
        public void Delete([FromBody] Business value)
        {
            BusinessUtility utility = new BusinessUtility();
            utility.DeleteBusiness(value.BusinessID); 
        }
            }
        }