let v = "All Around The World" /* A variable is used to store data */


console.log(v.charAt(7).toLocaleUpperCase());    

/*takes the seventh letter and makes it uppercase white space does not count will only count letters*/

console.log("All around the world".charAt(7).toLocaleUpperCase());

/*arrays*/

let array = ["A", "B", "C", "D"];

console.log(array[0]); /*0 counts as first character here*/

const exampleConst = 10; /*with constants the data type cannot be changed*/

/*data types-
null - nothing
string - text

Operators-
 - = subtract
 + = pluss/addition
 * = multiply
 ** = To the power of
 / = divide
 % = Gives remainder when dividing
 *= = Multiply the value of itself
 += = Add the value of itself
 -= Subtract the value of itself
*/


let randomNum = Math.random() * 10;

randomNum += 10;
/*is equal to */
randomNum = randomNum + 10;

let favDrink = "Coffee"

console.log("My favourite drink is " + favDrink.toLocaleLowerCase())

console.log(`My favourite drink is ${favDrink.toLocaleLowerCase()}.`);



/*acitvity 1*/
let myName = "Ethan";
let age = "22";
let colour = "Red";


console.log(`My name is ${myName}, my favourite colour is ${colour.toLowerCase()} and I'm ${age} years old.`);

/*Activity 2*/
let dinner = "Rice and chicken"
let lunch = "Sandwich";
let breakfast = "Cereal";


console.log(`For breakfast I had ${breakfast.toLowerCase()}, for lunch I'm having ${lunch.toLowerCase()} and for dinner I'm having ${dinner.toLowerCase()}.`)

//Activity 3
console.log('today is January the 11th and my birthday is on the 20th of June.');

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds (how many milliseconds are in a day)

const firstDate = new Date(2022, 1, 11, 13, 43); // year/month/day/hours/minutes/seconds

const secondDate = new Date(2022, 6, 20, 0);

const diffDays = Math.ceil(Math.abs((firstDate - secondDate) / oneDay)); // first date minus second date divided by one day. Math.abs gives an absolute number so disregards whether the number is positive or negative

console.log(`There are ${diffDays} days between today and my birthday.`);

/*Activity 4*/
let s1 = "x"
let s2 = "o"
let s3 = " "
let s4 = "x"
let s5 = "x"
let s6 = " "
let s7 = "o"
let s8 = " "
let s9 = " "

console.log("      |      |      ")
console.log("   "+s1+"  |   "+s2+"  |   "+s3+"   ")
console.log("      |      |      ")
console.log("--------------------")
console.log("      |      |      ")
console.log("   "+s4+"  |   "+s5+"  |   "+s6+"   ")
console.log("      |      |      ")
console.log("--------------------")
console.log("      |      |      ")
console.log("   "+s7+"  |   "+s8+"  |   "+s9+"   ")
console.log("      |      |      ")



