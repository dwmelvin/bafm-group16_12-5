function signUp()
{
    let html = `
        <div class = "pageheader"><img src = "resources/FoodBanner.jpg" width="1490" height="450"></img></div>
        <div class = "pagetextheader">Sign Up</div>
        <br>
        <div class = "forms">
        <form>
            <label for="name">Name/Business Name:</label>
            <input type="name" id="name" name="name"><br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email"><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password"><br>
        </form>

            <select name="type" id="type">
                <option value="attendee">Attendee</option>
                <option value="business">Business</option>
            </select><br><br>

            <div class = "loginlinks"><h2><button class = "btn btn-success" style = "font-size: 27px;" onclick = "handleAdd()">Enter</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "handleOnLoad()">Return Home</button></h2></div>
        </div>
    `
    document.getElementById('app').innerHTML = html
}

async function handleAdd() {

    let business = {
      Name: document.getElementById("name").value,
      Email: document.getElementById("email").value,
      Password: document.getElementById("password").value,
      Delete: false,
    };
    mybusinesses.push(business);

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(business),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    handleOnLoad();
  }

  async function save() {
    let business = {
      Name: document.getElementById("name").value,
      Email: document.getElementById("email").value,
      Password: document.getElementById("password").value,
      Delete: false,
    };
    console.log("save", business);
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(business),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  }