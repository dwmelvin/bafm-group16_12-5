function newMember()
{
    let html =`
    <div class = "pageheader"><img src = "./scripts/resources/FoodBanner.jpg" width="1490" height="450"></img></div>
    <div class = "pagetextheader">Log In</div>
    
    <form>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password"><br>
    </form>
    
    <button onclick = "">Enter</button><br>
    <button onclick = "handleOnLoad()">Return Home</button><br>



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