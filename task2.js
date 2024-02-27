// Task2 : Write a program that grades students based on their marks.
// If greater than 90 then A Grade
// If between 70 and 90 then a B grade
// If between 50 and 70 then a C grade
// Below 50 then an F grade

let marksOfStudent1 = 36;

if (marksOfStudent1 > 90) {
    console.log("A grade");
} else if (marksOfStudent1 > 70 && marksOfStudent1 < 90) {
    console.log("B grade");
} else if (marksOfStudent1 > 50 && marksOfStudent1 < 70) {
    console.log("C grade");
} else {
    console.log("F grade");
}