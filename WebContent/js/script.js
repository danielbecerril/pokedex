//elemento ul recuperado de html
var listaPokemon = document.getElementById("listaPokemon");


function cargarDatosPokemon(){
	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		console.log("OnReadyStateChange: " + this.readyState);
		//Comprobamos que termino su trabajo y que la respuesta del servidor es 200
		if(this.readyState == 4 && this.status == 200){
			
			console.log(this.responseText);
			//Respuesta como objeto JS para poder manipularlo
			var respuesta = JSON.parse(this.responseText);
			crearListaPokemon(respuesta);
			
			
		}
	}
	//Configurar metodo HTTP y la url a la que se va a hacer petición
	
	request.open('GET','https://pokeapi.co/api/v2/pokemon', true);
	request.send();
}

function cargarImagenPokemon(name, elementoLi){
	
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			
				
			var respuesta = JSON.parse(this.responseText);
			crearElementoImagenPokemon(respuesta,elementoLi);
				
		}
	}
	request.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name, true);
	request.send();
}

function cargarEvolucion(e){
	var pokemonID = e.target.dataset.pokemonId;
	var elementoLi = e.target.parentElement;
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var respuesta = JSON.parse(this.responseText);
			var pokemonEvolucionId = 
			
			cargarImagenPokemon(pokemonId, elementoLi);
		}
	}
	request.open('GET', 'https://pokeapi.co/api/v2/pokemon/evolution-chain' + pokemonId, true);
	request.send();
	
}

function mandarDatosPokemon(e){
	var request = new XMLHttpRequest();
	var pokemon = obtenerDatosElementoPokemon(e.target.parentElement);
	request.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);
		}
	}
	request.open('POST', 'https://en66nzzcy55h6.x.pipedream.net/', true);
	request.send(JSON.stringify(pokemon));
}

function obtenerDatosElemento(elementoLi){
	var nombrePokemon = elementoLi.innertext;
	var elementoImg = elemento.querySelector("img");
	var pokemonImg = elementoImg.src;

	var pokemon = {
			nombre: nombrePokemon,
			url: pokemonImg
	};
	
	return pokemon;
}


function crearElementoImagenPokemon(pokemon, elementoLi){
	
	var imgPokemon = pokemon.sprites.front_default;
	
	//Crear elemento img para imagen del pokemon
	var elementoImg = document.createElement("img");
	
	//Poner ruta o url de la imagen
	elementoImg.src = imgPokemon;
	//Mandar al DOM
	elementoLi.appendChild(elementoImg);
}

function crearListaPokemon(datos){
	
	var listaPokemones = datos.results;

	for(pokemon of listaPokemones){
		crearElementoPokemon(pokemon);

	}
}

function crearElementoPokemon(pokemon){
	//Creando elemento de tipo list item
	var elementoLi = document.createElement("li");
	var btnEvolucion = documento.createelement("button");
	
	
	//Configuracion de elemento
	elementoLi.innerText = pokemon.name;
	btnEvolucion.innerText = "Evolucionar";
	btnEvolucionar.id = pokemon.id;
	btnEvolucionar.onclick = cargarEvolucion;
	btnEnviar.innerText = "Envíar";
	btnEnviar.onclick = mandarDatosPokemon;
	
	
	
	elementoLi.appendChild(btnEnviar);
	elementoLi.appendChild(btnEvolucionar);
	
	// Mandarlo al DOM
	listaPokemon.appendChild(elementoLi);
	
	cargarImagenPokemon(pokemon.name,elementoLi);
}

