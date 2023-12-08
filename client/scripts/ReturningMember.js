function returningMember()
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
        
        <div class = "loginlinks"><h2><button class = "btn btn-success" style = "font-size: 27px;" onclick = "sendToRightPlace">Enter</button></h2></div>
        <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "handleOnLoad()">Return Home</button></h2></div><br>
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
    else if(businesses.type === attendee)
    {
        customerCalendar();
    }
    else if(businesses.type === business)
    {
        businessCalendar();
    }
}