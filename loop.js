// //for loops

// let favDrink = [
//     "coke",
//     "fanta",
//     "tonic",
//     "red bull"
// ];
//    //drinks = 0 
// for (let drinksIndex = 0; drinksIndex < favDrink.length; drinksIndex++) { // ++ adds 1 to value every time it runs
//     console.log(favDrink[drinksIndex]);
// }
// // repeats untill condition is met so when its not less then the length of the array. once index reaches 3 it stops cos it's the same length

// //using loops with if statements

// let multiplesTwo = [];

// for (let i = 0; i < 40; i++){
//     if(i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }

// console.log(`numbers divisible by 2 bwtween 0 and 40 are: ${multiplesTwo}`);


// //while loops

// //while (condition) {}
//         //do stuff

// let a = 0;

// while (a < favDrink.length) {
//     a++;
//     console.log(a);
// }   

// let age = 15;

// while (age <= 18){
//     console.log ("you're a child");
//     age++;
//     if (age = 18){
//         console.log("hurray! you're an adult now");
//         break;
//     }
// }

// let rNum = 0;

// while (rNum < 10){
//     console.log("asd");
//     rNum= (Math.round(Math.random()*20)); //goes through random numbers untill it finds one that is over 10
// }

// console.log(rNum);


// let cards = ["diamond", "spade", "heart", "club"];
// let currentCard = "club";

// while (currentCard != "spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random() * 4)];
// }

// console.log(currentCard);
////////////////////////////
/////////////////////////////
///////////////////////////
////////////////////////////

//activity 1

let favFilms = [
    "The exorcist 3",
    "Dune",
    "What we do in the shadows",
    "Starwars: revenge of the sith",
    "IDK"
]

for (let i = 5; i < 6; i++){
    favFilms.push("same");
    favFilms.push("soon");
    console.log(favFilms);
}

//activity 2

i = 0;

while (i < 6){
    i++;
    console.log(Math.ceil(Math.random()* 49 + 1))
}

//activity 3

for (let i = 9; i > -1; i--){
    console.log(i)
}

//acivity 4

let films = ["the exorcist 3", "dune", "ghost busters", "revenge of the sith"];

for (let i = 0; i < films.length; i++){
    console.log(films[i]);
}

const filmcheck = () =>{
    if (films[2] == "ghost busters") {
        console.log("yay ghost busters!");
    }
    else{
        console.log("boooo we want ghost busters!");
    }
}
filmcheck();


//activity 5


i = 0

while (i < 6){
    
    rNum = (Math.floor(Math.random() * 29 + 1));
    i++;
    console.log(rNum)
    if (rNum % 7 == 0){
        console.log(rNum + " is divisible by 7");
    }
    else{
        console.log(rNum + " is not divisible by 7");
    }


}


