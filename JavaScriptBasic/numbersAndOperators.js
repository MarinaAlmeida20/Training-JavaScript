let myInt = 5;
let myFloat = 6.667;

myInt;
console.log(myInt);
myFloat;
console.log(myFloat);

typeof myInt; // number
console.log(typeof myInt); // number
typeof myFloat; // number
console.log(typeof myFloat); // number

// toFixed()
let twoDecimal = myFloat.toFixed(2);
console.log(twoDecimal); // 6.67

// Converting to number data types
let myNumber = '74';
myNumber + 3;
console.log(myNumber + 3); // 743

Number(myNumber) + 3;
console.log(Number(myNumber) + 3); // 77

