var ans=Math.floor(Math.random()*11);
console.log(ans);
var readline = require("readline-sync");

// var userName = readline.question('May I have your name? ');
// console.log('Hi ' + userName + '!');

var guess = readline.question("Please guess a number between 0 and 10?"); 
console.log(guess);


if(ans === guess){
    console.log("U R right!")
}else{
    console.log("Wrong!!!")
}