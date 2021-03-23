// STRICT MODE
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;
 
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');
*/

//FUNCTIONS

function logger() {
   console.log('My name is Humoyun');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const apppleOrangeJuice = fruitProcessor(2, 4);
console.log(apppleOrangeJuice);