// create cards, format the size of images
function viewAllVendors()
{
    let html =`
        <h1 class = "header">Vendors</h1>

        <div class = "center">
            <div class="container mt-3">
                <div class="card" style="width:500px; text-align:center;">
                    <img class="card-img-top" src="resources/PetesMeats.jpg" alt="Card image" style="width:500px; height:500px; object-fit:cover;">
                    <div class="card-body">
                    <h4 class="card-title">Pete's Meats</h4>
                    <button onclick = "businessInfo()" class="btn btn-primary">View More</button>
                </div>
            </div>
        </div>
    `
    document.getElementById('app').innerHTML = html
}