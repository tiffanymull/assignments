//look up how to use innerHTML and how back ticks work

// function addHeader() {

document.getElementById("header").innerHTML = 
    "JavaScript Made This!" + "<div><span class = name> Tiffany </span> wrote the JavaScript</div>"


    // link.type = "text/css";
    // link.rel = "stylesheet";
    // link.href = "style.css"
// }

//put a div element around name?

//Notice the back ticks.  If it were += rather than just =, it would add it to the side rather than replace.
document.getElementsByClassName("message left")[0].innerHTML = `<div>Hey, you!</div>`
document.getElementsByClassName("message right")[0].innerHTML = `<div>What do you want?</div>`
document.getElementsByClassName("message left")[1].innerHTML = `<div>I want to sleep.</div>`
document.getElementsByClassName("message right")[1].innerHTML = `<div>Too bad. You're an insomniac.</div>`

//write some javascript that will wait until the use clicks the clear button, then clears all conversation.
//use innerHTML because its CSS (NOT style or value which are css)

var clear = document.getElementById("clear-button")

function eraseText(event) {
    document.getElementsByClassName("messages")[0].innerHTML = ``
}

clear.addEventListener("click", eraseText);

//write javascript that will notice when the drop down has changed
//and changes background colors of messages accordingly
//will need to use style and value (css). Tactic below does not work yet.
//wait, maybe this need to be in html as well

var dropDown = document.getElementById("theme-drop-down")

function colorSwitch1(event) {
    event.target.style.value = "theme-two"
}

dropDown.addEventListener("onchange", colorSwitch1);
