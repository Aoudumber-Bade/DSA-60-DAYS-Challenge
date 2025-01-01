

/**
 //! * Set in Javascript
 */

//  const data = [
//     "Aoudumber",
//     "Aditya",
//     "Ritesh",
//     "Vikram",
//     "Anurag",
//     "Ritesh",
//     "Pralhad",
//     "Anurag"
//  ]


//  const uniqueValues = new Set(data);

 // First way to iterate the set values using for of loop
//  for(let value of uniqueValues) {
//     console.log(value);
//  }

// Using Destruactring 
// const [Aoudumber, Aditya, Ritesh] = uniqueValues;
// console.log(Aoudumber, Aditya, Ritesh);


// ? 1. Write a program to delete remove duplicates from an array

// const removeDuplicate = (arr) => {
//     return new Set(arr);
// } 

// const arrData = [
//     "Aoudumber",
//     "Aditya",
//     "Ritesh",
//     "Vikram",
//     "Anurag",
//     "Ritesh",
//     "Pralhad",
//     "Anurag"
//  ]

//  const uValues = removeDuplicate(arrData);
//  console.log("Here is the list of Unique Values : ",...uValues);

//? 2. Write a program to find the intersection of two array

// const findIntersection = (arr1, arr2) => {
//     let uniqueArray1 = new Set(arr1);

//     return arr2.filter((curElem) => {
//         return uniqueArray1.has(curElem);
//     })


// }

// const arr1 = [1,2,5,6,8,9];
// const arr2 = [12,2,55,69,8,19];

// console.log((findIntersection(arr1, arr2)));


//? 3. Write a program to check a subset of another

// const subsetOfArray = (arr1,arr2) => {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);

//     const newArray = [...set2];

//     return newArray.every((curElem) => {
//         return set1.has(curElem);
//     })
// }

// const arr1 = [1,2,5];
// const arr2 = [1,2];
// const arr3 = [1,2,6,7];

// console.log(subsetOfArray(arr1,arr2)); //* True
// console.log(subsetOfArray(arr1,arr3)); //* false


// ? 4. Write a program to find the union of two array 

// const findUnion = (arr1, arr2) => {
//     return new Set([...arr1,...arr2])
// }

// console.log(findUnion(["Aoudumber","Aditya","Ritesh"], ["Ritesh","Vikram"]));


// ? 4. Write a program to find the diffrences between two array 

const findDiff = (arr1, arr2) => {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [...set1].filter((curElem) => !set2.has(curElem))
}

console.log(findDiff([1,8,5,9,2], [1,9,2,6,4]));
