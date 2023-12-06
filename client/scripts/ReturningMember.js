function newMember()
{
    let html =`
    <div class = "pageheader"><img src = "resources/FoodBanner.jpg" width="1490" height="450"></img></div>
    <div class = "pagetextheader">Log In</div>
    <br>
    <div class = "forms">
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br><br>
        </form>
        
        <button class = "btn btn-success" style = "font-size: 27px;" onclick = "sendToRightPlace">Enter</button><br><br>
        <button class = "btn btn-light" style = "font-size: 27px;" onclick = "handleOnLoad()">Return Home</button><br>
    </div>


    <button onclick = "adminAccess()">Admin Access</button><br>
    <button onclick = "businessCalendar()">Business Access</button><br>
    <button onclick = "customerCalendar()">Customer Access</button><br>`

    document.getElementById('app').innerHTML = html
}

function sendToRightPlace()
{
    if(businesses.type === admin)
    {
        adminAccess();
    }
    if(businesses.type === attendee)
    {
        customerCalendar();
    }
    if(businesses.type === business)
    {
        businessCalendar();
    }
}