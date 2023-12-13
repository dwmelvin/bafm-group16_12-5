function adminAccess()
{
    getAllDeletedBusinesses()
    getAllBookedRequests()
            let html =`
        <div class = "forms">
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "individualVendorHistory()">View Vendor Reports</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "businessCalendar()">Business View</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "customerCalendar()">Customer View</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "createEventSlot()">Create An Event</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "createReport()">Generate Reports</button></h2></div>
        </div>
    `
    document.getElementById('app').innerHTML = html

}

async function Approve(business)
{   
    business.deleted = false;

    await fetch('https://localhost:7198/api/Business', {
        method: "PUT",
        body: JSON.stringify(business),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      adminAccess();
}


function getAllDeletedBusinesses() {
    // get data send to table creator
    fetch('https://localhost:7198/api/Business').then(function(response){
        return response.json()
    }).then(function(json){
        createDelBusinessTable(json)
    })
}

// populates condensed calendar, use foreach loops and date 
function createDelBusinessTable(businesses) {

    let header = document.createElement('HEADER')
        header.id = 'acceptBusinessHeader'
        header.appendChild(document.createTextNode('Pending Businesses'))

    //create table
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'businessApproveTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'businessApproveTableBody'
    table.appendChild(tableBody)

    // create header
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)

    let th1 = document.createElement('TH')
    th1.width = 500
    th1.appendChild(document.createTextNode('Business ID'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Business Name'))
    tr.appendChild(th2)

    let th3 = document.createElement('TH')
    th3.width = 200
    tr.appendChild(th3)

    //create data rows
    businesses.forEach((business)=>{
        if (business.deleted == true) {
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)

            let td1 = document.createElement('TD')
            td1.width = 500
            let id = business.businessID
            td1.appendChild(document.createTextNode(id))
            tr.appendChild(td1)

            let td2 = document.createElement('TD')
            td2.width = 500
            let name = business.businessName
            td2.appendChild(document.createTextNode(name))
            tr.appendChild(td2)

            let approveButton = document.createElement('button')
            approveButton.textContent = 'Accept'
            let td4 = document.createElement('TD')
            td4.width = 200
            td4.appendChild(approveButton)
            tr.appendChild(td4)

            approveButton.addEventListener('click', function () {
                tableBody.removeChild(tr)
                Approve(business)
            })
        }
    })
    app.appendChild(header)
    app.appendChild(table)
}

function getAllBookedRequests() {
    // get data send to table creator
    fetch('https://localhost:7198/api/BookedSlot').then(function(response){
        return response.json()
    }).then(function(json){
        createRequestTable(json)
    })
}

function createRequestTable(bookedSlots) {
    let header = document.createElement('HEADER')
    header.id = 'acceptBookedHeader'
    header.appendChild(document.createTextNode('Pending BookedSlots'))

//create table
let table = document.createElement('TABLE')
table.border = '1'
table.id = 'bookedApproveTable'
let tableBody = document.createElement('TBODY')
tableBody.id = 'bookedApproveTableBody'
table.appendChild(tableBody)

// create header
let tr = document.createElement('TR')
tableBody.appendChild(tr)

let th1 = document.createElement('TH')
th1.width = 500
th1.appendChild(document.createTextNode('Business ID'))
tr.appendChild(th1)

let th2 = document.createElement('TH')
th2.width = 200
th2.appendChild(document.createTextNode('EventSlot ID'))
tr.appendChild(th2)

let th3 = document.createElement('TH')
th3.width = 200
tr.appendChild(th3)

//create data rows
bookedSlots.forEach((bookedSlot)=>{
    if (bookedSlot.approved == false) {
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 500
        let businessID = bookedSlot.businessID
        td1.appendChild(document.createTextNode(businessID))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 500
        let eventSlotID = bookedSlot.eventSlotID
        td2.appendChild(document.createTextNode(eventSlotID))
        tr.appendChild(td2)

        let approveButton = document.createElement('button')
        approveButton.textContent = 'Accept'
        let td4 = document.createElement('TD')
        td4.width = 200
        td4.appendChild(approveButton)
        tr.appendChild(td4)

        approveButton.addEventListener('click', function () {
            Accept(bookedSlot)
            tableBody.removeChild(tr)
        })
    }
})
app.appendChild(header)
app.appendChild(table)
}

async function Accept(bookedSlot) {
    bookedSlot.approved = true;
    await fetch('https://localhost:7198/api/BookedSlot', {
        method: "PUT",
        body: JSON.stringify(bookedSlot),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    });

}