//Snippet A
let x = 10;
console.log(x);
//Snippet B
const y = 10;
console.log(y);
//Answers
//1. Snippet A prints 10 because x is declared before use.
//2. Snippet B prints 10 because y is initialized before use.
//3. TDZ is the time between entering a block and the initialization of a let/const variable.
//4. For y, TDZ starts at the beginning of the block and ends at 'const y = 10;'.
//5. var is avoided because it is function-scoped, hoisted with undefined, and can lead to bugs.let and const are block-scoped and safer.

