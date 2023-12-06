// displaying picture, header, and login/signup buttons
let app = document.getElementById('app')
const url = 'https://localhost:7198/api/Business'
let mybusinesses = [];

function getAllBusinesses() {
    // get data send to table creator
    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
        populateTable(json)
    })
}

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
    populateTable()
    getAllBusinesses()
}

// populates condensed calendar, use foreach loops and date 
function populateTable()
{
    let html = `
    <br><br>
    <br><br>
    <table class = "table">
    <tr>
    <td>
        <table>
            <thead>
                <tr>`
                    mybusinesses.forEach(function (business) {
                        html += `
                    <td>${business.date}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${business.name}</td>
                </tr>
                <tr>
                    <td>${business.name}</td>
                </tr>
            </tbody>
                    });
        </table>
    </td>
    <td>
        <table>
            <thead>
                <tr>
                    <td>${business.date}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${business.name}</td>
                </tr>
                <tr>
                    <td>${business.name}</td>
                </tr>
            </tbody>
        </table>
    </td>
    <td>
        <table>
            <thead>
                <tr>
                    <td>${business.date}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${business.name}</td>
                </tr>
                <tr>
                    <td>${business.name}</td>
                </tr>
            </tbody>
        </table>
    </td>
    </tr>`
});
    html += `</table>`;
    
    document.getElementById('tableBody').innerHTML = html
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