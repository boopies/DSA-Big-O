/*1. What is the Big O for this?
1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"
============================================================================
  O(1) - because it is selecting one object from the array.
============================================================================


2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. 
He says no, then you ask the next person, and the next, and the next until you 
find someone who has a golden or there is no one else to ask.
============================================================================
O(n) - because you are looping through the entire array.
============================================================================
*/

/*
2. Even or odd
What is the Big O of the following algorithm? Explain your answer*/

function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else{
        return false;
    }
}

//O(1) only one value is being checked at a time. and it only produces a boolean.


/*3. Are you here?
What is the Big O of the following algorithm? Explain your answer*/

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//O(n^k): - the has a nested loop.  the nested loop ony asks for boolean. and is a simple function.

/*4. Doubler
What is the Big O of the following algorithm? Explain your answer*/

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//O(n) : - iterating over an array and nultplying all values by 2. all functions have the same complexity, and time is increased only by the size of the array.

/*5. Naive search
What is the Big O of the following algorithm? Explain your answer*/

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//O(n) iterated through the array to find certain item. displays number. the time taken to complete depends on the size of the array.

/*6. Creating pairs:
What is the Big O of the following algorithm? Explain your answer*/

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//O(n^k): - the has a nested loop.  the nested loop only does a simple linear operation.


/*7. Compute the sequence
What does the following algorithm do? What is its runtime complexity? Explain your answer*/

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//This algorithm, creates an array with a fibonnaci sequence starting from 0. 
//O(n) linear loop. the more number it has to iterate through the longer it should take. 

/*8. An efficient search
In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. 
Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer
*/

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//O(logn) the subset get smaller after each iteration. 

/*9. Random element
What is the Big O of the following algorithm? Explain your answer*/


function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//O(1) - Linear function, returns result. 

/*10. What Am I?
What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer*/

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

//The function determines of the number is prime(n)
//O(n) depending on the size of n will determine the time taken.

/*
11. Tower of Hanoi
The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk
Input:

Rod A	Rod B	Rod C
----		
---------		
-------------		
Output:

Rod A	Rod B	Rod C
----
---------
-------------
Derive an algorithm to solve the Tower of Hanoi puzzle.
Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
If you are given 5 disks, how do the rods look like after 7 recursive calls?
How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
What is the runtime of your algorithm? */

function stepsToSolveHanoiT(height, srcP, desP, bufferP) {
    if (height >= 1) {
  
      // Move a tower of height-1 to the buffer peg, using the destination peg.
      stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);
  
      // Move the remaining disk to the destination peg.
      console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
  
      // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
      stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
    }
    
    return;
  }
  
  //stepsToSolveHanoiT(5, "A", "C", "B");

/*
12. Iterative version
Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.*/

// Coounting Sheep

function countSheepLoop(num){
  for(let i=num; i>0; i--){
    console.log(`counting sheeps ${i}`);
  }
}

//O(n) - time depends on num 

// Power Calculator

function powerCalculator(base, exp) {
    let results;
    for(let i = 0; i <= exp; i++){
       results = base ** i;
       i++
      };
      return console.log(results);
}

// O(n) - time depends on size of exp.

// Reverse String

function reverseString(str) {
  let results = '';
  while (str !== '') {
    results = str[0] + results;
    str = str.slice(1);
  }
  return console.log(results);
}

// O(n) time determined by length of string

// Triangle number

function triNumber(num) {
  let results = 0;
  for (let i = 0; i <= num; i++) {
    results += i;
  }
  return console.log(results);
}

// O(n) - time depends on num variable.

// SPLIT STRING //

function split(str, sep) {
  var splitArr = [];
  while (true) {
    var idx = str.indexOf(sep);
    if (idx == -1) break;
    splitArr.push(str.slice(0, idx));
    str = str.slice(idx + sep.length);
  }
  splitArr.push(str);
  return console.log(splitArr);
}


// big O for this function is linear because amount of operations depends of the amount of separators present in input string.
// O(n)

// BINARY //

function convertToBinaryIter(num){
  var binary = '';
  while(num>0){
    let remainder = Math.floor(num%2);
    binary = remainder + binary;
    num = Math.floor(num/2);
  }
  return console.log(binary);
}

//O(n) time depends on num

// Factorial

function factorialIterative(num){
  let factorial = 1;
  for (let i = 1; i <= num; i++){
    factorial *= i;
  }
  return console.log(factorial);
}

// O(n) time determined by size of num

// Fibonacci Sequence

function fibonacciIterative(number){
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while(number > 0){
    fib = num1;
    num1 = num1+num2;
    num2 = fib;
    number--;
  }
  return num2;

}


// O(n) time taken depends on number size

/*
13. Recursive Big O
Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.*/

/*
Counting sheep: - O(n)
Power Calculator: - O(n)
Reverse String: - O(n)
Triangle Number: - O(n)
String Splitter': - O(n)
Fibonacci Numbers: - O(2^n) - recursion is called twice for numbers over 2
Organization Chart: - (O(n^2)) - depends on the nesting of the input data
Maze Solver: - O(n^k) /O(logN) - Has nested functions that have to be used again and again to solve the maze. the bigger the maze the more time needed.
however, since things become smaller, more the maze completes the less time the smaller the maze
binary: - O(n)