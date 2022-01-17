let s1 = "x"
let s2 = "x"
let s3 = "x"
let s4 = "o"
let s5 = "o"
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

// arrays
let grid = [[s1, s2, s3], 
            [s4, s5, s6], 
            [s7, s8, s9]]; //multi dimensional array

// console.log(grid[0][0]);  //first number is which array you are choosing so 0 = s1, s2, s3 array (the first one)
// console.log(grid[0][1]);  //second number is which index of the array ou are choosing so s2 out of the first array
// console.log(grid[0][2]);
              
if (grid[0][2] == grid[0][1] && grid[0][2] == grid[0][0]){
    console.log(`3 ${s1}'s on the top row. x wins!`)
}



//functions - lets us re-use code
let grind = true;

const grindBeans = () => {  // () => makes this a function, function is stored in memory
    if (grind){
        console.log(grind);
        grind = false;
    }
    else{
        console.log(grind); 
        grind = true;
    }
}
grindBeans(); // executes code/function (calling function)
grindBeans();
grindBeans();
grindBeans();


// parameters
let accNumber = 50449922;
let more = 100;
let balance = 1000;


const cashWithdrawal = (amount, accnum) =>{  //variables getting declared at this time so we're creating them here
    console.log(`Withdrawing ${amount} from account ${accnum}`);
    let newBalance = balance - amount;
    console.log(`Your balance is now ${newBalance}`);
}

cashWithdrawal(more, accNumber); //these will go to amount, accnum where they are declared inputting value to function


//Return

const addUp = (num1, num2) => {
    return num1 + num2;
}

let myNumber = addUp(7, 3) + 30; // function is used to return a value
console.log(myNumber);

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
}
const getFarenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32; // calling the top function to do calculations for us
}                                              // celsius + 32 then goes to top func to be calculated
//celsius value is inputted here
console.log(`The temperature is ${getFarenheit(15)}°F`)
