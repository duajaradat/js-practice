/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
let input=Number(prompt("Please, Enter a number:"));
if (input>=0){
    console.log("The Number is Positive");
    alert("The Number is Positive");
}else if (input<0){
    console.log("The Number is Negative");
    alert("The Number is Negative");
}



/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
alert("You need to enter three numbers");
let numOne=Number(prompt("Please, enter you first number ?"));
console.log(numOne);
let numTwo=Number(prompt("Please, enter you second number ?"));
console.log(numTwo);
let numThree=Number(prompt("Please, enter you third number ?"));
console.log(numThree);

if (numOne>numTwo && numOne>numThree){
    alert("The maximum between the three numbers is "+numOne);
    console.log("The maximum between the three numbers is "+numOne);
}else if(numTwo>numOne && numTwo>numThree){
    alert("The maximum between the three numbers is "+numTwo);
    console.log("The maximum between the three numbers is "+numTwo);
} else if(numThree>numOne && numThree>numTwo){
    alert("The maximum between the three numbers is "+numThree);
    console.log("The maximum between the three numbers is "+numThree);
}





/*
3- Write a JavaScript for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is odd or even, and display a message on the console?

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
.
.
.
.
.
"19 is odd"
"20 is even"
*/


/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/


/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/


/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/