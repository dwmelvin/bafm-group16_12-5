function customerCalendar()
{
    let html =`
    <header>
        <h1>Calendar</h1>
    </header>
    <div class = "forms">
        <div class = "loginlinks"><h2><button class = "btn btn-light" onclick = "handleOnLoad()">Go Back Home</button></h2></div>
        <div class = "loginlinks"><h2><button class = "btn btn-light" onclick = "viewAllVendors()">View All Vendors</button></h2></div>
    </div>
   
    `
    getAllApproved()
    document.getElementById('app').innerHTML = html
 
}
 
async function getAllApproved()
{
    fetch(approvalUrl).then(function(response){
        return response.json()
    }).then(function(json){
        createCustomerTable(json)
    })
}
 
function createCustomerTable(approvedSlots)
{
 
    //create table
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'customerTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'customerTableBody'
    table.appendChild(tableBody)
 
    // create header
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
 
    let th1 = document.createElement('TH')
    th1.width = 500
    th1.appendChild(document.createTextNode('Date'))
    tr.appendChild(th1)
 
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Location'))
    tr.appendChild(th2)
 
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Businesses'))
    tr.appendChild(th3)
 
    //create data rows
    approvedSlots.forEach((approvedslot)=>{
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)
 
            let td1 = document.createElement('TD')
            td1.width = 500
            let date = approvedslot.date
            td1.appendChild(document.createTextNode(date))
            tr.appendChild(td1)
 
            let td2 = document.createElement('TD')
            td2.width = 500
            let location = approvedslot.location
            td2.appendChild(document.createTextNode(location))
            tr.appendChild(td2)
 
            let td3 = document.createElement('TD')
            td3.width = 500
            let business = approvedslot.businessName
            td3.appendChild(document.createTextNode(business))
            tr.appendChild(td3)          
        }
    )
 
    app.appendChild(table)
}