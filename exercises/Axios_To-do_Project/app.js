// var axios = require("axios"); <--don't need this bc not using node. 
        //the script source on html takes care of this.



// axios.get('https://api.vschool.io/Tiffany/todo').then(function(response){
//     // console.log(response.data)
//     for (var i = 0; i < response.data.length; i++) {
//         console.log(response.data[i].title);
//         console.log(response.data[i].description);
//     }
// })

axios.get('https://api.vschool.io/Tiffany/todo').then(function(response) {
    renderToDos(response.data)  //<--array of todos
})
    
function renderToDos(toDoArray) {            //<--toDoArray is pointing at what response.data was earlier
    toDoArray.forEach(function(todo){
        var parent = document.createElement("div");
        parent.className = "todo";
        var text = document.createTextNode(todo.title);
        parent.appendChild(text);

        var input = document.createElement("input");
        input.className = "input";

        input.type = "checkbox";

        input.addEventListener("click", handleChecked)  //<-- this is what needs to make strike happen.

        parent.appendChild(input);

        addStrikeThrough(parent, todo.completed, input) //<-- does this need to be parent.completed?
                                                        //<-- or does this need to be isCompleted?
        document.getElementById("todo-list").appendChild(parent);
    })


}

function handleChecked(){
    
    // for (var i = 0; i < input.length; i++){
    //     if (input[i].checked){
    //         addStrikeThrough.push(checkboxes[i].value);
    //     }
    // }
    //do i need a for loop here for input[i]?
    //does toggle come into play?
    
    console.log("checked")

}

function addStrikeThrough(item, isCompleted, input){
    if(isCompleted){
        item.style.textDecoration = "line-through";
        input.checked = true
    }
}





// var parent = document.createElement("div");
//         parent.className = "todo";
//         var text = document.createTextNode(todo.title);
//         todo.appendChild(text);
        
//         document.getElementById("todo-list").appendChild(parent)
//     })
// })