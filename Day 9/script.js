

/**
 //! * Recursion in Javascript
 */

 //? 1. Write a program to print number from 1 to n using recursion

//  function printNumbers(n){
//     if(n <=0 ) {
//         return;
//     }
//     printNumbers(n-1);
//     console.log(n);
    
//  }

//  printNumbers(10);


 //? 2. Write a program to print number from N to 1 using recursion

//  function printNumbers(n){
//     if(n <=0 ) {
//         return;
//     }
//     console.log(n);
//     printNumbers(n-1);
    
//  }

//  printNumbers(10);

//? 3. Write a program to print table using loop

// function printTable(n) {
//     for(let i = 1; i<=10; i++){
//         console.log(`${n} * ${i} = ${n*i}`);
//     }
// }

// printTable(2);

///? 4. Write a program to print table of numbers using Recursion

const printingTableUsingRecursion = (n, multiply = 1) => {
    
    if(multiply>10) {
        return;
    }
    console.log(`${n} * ${multiply} = ${n*multiply}`)
    printingTableUsingRecursion(n, multiply+1);
}

printingTableUsingRecursion(2);