function editVendorInfo()
{
    let html =`
        <h1>Edit Vendor Info</h1>
        <label for="name">Business Name:</label>
        <input type="text" id="name" name="name"><br>

        <label for="description">Description:</label>
        <input type="text" id="email" name="email"><br>

        <label for="coverPhoto">Cover Photo:</label>
        <input type="url" id="coverPhoto" name="coverPhoto"><br>
    
        <button onclick = "">Save</button>
        <button onclick = "businessCalendar()"></button>
    `
    document.getElementById('app').innerHTML = html
}