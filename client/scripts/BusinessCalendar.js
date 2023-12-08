function businessCalendar()
{
    let html =`
    
    <h1 class = "header">Calendar</h1>

    <div class = "forms">
        <div class = "loginlinks"><h2><button class = "btn btn-light" onclick = "editVendorInfo()">View All Vendors</button></h2></div>
        <div class = "loginlinks"><h2><button class = "btn btn-light" onclick = "handleOnLoad()">Go Back Home</button></h2></div>
    </div>

    <table class = "table table-striped">
        <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
            <th>F</th>
            <th>G</th>
            <th></th>
        </tr>
        <tr>
            <th>Monday</th>
            <td><div class = "btn btn-link" onclick = "businessInfo()">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Tuesday</th>
            <td><div class = "btn btn-link">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Wednesday</th>
            <td><div class = "btn btn-link">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Thursday</th>
            <td><div class = "btn btn-link">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Friday</th>
            <td><div class = "btn btn-link">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Saturday</th>
            <td><div class = "btn btn-link">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Sunday</th>
            <td><div class = "btn btn-link">Pete's Meats</div></td>
            <td><div class = "btn btn-link">Tina's Flowers</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td><div class = "btn btn-link">Farm Fresh</div></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
    </table>`
    
    document.getElementById('app').innerHTML = html
}