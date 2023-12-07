function adminAccess()
{
    let html =`
        <h1 class = "header">Admin Access</h1>

        <table class = "table table-striped" class = "admintable">
            <tr>
                <th>Business</th>
                <th>Request</th>
                <th>Approve/Deny</th>
            </tr>
            <tr>
                <td>Pete's Meats</td>
                <td>Register as Business</td>
                <td><button class = "btn btn-success">Accept</button><button class = "btn btn-danger">Deny</button></td>
            </tr>
        </table>

        <div class = "vendorhistorybutton"><button class = "btn btn-light" style = "font-size: 27px;" onclick = "individualVendorHistory()">View Vendor Reports</button></div><br>
        <div class = "vendorhistorybutton"><button class = "btn btn-light" style = "font-size: 27px;" onclick = "businessCalendar()">Business View</button></div><br>
        <div class = "vendorhistorybutton"><button class = "btn btn-light" style = "font-size: 27px;" onclick = "customerCalendar()">Customer View</button></div>
    `
    document.getElementById('app').innerHTML = html
}

// add customer and businessview