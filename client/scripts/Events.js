eventSlots = [];
function createPage() {
    getAllEvents()
    createForm()
}

function getAllEvents() {
    // get data send to table creator
    fetch('https://localhost:7198/api/EventSlot').then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json)
        createEventTable(json)
    })
}

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

async function createForm() {
    let form = document.createElement('form');
    form.id = 'eventForm';
 
    let locationLabel = document.createElement('label');
    locationLabel.for = 'eventLocation';
    locationLabel.appendChild(document.createTextNode('Lot: '));
    form.appendChild(locationLabel);
 
    let locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.id = 'eventLocation';
    form.appendChild(locationInput);


    let dateLabel = document.createElement('label');
    dateLabel.for = 'eventDate';
    dateLabel.appendChild(document.createTextNode('Date: '));
    form.appendChild(dateLabel);
 
    let dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.id = 'eventDate';
    form.appendChild(dateInput);
 

    let submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);
 
    app.appendChild(form);
 
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let eventSlot  = {
            EventSlotID: -1,
            Location: document.getElementById('eventLocation').value,
            Date: document.getElementById('eventDate').value,
        };

        eventSlots.push(eventSlot);

    fetch('https://localhost:7198/api/EventSlot', {
        method: "POST",
        body: JSON.stringify(eventSlot),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let table = document.getElementById('eventTable')
        table.remove()
        getAllEvents()
    })
    }