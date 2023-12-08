function adminAccess()
{
    let html =`
        <h1 class = "header">Admin Access</h1>

        <table class = "table table-striped" class = "admintable">
            <tr>
                <th>Business</th>
                <th>Request</th>
                <th>Approve/Deny</th>
            </tr>
            <tr>`
            mybusinesses.forEach(function(business)
             {
                    html +=`
                <td>${business.Name}</td>
                <td>Business</td>
                <td><button class = "btn btn-success" onclick = "Approve()">Accept</button><button class = "btn btn-danger">Deny</button></td>`
                }
            )
            html +=`
            </tr>
        </table>
        <div class = "forms">
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "individualVendorHistory()">View Vendor Reports</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "businessCalendar()">Business View</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "customerCalendar()">Customer View</button></h2></div>
        </div>
    `
    document.getElementById('app').innerHTML = html
}

async function Approve(Name)
{   
    let myBusiness =JSON.parse(localStorage.getItem('mybusinesses'))
    if(localStorage.Name === Name)
    {
        let business  = {
            businessID : -1,
        businessName : myBusiness[0].Name,
        businessEmail : myBusiness[0].Email ,
        businessPassword :  myBusiness[0].Password,
        deleted : false,
        description : myBusiness[0].Description,
        coverImage : myBusiness[0].CoverImage
        };

    
    mybusinesses.push(business);

    await fetch(url, {
        method: "POST",
        body: JSON.stringify(business),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      handleOnLoad();
    }
    };