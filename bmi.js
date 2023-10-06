var readline = require("readline-sync");

do {
    var height = readline.question("Please enter ur height (cm)?");
   
    if(!isNaN(height) && height<=230 && height>30)
        break;
    else{
        console.log("Height must between 30 and 230cm!")
        continue;
    }    
}while(true);

while(true){
    var weight = readline.question("Please enter ur weight (kg)?");
    if(!isNaN(weight) && weight<=500 && weight>10)
        break;
    else{
        continue;
    }   
}
console.log(height);
console.log(weight);
bmi?