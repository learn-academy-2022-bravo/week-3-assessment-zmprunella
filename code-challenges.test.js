// ASSESSMENT 3: Coding Practical Questions with Jest

const { it, expect } = require("@jest/globals");
const { describe, array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------

// 1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.


// program to generate fibonacci series up to n terms

// take input from the user

// ReferenceError: number is not defined

const fibonacci = (numer) =>{
    for (let i = 2; i <= number; i++) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
   return (n1);
}
}
console.log(fibonacci(6));
console.log(fibonacci(10));


// a) Create a test with expect statements for each of the variables provided.

describe("fibonacci", () => {
    it(" takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () =>{
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// ReferenceError: fibonacci is not defined

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const fibonacci = (numer) =>{
    for (let i = 2; i <= number; i++) {
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
   return (n1);
}
}
console.log(fibonacci(6));
console.log(fibonacci(10));


describe("fibonacci", () => {
    it(" takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () =>{
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// 1. Create a function

const numberArray (){
    return 
}

// 2. Create a function that takes in an array

const numberArray = ["1", "2", "3", "4", "5"]{
    return 
}

// 3. Create a function that takes in an array and returns a new array of only odd numbers

const numberArray = ["1", "2", "3", "4", "5"]

const odds = numberArray.filter(number => {
    return number % 2 !== 0;
  });

console.log(odds)

// 4. Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


const numberArray = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const odds = numberArray.filter(number => {
    if( typeof(number)=== "number"){
        return number
    } 
})
console.log(odds)

// Expected output: [-9, 7, 9, 199]

// a) Create a test with expect statements for each of the variables provided.

// use "Describe" "it" and "expect" to write out jest test format

// const numberArray = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const odds = numberArray.filter(number => {
    if( typeof(number)=== "number"){
        return number
    } 
})
console.log(odds)

describe("isNumberOdd", () => {
    it(" returns this number is odd or this number is not odd", () => {
        expect(isNumberOdd("yes")).toEqual("odd number")
        expect(isNumberOdd("no")).toEqual("not odd number")
    })
})

// FAIL  ./code-challenges.test.js
// ● Test suite failed to run

//   Your test suite must contain at least one test.

// const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

// const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// const numberArray = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

const odds = numberArray.filter(number => {
    if( typeof(number)=== "number"){
        return number
    } 
})
console.log(odds)

describe("numberArray", () => {
    it(" returns this number is odd or this number is not odd", () => {
        expect(isNumberOdd("yes")).toEqual("odd number")
        expect(isNumberOdd("no")).toEqual("not odd number")
    })
})

// connect jest format to function above to make test pass

// Having a hard time getting the test to read and connect to the funcion.






// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


// Create a function that takes in an array

// Split the array into individual numbers

// add all the numbers together

// creat a new array with added numbers

// repeat the same process for the new array

// Log array 

// const numbersToAdd1 = [2, 4, 45, 9]

const addACC = () => {
    return (numbersToAdd1.split).add = newArray
    return (newArray.split ).add
}
console.log(numbersToAdd1)

//  ReferenceError: Cannot access 'numbersToAdd1' before initialization

// Not sure why node cannot access numberstoAdd1


// a) Create a test with expect statements for each of the variables provided.

// Fill out "Describe", "it" and "expect" statments with correct wording to connect to previous function.

// Run test to fail 

describe("numbersToAdd1", () => {
  it("returns numbers added up based on input", () => {
    expect(addArrayNumbers("yes")).toEqual("added up numbers")
  })
})



const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

const addACC = () => {
    return (numbersToAdd1.split).add = newArray
    return (newArray.split ).add
}
console.log(numbersToAdd1)


describe("numbersToAdd1", () => {
    it("returns numbers added up based on input", () => {
      expect(addArrayNumbers("yes")).toEqual("added up numbers")
    })
  })


  // FAIL  ./code-challenges.test.js
//   ● Test suite failed to run
// Your test suite must contain at least one test.

// Not sure why my code isn't being read by the yarn jest