const form = doccument.getElementbyId("form")
const firstName = doccument.getElementbyId("FirstName")
const LastName = doccument.getElementbyId("LastName")
const Email = doccument.getElementbyId("Email")

function ValidateForm(){
    let isValid=true

    if (firstName.value.trim()===""){
        alert("Firstname required")
        isValid=false
    }
    if (LastName.value.trim()===""){
        alert("Lastname required")
        isValid=false
    }
    if (Email.value.trim()===""){
        alert("Email required")
        isValid=false
    }

}

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission
    
    if (validateForm()) {
      const formData = new FormData(form);
      
      fetch('/submit-form', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert("Form submitted successfully!");
        console.log(data);
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
    }
  });