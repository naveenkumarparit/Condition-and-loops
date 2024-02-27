/* Task3 : What are loops, and why do we need them? Explain different types of loops with their syntax and examples.
Solution : Loops are a fundamental concept in programming that allow you to repeatedly execute a block of code. They are used when you 
need to perform a task multiple times, or when you want to iterate over a collection of statements. 
In JavaScript, there are several types of loops, each serving a different purpose. Here are the main types of loops in JavaScript along 
with their syntax and examples:

1. `for` Loop :
The for loop is used when you know how many times you want to iterate. It consists of three parts: initialization, condition, and changer.

Syntax : 
for (initialization; condition; changer){
        Code to be executed if the condition is true.
}

Example : */

for (let i = 0; i <= 5; i++) {
    console.log(i)
}
// This loop will print the values from 0 to 5.

/* 2. `while` loop :
The `while` loop is used when you don't know how many times you want to iterate. It repeatedly executes a block of code as long as a 
specified condition is true.

Syntax :
initialization
while (condition) {
    // Code to be executed if the condition is true.
}

Example : */
let number = 1;
let range = 50;         // Range may vary according to the need.
while (number <= range) {
    if (number % 2 === 0){
        console.log(`The number : ${number} is even`);
    }
    number++
}
// This loop will print even number from 1 to 50.

/* 3. `do-while` Loop :
Similar to the while loop, but the condition is evaluated after the code block is executed, ensuring that the block of code is executed 
at least once.

Syntax : 
initialization
do {
    Code to be executed if the condition is true ensuring that the block of code is executed at least once.
} while (condition);

Example : */
let x = 20;
do {
    console.log(x)
    x++
} while (x > 25);

// This loop will print the value of "x" at leat once even if the condition is false.