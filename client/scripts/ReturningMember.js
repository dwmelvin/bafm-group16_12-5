let businesses = [];
let admins = [];
let userType = 0;
let businessID = 0;
function returningMember()
{
    getAllBusinesses()
    getAllAdmins()
    let html =`
    <div class = "pageheader"><img src = "./scripts/resources/FoodBanner.jpg" width="1490" height="450"></img></div>
    <div class = "pagetextheader">Log In</div>
    <br>
    <div class = "forms">
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
        </form>
        
        <div class = "loginlinks"><h2><button class = "btn btn-success" style = "font-size: 27px;" onclick = "sendToRightPlace()">Enter</button></h2></div>
        <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "handleOnLoad()">Return Home</button></h2></div><br>
    </div>`

    document.getElementById('app').innerHTML = html
}

async function sendToRightPlace()
{
    checkBusiness(businesses)
    checkAdmin(admins)

    if (userType == 1) {
        businessCalendar(businessID)
    }

    else if (userType == 2) {
        adminAccess()
    }

    else {
        console.log("Not Found")
    }
}

function getAllBusinesses() {
    fetch('https://localhost:7198/api/Business').then(function(response){
        return response.json()
    }).then(function(json){
        businesses = json
    })
}

function checkBusiness(businesses) {
    businesses.forEach(business => {
        if (business.businessEmail === document.getElementById('email').value && business.businessPassword === document.getElementById('password').value && business.deleted != true) {
            userType = 1;
            businessID = business.businessID;
        }
    });
}

function getAllAdmins() {
    fetch('https://localhost:7198/api/Admin').then(function(response){
        return response.json()
    }).then(function(json){
       admins = json
    })
}

function checkAdmin(admins) {
    admins.forEach(admin => {
        if (admin.adminEmail === document.getElementById('email').value && admin.adminPassword === document.getElementById('password').value) {
            userType = 2;
        }
    });
}