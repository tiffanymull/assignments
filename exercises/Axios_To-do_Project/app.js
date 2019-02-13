// var axios = require("axios"); <--don't need this bc not using node. 
        //the script source on html takes care of this.



axios.get('https://api.vschool.io/Tiffany/todo').then(function(response){
    console.log(response.data)
}).catch(function(error){
    console.log(error)
})