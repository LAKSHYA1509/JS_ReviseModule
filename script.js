// var, let, const - line-by-line comparison

// variable in es5 (Global existence rahegi poore code block mein )
var declare;
var declareAndInitialize = 12;

// let doesn't let you redeclaration but similar to var in other tasks

// const is like final in java
// Resassignment's done in both let and var, Redeclaration is done in var only.


// Temporal Dead Zone (TDZ) - It is the period during script execution when a variable declared with let or const is in scope but cannot be accessed because it has not yet been initialized.

// Isse already pata hai ki a aage hai but initialize nhi kar paa rha usse, Isliye print nhi kar paa rha
//  console.log(a);
//  let a = 12;

// Hoisting -> ek variable ko jab js mein banate hai to wo variable do hisso mein toot jaata hai aur uska declare part upar chala jaata hai aur uska initilazation part neeche reh jaata hai


// ---------------------------------------------------------
// primitives, references -> inko copy karne par real copy nhi milegi but aapko reference milegi parent ki arrays, objects, function

// symbol -> unique immutable value
// bigint -> addition of numbers bigger than Number.MAX_SAFE_INTEGER using n 

// Dynamic typing -> js mein static typing nahi hai and yaha par hai dynamic typing jiska matlab hai aap data ko change kar sakte hai kyuki yaha par dynamic data types hai

// + to sirf concat kar sakta hai sirf isliye string and number ka aapas mein khela hobe

// NaN is a failed number operation 


// ---------------------------------------------------------

// instanceof is basically child coming from a generation
// let abc = 12
// console.log(abc instanceof Number)

// --------------------------------------------------------

// Rock Paper Scissors -> I need simple 3 variables and user choice for it

/*

const user = prompt("Enter only in R, P, S")
const choices = ['R', 'P', 'S']
const robot = choices[Math.floor(Math.random()*choices.length)]
function rps (user, robot) {
    if(user == robot) {
        console.log("Tie");
    }
    else if(
        (user == 'R' && robot == 'S') || 
        (user == 'P' && robot == 'R') || 
        (user == 'S' && robot == 'P')
    ) {
        console.log('You win');
    }
    else {
        console.log("Robot wins");
    }
}   

rps(user, robot)

*/

// --------------------------------------------------------

// For loop questions

// let val = prompt("all right you son of a bi...")
// if (val < 1) console.log("number smaller")

//     for(let i = 0; i <= val; i++) {
//         if(i%2==0) console.log(i + " is even")
//         else console.log(i + " is odd")
//     }


// --------------------------------------------------------

// Functions

// Ways to Make Functions then:-
// 1. function abc() {}
// 2. let fnc = function () {} is called function expression

// --------------------------------------------------------
// fat arrow fnc
// let fnc = () => {console.log()}

function dance(animal) {
    console.log(`${animal} is in animal kingdom`)
}

dance("human")
dance("dog")