function businessCalendar(businessid)
{
    console.log(businessid)
    createEditVendor(businessid)
    getAllEvents(businessid)
}

// use for businesses
function getAllEvents(businessID) {

    // get data send to table creator
    fetch('https://localhost:7198/api/EventSlot').then(function(response){
        return response.json()
    }).then(function(jsonResults){
        createEventTable(jsonResults, businessID)
    })
}
// use for businesses
// populates condensed calendar, use foreach loops and date 
function createEventTable(eventSlots, businessID) {

    let header = document.createElement('HEADER')
    header.id = 'businessTableHeader'
    header.appendChild(document.createTextNode('Available Event Slots'))

    //create table
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'businessTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'businessTableBody'
    table.appendChild(tableBody)

    // create header
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    let th1 = document.createElement('TH')
    th1.width = 400
    th1.appendChild(document.createTextNode('Location'))
    tr.appendChild(th1)
    let th2 = document.createElement('TH')
    th2.width = 400
    th2.appendChild(document.createTextNode('Date'))
    tr.appendChild(th2)
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode(''))
    tr.appendChild(th3)

    //create data rows
    eventSlots.forEach((eventSlot)=>{

        if(eventSlot.requested === false) {
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

            let requestButton = document.createElement('button')
            requestButton.textContent = 'Book'
            let td4 = document.createElement('TD')
            td4.width = 200
            td4.appendChild(requestButton)
            tr.appendChild(td4)

            requestButton.addEventListener('click', function (event) {
                event.preventDefault()
                RequestSlot(eventSlot, businessID)
                tableBody.removeChild(tr)
            })
        }
    })

    app.appendChild(table)
}

async function RequestSlot(eventSlot, businessID) {
    await UpdateEventSlot(eventSlot)
    await CreateBookedSlot(eventSlot, businessID)
}

async function UpdateEventSlot(eventSlot) {
    eventSlot.requested = true
    await fetch('https://localhost:7198/api/EventSlot', {
        method: "PUT",
        body: JSON.stringify(eventSlot),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
}

async function CreateBookedSlot(eventSlot, businessID) {
    let bookedSlot = {
        
        bookedSlotID: -1,
        eventSlotID: eventSlot.eventSlotID,
        businessID: businessID,
        approved: false
    }

    await fetch('https://localhost:7198/api/BookedSlot', {
        method: "POST",
        body: JSON.stringify(bookedSlot),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
}

function createEditVendor(businessid) {
    let editVendorButton = document.createElement('button')
    editVendorButton.textContent = 'Edit Your Info'
        app.appendChild(editVendorButton)
        

        editVendorButton.addEventListener('click', function (event) {
            event.preventDefault()
            editVendorInfo(businessid)
        })
}