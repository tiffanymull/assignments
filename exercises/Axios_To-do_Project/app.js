var completedToDo = {
    completed: true,
}
var incompleteToDo = {  //<--to update database???
    completed: false,
}


axios.get("https://api.vschool.io/Tiffany/todo").then(function(response){
var toDoArray = response.data
for(var i = 0; i < toDoArray.length; i++){

   var todoContainer = document.createElement("div") //<--anything attached to this as a child will appear bc 
   var input = document.createElement("input")          //it is attached to get element below
   var title = document.createElement("h3")
   var image = document.createElement("img")
   input.type = "checkbox"

   input.addEventListener("click", function(e) {
        e.target.parentNode.childNodes[1].classList.toggle("struck")  //<--undoes
        var toDoID = e.target.parentNode.id
        axios.get("https://api.vschool.io/Tiffany/todo/" + toDoID).then(function(response){
            var storedIDs = response.data
            if (storedIDs.completed === true){  //<-- to update database? axios.put?
                axios.put("https://api.vschool.io/Tiffany/todo/" + toDoID, JSON.stringify(incompleteToDo))
            }else{
                axios.put("https://api.vschool.io/Tiffany/todo/" + toDoID, JSON.stringify(completedToDo))

            }
        })
        //    e.target.parentNode.childNodes[1].style.textDecoration = "line-through"; //<--perm. strike
        }, true)



       if(toDoArray[i].completed){
           todoContainer.classList.toggle("struck");
           input.checked = true;
       }

       image.src=toDoArray[i].imgUrl
    //    if(toDOArray[i].imgURL)

       title.textContent = toDoArray[i].title  //<--title up there

       todoContainer.id=toDoArray[i]._id  //<--So from container can look up id of actual todo object. Id attached to parent node.

       todoContainer.appendChild(input)   //<--down here is where it's attached.
       todoContainer.appendChild(title)
       todoContainer.appendChild(image)
       document.getElementById("toDoList").appendChild(todoContainer)  //<--this makes div in html appear
    // var currentDiv = document.getElementById("toDoList"); 
    // document.body.insertBefore(todoContainer, currentDiv); 
   }
})

function renderChecked(e){
e.target.parentNode.classList.toggle("nostrike")
}