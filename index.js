// Number functions 
// This set of functions will give you a further introduction to key features in JavaScript. Use Replit to code your solutions.


// 1. Sum of two numbers 
// Write a function which accepts two numbers as arguments. The function should return the sum of the two numbers.

// For example:

// console.log(addTwoNumbers(4, 6));
// // Outputs to the console: 10

// let result = addTwoNumbers(5, 15);
// console.log(result);
// // Outputs to the console: 20

// let newNum = 12;

// console.log(addTwoNumbers(result, newNum));
// // Outputs to the console: 32;

function addTwoNumbers(num1, num2) {
sum = num1 + num2
{
return sum;
}
}
console.log(addTwoNumbers(4, 6));

let result = addTwoNumbers(5,15);
console.log(result);

let newNum = 12;
console.log(addTwoNumbers(result, newNum));



// 2. Add and multiply 
// Write a function that accepts four arguments, each will be a number. The function should add the first two numbers together; add the third and fourth numbers; and return the result of multiplying both sums together.

// Examples:

// let result = addAndMultiply(2,3,4,5);

// // Logging result outputs 45

// console.log(addAndMultiply(1,1,1,1);

// // Logs 4

function addAndMultiply(num1,num2,num3,num4) {
let sum1 = num1 + num2;
let sum2 = num3 + num4;
return sum1 * sum2;
}
console.log(addAndMultiply(2,3,4,5));
console.log(addAndMultiply(1,1,1,1));


// 3. Return larger 
// Write a function which accepts two numbers. The function should return the larger number.

// Examples:

// console.log(checkLarger(1, 2));
// // Outputs 2

//checkLarger(44, 33);
// // Returns 44

function checkLarger(num1,num2) {
if(num1 < num2) {
return num2; 
} else if (num1 > num2) {
  return num1;
} else {
  return 'they are equal'
  }
}
console.log(checkLarger(1, 2));
console.log(checkLarger(44, 33));
console.log(checkLarger(12, 12));


// 4. Sum of elements 
// Write a function which accepts an array as an argument. Each item in the array will be a number. The function should add all the numbers in the array and return the result.

// let total = addArrNums([4, 7, 12, 11]);

// console.log(total);
// // Logs 34

// total = addArrNums([4, 5, 6, 7, 8, 9]);

// console.log(total);
// // Logs 39

// console.log(total - total);
// // Logs 0

function addArrNums() {
let total = addArrNums([4, 7, 12, 11]);
let sum = 0
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
return sum;
}




// 5. Squaring a number 
// Write a function which accepts one input, a number.

// The function should return the square of that number.

//with math.pow (but I found that a single number argument returns NaN)
function squareThis(num) {
  let square = Math.pow(num);
  return square;
}
console.log(squareThis(2));

//OR with ES6 - Exponentiation Method

function squareNumber(num) {
  return num ** 2;
}
console.log(squareNumber(2));
console.log(squareNumber(12));
console.log(squareNumber(3));
console.log(squareNumber(4));
console.log(squareNumber(5));

// 6. Odd or Even 
// Write a function which accepts a number as an argument.

// The function should determine whether the number is even or odd.

// Return ‘Even’ or ‘Odd’ based on the parity of the number.



// 7. Sum of positive 
// Write a function which accepts an array as an argument.

// The function should add up all the positive numbers from the array and return the sum.

// If there are no positive numbers to sum, return zero