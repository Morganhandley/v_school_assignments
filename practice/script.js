$.get("http://pokeapi.co/api/v1/pokedex/1/", function (pokedex) {
    var pokemon = pokedex.pokemon;
    console.log(pokemon[0].name);


    for (var i = 0; i < pokemon.length; i++) {
        $("#pokelist").append(`<li>${pokemon[i].name}</li>`);
    }



});