var ans = Math.floor(Math.random() * 11);
console.log(ans);
var readline = require("readline-sync");

// var userName = readline.question('May I have your name? ');
// console.log('Hi ' + userName + '!');
do {
    var guess = readline.question("Please guess a number between 0 and 10?");
    console.log("Type:"+typeof(guess))
    //if (isNaN(guess) || guess>10 || guess<0)//is not a number or >10 or  <0
    if(!isNaN(guess) && guess<=10 && guess>=0)
        break;
    else{
        continue;
    }    
}while(true)

if (ans == guess) {
    console.log("U R right!")
} else {
    console.log("Wrong!!!")
}
