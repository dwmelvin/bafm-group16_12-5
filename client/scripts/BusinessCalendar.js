function businessCalendar()
{
    let html =`
    <body class = "bgcolor">
        <h1>Calendar</h1>
        <h2><button onclick = "editVendorInfo()">Edit Vendor Information</button></h2>
        <table class = "table table-striped">
            <tr>
                <th>Monday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <td>Dave's Bread</td>
                <button>Register For This Day!</button>
            </tr>
            <tr>
                <th>Tuesday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <button>Register For This Day!</button>
            </tr>
            <tr>
                <th>Wednesday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <button>Register For This Day!</button>
            </tr>
            <tr>
                <th>Thursday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <button>Register For This Day!</button>
            </tr>
            <tr>
                <th>Friday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <button>Register For This Day!</button>
            </tr>
            <tr>
                <th>Saturday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <button>Register For This Day!</button>
            </tr>
            <tr>
                <th>Sunday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <button>Register For This Day!</button>
            </tr>
        </table>
    </body>
    `
    document.getElementById('app').innerHTML = html
}