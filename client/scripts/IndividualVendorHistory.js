function individualVendorHistory()
{
    let html =`
        <h1 class = "header">Vendor Reports</h1>

        <table class = "table table-striped" class = "admintable">
            <tr>
                <th>Vendor Name</th>
                <th>Date Joined</th>
                <th>Events Attended</th>
                <th>Amount Paid</th>
            </tr>
            <tr>
                <td>Pete's Meats</td>
                <td>7/12/2023</td>
                <td>72</td>
                <td>$3600</td>
            </tr>
            <tr>
                <td>Tina's Flowers</td>
                <td>6/8/2023</td>
                <td>78</td>
                <td>$3900</td>
            </tr>
            <tr>
                <td>Dave's Bread</td>
                <td>8/15/2023</td>
                <td>70</td>
                <td>$3500</td>
            </tr>
        </table>

        <div class = "vendorhistorybutton"><button class = "btn btn-light" style = "font-size: 27px;" onclick = "adminAccess()">Return To Admin Home</button></div><br>
    `
    document.getElementById('app').innerHTML = html
}