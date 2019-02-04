
function calculatePrice (event) {
    event.preventDefault()

    var addAllThree1 = document.getElementById("numOfGoomba").value;
    var addAllThree2 = document.getElementById("numOfBobomb").value;
    var addAllThree3 = document.getElementById("numOfCheepCheep").value;
    
      var sum = parseInt(addAllThree1) * 5 + parseInt(addAllThree2) * 7 + parseInt(addAllThree3) * 11;

      document.getElementById("writeTotal").innerHTML = `${sum}`

}
document.getElementById("addAllTogether").addEventListener("click", calculatePrice)


