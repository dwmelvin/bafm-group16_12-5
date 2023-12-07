  // david's pa
  // const url = "https://localhost:7198/swagger/v1/swagger.json";
  // let myExercises = [];

  // async function handleOnLoad() {
  //   let response = await fetch(url);
  //   myExercises = await response.json();
  //   console.log(myExercises);

  //   document.getElementById("form").style.display = "none";

  //   let html = `
  //     <h1 id="tidefit-header">TideFit</h1>
  //     <h2 id="workout-log-header">Workout Log</h2>
  //     <h6 id="motto-statement"> Level Up Your Fitness and Stay Consistent</h6>
  //     <td>
  //     <button type="Add Exercise Button" class="Add Exercise" onclick="showForm()">Add Exercise</button>
  //     </td>
  //         <table class="table table-striped ">
  //             <tr> 
                  
  //                 <th>Exercise Type</th>
  //                 <th>Exercise Duration</th>
  //                 <th>Exercise Date</th>
  //                 <th>Pin</th>
  //                 <th>Delete</th>
  //             </tr>`;
  
  //   myExercises.sort(
  //     (a, b) => Date.parse(b.exerciseDate) - Date.parse(a.exerciseDate)
  //   );
  //   myExercises.forEach(function (exercise) {
  //     if (exercise.delete === false) {
  //       const pinText = exercise.pinned ? "Pinned" : "Pin";
  //       const backgroundColor = exercise.pinned
  //         ? "rgba(0, 0, 255, 0.5)"
  //         : "Transparent";
  //       const borderStyle = exercise.pinned ? "solid 2px red" : "none";
  //       html += `
  //             <tr>
  //             <td class="vertical-line">${exercise.exerciseType}</td>
  //             <td class="vertical-line">${exercise.exerciseDuration}</td>
  //             <td class="vertical-line">${exercise.exerciseDate}</td>
  //             <td class="vertical-line"><button type="button" id="unpinned-btn-${exercise.exerciseID}" class="btn btn-Pin" style="background-color: ${backgroundColor}; border: ${borderStyle};" onclick="handleExercisePin(${exercise.exerciseID}, ${exercise.pinned})">${pinText}</button></td>
  //             <td class="vertical-line"><button type="button" id="deleted-btn-${exercise.exerciseID}" class="btn btn-Delete" style="background-color: red; color: white;" onclick="handleExerciseDelete(${exercise.exerciseID})">Delete</button></td>
  //         </tr>`;
  //     }
  //   });
  //   html += `</table>`;
  //   document.getElementById("app").innerHTML = html;
  // }

  // async function handleExerciseDelete(referenceExerciseID) {
  //   let exercise = {exerciseID: referenceExerciseID, exerciseDate: "", exerciseDuration:"", exerciseType: "", pinned: false, delete: true};
  //   await fetch(url, {
  //     method: "DELETE",
  //     body: JSON.stringify(exercise),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   await handleOnLoad();
  // }

  // async function handleExercisePin(referenceExerciseID, referencePinned) {
  //   console.log(referencePinned);
  //   let exercise = {exerciseID: referenceExerciseID, exerciseDate: "", exerciseDuration:"", exerciseType: "", pinned: referencePinned, delete: false};

  //   await fetch(url, {
  //     method: "PUT",
  //     body: JSON.stringify(exercise),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });

  //   handleOnLoad();
  // }

  // async function handleExerciseAdd() {

  //   let exercise = {
  //     ExerciseType: document.getElementById("exercisetype").value,
  //     ExerciseDuration: document.getElementById("exerciseduration").value,
  //     ExerciseDate: document.getElementById("exercisedate").value,
  //     Delete: false,
  //     Pinned: false,
  //   };
  //   myExercises.push(exercise);

  //   await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(exercise),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  //   handleOnLoad();
  // }

  // async function saveExercise() {
  //   let exercise = {
  //     ExerciseID: generateUniqueID(),
  //     ExerciseType: document.getElementById("exercisetype").value,
  //     ExerciseDuration: document.getElementById("exerciseduration").value,
  //     exerciseDate: document.getElementById("exercisedate").value,
  //     Delete: false,
  //     Pinned: false,
  //   };
  //   console.log("saveExercise", exercise);
  //   await fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(exercise),
  //     headers: {
  //       "Content-Type": "application/json; charset=utf-8",
  //     },
  //   });
  // }

  // function generateUniqueID() {
  //   return Math.floor(Math.random() * 2000);
  // }

  // function showForm() {
  //   document.getElementById("form").style.display = "block";
  // }


