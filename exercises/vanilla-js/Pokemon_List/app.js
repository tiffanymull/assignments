// {
//     name: 'Charmander'
//     resource_uri: 'api/v1/pokemon/8/'
// }

var xhr = new XMLHttpRequest();
var container = document.getElementById("pokeNames")

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var pokemon = data.objects[0].pokemon;
          listPokemon(pokemon) //<-- declaration
    }
};



xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

function listPokemon(pokemonArr){   //<--function declarations allow you to write functions elsewhere
    for (var i = 0; i < pokemonArr.length; i++){
   
        // var first = pokemonArr[0]

    
        var name = document.createElement('p')
        
        // name.textContent = first.name
        name.textContent = pokemonArr[i].name
        
        container.appendChild(name)
    }
}

//1.Create HTML Element
//2.edit that element, adding text, styles, events
//3.append that element
//for loop to iterate each name

   