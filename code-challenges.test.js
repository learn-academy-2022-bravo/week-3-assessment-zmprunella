// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it, expect } = require("@jest/globals");
// const { describe, array } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------

// 1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//Needed to do some research on what fibonacci actually means and try to relate that into a function.

// Fill in the correct locations of where "fibonacci" should be
// Use the question to fill out the "it" statment 

describe("fibonacci", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    // Example input: 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    // Example input: 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Test reports as follows
// Fails: ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.

// Fill in the array with #s 1 and 1
// Use a "for" statment and let iteration run through the numbers continually adding the first 2 numbers together
// REturn the new array post iteration

const fibonacci = (number) => {
  let fibArray = [1, 1]
  for(let i = 1; i < number-1; i++) {
    fibArray.push(fibArray[i] + fibArray[i - 1])
  }
  return fibArray
}

// PASS  ./code-challenges.test.js
// fibonacci


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//  USe oddsSorted to describe 
// Place question into the "it" statment
// Run Test!

describe("oddsSorted", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(oddsSorted(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddsSorted(fullArr2)).toEqual([-823, 7, 23])
  })
})

// ReferenceError: oddsSorted is not defined
// FAIL  ./code-challenges.test.js


// b) Create the function that makes the test pass.


const oddsSorted = (array) => {
  return array.filter(value => {
    if (value % 2 !== 0 && typeof (value) === "number") {
      return array
    }
  }).sort((a, b) => a - b)
}

// Create function that Takes in  array
// Using filter, iterate on the condition 
// With modulo and && connected to typeOf, return new array.

// PASS  ./code-challenges.test.js
// oddsSorted


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// Fill in "describe / it" staments with question.

describe("accumulatingSum", () => {
  it("that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]
    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]
    const numbersToAdd3 = []
    // Expected output: []
    expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulatingSum(numbersToAdd3)).toEqual([])
  })
})

// Fail: ReferenceError: accumulatingSum is not defined

// b) Create the function that makes the test pass.

// Create a function that takes in a array
// Variable to hold the new array.
// MAp over new array. 
// If empty, return empty new arrray.

const accumulatingSum = (array) => {
  let newArray = []
  return array.map((value, index) => {
      if (index > 0) {
          return newArray = value + newArray
      } else {
          return newArray = value
      }
  })
}


// PASS  ./code-challenges.test.js
// accumulatingSum