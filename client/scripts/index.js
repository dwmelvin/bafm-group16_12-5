// displaying picture, header, and login/signup buttons
let app = document.getElementById('app')
const url = 'https://localhost:7198/api/Business'
let mybusinesses = [];

function handleOnLoad()
{
    let html = `
        <h1 class = "header">Big Al's Farmer's Market</h1>
        <img src = "resources/FarmerBigAl.jpg" alt = "Big Al" class = "bigal"><br>
            <div class = "header"> 
                <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "signUp()">New Member</button></h2></div>
                <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "newMember()">Returning Member</button></h2></div>
                <div id = "tableBody"></div>
            </div>`

    document.getElementById('app').innerHTML = html
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
function populateTable(businesses) {

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
    th1.appendChild(document.createTextNode('Business Name'))
    tr.appendChild(th1)
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('More Info'))
    tr.appendChild(th2)
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Picture'))
    tr.appendChild(th3)

    //create data rows
    businesses.forEach((business)=>{
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 500
        let name = business.businessName
        td1.appendChild(document.createTextNode(name))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 500
        let description = business.description
        td2.appendChild(document.createTextNode(description))
        tr.appendChild(td2)

        let td3 = document.createElement('TD')
        td3.width = 500
        let img = document.createElement('IMG')
        img.src = business.coverImage
        img.classList.add('business-image')
        td3.appendChild(img)
        tr.appendChild(td3)



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

// figure out how to popuate rows vertically

// myBusinesses.forEach(function(business)
// {
//     // business name for that day
// })

{/*
<table class = "table table-striped">
<tr>
<td>
    <table>
        <thead>
            <tr>
                <td class="vertical-line">Nov 30</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Pete's Meats</td>
            </tr>
            <tr>
                <td>Tina's Flowers</td>
            </tr>
        </tbody>
    </table>
</td>
<td>
    <table>
        <thead>
            <tr>
                <td>Dec 1</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dave's Bread</td>
            </tr>
            <tr>
                <td>Tina's Flowers</td>
            </tr>
        </tbody>
    </table>
</td>
<td>
    <table>
        <thead>
            <tr>
                <td>Dec 2</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Pete's Meats</td>
            </tr>
            <tr>
                <td>Farm Fresh Foods</td>
            </tr>
        </tbody>
    </table>
</td>
</tr>
</table> */}