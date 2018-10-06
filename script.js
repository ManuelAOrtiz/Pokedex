class Pokemon{
	constructor(ajaxNumber){
		this.name;
		this.hp;
		this.attack;
		this.defense;
		this.abilities = [];
		this.sprites = [];
		this.types = [];
		this.pokemonID = ajaxNumber;
		this.getPokemon(ajaxNumber);
	}
	getPokemon(ajaxNumber){
		var that = this
		$.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
		success: function(result){
					// console.log(result)
					that.hp = that.getHP(result)
					that.attack = that.getAttack(result);
					that.defense = that.getDefense(result);
					that.abilities = that.getAbilities(result);
					that.name = that.getName(result);
					that.sprites = that.getImage(result);
					that.types = that.getType(result);
				}	
		})
	}
	getImage(result){
		var imageArray = [];
		imageArray.push(result.sprites.back_default);
		imageArray.push(result.sprites.front_default);
		return imageArray;
	}
	getName(result){
		//sends a name
		return result.name
	}
	getHP(result){
		return result.stats[5].base_stat
	}
	getAttack(result){
		return result.stats[4].base_stat
	}
	getDefense(result){
		return result.stats[3].base_stat
	}
	getAbilities(result){
		let abilityArray = [];
		for(let i = 0 ; i< result.abilities.length;i++){
			abilityArray.push(result.abilities[i].ability.name)
		}
		return abilityArray;
	}
	getType(result){
		var types= [];
		for(let i = 0; i< result.types.length; i++){
			types.push(result.types[i].type.name)
		}
		return types
	}			
}

class Trainer{
	constructor(pokemon1,pokemon2,pokemon3){
		this.pokemons = [pokemon1, pokemon2, pokemon3];
	}
	nameAll(){
		for(let i = 0; i<pokemons.length; i++){
			this.pokemons[i].name;
		}
	}
	selectPokemon(name){
		var index = this.pokemons.name.indexOf('name');

	}
}
var imageCounter = 0;
var pokemonStorage = [];
var pokedexWrapper = document.getElementById('pokedexWrapper')
var imageDisplay = document.getElementById('imageDisplay');
var textDisplay = document.getElementById('textDisplay');
var line1 = document.getElementById('lineOne')
var line2 = document.getElementById('lineTwo')

var statsButton = document.getElementById('buttonStats');
var nameButton = document.getElementById('buttonName');
var typeButton = document.getElementById('buttonType');
var abilitiesButton = document.getElementById('buttonAbilities');

statsButton.addEventListener('click', function(){
	getPokemonStats(pokemonStorage[0])
})
nameButton.addEventListener('click', function(){
	getPokemonInfo(pokemonStorage[0])
})
typeButton.addEventListener('click', function(){
	getPokemonTypes(pokemonStorage[0])
})
abilitiesButton.addEventListener('click', function(){
	getPokemonAbilities(pokemonStorage[0]);
})

var up = document.getElementById('up');
var down = document.getElementById('down');
var left = document.getElementById('left');
var right = document.getElementById('right');


var upDownCounter = 0;
up.addEventListener('click', function(){
	if(upDownCounter == 0){
		getPokemonAbilities(pokemonStorage[0])
		upDownCounter = 3;
	}else if(upDownCounter == 1){
		getPokemonInfo(pokemonStorage[0])
		upDownCounter--
	}else if(upDownCounter == 2){
		getPokemonTypes(pokemonStorage[0])
		upDownCounter--
	}else if(upDownCounter == 3){
		getPokemonInfo(pokemonStorage[0])
		upDownCounter--;
	}
})
down.addEventListener('click', function(){
	if(upDownCounter == 0){
		getPokemonTypes(pokemonStorage[0])
		upDownCounter++
	}else if(upDownCounter == 1){
		getPokemonStats(pokemonStorage[0])
		upDownCounter++
	}else if(upDownCounter == 2){
		getPokemonAbilities(pokemonStorage[0])
		upDownCounter++
	}else if(upDownCounter == 3){
		getPokemonInfo(pokemonStorage[0])
		upDownCounter = 0;
	}
})
left.addEventListener('click', function(){
	if(pokemonStorage.length==1){
		changePokemonImage(pokemonStorage[0]);
	}
})
right.addEventListener('click', function(){
	if(pokemonStorage.length==1){
		changePokemonImage(pokemonStorage[0]);
	}
	
})

var generalStats = document.getElementById('generalStats');
var physicalStats = document.getElementById('physicalStats');
var statsAbilities = document.getElementById( 'abilities');


var search = document.getElementById('search');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(){
	getPokemonFromSearch();
	    setTimeout(function () {
        imageDisplay.style.backgroundImage = "url('"+pokemonStorage[0].sprites[1]+"')"
        getPokemonInfo(pokemonStorage[0]);    
    }, 200);
	
	
})
function getPokemonFromSearch(){
	pokemonStorage = [];
	var newPokemon = new Pokemon(search.value);
	pokemonStorage.push(newPokemon);
}
function getPokemonInfo(pokemon){
	line1.innerHTML = " ";
	line2.innerHTML = " ";
	var name = pokemon.name.split("");
	name[0] = name[0].toUpperCase();
	name = name.join("");
	line1.innerHTML = name+"  "+" #"+pokemon.pokemonID;
	line2.style.fontSize = "1em"
	for(let i = 0; i<pokemon.types.length; i++){
		var type = pokemon.types[i].split("");
		var trial = pokemon.types[i].charAt(0).toUpperCase();
		type[0] = type[0].toUpperCase();
		type = type.join("")
		line2.innerHTML += " "+ type +"  ";
	}
	// pokemon.name + " # " + pokemon.pokemonID;
}
function getPokemonTypes(pokemon){
	line1.innerHTML = " ";
	line2.innerHTML = " ";
	line2.style.fontSize = "1em"
	for(let i = 0; i<pokemon.types.length; i++){
		var type = pokemon.types[i].split("");
		type[0] = type[0].toUpperCase();
		type = type.join("")
		line2.innerHTML += " " +type+ " ";
	}
}
function getPokemonStats(pokemon){
	line1.innerHTML = " ";
	line2.innerHTML = " ";
	line1.innerHTML = " HP: " + pokemon.hp;
	line2.style.fontSize = ".8em"
	line2.innerHTML = " Attack: "+pokemon.attack+ " "+ " "+" Defense: "+pokemon.defense;
}
function getPokemonAbilities(pokemon){
	line1.innerHTML = " ";
	line2.innerHTML = " ";
	line2.style.fontSize = ".8em"
	for(let i = 0; i<pokemon.abilities.length; i++){
		var name = pokemon.abilities[i].split("");
		name[0] = name[0].toUpperCase();
		name = name.join("");
		line2.innerHTML += " "+(i+1)+".)"+name+" "
	}
}
function changePokemonImage(pokemon){
	if(imageCounter==1){
		imageCounter--;
		imageDisplay.style.backgroundImage = "url('"+pokemonStorage[0].sprites[imageCounter]+"')"
	}else{
		imageCounter++
		imageDisplay.style.backgroundImage = "url('"+pokemonStorage[0].sprites[imageCounter]+"')"
	}
}


//var blastoise = new Pokemon(9);
// var kadabra = new Pokemon(64);
// var arcanine = new Pokemon(59);

// var ashe = new Trainer(blastoise, kadabra, arcanine);
