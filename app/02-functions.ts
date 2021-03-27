function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

//works fine
addNumbers(1,2);

//NOPE
// addNumbers(1,2,3);
// addNumbers(1,2,3,"Foo");

function fullName(first: string, last: string){
    console.log(`${first} ${last}`);
}

fullName('Ginger', 'Alford');

function sayHello(name: string) : string {
    return name;
}

sayHello("ginger"); //OK!
// sayHello(1); //NOPE!

function checkIDs(username: string, password: string) : boolean {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    } else {
        return false;
    }
}

console.log(checkIDs("elevenfiftyuser", "Letmein1234!"));
console.log(checkIDs("yes", "woo"));

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);
    return numOne + numTwo;
}

addNumbersWithOptional(1,2);
addNumbersWithOptional(1,2, "This is optional");

function optionalFun(first: string, last: string, middle?: string){
    if(middle !== undefined){
        console.log(first + middle + last);
    } else {
        console.log(first + last);
    }
}

optionalFun('ginger', 'alford', 'helen')
optionalFun('chris', 'butcher')