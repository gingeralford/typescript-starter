class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }

    sayHelloToFullname(){
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}


let phil: Person = new Person();

phil.firstName = "Phil";
phil.lastName = "Donahue";

phil.sayHello();

let chris: Person = new Person();
chris.firstName = "Chris";
chris.lastName = "Butcher";
chris.sayHelloToFullname();

class Game {
    constructor(name: string, maker: string){
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');
// let battleship: Game = new Game(); would throw an error...when creating new instance with a constructor must supply parameters

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}
//ABOVE IS THE "PARENT" CLASS

//EXAMPLE ONE
class Automobile extends Vehicle {
    isSelfDrive: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDrive = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

//EXAMPLE TWO
class Motorcycle extends Vehicle{
    easyToDoWheelie: boolean;
}
let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal{
    legs: number;
    isFurry: boolean;
    isDeadly: boolean;
}

class Bear extends Animal{
    bearType: string;
}
let BrownBear: Bear = new Bear();
BrownBear.legs = 4;
BrownBear.isFurry = true;
BrownBear.bearType= "Brown";

class Tiger extends Animal{
    mascot: boolean;
}
let Tony: Tiger = new Tiger();
Tony.isDeadly = false;
Tony.isFurry = true;
Tony.mascot = true;

//PARAMETER PROPERTIES

/* ORIGINAL VERSION

class Store{
    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }
    name: string;
    city: string;
}
let ikea: Store = new Store('Ikea', 'Fishers');
*/

//MORE BETTER VERSION IN TYPESCRIPT
class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers');

//ACCESSORS
class Employee extends Person{
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}