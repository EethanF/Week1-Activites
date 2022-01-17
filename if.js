// //

// let music = "asdasd";
// if (music == "classical") {   //initial condition 
//        console.log("Oh no, it's that classical music again");
// }
// else if (music == "no music") {
//        console.log("Where's the music?")
// }
// else {  //Default condtion
//        console.log("I love this music!");
// };

// let Num = 2;

// if (Num == 1) {
//     console.log("Your number is 1");
// }
// else {
//     console.log(`${Num}`)
// };

// //  === is strictly equal to so data type matters == is just equal too so data type does not matter

// // && is and both have to be true

// // || is or


// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny"){
//     console.log("check again")
// }
// else if (place == "Manc" && weather == "Cloudy"){
//     console.log("correct")
// };

// //so if 1 = 1 AND 2 = 2 OR 5 = 5 AND  6 = 6 return true

// if ((1 == 1 && 2 == 2) || (5 == 5 && 6 == 6)) {
//     console.log("True")
// }
// else{
//     console.log("False")
// };


// //Switch statements

// let car = ("Ford");


// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("your car is American");
//         break;
//     case "Citreon":
//     case "Peugeot":
//         console.log("your car is french");
//         break;
//     default:
//         console.log("your car sucks");
// }

// const grade = 50;

// if (grade >= 70){
//     console.log("Distinction")
// }
// else if (grade >= 60){
//     console.log("Merit")
// }
// else if (grade >= 50){
//     console.log("Pass")
// }
// else {
//     console.log("Failed")
// };

// switch(true){
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }

// //Age
// let age = 18;

// if (age >= 18){
//     console.log("Yes I can serve you");
// }
// else if (age <= 17){
//     console.log("Sorry your to young");
// }
// else {
//     console.log("Speak up")
// }




//Activity 1

let password = "asdfasdf";

if (password.length < 8) {
    console.log("Password is to short")
}
else {
    console.log(password)
}

//Activity 2

let num = 19;

if ((num % 3 == 0) || (num % 5 == 0)) {
    console.log("Your number is divisable by 5 or 3")
}
else {
    console.log("Your number is not divisable by 5 or 3")
}

//Activity 3

if ((num % 3 == 0) && (num % 5 == 0)){
    console.log("fizz buzz")
}
else if (num % 3 == 0) {
    console.log("fizz");
}
else if (num % 5 == 0) {
    console.log("buzz");
}

else {
    console.log(num);
}

//Activity 4


let num = 20202;

let numStr = num.toString()

let numReverse = numStr.split("").reverse().join("");

if (numStr === numReverse) {
    console.log("your number is a palindrome");
} 
else {
    console.log("your number is not a palindrome");
}


//Activity 5
let today = new Date();

let time = today.getHours();

let placeOfWork = "work";

let townOfHome = "home";

if (time >= 9 && time < 17){
    console.log(`I'm in ${placeOfWork}`);
}
else if ((time >= 17) && (time) <= 18 || (time >= 8) && (time <= 9)){
    console.log(`I'm commuting`);
}
else {
    console.log(`I'm at ${townOfHome}`);
}

//Activity 6

let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let newStr = (str.lastIndexOf("i"));

console.log(`${newStr}`);




//activity 7

let word = "sad";


if (word.charAt(0) == word.charAt(word. length - 1)){
    console.log("true")
}
else {
    console.log("false")
}

//Activity 8

let num1 = 9;
let num2 = 13;
if (num1 + num2 % 2 == 0) {
    console.log (num1 + num2)
}
else {
    console.log (num1 * num2);
} 


