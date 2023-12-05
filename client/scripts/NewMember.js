function signUp()
{
    let html = `
        <div class = "pageheader"><img src = "resources/FoodBanner.jpg" width="1490" height="450"></img></div>
        <div class = "pagetextheader">Sign Up</div>
 
        <form>
            <label for="name">Name/Business Name:</label><br>
            <input type="name" id="name" name="name"><br>
 
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
 
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
        </form>
 
        <select name="type" id="type">
            <option value="attendee">Attendee</option>
            <option value="business">Business</option>
        </select><br>
 
        <button onclick = "handleAdd()">Enter</button><br>
        <button onclick = "handleOnLoad()">Return Home</button>
    `
    document.getElementById('app').innerHTML = html
}
 
async function handleAdd() {
 
    let business = {Name: document.getElementById('name').value, Email: document.getElementById('email').value, Password: document.getElementById('password').value}
    mybusinesses.push(business)
    localStorage.setItem('mybusinesses', JSON.stringify(mybusinesses))
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''
 
    //     let business = {
//       Name: document.getElementById("name").value,
//       Email: document.getElementById("email").value,
//       Password: document.getElementById("password").value,
//     };
//     mybusinesses.push(business);
 
//     await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(business),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });
//     handleOnLoad();
//   }
 
//   async function save() {
//     let business = {
//       Name: document.getElementById("name").value,
//       Email: document.getElementById("email").value,
//       Password: document.getElementById("password").value,
//     };
//     console.log("save", business);
//     await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(business),
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//       },
//     });
  }