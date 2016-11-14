/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.

// updated the linke


// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.
var feelings = "excited";
var print = feelings + "!";
document.getElementById("print").innerHTML = print;







// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.
var name = "Jeff";
var message ="Hi "+ name +", how are you?";
document.getElementById("message").innerHTML = message;







// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var number1 = 4;
var number2 = 6;
var q4a = number1 + number2;
var q4b = number1 - number2;
var q4c = number1/number2;
var q4d =number1*number2;
document.getElementById("q4a").innerHTML = q4a;
document.getElementById("q4b").innerHTML = q4b;
document.getElementById("q4c").innerHTML = q4c;
document.getElementById("q4d").innerHTML = q4d;





// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var teacher = "Cam";
var loc1 = "galvanize";
var q5 = "I go to "+loc1+" and my teacher is "+teacher+".";
document.getElementById("q5").innerHTML = q5;



// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.


var five = "5";
var three = "3";
var q6note = "Even those numbers are two strings being manipulated '5' and '3' JS will treat them as numbers."
var q6a = five + three;
var q6b = five - three;
var q6c = five * three;
var q6d = five / three;
document.getElementById("q6a").innerHTML = q6a;
document.getElementById("q6b").innerHTML = q6b;
document.getElementById("q6c").innerHTML = q6c;
document.getElementById("q6d").innerHTML = q6d;
document.getElementById("q6note").innerHTML = q6note;






// 7. When a button is clicked, add content into the ID "q7".

var q7 = "False Alarm"
// Wait till a button is clicked
document.getElementById("callAlert").addEventListener("click", function() {
  // Display
    document.getElementById("q7").innerHTML = q7;});





// 8. Collect a number value from the user and when a button is clicked,
//  <h2>Question 8:</h2>
//  <form name="question8">
//      <p>Enter a number to double:</p>
//      <input id="doubleNum" type="text">
//  </form>
//  <button id="callDoubleNum">Double Number</button>

//  <p>The Doubled Value is: <span id="q8"></span>
//  </p>
//  <hr>
//    then double user's answer and display that value into the HTML page.
// Wait till a button is clicked
document.getElementById("callDoubleNum").addEventListener("click", function() {

  // Collect Data
  var doubleNum = document.getElementById("doubleNum").value;

  // Do something with Data
  var q8 = 2 * doubleNum

  // Display Data
  document.getElementById("q8").innerHTML = q8;

});






// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5 ;
var num2 = 10;

if (num1 > num2) {
  var q9 = "Yes, the value of num1 is greater than num2.";
}
else {var q9="No, the value of num1 is not greater than num2.";}
document.getElementById("q9").innerHTML = q9;


// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.
var score = 95
if (score <= 59) {var q10 = "Very bad: study more and retake the test";}

if (score <= 89 && score >= 60) {var q10="Nice work, keep practicing";}
else {var q10 = "Great job";}

document.getElementById("q10").innerHTML = q10;




// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."






// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.






// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.







// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.







// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad





/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
