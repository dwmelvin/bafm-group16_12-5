function customerCalendar()
{
    let html =`
        <h1>Calendar</h1>
        <table class = "table table-striped">
            <tr>
                <th>Monday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                <td>Dave's Bread</td>
            </tr>
            <tr>
                <th>Tuesday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
                
            </tr>
            <tr>
                <th>Wednesday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
            </tr>
            <tr>
                <th>Thursday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
            </tr>
            <tr>
                <th>Friday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
            </tr>
            <tr>
                <th>Saturday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
            </tr>
            <tr>
                <th>Sunday</th>
                <td>Pete's Meats</td>
                <td>Tina's Flowers</td>
                <td>Farm Fresh</td>
            </tr>
        </table>
    `
    document.getElementById('app').innerHTML = html
}