/*
Logical Operators
3
AND
OR
NOT

AND
Condition 1 && Condition 2

*/


// Write an js program to check if a friend is eligle to attend your wedding.
// If they have contacted you in the last 1 month or not.
// should have known you for 10 years.

// const contactedLast = confirm("Did they contacted you in the last 1 month?");
// const knownhim = +prompt("How long have you known them for?");
// eligeble = contactedLast == true && knownhim >= 10
// ? alert("You are invited to the wedding.")
// : alert("Sorry, you are not invited to the wedding.");

// OR
// Condition 1 || Condition 2

// Show user if they are allowed to vote based on citizenship Card or Voter Card.
// Alert their eligiblity


// const ctitizenship = confirm("Do you have Ctitizenship Card?");
// const voterCard = confirm("Do you have Voter Card?");
// canvote = voterCard || ctitizenship
// ? alert("You are eligible to Vote.")
// : alert("Sorry, you are not eligible to Vote.")


// NOT
// !

//

const email = prompt("Enter Email");
if (!email) {
    alert("Email Missing")
};