function newMember()
{
    let html = `
        <div class = "pageheader"><img src = "./scripts/resources/FoodBanner.jpg" width="1490" height="450"></img></div>
        <div class = "pagetextheader">Sign Up</div>
        <br>
        <div class = "forms">
        <form>
            <label for="Name">Business Name:</label>
            <input type="text" id="Name" name="Name" required><br>

            <label for="Email">Email:</label>
            <input type="email" id="email" name="email" required><br>

            <label for="Password">Password:</label>
            <input type="password" id="password" name="password" required><br>
        </form><br>

            <div class = "loginlinks"><h2><button class = "btn btn-success" style = "font-size: 27px;" onclick = "handleAddBusiness()">Enter</button></h2></div>
            <div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "handleOnLoad()">Return Home</button></h2></div>
        </div>
    `
    document.getElementById('app').innerHTML = html
}

  let mybusinesses = [];
    async function handleAddBusiness() {

    let business = {
      businessName: document.getElementById("Name").value,
      businessEmail: document.getElementById("email").value,
      businessPassword: document.getElementById("password").value,
      Deleted: true,
      Description: "",
      CoverImage: "",
    };
    mybusinesses.push(business);

    await fetch(businessUrl, {
      method: "POST",
      body: JSON.stringify(business),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    handleOnLoad();
  }