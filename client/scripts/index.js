// displaying picture, header, and login/signup buttons
let app = document.getElementById('app')
const url = 'https://localhost:7198/api/EventSlot'


function handleOnLoad()
{
    // createForm()
    getAllBusinesses()
}

function getAllBusinesses() {
    // get data send to table creator
    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
        populateTable(json)
    })
}

// populates condensed calendar, use foreach loops and date 
function populateTable(eventSlots) {
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