var firstName = prompt("Please enter your first name:")
var lastName = prompt("Please enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "!" , "<br>", "<br>");
////////////////////////////////////


var PhoneModel = prompt("What is your favorite mobile phone model?");
var lengthOfInput = PhoneModel.length;
document.write("The length of your favorite mobile phone model:" + PhoneModel , "<br>")
document.write(" Length of string : " + lengthOfInput , "<br>", "<br>");
///////////////////////////////////////////////


var word = "Pakistani";
var index = word.indexOf("n");
document.write("String : " + word , "<br>");
document.write("Index of 'n' "+ index , "<br>", "<br>");

////////////////////////

var str = "Hello World";
var lastIndex = str.lastIndexOf("l");
document.write("String: "  + str , "<br>" )
document.write("last index of 'l' : " + lastIndex , "<br>", "<br>");
//////////////////////////////////////


var letter = "Pakistani";
var character = letter.charAt(3);
document.write(" String: " + letter ,"<br>");
document.write("Character at index 3: " + character, "<br>", "<br>");
//////////////////////////////////////


var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "!" , "<br>", "<br>");
/////////////////////////////////////////


var wrd = "Hyderabad";
var newWord = wrd.replace("Hyder", "Islam");
document.write("City: " + wrd ,"<br>")
document.write("After replacement: " + newWord , "<br>", "<br>");
///////////////////////////////

var msg =" Ali and Sami are best friends They play cricket and football together";
var newMsg = msg.replace("and" , "&");
document.write(" " + msg ,"<br>")
document.write("After replacement: " + newMsg , "<br>", "<br>");
//////////////////////////


var strg = "472";
var num = Number(strg);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof(num) , "<br>", "<br>");
//////////////////////////////////


var userInput = prompt("Enter some text:");
var uppercaseInput = userInput.toUpperCase();
document.write("User input: " + userInput);
document.write("Uppercase case: " + uppercaseInput , "<br>", "<br>");
////////////////////////////////


let inputStr = prompt("Enter a string:");
let titleCaseStr = toTitleCase(inputStr);
document.write("Title case string: " + titleCaseStr);

function toTitleCase(inputStr) {
  let titleCaseStr = "";
  let nextTitleCase = true;
  for (let i = 0; i < inputStr.length; i++) {
    let c = inputStr.charAt(i);
    if (/\s/.test(c)) {
      nextTitleCase = true;
    } else if (nextTitleCase) {
      c = c.toUpperCase();
      nextTitleCase = false;
    } else {
      c = c.toLowerCase();
    }
    titleCaseStr += c;
  }
  return titleCaseStr , "<br>", "<br>";
}
//////////////////////////////////

var numbr = 35.36;
var stri = numbr.toString().replace(".", "");
document.write("Number: " + numbr , "<br>");
document.write( "Result: " + stri , "<br>", "<br>");
///////////////////////////


let username = prompt("Enter your username:");
let regex = /[^\w.@!]/g;
if (regex.test(username)) {
  alert("Please enter a valid username.");
} else {
  alert("Your username is: " + username);
}
////////////////////////////

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt("select the one item   [cake, apple pie, cookie, chips, patties]");
var isFound = false;

for (let i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === user.toLowerCase()) {
    isFound = true;
    break;
  }
}
if (isFound) {
  alert(user + " is available in our bakery.");
} else {
  alert("We are sorry " , user + " is not available in our bakery." , "<br>", "<br>");
}
/////////////////////////////////////

var password = prompt("Enter your password:");
var regexs = /^(?![0-9])[a-zA-Z0-9]{6,}$/;
if (regexs.test(password)) 
{
  alert("Your password is valid.");
} else {
  alert("Please enter a valid password." , "<br>", "<br>");
}

///////////////////////////
var university = "University of Karachi";
var universityArr = university.split("");

for (var i = 0; i < universityArr.length; i++) {
  document.write(universityArr[i] + "<br>" , "<br>", "<br>");
}
//////////////////////////////////


var Input = "Pakistan";

var lastChar = Input.charAt(Input.length - 1);

document.write("User input: " + Input , "<br>")
document.write("last character of input: " + lastChar , "<br>", "<br>");
//////////////////////////////


var inputString = "The quick brown fox jumps over the lazy dog";
inputString = inputString.toLowerCase();
var wds = inputString.split(" ");
var count = 0;
for (let i = 0; i < wds.length; i++) {
  if (wds[i] === "the") {
    count++;
  }
}
document.write("The quick brown fox jumps over the lazy dog" , "<br>")
document.write("There are " + count + " Occurrence(s) of word 'the'." , "<br>", "<br>");

/////////////////////////


var numb = prompt("Enter a decimal positive integer:");

numb = Number(numb);

document.write("Number: " + numb + "<br>");

var roundNum = Math.round(numb);
document.write("Round off value: " + roundNum + "<br>");

var floorNum = Math.floor(numb);
document.write("Floor value: " + floorNum + "<br>");

var ceilNum = Math.ceil(numb);
document.write("Ceil value: " + ceilNum + "<br>" , "<br>", "<br>");

/////////////////////////////////

var no = prompt("Enter a decimal negative floating-point number:");

num = Number(no);

document.write("Number: " + no + "<br>");

var roundNum = Math.round(no);
document.write("Round off value: " + roundNum + "<br>");

var floorNum = Math.floor(no);
document.write("Floor value: " + floorNum + "<br>");

var ceilNum = Math.ceil(no);
document.write("Ceil value: " + ceilNum + "<br>" , "<br>", "<br>" );
//////////////////////////////////


var nu = prompt("Enter a number:");
num = Number(nu);
var absNum = Math.abs(nu);
document.write("The absolute value of " + nu + " is " + absNum , "<br>", "<br>");

/////////////////////////////////

var diceValue = Math.floor(Math.random() * 2) + 1;

			var result = "";
       if(diceValue == 1)
       {
         result = "Tails";
       }
       else 
       {
         result = "Head";
       }
  document.write("Random dice value " + diceValue ,"<br>");
	document.write("random coin value " + result  , "<br>", "<br>")

////////////////////////////
var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNumber , "<br>", "<br>");


//////////////////////////////////
var userInput = prompt("Enter your weight in kilograms");

			var weightInKgs = parseFloat(userInput.replace(/[^\d.]/g, ''));
			if (userInput.indexOf("kg") === -1 && userInput.indexOf("kilograms") === -1) {
				weightInKgs /= 2.20462;
			}

		document.write("The weight of user is " + weightInKgs.toFixed(1) + " kg." , "<br>", "<br>");

///////////////////////////////////

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userInput = prompt("Guess the secret number between 1 and 10:");

var userNumber = parseInt(userInput);

if (userNumber === secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Sorry, the secret number was " + secretNumber + ". Try again." , "<br>", "<br>");
}
