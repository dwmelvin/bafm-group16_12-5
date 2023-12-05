function adminAccess()
{
    let html =`
        <h1>Admin Access</h1>

        <table>
            <tr>
                <th>Business</th>
                <th>Request</th>
                <th>Approve/Deny</th>
            </tr>
            <tr>
                <td>Pete's Meats</td>
                <td>register as Business</td>
                <td>Approve/Deny</td>
            </tr>
        </table>

        <button onclick = "vendorHistory()">View Vendor History</button>
    `
    document.getElementById('app').innerHTML = html
}