class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	set species(value){
		this._species = value;
	}
	makeSound(){
		console.log(this.species+" makes a sound");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
	   console.log("woof")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	
	purr(){
	  console.log("purr")
	}
}
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;