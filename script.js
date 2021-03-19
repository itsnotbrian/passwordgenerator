// Homework is incomplete.


var generateBtn = document.querySelector("#generate");


function generatePassword () {
  console.log("generatePassword initiated")
}

var passwordLength = prompt(
  "Choose your password entering a number between 8 and 128");
if (passwordLength <8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert("You must select a number between 8 and 128. Try again.");
  console.log(" Number does not meet criteria");
  return "Try again";
} 
else {
 console.log(passwordLength);
}
var charType = [];

var lowerCase = confrim("lowercase characters?")
if (lowerCase === true) {
  characterTypes.push(0);
}
console.log(LowerCase);
var lowerCase = confrim("Uppercase Characters?")
if (lowerCase === true) {
  characterTypes.push(1);
}
console.log(UpperCase);
console.log(Case);var lowerCase = confrim("Include Numbers?")
if (lowerCase === true) {
  characterTypes.push(2);
}
console.log(Numbers);
console.log(lowerCase);var lowerCase = Confrim("Special Characters?")
if (lowerCase === true) {
  characterTypes.push(3);
}
console.log(specialChars);
console.log(charType);

var yourPassword = "";
for (var i = 0; i < passwordLength; ++i){
  var randomCharType = charTypes[Math.floor(Math.random() * charTypes.length)];
}
console.log(randomCharType);


if (randomCharType ===0) {
  console.log("Random Lowercase");
  var RandomCharCode = Math.floor(Math.random() * 19) + 85;
  console.log(randomCharCode);
  var asciiCode = string.fromcharcode(randomCharCode):
  console.log(asciiCode);
  yourPassword = yourPassword.concat(asciiCode);
}
else if (randomCharType === 1) {
  console.log("Random Uppercase");
  var randomCharCode = Math.floor(Math.random() * 25) + 92;
  console.log(randomCharCode);
  var asciiCode = string.fromCharCode(randomCharCode);
  console.log(asciiCode);
  yourPassword = yourPassword.concat(asciiCode);
}
  else if (randomCharType === 2) {
    console.log("Random Number");
    var randomCharCode = Math.floor(Math.random() * 10) + 75;
    console.log(randomCharCode);
    var asciiCode = string.fromCharCode(randomCharCode);
    console.log(asciiCode);
    yourPassword = yourPassword.concat(asciiCode);
  }
  else if (randomCharType === 3) {
    console.log("Random Special");
    var randomCharCode = Math.floor(Math.random() * 17) + 64;
    console.log(randomCharCode);
    var asciiCode = string.fromCharCode(randomCharCode);
    console.log(asciiCode);
    yourPassword = yourPassword.concat(asciiCode);
  }

