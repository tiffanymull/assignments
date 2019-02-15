axios.get("https://api.vschool.io/Tiffany/todo").then(function(response){
    var toDoArray = response.data
    for(var i = 0; i < toDoArray.length; i++){

    var todoContainer = document.createElement("div") //<--anything attached to this as a child will appear bc 
    var input = document.createElement("input")          //it is attached to get element below
    var title = document.createElement("h3")
    var image = document.createElement("img")
    // var newToDo = document.createElement("input2")  //<--trying to let the user post
    
        input.type = "checkbox"

        if(toDoArray[i].completed){
        //    todoContainer.style.textDecoration = "line-through"; //<--not undoing line through
            title.style.textDecoration = "line-through";
            input.checked = true;
        }

        input.addEventListener("click", function(e) {
            e.target.parentNode.childNodes[1].classList.toggle("struck")  //<--undoes
            var toDoID = e.target.parentNode.id
            console.log(e.target.checked)
            axios.put("https://api.vschool.io/Tiffany/todo/" + toDoID, {completed: e.target.checked}).then(function(response){
                console.log(e.target.completed)
                if (e.target.checked === true){
                    e.target.parentNode.childNodes[1].style.textDecoration = "line-through"; //<--css names dashed camel case in JS
                }else{
                    e.target.parentNode.childNodes[1].style.textDecoration = "none";
                }
            }).catch(function(error){
                console.log(error)
            })
            
        })
         
       image.src=toDoArray[i].imgUrl

       title.textContent = toDoArray[i].title  //<--title up there

       todoContainer.id=toDoArray[i]._id  //<--So from container can look up id of actual todo object. Id attached to parent node.

    //    todoContainer.appendChild(input2)
       todoContainer.appendChild(input)   //<--down here is where it's attached.
       todoContainer.appendChild(title)
       todoContainer.appendChild(image)
       document.getElementById("toDoList").appendChild(todoContainer)  //<--this makes div in html appear
    // var currentDiv = document.getElementById("toDoList"); 
    // document.body.insertBefore(todoContainer, currentDiv); 
   }
})
        document.form.addEventListener("submit", function(e){           //<--this is maybe the missing piece for adding new post
            e.preventDefault();

            newTodo = {
                title: document.form.title.value,
                description: document.form.description.value,
                imgUrl: document.form.image.value
            }
            axios.post("https://api.vschool.io/Tiffany/todo", newTodo).then(function(response){
                console.log(response.data);
            
            })
        })



//no strike was not necessary
