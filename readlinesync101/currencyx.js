// HOW MUCH MONEY DO YOU HAVE IN DOLLARS AND CENTS?
//WHAT TYPE OF CURRENCY DO YOU HAVE? 
//WHAT TYPE OF CURRENCY DO YOU WANT TO CONVERT INTO?
//TELL THEM TYPES OF CURRENCY THEY CAN CONVERT INTO
//TELL THEM TYPES OF CURRENCY THEY CAN CONVERT INTO
//WHICH ONE DO YOU WANT TO USE?

var readline = require('readline-sync');

var usd = readline.question("How much money do you have in Dollars and Cents?: ");
 
var currencyName = readline.question("What type of currency do you have?: ");
 
var currencyType = readline.question("What type of currency do you want to convert into?: ");
 
var currencyType = readline.question("List of currency that you can convert into: ");

var currencyType = ["AUD","GBP","EUR","JPY","CHF","AFN","ALL","DZD","AOA","ARS"]
 
var currencyType = readline.question("Which one do you want to use?: ");

var currencyRates = {
    
    AUD: 1.41,
    GBP: 0.76,
    EUR: 0.86,
    JPY: 112.21,
    CHF: 0.99,
    AFN: 75.97,
    ALL: 108.45,
    DZD: 118.33,
    AOA: 301.43,
    ARS: 36.64,
    
};

//CONVERT IT FOR THEM

for (let key in currencyRates) {
       console.log(key, currencyRates[key]);
}

