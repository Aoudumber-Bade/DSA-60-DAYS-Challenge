

/**
 //! * Objects In JS 
 */

 //? 1. Write a program to remove keys with falsy values from an object

// function removeFalsyValues(obj) {
//     const newObj = {};
//     for(let key in obj) {
//         let value = obj[key];

//         if(value) {
//             newObj[key] = value;
            
//         }
//     }
//     return newObj;
// }

// const obj = {
//     username: "admin",
//     password: 1234,
//     isLogged: false,
//     status: 'active',
//     amount:0
// }

// console.log(removeFalsyValues(obj));


//? 2. Write a program to find the sum of all values in an object

// function sumObject(obj) {

//     let sum = 0;

//     for(let key in obj) {
//         sum = sum + obj[key];
//     }

//     return sum;

// }

// const numsObj = {
//     a: 15,
//     b: 29,
//     c: 32,
//     d: 42,
//     e: 57
// }

// let result = sumObject(numsObj);

// console.log("Sum of all Object Values : "+result);


//? 3. Write a program to check if an object is empty or not

// function emptyObject(obj) {
//     const arr = Object.keys(obj);

//     return arr.length === 0;
// }

// const obj = {}
// const obj1 = {
//     name: "Aoudumber"
// }
// console.log(emptyObject(obj)); //* true
// console.log(emptyObject(obj1)); //* false


// ? 4. Write a program to return the keys of an object as an Array

// function ObjectKeys() {

    // Using ES6 
    // return Object.keys(obj);


    // Common Js 

//     let keysArr = [];
//     for (let key in obj) {
//         keysArr.push(key);
//     }
//     return keysArr;
// }

// const obj = {
//     name: "Aoudumber",
//     roll: 1,
//     class:1,
//     subject:"none"
// }

// console.log(ObjectKeys(obj));


// ? 5. Write a program to count the number of keys in an object

// function countKeyofObject(obj) {
//     let count = 0;

//     for(let key in obj) {
//         count = count + 1;
//     }

//     return count;
// }

// const obj = {
//     name: "Aoudumber",
//     roll: 1,
//     class:1,
//     subject:"none"
// }

// console.log("Total number if keys : "+countKeyofObject(obj));

//? 6. Write a program to find the key with the highest value;

function highestValue(obj) {
    let max = 0;
    for(let key in obj) {
        let num = obj[key];
        if(num > max) {
            max = num;
        }
        
    }
    return max;
}

const numsObj = {
    a: 15,
    b: 29,
    c: 32,
    d: 42,
    e: 57
}

console.log("Highest Value : "+highestValue(numsObj));
