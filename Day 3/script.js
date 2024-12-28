
/**
 * Day 3
 */


// var marks = [1,2,45,65,12,89];

// traversing array using for of loop

// for(let i = 0; i<marks.length;  i++) {
//     console.log(marks[i]);
// }

// traversing array using for of loop

// for(let mark of marks) {
//     console.log(mark);
// }

// var students = [
//     "Aoudumber",
//     "Aditya",
//     "Ritesh",
//     "Vikram"
// ]

// console.log("\n-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-")
// for(let student of students) {
//     console.log(student);
// }

// // Using forEach 

// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")
// console.log("Using forEach")

// marks.forEach((curElem) => {
//     console.log(curElem);
// })
// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")

// console.log("Acccessing single elemt of array");
// console.log(students[1]);

// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")

// console.log("Write an program to cheack if an element present in an array");
// console.log("Using Common JS\n");


// //  Common JS

// var student = students.indexOf("Aditya");

// console.log(student !== -1 ? "Exist" : "Not Exist!")

// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")

// Using EcmaScript 

// console.log("Using ES6");

// var isExist = students.includes("Aditya");

// console.log(isExist===true?"Student Exist in the Array":"Student Not Exist in the Array!!")


// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")

// console.log("\nAlso We can find number using includes() of ES6 in the array");

// const numbers = [1,2,3,4,5,7];

// let isNumberExist = marks.includes(9);

// if(isNumberExist !== true) {
//     console.log("\nNumber is not present in the array");
// }
// else {
//     console.log("\nNumber is present in the array");
// }


// console.log("\n")
// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")
// console.log("\n")

// console.log("Q. Write a program to create a new array using the map() method, where each element in uppercase");

// var persons = [
//     "Aoudumber",
//     "Aditya",
//     "Amit",
//     "Amit"
// ];

// console.log("Capitalizing the array using map( method");

// const namesInCaps = persons.map((curElem) => {
//     return curElem.toUpperCase();
// })

// console.log("\nOriginal Array: "+persons);
// console.log("\nCopy of Persons Array : "+namesInCaps);




// console.log("\n")
// console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")
// console.log("\n")

// console.log("Q. Write a program to create a new array using the map() method, where each number in double");

// var arrayOfNumbers = [
//     1,2,3,5,6,7
// ];

// console.log("Making number Double the array using map( method");

// const doubleNumbers = arrayOfNumbers.map((curElem) => {
//     return curElem+curElem;
// })

// console.log("\nOriginal Array: "+arrayOfNumbers);
// console.log("\nCopy of numbers Array : "+doubleNumbers);



console.log("\n")
console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Q . Write a program to create a new array using the filter method. ");
console.log("\n")

const students = [
    "Aoudumber",
    "Aditya",
    "Ritesh",
    "Pralhad",
    "Pavan",
    "Lakhan",
    "Vikram"
]

var allStudentsExceptAditya = students.filter((curElem) => curElem !== "Aditya")
console.log("Printing all Students Except Aditya : \n"+allStudentsExceptAditya);

console.log("\n")
console.log("-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-\n")

console.log("Q . Write a program to create a new array using the filter method, containing only even number from a given array.");
console.log("\n")

const deogiriStudents = [
    {
        name: "Aoudumber Bade",
        rollNumber: 1
    },
    {
        name: "Aditya Bangar",
        rollNumber: 2
    },
    {
        name: "Ritesh Gawai",
        rollNumber: 3
    },
    {
        name: "Vikram Gujar",
        rollNumber: 4
    },
    {
        name: "Pralhad Gaikwad",
        rollNumber: 5
    }
] ;

const evenRollNumberStudents = deogiriStudents.filter((curElem) => curElem.rollNumber%2===0);

// const evenRollNumberStudents = deogiriStudents.filter((curElem) => {
//     if(curElem.rollNumber%2===0) {
//         return curElem;
//     }
// });



console.log("Printing all the student who is having even roll number\n")
console.log(evenRollNumberStudents);





