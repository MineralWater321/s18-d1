/* Objects:
	Syntax:
		let objectName = {
			keyA: valueA,
			keyB: valueB
		}

*/

let cellphone = {
	name: 'Nokia 3210',
	manufactureDate: 1999
}

console.log('Result from creating objects using initializers/literal notation');
console.log(cellphone);
console.log(typeof cellphone);
console.log(cellphone.name);

//Creating objects using constructor function
/*
	- creates a reusable function to create several objects that have the same data structure
	Syntax:
		function objectName(keyA, keyB){
			this.keyA = keyA;
			this.keyB = keyB;
		}
	- "this" keyword allows to assign a new object's properties by associating them with values received from a constructors function's parameters
*/

function Laptop(name, manufactureDate){
	this.name = name;
	this.manufactureDate = manufactureDate;
}

let laptop = new Laptop('Lenovo', 2008);
console.log('Result from creating objects using object constructors: ');
console.log(laptop);

let myLaptop = new Laptop('MacBook Air', 2020);
console.log('Result from creating objects using object constructors: ');
console.log(myLaptop);

let selfLaptop = new Laptop('Acer', 2019);
console.log('Result from creating objects using object constructors: ');
console.log(selfLaptop);

//Accessing Object Properties
//dot notation
console.log("Result from dot notation: " + myLaptop.name);

//square bracket notation
console.log("Result from dot notation: " + myLaptop['name']);

//Accessing Array Objects
let arr = [laptop, myLaptop];

console.log(arr[0]['name']);
console.log(arr[0].name);

//Initializing/Adding/Deleting/Reassigning Object Properties

let car = {}

car.name = "Honda Civic";
console.log('Result from adding properties using dot notation:');
console.log(car);

car['manufacture date'] = 2019;
console.log(car['manufacture date']);
console.log(car['Manufacture Date']);
console.log(car.manufactureDate);
console.log(car);

//Deleting object properties
delete car['manufacture date'];
console.log('Result from deleting properties: ');
console.log(car);

//Reassigning object properties
car.name = 'E46 BMW M3 GTR';
console.log('Result from reassigning properties: ');
console.log(car);

//Object Method
//Method is a function which is a property of an object

let person = {
	name: 'John',
	talk: function(){
		console.log('Hello my name is ' + this.name);
	}
}

console.log(person);
console.log('Result from object methods: ');
person.talk();

//Adding methods to objects
person.walk = function(){
	console.log(this.name + ' walked 25 steps forward.')
}

person.walk();

//Add a run method to the person object
person.run = function(){
	console.log(this.name + ' did not run because he was lazy.');
}
person.run();

// Creating reusable functions
let friend = {
	firstName: 'Joe',
	lastName: 'Smith',
	address: {
		city: 'Austin',
		country: 'Texas'
	},
	emails: ['joe@mail.com', 'joesmith@email.xyz'],
	introduce: function(){
		console.log('Hello my name is ' + this.firstName + ' ' + this.lastName);
	}
}

friend.introduce();
console.log(friend.address.city);
console.log(friend.address);
console.log(friend.emails[1]);