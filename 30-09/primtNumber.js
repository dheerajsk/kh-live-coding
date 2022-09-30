
// Problem -> Write a Program to find all the prime numbers from 1 to 100.

// Solution



// Creating a function 
// syntax => function nameOfFunction(paramters)

function findPrimeNumbers(start, limit){

// Step 1: Go from 1 to 100.

for(let i=start; i<=limit; i++){

    // Step 2: n is to verify it it is prime number or not.
    let n = i;
    let isPrime = true;
    
    // Step 3: Go from 2 to n-1.
    for(let j=2; j<n; j++){

        // Step 4: Divide and verify
        if(n%j==0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(n);
    }

}
}

// How to call a function.
// nameofFunction(arguments)
let x = 100;
let y = 200;
findPrimeNumbers(x, y);