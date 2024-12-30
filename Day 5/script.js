

/**
 // ! * Day 5 - Objects In Javascript 
 */

//  const data = {
//     name: "Aodumeber Bade",
//     rollNumber: 5,
//     class: "mca",
//  }

//  console.log(data.name+" "+data.rollNumber);

//  data.name="Aditya Bangar";
//  data.rollNumber=6;
//  data.class="mca";

//  console.log(data.name);

 // if i want to print the data in table format we can use console.table()

//  console.table(data)

//  let key = "rollNumber";
//  console.log(data[key]);


// ? 1. Write a program to print object keys with the help of looping 

// const students = {
//         name: "Anurag Tupkar",
//         rollNumber: 1,
//         class: "mca",    
// };

// console.log("Printing the object keys using for of loop");

// for(let key in students) {
//     let value = students[key];
//     console.log(key+ " : "+value);
// }


// ? 2. Write a program to create an object from an object using loop

// const data = {
//     name: "Aoudumber Bade",
//     rollNumber: 1,
//     class: "mca",    
// };

// const newData = {};

// for(let key in data) {
//     let value = data[key];
//     newData[key] = value;
// }

// console.table(newData);


/**
 // ! *  Spread Operator in Javascript
 */

//  // *-> Spread Operator is used to copy the array or object.


//  const products = ["laptop", "mobile","TV"];

//  console.log(...products);
 
//  const otherProducts = ["Speaker", "Headphones","Camera"];

//  const allProducts = products.push(...otherProducts)

//  console.log(products);

//  const [laptop,mobile,tv,speaker,headphones,camera] = products;

//  console.log(laptop);
 

const student = {
    name: "Aoudumber Bade",
    rollNumber: 1,
    class: "mca",
}
const grade = {
    math: 90,
    science: 80,
    english: 70,
}

const studeInfo = {...student, ...grade};

console.table(studeInfo);

 