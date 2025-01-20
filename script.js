//complete this code
class Animal {
	constructor(species){
		this.species=species;
	}
	get Species(){
		return this.species;
	}
	makeSound(){
		console.log(this.species+" makes a sound");
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	makeSound(){
		console.log(this.species+" barks");
	}
	bark(){
	   console.log("woof")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	makeSound(){
		console.log(this.species+" purrs");
	}
	purr(){
	  console.log("purr")
	}
}
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
