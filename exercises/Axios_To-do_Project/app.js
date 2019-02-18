axios.get("https://api.vschool.io/Tiffany/todo").then(function(response){
    var toDoArray = response.data
    for(var i = 0; i < toDoArray.length; i++){

    var todoContainer = document.createElement("div") //<--anything attached to this as a child will appear bc 
    var input = document.createElement("input")          //it is attached to get element below
    var title = document.createElement("h3")               //There is a toDoContainer for each task item
    var image = document.createElement("img")
    var deleteBox = document.createElement("button")  //<--not input
    

        input.type = "checkbox"
        deleteBox.textContent = "Delete"

        if(toDoArray[i].completed){     //<--This is telling webpage to do what's in the databasae
        //    todoContainer.style.textDecoration = "line-through"; //<--not undoing line through
            title.style.textDecoration = "line-through";
            input.checked = true;
        }
        //the below is attaching a function to each checkbox. Must be in for loop.
        input.addEventListener("click", function(e) {     //<--This is telling the database to do what's on the page
            // e.target.parentNode.childNodes[1].classList.toggle("struck")  //<--redundant now
            var toDoID = e.target.parentNode.id   //<--had to access checkbox through parent
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

        deleteBox.addEventListener("click", function(e){  //<--parentNode is toDoContainer(task)
            axios.delete("https://api.vschool.io/Tiffany/todo/" + e.target.parentNode.id).then(function(response){
                e.target.parentNode.remove()   //<--.remove()
            })
        })
         
       deleteBox.value = "Delete"

       image.src=toDoArray[i].imgUrl  //<--this is giving values to the image tag, input tag, div tag, etc.

       title.textContent = toDoArray[i].title  //<--title up there

       todoContainer.id=toDoArray[i]._id  //<--So from container can look up id of actual todo object. Id attached to parent node.
                                                //this is what makes it update in the actual database
    //    todoContainer.appendChild(input2)
       todoContainer.appendChild(input)   //<--down here is where it's attached.
       todoContainer.appendChild(title)      //the order appending is the index [0, 1, 2]
       todoContainer.appendChild(image)
       todoContainer.appendChild(deleteBox)
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
                imgUrl: document.form.image.value,
                price: document.form.price.value
            }
            axios.post("https://api.vschool.io/Tiffany/todo", newTodo).then(function(response){
                console.log(response.data);
            
            })
        })

       

//no strike was not necessary
