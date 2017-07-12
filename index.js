/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/** * #1 * Variables with a String value * * Declare variables named
`firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`,
`favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`. * Assign
values to these variables with your own data. * * Each value should be a
String.  **/

var firstName = "Cheryl";
var lastName = "Lee";
var birthPlace = "Hawaii";
var favoriteFood = "Pizza";
// This is a hard code that means it is set. When it is together we are declaring and assigning.

console.log("First Name", firstName, "Last Name", lastName, "Born in", birthPlace, "Food", favoriteFood);

//or

var bestMovie;
var favLoveSong;
var cuteAnimal;
var favColor;
var favSneaker;
var coffeeShop;

bestMovie = "Galaxy";
favLoveSong = "So Amazing";
cuteAnimal = "Puppies";
favColor = "purple";

// Usually this means that the variable info can be changed.
// for example if you do: 
// var firstName;
// firstName = Betty;  
// this will overide your original hard code. 


console.log(bestMovie, favLoveSong, cuteAnimal);

/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/

// Note: /**   this tells the compter that the things betweem these two symbols are commeted out **/

var favoriteNumber = 11;
var currentYear = 2017;
var thatOnePrinceSong = 1999;
var tokyoOlympics = 2020;

console.log(favoriteNumber, currentYear, thatOnePrinceSong, tokyoOlympics);

/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/

var likesMcDonalds = true;
var watchedMrRobot = false; 
var ranMarathon = false;
var wrestledABear = false; 
var lovesDonuts = true;
var readHarryPotter = true;

console.log(likesMcDonalds, watchedMrRobot, ranMarathon, wrestledABear, lovesDonuts,readHarryPotter);


/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/

var completedPrepClass = null;
var traveledToMars = null;
var scoredTDinNFL = null;

console.log(completedPrepClass, traveledToMars, scoredTDinNFL);




/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/

//null are values that show non-values.  Null represents not an object.  Undefined means there will be a value but it has not been assigned.
// objects are variables but can contain many values. Null is purposfly blank there will not be a value.  

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/

var plateLunch = ["Squid Luau", "Poke Bowl", "CPK"];
var fruitBasket = ["Banana", "Orange", "Strawberry"];
var lotteryResult = [5, 25, 9, 86, 14];
var duets = [["sunny and cher", "Huey Lewis and the News"], ["Ben and Myla", "C and K"]];
// nested arrays contain 
console.log (duets);

var mixPlate = ["fish", 7, []];

console.log(plateLunch,fruitBasket,lotteryResult, mixPlate);

/*7
* Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

What is the length of this array? Please print the length (a number) to the console.
What is the index position of carrot cake? Please print this item to the console.
What is the index position of lemon bars? Please print this item to the console.
*/



var stringLength = 5;
var indexPositionCarrotCake = 0;
var indexPositionLemonBars = 4;

console.log("string length", stringLength, "Carrot Cake position", indexPositionCarrotCake, "Lemon Bar Position", indexPositionLemonBars);



//note use brackets to tell you what index to print.
var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

//to print lemon bars
console.log(partyList[2]);

var stuff = [24, "Timmy", "Wheeler Middle School", ["white", "blue", "yellow"]];
console.log(stuff[3][1]);// should print the 3rd index (white,blue,yello) and then 1st index in that BLUE


/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/

var fullName = firstName+" "+lastName;

console.log(fullName);


var whereFromCity = "Honolulu";
var whereFrom = "Hawaii";

var cherylFrom = whereFromCity+", "+whereFrom;

console.log("Where is Cheryl From?",cherylFrom);


/*
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
*/

var num1 = 6;
var num2 = 10;
var sum = num1 + num2;
var difference = num2 - num1;
var product = num2 * num1;
var quotient = num2 / num1;


console.log("sum", sum);
console.log("difference", difference)
console.log("product", product)
console.log("quotient", quotient)

var diffSum = difference - sum;
console.log("diffSum", diffSum);
/*

* #10 * Comparisons & Logic * Variables with the outcome of a comparison
operation: * * Declare a variable named `isStrictlyEqual` and compare two
strings "Tacocat" and "tacocat" using the strict equality. * Declare another
variable named `isLooselyEqual` and compare the two strings "Tacocat" and
"tacocat" using equality. * Print both variables to the console. If the
answers are different, why? If not, why not? Write you answer two or three
commented-out sentences.

* Declare a variable named `sameNum` and compare a string "5" and a number 5
using strict equality. * Declare another variable named `sameNumba` and
compare a string "5" and a number 5 using equality. * Print both variables to
the console. If the answers are different, why? If not, why not? Write you
answer two or three commented-out sentences. */


//example
//var numNum = 5
//var numString = "5"

// in this example they will print the same 5 but this is two different data
// types.  It is a number 5 and a String 5). This is an example of why coders
// usually only use === (triple equals) to ensure that when doing arithmetic
// that the data types are the same.


var isStrictlyEqual ="Tacocat"==="tacocat";
console.log(isStrictlyEqual);

var isLooselyEqual = 5 === "5";
console.log(isLooselyEqual);

var isTrue = 67 === "67";
console.log(isTrue);

/*
* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?*/



var compareUseOr = 3>2 || 3<1;

console.log("cuo", compareUseOr);

var compareUseAnd = 3>2 && 6>3;

console.log("cuA", compareUseAnd);

var compareUseAnd2 = 7>2 && 8<5;

console.log("cuA2", compareUseAnd2);

// for OR








/*
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
*/

/*
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.*/


/*
* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"



* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.*/


/*
* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
*/

