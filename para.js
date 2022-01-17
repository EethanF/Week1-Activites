//exercise 1


const para = (one, two) => {
    return one ** two;

}

console.log(para(2,3));

//example [] is for arrays
//template literals

let example = 12345;

console.log("hello" + example);
console.log("hello");
console.log("hello");

let exampleArray = [
    "item 1",
    "item 2",
    "item 3"
];


console.log(exampleArray.length); //this oen returns length of array so it is 3 items long 
console.log(exampleArray[1].length); //.length returns amount of characters on array or specific array
console.log(exampleArray[1]);
exampleArray[1] = "something new";
console.log(exampleArray[1]);

//.push

let coffeeOrder = [
    "alex - c",
    "ben - c",
    "charlie - c"
];

console.log(coffeeOrder);

coffeeOrder.push("ethan - c")  // pushes this string to the end creating a new part of the array

console.log(coffeeOrder);

coffeeOrder.pop();           //removes item from end of array

console.log(coffeeOrder[0], coffeeOrder[2]); //select items from and array

//more methods .map() .shift() .slice() .splice() .unshift()

let favWeb = [
    "google",
    "youtube",
    "reddit"
];

favWeb.push("netflix", "disney+");

console.log(favWeb);

favWeb.pop();

console.log(favWeb);

//research

// const newArr = numbers.map(function) makes a new array with results of calling a provided function on every element in the array

const numbers =  [65, 21, 23, 12];

const newNum = numbers.map(x => x * 2);

console.log(newNum);

//.shift() takes first element from the array 

const n = [2, 3, 4];

console.log(n);

const ele = n.shift();

console.log(ele); //prints the element taken from array

//.unshift() adds one or more elements to the beginning of an array and returns the new length of the array.

const n2 = [1, 2, 3];

console.log(n2.unshift(4, 5)); //adds and returns new length of the array

console.log(n2); // shows new array

//.splice(); method changes the contents of an array by removing or replacing existing elements and/or adding new elements

const time = ["1", "2", "3", "4"];
                 // the second number is the element you want to replace
time.splice (1, 1, "3"); // inserts new time into the first index so second place in index use 0 for element

console.log(time);

//returns a portion of an array

const names = ["ethan", "dave", "john", "carl"];

//console.log(names.splice(1, 4)); //takes indexes 1 to 4 and prints them do ethan is not included

//console.log(names.splice(-2)); //takes 2 from end

console.log(names.splice(-1)); //takes 1 from end removes from array also


let sandwich = [
    "ham",
    "cheese",
    "lettuce",
    "tomato",
    "chicken"
];
sandwich.unshift(0, 0, "add");


console.log(sandwich);

//let subSand = (t1, t2, t3, t4, t5) => {}