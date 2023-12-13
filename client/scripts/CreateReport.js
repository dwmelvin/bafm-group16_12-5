function createReport()
{
    let html = `
    <header>
        <h1>Business Reports</h1>
    </header><br>
 
    <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "adminAccess()">Go Back</button></h2></div>`
 
    getAllApproved()
 
    document.getElementById('app').innerHTML = html
}
 
async function getAllApproved() {
    // get data send to table creator
    fetch('https://localhost:7198/api/Approval').then(function(response){
        return response.json()
    }).then(function(json){
        populateTable(json)
    })
}
 
function populateTable(approvedInfo)
{
    // sort by name, date, and location
    let header = document.createElement('HEADER')
    header.id = 'acceptBusinessHeader'
    header.appendChild(document.createTextNode('Vendor History'))
 
 
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
    th1.appendChild(document.createTextNode('Business Name'))
    tr.appendChild(th1)
 
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Date'))
    tr.appendChild(th2)
 
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Lot'))
    tr.appendChild(th3)
 
    approvedInfo.sort((a, b) => {
        if (a.businessName !== b.businessName) {
            return a.businessName.localeCompare(b.businessName);
        }
   
        if (a.date !== b.date) {
            return new Date(a.date) - new Date(b.date);
        }
   
        return a.location.localeCompare(b.location);
    });
   
    approvedInfo.forEach((info)=>{
 
            let tr = document.createElement('TR')
            tableBody.appendChild(tr)
 
            let td1 = document.createElement('TD')
            td1.width = 500
            let name = info.businessName
            td1.appendChild(document.createTextNode(name))
            tr.appendChild(td1)
 
            let td2 = document.createElement('TD')
            td2.width = 500
            let date = info.date
            td2.appendChild(document.createTextNode(date))
            tr.appendChild(td2)
 
            let td3 = document.createElement('TD')
            td3.width = 500
            let lot = info.location
            td3.appendChild(document.createTextNode(lot))
            tr.appendChild(td3)
       
    })
    app.appendChild(header)
    app.appendChild(table)
}