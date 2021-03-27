var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
//or declare without initializing
var phoneNumber;
var email;
//or typescript can do implicit typing
var greeting = "Hello";
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
//# sourceMappingURL=01-types.js.map