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
                <tr>
                <td>${business.Name}</td>
                <td>Business</td>
                <td><button class = "btn btn-success" onclick = "Approve()">Accept</button><button class = "btn btn-danger">Deny</button></td>
                </tr>`
                }
            )
            html +=`
        </table>
        <div class = "forms">
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "individualVendorHistory()">View Vendor Reports</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "businessCalendar()">Business View</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "customerCalendar()">Customer View</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "createEventSlot()">Create An Event</button></h2></div>
        </div>
    `
    document.getElementById('app').innerHTML = html

    getAllEvents()
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

    await fetch('https://localhost:7198/api/Business', {
        method: "POST",
        body: JSON.stringify(business),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      handleOnLoad();
    }
};

function getAllEvents() {
    // get data send to table creator
    fetch('https://localhost:7198/api/EventSlot').then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json)
        createEventTable(json)
    })
}

// populates condensed calendar, use foreach loops and date 
function createEventTable(eventSlots) {
    console.log(eventSlots)
    //create table
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'eventTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'eventTableBody'
    table.appendChild(tableBody)

    // create header
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('TH')
    th1.width = 500
    th1.appendChild(document.createTextNode('Location'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Date'))
    tr.appendChild(th2)

    //create data rows
    eventSlots.forEach((eventSlot)=>{
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 500
        let location = eventSlot.location
        td1.appendChild(document.createTextNode(location))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 500
        let date = eventSlot.date
        td2.appendChild(document.createTextNode(date))
        tr.appendChild(td2)

        // let pageButton = document.createElement('button')
        // pageButton.textContent = 'Remove'
        // let td4 = document.createElement('TD')
        // td4.width = 200
        // td4.appendChild(pageButton)
        // tr.appendChild(td4)

        // pageButton.addEventListener('click', function () {
        //     removeBusiness(pokemon.url)
        // })
    })

    app.appendChild(table)
}