function businessInfo()
{
    let html =`
    <h1 class = "header">Get Business Name</h1><br>
    <h2 style = "font-size:30px; text-align: center;">Welcome to "Pete's Meats," the heartbeat of our community's culinary scene! Our farmers market is a haven for those seeking the finest locally sourced meats and produce. Step into a world where freshness and flavor collide, showcasing the dedication of regional farmers and artisans.</h2>
    <div class = "forms"><button class = "btn btn-light" onclick = "customerCalendar()">Back To Calendar</button></div>

    `
    document.getElementById('app').innerHTML = html
}