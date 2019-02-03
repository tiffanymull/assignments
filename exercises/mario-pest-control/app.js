
function calculatePrice (event) {
    event.preventDefault()

    var addAllThree1 = document.getElementById("numOfGoomba").value;
    var addAllThree2 = document.getElementById("numOfBobom").value;
    var addAllThree3 = document.getElementById("numOfCheepCheep").value;
    
      var sum = parseInt(addAllThree1) + parseInt(addAllThree2) + parseInt(addAllThree3);

      document.getElementById("addAllTogether").innerHTML = `${sum}`

}
document.getElementById("addAllTogether").addEventListener("click", calculatePrice)


