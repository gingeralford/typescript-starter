function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
//works fine
addNumbers(1, 2);
//NOPE
// addNumbers(1,2,3);
// addNumbers(1,2,3,"Foo");
function fullName(first, last) {
    console.log(first + " " + last);
}
fullName('Ginger', 'Alford');
function sayHello(name) {
    return name;
}
sayHello("ginger"); //OK!
// sayHello(1); //NOPE!
function checkIDs(username, password) {
    if (username === "elevenfiftyuser" && password === "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
}
console.log(checkIDs("elevenfiftyuser", "Letmein1234!"));
console.log(checkIDs("yes", "woo"));
function addNumbersWithOptional(numOne, numTwo, someString) {
}
//# sourceMappingURL=02-functions.js.map