let myEventSlots = [];
function createEventSlot()
{
    let html =`        
    <div class = "forms">
    <form>
        <label for="EventDate">Event Date:</label>
        <input type="text" id="eventDate" name="eventDate" required><br>

        <label for="Location">Location:</label>
        <input type="text" id="location" name="location" required><br>

        <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "saveEventSlot()">Save Event Slot</button></h2></div>
        <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "adminAccess()">Back to Admin Page</button></h2></div>
    </form><br>`

    document.getElementById('app').innerHTML = html
}

async function saveEventSlot()
{
    let eventSlot = 
    {
        EventSlotID: -1,
        EventDate: document.getElementById("eventDate").value,
        Location: document.getElementById("location").value,
        Requested: false
    }
    myEventSlots.push(eventSlot)
    await fetch('https://localhost:7198/api/EventSlot', {
        method: "POST",
        body: JSON.stringify(eventSlot),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
    });

    createEventSlot()
}