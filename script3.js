///////////  ANSWER # 1  ///////////
var age = "20";
age = " I am 20 years old";
alert(age);

/////////  ANSWER # 2   //////////

var birthYear = 2002;
console.log(birthYear);

var message = "My birth year " + birthYear ;
document.write(message); "<br></br>"


/////////  ANSWER # 3  //////////


let visits = localStorage.getItem('visits');

if (!visits) {
  visits = 0;
}

visits++;

localStorage.setItem('visits', visits);

console.log("You have visited this site "+visits+ 'times.');

//////////  ANSWER # 4  /////////

// Prompt the user for information
var visitorName = prompt("Enter your name:");
var productTitle = prompt("Enter the product title:");
var quantity = parseInt(prompt("Enter the quantity:"));
var color = prompt("Enter color:");

// Display the message
 message = " " + visitorName + " ordered " + quantity + color + " " + productTitle + " from Outfitters Store";
document.write(message);






