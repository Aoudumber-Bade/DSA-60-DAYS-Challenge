

// ? 1. Write the program to count the each occurences in a string 

// function countOccurences(str){
//     let count = {};

//     for(let key of str) {
//         count[key] = (count[key] || 0) + 1;
//     }
//     return count;
// }

// console.log(countOccurences("Aoudumberr"));



// ? 2. Write a program to merger two objects.

// function mergeObjects(obj1,obj2) {
//     const newObject = {
//         ...object1,
//         ...object2
//     }

//     return newObject
// }

// const object1 = {
//     name: "Aodumber",
//     roll: 2
// }

// const object2 = {
//     java: "70%",
//     js: "80%"
// }

// console.table(mergeObjects(object1,object2));


// ? 3. Write a program to check if two objects are equal.

// function isObjectEqual(obj1, obj2) {

//     const key1 = Object.keys(obj1);
//     const key2 = Object.keys(obj2);

//     if(key1.length !== key2.length) {
//         return false;
//     }

//     for (let key in obj1) {
//         if(obj1[key] !== obj2[key]){
//             return false;
//         }
//         return true;
//     }
// }

// const object1 = {
//     title: "Mobile",
//     price: 20000,
//     discount: "30%"
// }
// const object3 = {
//     title: "Mobile",
//     price: 20000,
//     discount: "30%"
// }

// const object2 = {
//     title: "Laptop",
//     price: 8000,
//     discount: "50%"
// }

// const isEqual = isObjectEqual(object1, object3);

// console.log(isEqual);

// ? 4. Write a program to invert the keys and values of an object.


const invertObjectProp = (obj1) => {
    let invObj = {};

    for(let key in obj1) {
        invObj[obj1[key]] = key;
    }

    return invObj;
}

const obj1 = {
    name: "Aodumber",
    roll: 2
}

console.table(invertObjectProp(obj1));