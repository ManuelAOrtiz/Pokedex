class Pokemon{
	constructor(ajaxNumber){
		this.name;
		this.hp;
		this.attack;
		this.defense;
		this.abilities = [];
		this.getPokemon(ajaxNumber);
	}
	getPokemon(ajaxNumber){
		var that = this
		$.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
		success: function(result){
					that.hp = that.getHP(result)
					that.attack = that.getAttack(result);
					that.defense = that.getDefense(result);
					that.abilities = that.getAbilities(result);
					that.name = that.getName(result);
				}	
		})
	}
	getName(result){
		//sends a name
		return ajax.name
	}
	getHP(result){
		return ajax.stats[5].base_stat
	}
	getAttack(result){
		return ajax.stats[4].base_stat
	}
	getDefense(result){
		return ajax.stats[3].base_stat
	}
	getAbilities(result){
		return ajax.stats[3].base_stat
	}			
}

class Trainer{
	constructor(){
		this.pokemons = [];
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


var pokemon = new Pokemon(9);


// $.ajax({url: "https://fizal.me/pokeapi/api/59.json",
// 		success: function(result){
// 			arcanine = new Pokemon(result)
// 			twin = {
// 			name: arcanine.name,
// 			attack: arcanine.attack,
// 			defense: arcanine.defense,
// 			abilities: arcanine.abilities
// 			}
// 		}	
// })

var ashe = new Trainer();
