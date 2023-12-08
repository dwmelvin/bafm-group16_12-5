function createEventSlot()
{
    let html =`        
    <div class = "forms">
    <form>
        <label for="EventDate">Event Date:</label>
        <input type="text" id="eventDate" name="eventDate" required><br>

        <label for="Location">Location:</label>
        <input type="text" id="location" name="location" required><br>

        <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "saveEventSlot()">Save Event Slot</button></h2></div>
    </form><br>`

    document.getElementById('app').innerHTML = html
}

let myEventSlots = []
async function saveEventSlot()
{
    let eventSlot = 
    {
        EventDate: document.getElementById("eventDate").value,
        Location: document.getElementById("location").value
    }
    myEventSlots.push(eventSlot)
    await fetch('https://localhost:7198/api/EventSlot', {
        method: "POST",
        body: JSON.stringify(eventSlot),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    });

    showEventSlots()
}

function showEventSlots() {
    getAllEvents()
}

function getAllEvents() {
    // get data send to table creator
    fetch('https://localhost:7198/api/EventSlot').then(function(response){
        return response.json()
    }).then(function(json){
        createEventTable(json.results)
    })
}

// populates condensed calendar, use foreach loops and date 
function createEventTable(eventSlot) {
    
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
    th1.width = 500
    th1.appendChild(document.createTextNode('Location'))
    tr.appendChild(th1)
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('More Info'))
    tr.appendChild(th2)
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Date'))
    tr.appendChild(th3)

    //create data rows
    eventSlots.forEach((eventSlot)=>{
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 500
        let location = eventSlot.Location
        td1.appendChild(document.createTextNode(location))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 500
        let date = eventSlot.EventDate
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