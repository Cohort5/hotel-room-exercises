var readline = require('readline-sync');

var hotelRoomPrice = readline.question("How much would you like to spend in USD?: ");

var hotelRoomRates = { 
    hotelRoom100: 1000,
    hotelRoom90: 750,
    hotelRoom80: 550,
    hotelRoom75: 350};
    
console.log("You have " + hotelRoomPrice + " to spend")

    
var hotelRoomAmeneties = readline.question("What ameneties are availble for each room during my stay?: ");

var hotelRoomAmeneties = { 
    hotelRoom100: Luxury,
    hotelRoom90: SeaView,
    hotelRoom80: Family,
    hotelRoom75: Affordable,};
    
console.log("We have four packages to choose from: " + hotelRoomAmeneties + " to spend")

var hotelRoomAvailablity = readline.question("What room number would you like to rent?: ");

var hotelRoomAvailablity = { 
    hotelRoom100: Penthouse,
    hotelRoom90: Captain,
    hotelRoom80: Family,
    hotelRoom75: Standard,};

var hotelRoom100 = readline.question("Would you prefer our Penthouse Suite?: ");

var hotelRoom100Ameneties = ["Luxury Master", "Balcony", "Masseur", "Butler", "Cheif", "WiFi", "Steam Shower", "Jacuzzi"];
 
var hotelRoom90 = readline.question("Would you prefer our Ship's Captain room with an Ocean View?: ");

var hotelRoom90Ameneties = ["Panaromic Sea Views", "Seafood Buffet", "King Size Bed", "Black Jack Table"];

var hotelRoom80 = readline.question("Would you prefer our Family Style Suite?: ");

var hotelRoom80Ameneties = ["Master Suite", "Kitchen Living Area", "Kids Suite", "Play Room", "Room Service"];
 
var hotelRoom75 = readline.question("Would you prefer our Standard Room with a kitchenette?: ");

var hotelRoom75Ameneties = ["King Size Bed", "Kitchen Living Area", "Steam Shower", "Take Out"];

//var hotelRoomAmeneties = readline.question("What ameneties are availble for each room during my stay?: ");
 
//var hotelRoomAvailablity = readline.question("Which one do you want to use?: ");

//var hotelRoom40 = ["AUD","GBP","EUR","JPY","CHF","AFN","ALL","DZD","AOA","ARS"]

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