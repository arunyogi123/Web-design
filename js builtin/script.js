// //Built in JavaScript functions
// //alert => notify user => ok
// alert("Welcome to my website!");

// //confirm => user question => yer or no
// let userAnswer=confirm("Do you want to continue?");
// alert(userAnswer);

// //prompt => user question => textbox
// let username=prompt("Enter your full name: ");
// alert("Hello, " + username +  "!")

// let num1=parseInt(prompt("Enter a number: "));
// let num2=parseInt(prompt("Enter another number: "));

// let sum= num1 + num2;
// alert("The sum of " + num1 + " and " +num2 + " is: " + sum)

// let diff=num1-num2;
// alert("The difference of " +num1 + " and " + num2 + " is: "+diff)

// let mul=num1*num2;
// alert("The product of " +num1 + " and " + num2 + " is: "+mul)

// let div=num1/num2;
// alert("The division of " +num1 + " and " + num2 + " is: "+div)

// let mod=num1%num2;
// alert("The modulus of " +num1 + " and " + num2 + " is: "+mod)

// let num = 101;

//operators
// /* <less than
// >greater than
// <=less than or equal to
// >=greater than or equal to
// ==equal to
// !=not equal to */

// if (num==100){
//     alert("You are correct!");
// }
// else{
//     alert("You are wrong!");
// }

// if (num>100){
//     alert("You are correct!");
// }
// else{
//     alert("You are wrong!");
// }

// if (num<100){
//     alert("You are correct!");
// }
// else{
//     alert("You are wrong!");
// }
// if (num>=100){
//     alert("You are correct!");
// }
// else{
//     alert("You are wrong!");
// }
// if (num<=100){
//     alert("You are correct!");
// }
// else{
//     alert("You are wrong!");
// }

// if(num!=100){
//     alert("You are correct!");
// }

// let number = prompt("enter a number: ");
// if (number % 2 == 0) {
//   alert("The number " + number + " is divisible by 2 ");
// } else {
//   alert("The number " + number + " is not divisible by 2");
// }

var weight = prompt("Enter your weight (in kg: )");
var height = prompt("Enter your height(in m: )");

var BMI = weight / (height * height);

if (BMI < 18.5) {
  alert("Your BMI is: " + BMI + " and you are underweight");
} else if (BMI >= 18.5 && BMI < 25) {
  alert("Your BMI is: " + BMI + " and you are normal weight");
} else if (BMI >= 25 && BMI < 30) {
  alert("Your BMI is: " + BMI + " and you are overweight");
} else if (BMI >= 30) {
  alert("Your BMI is: " + BMI + " and you are obese");
} else {
  alert("Invalid input");
}
