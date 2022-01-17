// let balance = 1000;
// let amount = 999;
// let accI = 5449921;







// const cashWith = (amount, accI) => {
    
    
//     if (balance <= 0){
//         console.log("You have no money to withdraw");
//     } 
//     else if (amount > balance) {
//         console.log("Insufficient funds");
//     }
//     else {
//         let nBalance = balance - amount;
//         console.log(`Transaction succesfull, you now have £${nBalance} left.`);
//         }
// }

// cashWith(amount, accI);
// i = 0

// while (i < 6){
    
//     rNum = (Math.floor(Math.random() * 29 + 1));
//     i++;
//     console.log(rNum)
//     if (rNum % 7 == 0){
//         console.log(rNum + " is divisible by 7");
//     }
//     else{
//         console.log(rNum + " is not divisible by 7");
//     }


// }

//activity 7

// i = 0;

// while (i < 20){
//     i++;
//     rNum = i;
//     console.log(i);
//     if ((rNum % 1 == 1) && (rNum % i == 1)){
//         console.log(rNum + " is a prime number");
//     }
//     else{
//         console.log(rNum + " is not a prime number");
//     }

// }


// i = 0

// while (i < 20){
//     i++;
//     console.log(i)
//     if (i % 2 == 0){
//         console.log( i + " is not a prime");
//     }
//     else if (i / 3 > 1 && i % 3){
//         console.log(i + " is not a prime");
//     }
//     else if ((i / i == 1) && (i / 1 == i)){
//         console.log(i + " is prime");
//     }
    
//     else
//     {
//         console.log(i + " is not a prime");
//     }


// }
// // function isPrime(num) {
// //     for (let i = 2; i * i <= num; i++)
// //         if (num % i === 0)
// //           return false; 
// //     return num > 1;
// // }

// // console.log(isPrime(3));
// (i%2===0) || (i%3===0)

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
        return `Hello, my name is ${person.name}`
    }

};
console.log(person.sayHi());



const pet = {
    pName: "Jenny",
    pType: "whippet",
    pColour: "grey",
    food: [
       "Dog food",
       "My food" 
    ],
    drink: [
        "water",
        "out of the pond"
    ],
    pEat(){
        return `${pet.pName} is eating ${pet.food[0]}`
    },
    pDrink(){
        return `${pet.pName} is drinking ${pet.drink[1]}`
    }
}

console.log(pet.pDrink());
console.log(pet.pEat());

let total = 0 ;

const coffeeShop = {
    branch: "Liverpool branch",
    drinks: [
        ["coke", "£1,50", 1.50,],
        ["coffee", "£3", 3.00]
    ],
    food: [
        ["sandwhich", "£3", 3,00],
        ["sausage role", "£2", 2.00]
    ],
    drinksOrdered: function(cafeDrink){
        for (let i = 0; i < this.drinks.length; i++){
            if (cafeDrink == this.drinks[i][0]){
                total = total + this.drinks[i][2]
                return `Your order is: ${cafeDrink}.`;

            }
            else{
                console.log("you've ordered nothing");
            }
        }
    }
}

coffeeShop.drinksOrdered("coffee");
// (cafeFood == coffeeShop.food[i])
// and ${cafeFood}
// total = coffeeShop.drinks[i][2] + coffeeShop.food[i][2];
// console.log(`Your order is: ${cafeDrink} and ${cafeFood}.`)