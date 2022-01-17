/*let example = "ethan";

example.length;     Length is a property of the string variable we have declared. So should print length of example*/

let Sname = "Ethan";   /*variable*/

console.log(Sname);    /*telling console to log data given*/

console.log(Sname.length); /* JS executes code line by line */

/* methods */

console.log(
    Sname.toLocaleLowerCase(), Sname.toLocaleUpperCase() /* makes variable lower case */
);


/* Libraries give us access to features we don't have the code to our selves e.g. the math library */

console.log(Math.random()); /* random number between >0 and <1 to make it between 1 on and *10 */
console.log(Math.random() * 10);

/* function to round up to nearest integer */

console.log(
    Math.ceil(Math.random() * 10)


);
/* function to round down to the nearest integer randomNum makes it an integer also*/
console.log(
    Math.floor(Math.random() * 10)

);


/* Activity */
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








let grid =     `   
                |  |
                |  |
                |  |
            ------------
                |  |
                |  |
                |  |
            ------------
                |  |
                |  |
                |  |`;


console.log(grid);

for (let x = 0; x < 3; x++) {
    for (let i = 0; i < 3; i++) {
        console.log('   |   |   '); 
    }
    if (x === 0 || x === 1) {
        console.log('------------');
    }
    
}