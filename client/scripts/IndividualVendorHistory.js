function individualVendorHistory()
{
    let html =`
        <h1>Pete's Meats Vendor History</h1>

        <table>
            <tr>
                <th>Date Joined</th>
                <th>Events Attended</th>
                <th>Amount Paid</th>
            </tr>
            <tr>
                <td>7/12/2023</td>
                <td>72</td>
                <td>$3600</td>
            </tr>
        </table>

        <button onclick = "handleOnLoad()">Go Home</button>
    `
    document.getElementById('app').innerHTML = html
}