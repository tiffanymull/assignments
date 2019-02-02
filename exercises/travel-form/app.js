
//This allows user to select a locale
document.travelform.addEventListener("submit", function(e) {
    e.preventDefault()


    var firstName = document.getElementById("firstName").value  //<--could've gotten
    var surname = document.getElementById("surname").value      // by name?
    var aged = document.getElementById("aged").value
    var gender;
    var dietSelect = [];
//https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value

    var radios = document.getElementsByName("gender");
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
            }
        }
    
    var checkboxes = document.getElementsByName("dietary restrictions");
        for (var dietRestrict = document.
            
            ))
  
        


    alert ("First Name: " + firstName + "\nLast Name: " + surname
            + "\nAge: " + aged + "\nGender: " + gender + "\nDietary Restrictions: "
            + dietSelect.toString)

})

//Then make the submit button trigger an alert that
//displays info user entered which is by adding alert to the function above
// alert ("Yadda yadda"); made yadda yadda pop up note that \n = line break


//This may possibly have the info I need: https://www.universalclass.com/articles/computers/javascript/user-input-and-output-in-javascript.htm

//This is what I tried to put above the alert, but it didn't work and just returned funciton to string(){[native code]} to the alert:

                    // var checkboxes = document.getElementsByName("dietary restrictions");
                    // for (var i = 0, length = checkboxes.length; i < length; i++) {
                    //     if (checkboxes[i].checked) {
                    //         dietSelect.push(checkboxes[i].value)
                    //     }
                        // }

                                // function writeDiet(dietArray) {
                                 //     var outputput;

                                 //     for (var i = 0, length = checkboxes.length; i < length; i++) {
                                    //         if (checkboxes[i].checked) {

                                         //         }
                                        //     }

                                    //     return outputput;
                                                // }



