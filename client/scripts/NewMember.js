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

            <label for="description">Description:</label>
            <input type="text" id="description" name="description"><br>

            <label for="coverPhoto">Cover Photo:</label>
            <input type="url" id="coverPhoto" name="coverPhoto"><br><br>
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
    // changed Name -> BusinessName, Email -> BusinessEmail, Password -> BusinessPassword
    
    let business = {
      BusinessName: document.getElementById("name").value,
      BusinessEmail: document.getElementById("email").value,
      BusinessPassword: document.getElementById("password").value,
      Description:"",
      CoverImage:"",
      Delete: false
    };
    mybusinesses.push(business);
    console.log(business)

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
    // changed Name -> BusinessName, Email -> BusinessEmail, Password -> BusinessPassword
    let business = {
      BusinessName: document.getElementById("name").value,
      BusinessEmail: document.getElementById("email").value,
      BusinessPassword: document.getElementById("password").value,
      Description: document.getElementById("description").value,
      CoverImage: document.getElementById("coverPhoto").value,
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