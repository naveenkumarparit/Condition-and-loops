/* Task1: What are conditional statements? Explain conditional statements with syntax and examples.
Solution: Conditonal statements are used to control the flow of a program by executing different blocks of code depending on whether 
a specified condition evaluates to true or false. These are also referred as "Control Flow". Conditional statements are most oftnely 
used to make decisions in the code based on certain conditions. The most common types of conditional statements in Javascript are 
`if`, `else-if`.

1) `if` Statement:
Syntax :  
if (condition) {
    // Code to be executed if the condition is true
}

Example : */
let temperature = 13;

if (temperature < 15) {
    console.log("It's a very cold day.")
}

/* 2) `if-else` Statement:
Syntax :
if (condition) {
    // Code to be executed if the condition is true
  } else {
    // Code to be executed if the condition is false
  }

Example : */
let yourAge = 20;

if (yourAge >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote due to age restriction.");
}