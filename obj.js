// let drinks = ["Coke", "Sprite", "Orange Juice"];

// let price = [1, 1.5, 3];

// let cash = 2;

// const checkDrink = () => {
//     for (let i = 0; i < drinks.length; i++){
//         console.log(drinks[i]);
//     }

// }


// const balance = () => {
//     for (let i = 0; i < drinks.length; i++){
//         console.log(`${drinks}: £${price}`);
//     }
//     console.log(`your available balance is £${cash}`);
// }



// const costDrink = (drink) => {
//     if (cash >= price[drink]){
//         console.log (`enjoy your ${drinks[drink]}.`);
//     }
// }
// checkDrink();
// balance();
// costDrink("Coke");

let drinksCost = [["coke", "£1", 1, 2], ["sprite", "£2", 2, 1], ["orange juice", "£3", 3, 3]];

let balance = 2;

const checkDrink = () => {
    for (let i = 0; i < drinksCost.length; i++){  //cycles through
        console.log(`${drinksCost[i][0]} - ${drinksCost[i][1]}`);
    }
}
checkDrink();

let drink = (choice) => {
    for (let i = 0; i < drinksCost.length; i++) {
        if (choice == drinksCost[i][0]){
            if (drinksCost[i][3] == 0){
                return console.log("None left sorry");
            }
            else if (drinksCost[i][2] > balance){
                console.log(`You asked for the ${drinksCost[i][0]}`)
                console.log(`Sorry you don't have enough to get the ${drinksCost[i][0]}`);
            }
            else {
                balance = balance - drinksCost[i][2];
                console.log(`enjoy your ${drinksCost[i][0]}`);
                console.log(`You have £${balance} left`);
            }
        }
    }
}

drink("orange juice");


//Objects

//Objects are constainers that can store data and functions.
//we store data inside objects by using key-value pairs.
//use objects to isolate certain objects

let myName = "Ethan";



const person = {
    name : "Ethan",    //person.object so name ore age to access the object
    age: 20,
    looks: {
        eyeColour: "dark brown",   //object in an object to acess - person.looks.eyeColour
        hairColour: "black"  
    },
    hobbies: ["gaming",    //to access array in object person.hobbies[index]
    "table tennis",
    "eating food"],
    happy(){
        return "I'm happy today";
    },
    sandwich(){
        return "I'm sad today"
    },
    sayHi(){
        console.log(`Hello, my name is ${person.name}`)
    }

};
console.log(person.sayHi());

console.log(person.name);

function example(){
    console.log(person.name);
}
example();

console.log(person); // whole object can be outputted too

console.log(person.looks.eyeColour);

let offer = "none";
let time = 1200;


const cafe = {
    drinks: [
        "coffee",
        "fanta",
        "coke"
    ],
    bOffer: "free croissant with cofee",
    lOffer: "yummy in my tummy",
    dOffer: "Idk What do you want?"
}

if ( time < 1100){
    offer = cafe.bOffer;
    console.log(cafe.bOffer);
}
else if (time < 1500){
    offer = cafe.lOffer;
    console.log(cafe.lOffer);
}
else {
    console.log("we're closed");
}




const alarm = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up"
}

const whatDay= (day, time) => {

if (day == "saturday" || day == "sunday"){
    console.log(alarm.weekendAlarm);
}
else if (day != "saturday" || day != "sunday" && time == 700){
    console.log(time + "am")
    console.log(alarm.weekdayAlarm);
}
}


whatDay("wednesday", 700);

//Objects are mutable, which is a
//fancy way of saying they can be
//changed.
//cafe.biscuits = ["waffle", "shortbread"];
//cafe["biscuits"] = ["waffle", "shortbread"];


person.favSong = ["idk", "idk"]; //adds to the alarm object adding a list
console.log (person.favSong);


//functions within objects go up for reference

console.group(person.happy());


//activity1

