function businessCalendar()
{
    let html =`
    
    <h1 class = "header">Calendar</h1>
    <div style = "font-size: 1px; text-align: center;" ><button class = "btn btn-light" onclick = "editVendorInfo()">Edit Vendor Information</button></div><br>
    <table class = "table table-striped">
        <tr>
            <th>Monday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Tuesday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Wednesday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Thursday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Friday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Saturday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
        <tr>
            <th>Sunday</th>
            <td>Pete's Meats</td>
            <td>Tina's Flowers</td>
            <td>Farm Fresh</td>
            <td><button class = "btn btn-link">Register For This Day!</button></td>
        </tr>
    </table>`
    
    document.getElementById('app').innerHTML = html
}