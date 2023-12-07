function customerCalendar()
{
    let html =`
        <h1 class = "header">Calendar</h1>
        <div class = "forms"><button class = "btn btn-light" onclick = "viewAllVendors()">View All Vendors</button></div><br>
        <table class = "table table-striped">
            <tr>
                <th>Monday</th>
                <td><div class = "btn btn-link" onclick = "businessInfo()">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>

            </tr>
            <tr>
                <th>Tuesday</th>
                <td><div class = "btn btn-link">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>
                
            </tr>
            <tr>
                <th>Wednesday</th>
                <td><div class = "btn btn-link">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>
            </tr>
            <tr>
                <th>Thursday</th>
                <td><div class = "btn btn-link">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>
            </tr>
            <tr>
                <th>Friday</th>
                <td><div class = "btn btn-link">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>
            </tr>
            <tr>
                <th>Saturday</th>
                <td><div class = "btn btn-link">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>
            </tr>
            <tr>
                <th>Sunday</th>
                <td><div class = "btn btn-link">Pete's Meats</div></td>
                <td><div class = "btn btn-link">Tina's Flowers</div></td>
                <td><div class = "btn btn-link">Farm Fresh</div></td>
            </tr>
        </table>
    `
    document.getElementById('app').innerHTML = html
}