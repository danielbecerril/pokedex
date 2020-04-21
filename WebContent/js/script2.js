var i = 1;
var listaPokemon = document.getElementById("listaPokemon");

function loadPokemons(){
	
	var request = new XMLHttpRequest();

	request.onreadystatechange = function(){
		
		console.log("OnReadyStateChange" + this.state);
		
		
		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);
			var response = JSON.parse(this.responseText);
			loadPokemonImages(response.sprites.back_default);
			loadPokemonData(response.forms[0].name);
		}
	}
	
	request.open("GET","https://pokeapi.co/api/v2/pokemon/" + i,true);
	request.send();
	i++;
}

function loadPokemonImages(src){
	var elementImg = document.createElement("img");
	elementImg.src = src;
	listaPokemon.appendChild(elementImg);

}

function loadPokemonData(name){
	var elementLi = document.createElement("li");
	elementLi.innerText = name;
	listaPokemon.appendChild(elementLi);
}

function loadSomePokemons(limit){
	
	for(var j = 0; j < limit;j++){
		loadPokemons();
	}
}
