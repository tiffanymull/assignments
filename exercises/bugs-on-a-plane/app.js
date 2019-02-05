document.bugForm.addEventListener("submit", function (e) {
    e.preventDefault();


// var form = document.getElementByID("arline-form");
// var submit = document.getElementByID(submit);
// var query = document.querySelector;


    var firstName = document.getElementById("theFirstName").value;
    var lastName = document.getElementById("theLastName").value; 
    var aged = document.getElementById("aged").value;
    var gender;
    var locale;
    var dietSelect = [];


    var radios = document.getElementsByName("gender");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
            }
        }

    var locale = document.getElementById("travelThere").value;

    var checkboxes = document.getElementsByName("dietary restrictions");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                dietSelect.push(checkboxes[i].value);
            }
        }

// function formAlert() {
//     var firstName = form.elements["firstName"].value; 
//     var lastName = form.elements["lastName"].value;
//     var age = form.elements["age"].value;
//     var gender = form.elements["gender"].value;
//     var location = form.elements["travel-location"].value;
//     var diet = {};
//     if (form.elements['vegan'].checked) {
//         var diet.pop(document.getElementById("vegan").value);
//     }
//     if (form.elements['gluten'].checked) {
//         diet.push(document.getElementById('gluten').value);
//     }
//     if (form.elements['paleo'].checked) {
//         diet.push(document.getElementById('paleo').value);
//     }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + 
    "\nAge: " + aged + "\nGender: " + gender + "\nTravel Location: " 
    + locale + "\nDiet: " + dietSelect.join(", ") + "\nAwesome. Now if you die, it won\'t be an accident.");
//  }

})
// submit.addEventListener("click", formalert);