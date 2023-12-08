function editVendorInfo()
{
    let html =`
        <h1 class = "header">Edit Vendor Info</h1>
        <div class = "forms">
            <label for="name">Business Name:</label>
            <input type="text" id="name" name="name"><br>

            <label for="description">Description:</label>
            <input type="text" id="email" name="email"><br>

            <label for="coverPhoto">Cover Photo URL:</label>
            <input type="url" id="coverPhoto" name="coverPhoto"><br><br>
        
            <div class = "loginlinks"><h2><button style = "font-size: 27px;" class = "btn btn-success" onclick = "">Save</button></h2></div>
            <div class = "loginlinks"><h2><button style = "font-size: 27px;" class = "btn btn-light" onclick = "businessCalendar()">Back To Calendar</button></h2></div>
        </div>
    `
    document.getElementById('app').innerHTML = html
}