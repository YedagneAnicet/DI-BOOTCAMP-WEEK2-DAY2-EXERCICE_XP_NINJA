/*Exercise 1 : Age Difference
Instruction
Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY */

let yearUser1 = prompt('Enter your year for born');
let yearUser2 = prompt("Enter year of born your friend");

if (yearUser1 < yearUser2) {
    let annee =((2*yearUser2) - yearUser1);
    console.log(`age of your friend is half your age in ${annee}`);
}else {
    let annee = 2 * yearUser1 - yearUser2;
    console.log(`your age is half the age of your friend in ${annee}`);
}


/* Exercise 2 : Zip Codes
Instruction
Harder exercise
Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

While working in a Post Office you must have the clients’ zip code in order to send them their letters.
Ask the client for their zip code and console.log “success” or “error” based on the following rules.
Zip codes consists of 5 numbers
Must only contain numbers
Must not contain any whitespace (spaces)
Must not be greater than 5 digits in length */

// First parts 
let codePostal = prompt("Please enter first zip code");

if (codePostal.length == 5 && isNaN(codePostal) == false ) {
    console.log(`Success, Thank your zip code : ${codePostal} is correct!`);
}else {
    console.log(`Error, Please enter a valid zip code`);
}

// Second parts 

let codePostalRegex = prompt("Please enter second zip code");

let regex = /^\d{5}$/;
let testPostal = codePostalRegex.match(regex);  

if (testPostal) {
    console.log(`Success, Thank your zip code : ${codePostalRegex} is correct!`);
}else {
    console.log(`Error, Please enter a valid zip code`);
}


/* Exercise 3 : Secret Word
Instruction
Harder exercise
Hint : Use Regular Expressions

Prompt the user for a word and save it to a variable.
Delete all the vowels of the word and console.log the result.
Bonus: Replace the vowels with another character and console.log the result */

let userReponse = prompt("Enter a word");
let reg = /[aeiou]/gi
const subst = " ";
let result = userReponse.replace(reg, subst);
console.log('Substitution result: ', result);
