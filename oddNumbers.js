
// To find all the odd numbers from 1 to 100.
// 1, 3, 5, 7, 9.....

// Iteration -> One Step in Loop.

// +, -, %, ==, !=, =. ++. <=, <

// Step 1: Define Loop
// do something in repetition.
for(let i=1;
     i<=100; 
     i++){
    // body of the loop.
    // % -> Mod Opeartor returns remainder of division.
    // Step 2: Divide the number
    let divResult = i%2;
    // Check if result is not 0
    if(divResult==1){
        // body of if condition.
        // print odd numbers.
        console.log(i);
    }
}

// console.log(40/3);
// console.log(40%3);