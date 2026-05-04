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

