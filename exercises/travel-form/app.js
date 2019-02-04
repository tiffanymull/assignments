
//This allows user to select a locale
document.travelform.addEventListener("submit", function(e) {
    e.preventDefault();


    var firstName = document.getElementById("firstName").value;  //<--could've gotten
    var surname = document.getElementById("surname").value;      // by name?
    var aged = document.getElementById("aged").value;
    var gender;
    var dietSelect = [];
    var locale;
//https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value

    var radios = document.getElementsByName("gender");
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                gender = radios[i].value;
            }
        }
    
    var locale = document.getElementById("select1").value;
        

    var checkboxes = document.getElementsByName("dietary restrictions");
        for (var i = 0; i< checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                dietSelect.push(checkboxes[i].value);      //<-- so it displays any combination of selections
            }
        }
            

    alert ("First Name: " + firstName + "\nLast Name: " + surname
            + "\nAge: " + aged + "\nGender: " + gender + "\nLocale: " + locale +
            "\nDietary Restrictions: "
            + dietSelect.join(", ")); //<-- if you have an array, you can put it into
                                            // a string that prints with commas with toString()

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
