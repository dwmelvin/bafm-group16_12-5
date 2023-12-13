// create cards, format the size of images
async function viewAllVendors() {
    fetch('https://localhost:7198/api/Business').then(function(response){
        return response.json()
    }).then(function(json){
        createBusinessCards(json)
    })
}
 
function createBusinessCards(businessCards)
{
    // getAllBusinesses()
    let html =`
        <header>
            <h1>Vendors</h1>
        </header>
 
        <div class = "loginlinks"><h2><button class = "btn btn-light" onclick = "customerCalendar()">Go Back</button></h2></div>
        `
 
        businessCards.forEach(function(businessInfo)
        {
            html +=`
                <div>
                    <div class="container mt-3">
                        <div class="card" style="width:500px; text-align:center;">
                        <img class="card-img-top" src="${businessInfo.coverImage}" alt="Card image" style="width:500px; height:500px; object-fit:cover;">
                        <div class="card-body">
                        <h4 class="card-title">${businessInfo.businessName}</h4>
                        <h5 class="card-title">${businessInfo.description}</h5>
                       
                        </div>
                    </div>
                </div>`
            })
 
    document.getElementById('app').innerHTML = html
}