//casey's work
// const url = "https://localhost:7198/api/Business";
// let myBusinesses = [];

// async function handleOnLoad()
// {
//     let response = await fetch(url);
//     myBusinesses = await response.json();
//     console.log(myBusinesses);

//     let html = `
//     <table>
//         <col>
//             <td><img src = "scripts/resources/FarmerBigAl.jpg" alt = "Big Al" class = "bigal"></td>
//         </col>
//         <col>
//             <div class = "header">
//                 <h1>Big Al's Farmer's Market</h1>
//                 <div class = "loginlinks"><h2><a href = 'SignUp.js'>Returning Member</a></h2></div>
//                 <div class = "loginlinks"><h2><a href = "">New Member</h2></a></div>
//                 <div id = "tableBody"></div>
//             </div>
//         </col>
//         </table>`
    
//     document.getElementById('app').innerHTML = html
//     populateTable()
// }

// function populateTable()
// {
//     let html = `
//     <br><br>
//     <table class = "table">
//     <tr>
//     <td>
//         <table>
//             <thead>
//                 <tr>
//                     <td class="vertical-line">Nov 30</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td class="vertical-line">Pete's Meats</td>
//                 </tr>
//                 <tr>
//                     <td class="vertical-line">Tina's Flowers</td>
//                 </tr>
//             </tbody>
//         </table>
//     </td>
//     <td>
//         <table>
//             <thead>
//                 <tr>
//                     <td>Dec 1</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>${business.name}</td>
//                 </tr>
//             </tbody>
//         </table>
//     </td>
//     <td>
//         <table>
//             <thead>
//                 <tr>
//                     <td>Dec 2</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Pete's Meats</td>
//                 </tr>
//                 <tr>
//                     <td>Farm Fresh Foods</td>
//                 </tr>
//             </tbody>
//         </table>
//     </td>
//     </tr>
//     </table>
//     `
//     document.getElementById('tableBody').innerHTML = html
// }

let app = document.getElementById('app')
const url = 'https://localhost:7198/api/Business'
let businesses = [];

function handleOnLoad() {
    getAllBusinesses()
}

function getAllBusinesses() {
    // get data send to table creator
    fetch(url).then(function(response){
        return response.json()
    }).then(function(json){
        createTable(json)
    })
}

function createTable(businesses) {

    //create table
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'businessTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'businessTableBody'
    table.appendChild(tableBody)

    // create header
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    let th1 = document.createElement('TH')
    th1.width = 500
    th1.appendChild(document.createTextNode('Business Name'))
    tr.appendChild(th1)
    let th2 = document.createElement('TH')
    th2.width = 200
    th2.appendChild(document.createTextNode('More Info'))
    tr.appendChild(th2)
    let th3 = document.createElement('TH')
    th3.width = 200
    th3.appendChild(document.createTextNode('Picture'))
    tr.appendChild(th3)

    //create data rows
    businesses.forEach((business)=>{
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)

        let td1 = document.createElement('TD')
        td1.width = 500
        let name = business.businessName
        td1.appendChild(document.createTextNode(name))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 500
        let description = business.description
        td2.appendChild(document.createTextNode(description))
        tr.appendChild(td2)

        let td3 = document.createElement('TD')
        td3.width = 500
        let img = document.createElement('IMG')
        img.src = business.coverImageURL
        td3.appendChild(img)
        tr.appendChild(td3)



        // let pageButton = document.createElement('button')
        // pageButton.textContent = 'Remove'
        // let td4 = document.createElement('TD')
        // td4.width = 200
        // td4.appendChild(pageButton)
        // tr.appendChild(td4)

        // pageButton.addEventListener('click', function () {
        //     removeBusiness(pokemon.url)
        // })
    })

    app.appendChild(table)
}

// function removeBusiness(pokemonUrl) {
//     // open next page after clicking button on row
//     localStorage.setItem('pokeData', pokemonUrl)
//     window.open('./page2.html')
// }