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
    fetch('https://localhost:7198/api/Approval').then(function(response){
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
    th1.appendChild(document.createTextNode('Sunday 12/17'))
    tr.appendChild(th1)
 
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('Monday 12/18'))
    tr.appendChild(th2)
 
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Tuesday 12/19'))
    tr.appendChild(th3)

    let th4 = document.createElement('TH')
    th4.width = 200
    th4.appendChild(document.createTextNode('Wednesday 12/20'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 200
    th5.appendChild(document.createTextNode('Thursday 12/21'))
    tr.appendChild(th5)

    let th6 = document.createElement('TH')
    th6.width = 200
    th6.appendChild(document.createTextNode('Friday 12/22'))
    tr.appendChild(th6)

    let th7 = document.createElement('TH')
    th7.width = 200
    th7.appendChild(document.createTextNode('Saturday 12/23'))
    tr.appendChild(th7)
 

    let tr2 = document.createElement('TR')
    tableBody.appendChild(tr2)
    let td1 = document.createElement('TD')
    td1.width = 500
    let td2 = document.createElement('TD')
    td2.width = 500
    let td3 = document.createElement('TD')
    td3.width = 500
    let td4 = document.createElement('TD')
    td4.width = 500
    let td5 = document.createElement('TD')
    td5.width = 500
    let td6 = document.createElement('TD')   
    td6.width = 500
    let td7 = document.createElement('TD')   
    td7.width = 500
    //create data rows
    let div = document.createElement('DIV')
    let space = document.createElement('BR')
    approvedSlots.forEach((approvedslot)=>{
        console.log(approvedslot)
            if (approvedslot.date == '2023-12-17') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td1.appendChild(document.createTextNode(lot))
                td1.appendChild(document.createTextNode(': '))
                td1.appendChild(document.createTextNode(businessName))
                td1.appendChild(document.createTextNode('\n'))
            }
 
            else if (approvedslot.date == '2023-12-18') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td2.appendChild(document.createTextNode(lot))
                td2.appendChild(document.createTextNode(': '))
                td2.appendChild(document.createTextNode(businessName))
                td2.appendChild(document.createTextNode('\n'))
            }
            
            else if (approvedslot.date == '2023-12-19') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td3.appendChild(document.createTextNode(lot))
                td3.appendChild(document.createTextNode(': '))
                td3.appendChild(document.createTextNode(businessName))
                td3.appendChild(document.createTextNode('\n'))
            }
            else if (approvedslot.date == '2023-12-20') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td4.appendChild(document.createTextNode(lot))
                td4.appendChild(document.createTextNode(': '))
                td4.appendChild(document.createTextNode(businessName))
                td4.appendChild(document.createTextNode('\n'))
            }
            else if (approvedslot.date == '2023-12-21') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td5.appendChild(document.createTextNode(lot))
                td5.appendChild(document.createTextNode(': '))
                td5.appendChild(document.createTextNode(businessName))
                td5.appendChild(document.createTextNode('\n'))
            }
            else if (approvedslot.date == '2023-12-22') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td6.appendChild(document.createTextNode(lot))
                td6.appendChild(document.createTextNode(': '))
                td6.appendChild(document.createTextNode(businessName))
                td6.appendChild(document.createTextNode('\n'))
            }

            else if (approvedslot.date == '2023-12-23') {
                let lot = approvedslot.location
                let businessName = approvedslot.businessName
                td7.appendChild(document.createTextNode(lot))
                td7.appendChild(document.createTextNode(': '))
                td7.appendChild(document.createTextNode(businessName))
                td7.appendChild(document.createTextNode('\n'))
            }
        }
    )
    tr2.appendChild(td1)
    tr2.appendChild(td2)
    tr2.appendChild(td3)
    tr2.appendChild(td4)
    tr2.appendChild(td5)
    tr2.appendChild(td6)
    tr2.appendChild(td7)
 
    app.appendChild(table)
}