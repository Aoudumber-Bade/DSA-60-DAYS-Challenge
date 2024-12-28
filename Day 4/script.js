

/**
 //? Remaining Part From Last Lecture
 */


//! 1. map()

// * syntax : array.map(callback(currentValue, index, array), thisArg)

// * -> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// * -> map() does not change the original array.

// const persons = [
//     "Audumber",
//     "Anurag",
//     "Pratik",
//     "Aditya",
//     "Ritesh",
//     "Vikram",
//     "Pralhad"
// ]

// console.log("Before Adding Prefix to each person : ");console.log(persons);


// // After adding prefix to each person

// const newPersons = persons.map((curElem) => `Mr. ${curElem}`);

// console.log("After Adding {Mr.} Prefix to each person : ",)
// console.log(newPersons)

//! Write a program to create a new array map method, where each elememt is double.

// const nums = [1,2,3,4,5,6,7,8,9,10];

// const doubledNums = nums.map((curElem) => curElem*2);

// console.log("Doubled Number : "+doubledNums)


//?  2. filter() 

// * syntax : array.filter(callback(currentValue, index, array), thisArg)

// * -> The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// * -> The filter() method does not change the original array.

// const numbers = [1,2,3,4,5,6,7,8];

// const evenNumbers = numbers.filter((curElem) => curElem % 2 ===0)

// console.log("Even Numbers : ",evenNumbers);


// const studs = [
//     "Audumber",
//     "Anurag",
//     "Pratik",
//     "Aditya",
// ]

//! Write a program to create a new array method, where each elememt is double.

// * Using Commn JS

// const nums = [1,2,3,4,5,6,7,8,9,10];
// const result = [];
// for(let i = 0; i<nums.length; i++) {
//     result.push(nums[i]*2);
// }

// console.log("Doubled Number : "+result)

//! Write program to add all elements of an array

// const numbers = [1,2,3,4,5];

// let sum = 0;

// for(let i = 0; i<numbers.length; i++) {
//     let num = numbers[i];
//     sum = sum + num;
// }
// console.log(sum);



// ? Write a program to find largest number of an array

// const numbers = [12,34,10,54,23,76,23,17,55];

// let max = 0;

// for(let i = 0; i<numbers.length; i++) {
//     let num = numbers[i];

//     if(num > max) {
//         max = num;
//     }
// }
// console.log(max);

//! 3. reduce() 


// * syntax : array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// * -> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// * -> The reduce() method does not change the original array.



//! Write a program to create a new array method, where each elememt is double.

// * Using ES6 - reduce( method)

// const numbers = [1,2,3,4,5];

// const maxNum = numbers.reduce((accum, curElem) => accum + curElem,0);

// console.log(maxNum);

// ? Write a program to extract a portion of an array using the slice method

// ! slice()
// * syntax : array.slice(start, end)
// * -> The slice() method returns the elements of an array from the start index up to but not including the end index.


const students = [
    "Aoudumber",
    "Aditya",
    "Anurag",
    "Ritesh",
    "Pralhad",
    "Vikram",
    "Ashish",
    "Pavan"
]

let filteredStudent = students.slice(3,6);

console.log(filteredStudent);



