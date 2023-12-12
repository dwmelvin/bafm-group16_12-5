let app = document.getElementById('app')
const url = 'https://localhost:7198/api/Business'
let businesses = [];

function handleOnLoad() {
    getAllBusinesses()
}

function getAllBusinesses() {
    // get data send to table creator
    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
        createTable(json)
    })
}

function createTable(businesses) {

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
        img.src = business.coverImageURL
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

// function removeBusiness(pokemonUrl) {
//     // open next page after clicking button on row
//     localStorage.setItem('pokeData', pokemonUrl)
//     window.open('./page2.html')
// }