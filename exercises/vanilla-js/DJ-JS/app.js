var box = document.getElementsByClassName("crazy-box")[0]  //<--since elmenets plural, array means need to select index [0] (first element trying to call)
                                                        //if were id, would not need to call teh index, bc it's a singular item
function makeBoxRed(event) {
    event.target.style.backgroundColor = "red"; 

}

box.addEventListener("mousedown", makeBoxRed);

//

var box = document.getElementsByClassName("crazy-box")[0]

function makeBoxBlue(event) {
    event.target.style.backgroundColor = "blue";
}

box.addEventListener("mouseover", makeBoxBlue);

//

var box = document.getElementsByClassName("crazy-box")[0]

function makeBoxYellow(event) {
    event.target.style.backgroundColor = "yellow";
}

box.addEventListener("mouseup", makeBoxYellow);

//

var box = document.getElementsByClassName("crazy-box")[0]

function makeBoxGreen(event) {
    event.target.style.backgroundColor = "green";
}

box.addEventListener("dblclick", makeBoxGreen);

//

var box = document.getElementsByClassName("crazy-box")[0]

function makeBoxOrange(event) {
    event.target.style.backgroundColor = "orange";
}

box.addEventListener("wheel", makeBoxOrange);  //except i made it when scroll over box not anywhere in window

//they found a way to work around it by using an id for the body
// then they used if statements to say if background of body is not pink,
//somehow this made the background the target rather than
//the box element.  The secret is the if statements.
//actually maybe the secret is not the if statements.