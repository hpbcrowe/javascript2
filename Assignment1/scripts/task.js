/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named 
//add that takes two arguments, number1 and number2


function add (number1, number2) {
// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2; 
}

// Step 3: Step 3: Using function declaration, define another function named 
    //addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2.

document.getElementById("addNumbers").onclick = addNumbers;

function addNumbers () {
    let addend1 = parseFloat(document.querySelector('#addend1').value);
    let addend2 = parseFloat(document.querySelector('#addend2').value);
// Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
document.getElementById("sum").value = add(addend1, addend2);
    
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers
// that calls the addNumbers function


// Step 6: Using function expressions, repeat Steps 1-5 with new functions named
// subtract and subtractNumbers and HTML form controls with IDs of
// minuend, subtrahend, difference and subtractNumbers
const subtract = function(number1, number2) {
    return number1 - number2;
}



const subtractNumbers = function() {
    let minuend = parseFloat(document.querySelector('#minuend').value);
    let subtrahend = parseFloat(document.querySelector('#subtrahend').value); 
    document.getElementById("difference").value = subtract(minuend, subtrahend);

}
//had to change order 
document.getElementById("subtractNumbers").onclick = subtractNumbers;

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named
// multiply and mulitplyNumbers and HTML form controls with IDs of 
//factor1, factor2, product and multiplyNumbers

multiply = (number1, number2) => {
    return number1 * number2;
}

multiplyNumbers = () => {
    let factor1 = parseFloat(document.querySelector('#factor1').value);
    let factor2 = parseFloat(document.querySelector('#factor2').value); 
    document.getElementById("product").value = multiply(factor1, factor2);
}
document.getElementById("multiplyNumbers").onclick = multiplyNumbers;

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with
// new functions named divide and divideNumbers and HTML form controls with IDs of
// dividend, divisor, quotient and divideNumbers
divide = (number1, number2) => {
    return number1 / number2;
}

divideNumbers = () => {
    let dividend = parseFloat(document.querySelector('#dividend').value);
    let divisor = parseFloat(document.querySelector('#divisor').value); 
    document.getElementById("quotient").value = divide(dividend, divisor);
}
document.getElementById("divideNumbers").onclick = divideNumbers;

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let today = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() 
//method/function and assign it to the variable declared in Step 2

currentYear = today.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
     22, 23, 24, 25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

document.getElementById("array").innerHTML = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable
//and assign the reult to the HTML element with an ID of "odds"
// ( hint: % (modulus operartor) )
//Got help from 
//https://medium.com/front-end-weekly/understand-filter-in-javascript-6a3efe87173e

let oddArray = numbers.filter( number => number%2 );
document.getElementById("odds").innerHTML = oddArray;

// Step 4: Use the filter array method to find all of the even numbers of the array variable
// and assign the result to the HTML element with an ID of "evens"

let evenArray = numbers.filter( number => number%2 == 0 );
document.getElementById("evens").innerHTML = evenArray;

// Step 5: Use the reduce array method to sum the array variable elements and assign
// the result to the HTML element with an ID of "sumOfArray"
//const arr = [1, 2, 3, 4];
// const reducer = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));
//Got this from https://www.delftstack.com/howto/javascript/javascript-sum-of-array/

//sum of source array
const sum = (accumulator, current) => accumulator + current;
document.getElementById("sumOfArray").innerHTML = numbers.reduce(sum); 

// Step 6: Use the map array method to multiple each element in the array variable by 2
// and assign the result to the HTML element with an ID of "multiplied"
// got help from https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/

//source array times two

let multiplied = numbers.map(function(element) {
    return element * 2;
});
document.getElementById("multiplied").innerHTML = multiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after
// multiplying each element by two.  Assign the result to the HTML element with an ID
// of "sumOfMultiplied",


let total = numbers.map(function(element) {
    return element * 2;
});

const totals = (accumulator, current) => accumulator + current;


document.getElementById("sumOfMultiplied").innerHTML = total.reduce(totals);