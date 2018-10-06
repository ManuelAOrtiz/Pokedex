class Pokemon{
	constructor(ajaxNumber){
		this.name;
		this.hp;
		this.attack;
		this.defense;
		this.abilities = [];
		this.sprites = [];
		this.getPokemon(ajaxNumber);
	}
	getPokemon(ajaxNumber){
		var that = this
		$.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
		success: function(result){
					console.log(result)
					that.hp = that.getHP(result)
					that.attack = that.getAttack(result);
					that.defense = that.getDefense(result);
					that.abilities = that.getAbilities(result);
					that.name = that.getName(result);
					that.sprites = that.getImage(result);
				}	
		})
	}
	getImage(result){
		imageArray = [];
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

var wrapper = document.getElementById('wrapper');
var nameDisplay = document.getElementById('nameDisplay');

// var blastoise = new Pokemon(9);
// var kadabra = new Pokemon(64);
// var arcanine = new Pokemon(59);

// var ashe = new Trainer(blastoise, kadabra, arcanine);
