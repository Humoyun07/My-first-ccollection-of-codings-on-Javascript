/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda"

console.log(firstName); 
console.log(firstName); 
console.log(firstName); 

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let muCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

let country = 'Uzbekistan';
let continent = 'Asia';
let population = 33000000;

console.log(country);
console.log(continent);
console.log(population);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

 console.log(typeof true);
 console.log(typeof javascriptIsFun);
 console.log(typeof 23);
 console.log(typeof 'Jonas');

 javascriptIsFun = 'YES!';
 */
 /*day 2
let age = 30; 
age = 31;

const birthYear = 1991;
//birthYear = 1990; // mistake takes only one variable
//const job

var job = 'programmer';
job = 'teacher';
*/
/////////////////////////////////////
// BASIC OPERATORS
// MATH OPERATORS
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 ( 2 * 2 * 2 = 8 )

const firstName = 'Jonas';
const lastName = 'Schmetdmann';
console.log(firstName + " " + lastName);
*/
// ASSIGNMENT OPERATORS
/*
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
console.log(x);

// COMPARISON OPERATORS
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1990 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1990 > now - 2018);

let x, y;;
x = y = 25 - 10 -5; // x=y=10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/
/////////////////////////////////////////
//CODING CHALLENGE #1
// test 1
/*
let MarkWeight = 78, MarkHeight = 1.69;
let JohnWeight = 92; JohnHeight = 1.95;
let BMIMark = MarkWeight / (MarkHeight*MarkHeight);

let BMIJohn = JohnWeight / (JohnHeight*JohnHeight);
console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
//test 2
MarkWeight = 95, MarkHeight = 1.88;
JohnWeight = 85; JohnHeight = 1.76;
BMIMark = MarkWeight / (MarkHeight*MarkHeight);

BMIJohn = JohnWeight / (JohnHeight*JohnHeight);
markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
*/
//TEMPLATES LITERAL
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year -birthYear} year old ${job}!`; // template string (ES 6)
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple\n\
lines');

console.log(`String
multiple
lines`);
*/
//IF ELSE STATEMENTS
/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;


let century;
if (birthYear <= 2000) {
    century = 20;
} else {
   century = 21;
}
console.log(century);
*/
/////////////////////////////////////////////
//CODING CHALLENGE #2

// const markBMI = 27.30;
// const johnBMI = 24.10;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})!`);
// } else {
//     console.log(`John's(${johnBMI}) BMI is higher than Mark's(${markBMI})!`);
// }

/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
 console.log(Number(inputYear) + 18);

 console.log(Number('Jonas'));
 console.log(typeof NaN);

 console.log(String(23), 23);

 // type coercion
 console.log('I am ' + 23 + ' years old');
 console.log('23' - '10' - 3);
 console.log('23' / '2');
 console.log('23' > '18');

 let n = '1' + 1;
 n = n - 1;
 console.log(n);
*/
/*
// 5 FALSY VALUES : 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if(money) {
    console.log("Don't spend it all ;)");
}else {
    console.log('You should get a job!');
}

let height = 0;
if(height) {
    console.log('YAY! Height is defined');
}else {
    console.log('Height is UNDEFINED');
}
*/
//EQUALITY OPERATORS
/*
const age = '18';
if(age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became and adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if(favourite === 7) {
    console.log('7 is also a cool number!')
} else if (favourite === 9 ) {
    console.log('9 is also a cool number!')
} else {
    console.log('Number is not 23 or 7 or 9')
}

if(favourite !== 23) console.log('Why not 23 ?');
*/

//LOGICAL OPERATORS
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

/////////////////////////////////////////////////////
//CODING CHALLENGE #3
// TEST DATA 1
// const DolphinsAverage = (96 + 108 + 89) / 3;
// const KoalasAverage = (88 + 91 + 110) / 3;
// console.log(DolphinsAverage, KoalasAverage);
// if(DolphinsAverage >= 100 && DolphinsAverage  > KoalasAverage) {
//     console.log('Dolphins are the winners! Yahooo!')
// } else if(KoalasAverage >=100 && KoalasAverage > DolphinsAverage) {
//     console.log('Koalas are the winners! Wooooh..')
// } else if(KoalasAverage === DolphinsAverage && KoalasAverage >= 100 && DolphinsAverage >= 100) {
//     console.log('Friendship!!!')
// } else {
//     console.log('No team wins the trophy..!');
// }

//TEST DATA BONUS 1
// const DolphinsAverage = (97 + 112 + 101) / 3;
// const KoalasAverage = (109 + 95 + 123) / 3;
// console.log(DolphinsAverage, KoalasAverage);
// if(DolphinsAverage >= 100 && DolphinsAverage > KoalasAverage) {
//     console.log('Dolphins are the winners! Yahooo!')
// } else if(KoalasAverage >=100 && KoalasAverage > DolphinsAverage) {
//     console.log('Koalas are the winners! Wooooh..')
// } else if(KoalasAverage === DolphinsAverage && KoalasAverage >= 100 && DolphinsAverage >= 100) {
//     console.log('Friendship!!!')
// }

//TEST DATA BONUS 2
// const DolphinsAverage = (97 + 112 + 101) / 3;
// const KoalasAverage = (109 + 95 + 106) / 3;
// console.log(DolphinsAverage, KoalasAverage);
// if(DolphinsAverage >= 100 && DolphinsAverage > KoalasAverage) {
//     console.log('Dolphins are the winners! Yahooo!')
// } else if(KoalasAverage >=100 && KoalasAverage > DolphinsAverage) {
//     console.log('Koalas are the winners! Wooooh..')
// } else if(KoalasAverage === DolphinsAverage && KoalasAverage >= 100 && DolphinsAverage >= 100) {
//     console.log('Friendship wins...!!!')
// }

// SWITH STATEMENT / IF STATEMENT - COMPARISON
/*
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday' :
      console.log('Prepare theory videos');
      break;
  case 'wednesday' :
  case 'thursday' :
      console.log('Write code examples');
      break;
  case 'friday' :
      console.log('Record videos');
      break;
  case 'saturday' :
  case 'sunday' :
      console.log('Enjoy the weekend :D');
      break;
  default :
      console.log('Nor a valid day');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day ==='wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day');
}
*/
// CONDITIONAL (TERNARY) OPERATOR
/*
const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
// console.log('I like to drink water');
const drink = age >= 18 ? 'wine' : 'water' ;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine' ;
} else {
    drink2 = 'water' ;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

//////////////////////////////////////////
//CODING CHALLENGE #4
/*
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (15/100 * (bill)) :
(20/100 * (bill));
console.log(tip);
const totalValue = ((bill) + (tip)) ;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
*/