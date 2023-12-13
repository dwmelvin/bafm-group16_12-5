let myBusiness = [];
function editVendorInfo(businessid)
{

    let html = '<div class = "loginlinks"><h2><button class = "btn btn-light" style = "font-size: 27px;" onclick = "businessCalendar(${businessid})">Business View</button></h2></div>'
    
    document.getElementById('app').innerHTML = html
    getAllVendors(businessid)
    createForm(myBusiness)
}

function getAllVendors(businessID) {

    // get data send to table creator
    fetch('https://localhost:7198/api/Business').then(function(response){
        return response.json()
    }).then(function(jsonResults){
        createEventTable(jsonResults, businessID)
    })
}

function checkVendorInfo(businesses, businessID) {
    businesses.forEach(business => {
        if (business.businessID = businessID) {
            myBusiness = business
        }   
    });
}

function createForm(myBusiness) {
    let form = document.createElement('form');
    form.id = 'exerciseForm';
  
    let nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'businessName';
    nameLabel.appendChild(document.createTextNode('Business Name: '));
    form.appendChild(nameLabel);
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'businessName';
    form.appendChild(nameInput);


    let emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.appendChild(document.createTextNode('Business Email: '));
    form.appendChild(emailLabel);
    let emailInput = document.createElement('input');
    emailInput.type = 'text';
    emailInput.id = 'email';
    form.appendChild(emailInput);


    let passLabel = document.createElement('label');
    passLabel.htmlFor = 'password';
    passLabel.appendChild(document.createTextNode('Business Password: '));
    form.appendChild(passLabel);
    let passInput = document.createElement('input');
    passInput.type = 'text';
    passInput.id = 'password';
    form.appendChild(passInput);

  
    let urlLabel = document.createElement('label');
    urlLabel.htmlFor = 'url';
    urlLabel.appendChild(document.createTextNode('Cover Image (URL): '));
    form.appendChild(urlLabel);
    let urlInput = document.createElement('input');
    urlInput.type = 'text';
    urlInput.id = 'url';
    form.appendChild(urlInput);

  
    let descLabel = document.createElement('label');
    descLabel.htmlFor = 'description';
    descLabel.appendChild(document.createTextNode('Description: '));
    form.appendChild(descLabel);
    let descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.id = 'description';
    form.appendChild(descInput);

    let submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);
  
    app.appendChild(form);
  
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
  
        let business = {
            BusinessID: myBusiness.businessID,
            BusinessEmail: document.getElementById('email').value,
            BusinessPassword: document.getElementById('password').value,
            BusinessName: document.getElementById('businessName').value,
            Description: document.getElementById('description').value,
            CoverImage: document.getElementById('url').value,
            Deleted: myBusiness.Deleted
        }

        saveBusiness(business)
    });
  }

  async function saveBusiness(business){
    await fetch('https://localhost:7198/api/Business', {
        method: "PUT",
        body: JSON.stringify(business),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

  }