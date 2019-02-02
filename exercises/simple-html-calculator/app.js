

//taken from https://stackoverflow.com/questions/6462772/sum-of-two-textfields-javascript


//Addition button
function calculateIt1(event) {
    event.preventDefault()              //<-- must do preventDefault whenever you do a form
    var additionInput1 = document.getElementById("num1").value;
    var additionInput2 = document.getElementById("num2").value;

       var sum = parseInt(additionInput1) + parseInt(additionInput2);

        document.getElementById("addResult").innerHTML= `${sum}`

       console.log(sum)
    
    
}
document.getElementById("summation").addEventListener("click", calculateIt1)  //<-- button


//Subtraction button
function calculateIt2(event) {
    event.preventDefault()

   var subtractionInput1 = document.getElementById("num3").value;
   var subtractionInput2 = document.getElementById("num4").value;   

     var subtract = parseInt(subtractionInput1) - parseInt(subtractionInput2);

     document.getElementById("subtractResult").innerHTML= `${subtract}` //<-- this displays the result
      
     console.log(subtract)     //<-- makes it go in console, not necessary for display
}
document.getElementById("subtraction").addEventListener("click", calculateIt2)   //<-- button

//Multiplication button
function calculateIt3(event) {
    event.preventDefault()

  var multiplyInput1 = document.getElementById("num5").value;
  var multiplyInput2 = document.getElementById("num6").value;

    var multiply = parseInt(multiplyInput1) * parseInt(multiplyInput2);

    document.getElementById("multiplyResult").innerHTML= `${multiply}`

    console.log(multiply)
    
}
document.getElementById("multiplication").addEventListener("click", calculateIt3)       //<--button


