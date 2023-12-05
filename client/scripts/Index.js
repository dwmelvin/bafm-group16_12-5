// displaying picture, header, and login/signup buttons
let app = document.getElementById('app')
const url = 'https://localhost:7198/api/Business'
let mybusinesses = [];

function getAllBusinesses() {
    // get data send to table creator
    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
        createTable(json)
    })
}

function handleOnLoad()
{
    let html = `
    <table class = "homePage">
        <col>
            <td><img src = "./scripts/resources/FarmerBigAl.jpg" alt = "Big Al" class = "bigal"></td>
        </col>
        <col>
            <div class = "header">
                <h1>Big Al's Farmer's Market</h1>
                <div class = "loginlinks"><h2><button onclick = "signUp()">New Member</button></h2></div>
                <div class = "loginlinks"><h2><button onclick = "newMember()">Returning Member</h2></button></div>
                <div id = "tableBody"></div>
            </div>
        </col>
        </table>`

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
                    if (business.date === today)
                    {
                        html+`
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
}
});
    html += `</table>`;
    
    document.getElementById('tableBody').innerHTML = html
}

