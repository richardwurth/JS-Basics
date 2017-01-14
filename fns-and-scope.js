//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler (name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
}

console.log(isTyler(name));
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName () {
  var name = prompt("Please enter your name!");
  return name;
}

var inputName=(getName());

console.log(inputName);


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

alert("Welcome, " + inputName + "!");

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here

console.log("The difference is that a parameter is more of an alias for the value that will be entered by the invocation/call of the function, while an argument is the actual values that are being entered into the aliases of the function.");

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

console.log("The falsy values in Javascript are the following; false, 0, empty strings, null, undefined and NaN. Everything outside of these are considered Truthy");

/*"You can check whether or not something is falsy by either entering the value you want to check and == true, and whether or not it's falsy or truthy depends on what the result is, for example to check if the number 5 is truthy or falsy we'd create a if/else statement that takes the number value and states if (value) to run a console log stating it's true, else run the console log stating it's fale, such as the below example;

if (false) {
  console.log("Truthy!");
} else {
  console.log("Falsy!");
}
*/

//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here

function myName () {
  return name;
}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName();

//Now alert the result of invoking newMyName

myName("Richard");
alert(newMyName);

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

function outerFn () {
  var anonymous = function (name) {
    return name;
  }
  return anonymous;
}

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

var innerFn = outerFn();

//Now invoke innerFn.

console.log(innerFn("Richard"));
