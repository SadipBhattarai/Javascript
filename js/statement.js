// // Statements // Conditional Operators

// // ES5
// // if-else
// // switch-case

// // ES6
// // Ternary Operator
// ?
// const day = +prompt("enter day in number between 1 to 7");
// switch (day) {
//   case 1:
//     alert("sunday");
//     break;
//   case 2:
//     alert("monday");
//     break;
//   case 3:
//     alert("tuesday");
//     break;

//   case 4:
//     alert("wed");
//     break;
//   case 5:
//     alert("thu");
//     break;
//   case 6:
//     alert("fri");
//     break;
//   case 7:
//     alert("sat");
//     break;
//   default:
//     alert("enter a valid number");
// }

/*
Write a program that handles the grading
Logic
80% and above: Distinction
70% - 79.99%: First Division
60% - 69.99%: Second Division
Below 60%: Fail
*/

const mark = +prompt("Enter your marks");
switch (true) {
  case mark >= 80 && mark <= 100:
    alert("Distinction");
    break;
  case mark < 80 && mark >= 70:
    alert("First Division");
    break;
  case mark < 70 && mark >= 60:
    alert("Second Division");
    break;
  case mark < 60:
    alert("Fail");
    break;
  default:
    alert("Invalid Number");
}
