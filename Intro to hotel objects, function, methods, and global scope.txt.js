//Creat program to allow people to rent rooms in our hotel - read page 100 for Hotel
//Code that is written within the main/global scope of the program is exucuted automatically
console.log("Welcome to the program."); //global scope

var hotel  = {
    name: "CareerDevs Hotel",  //Properties = key/value pairs
    
    doThisThing: function(param1, param2) { // the value of a method is always a function and paramaters are optional.
    //a method is a function within an object
    //lines of javascript code
    //more lines of code
    console.log("Welcome to the Method."); // local scope to the method and the object
 }    
};

console.log("Welcome to the Middle of the program."); // global scope

function doThisThing(param1, param2) {
    console.log("Welcome to Fucntion."); // local scope to the function.
    //line of javascript code
}

console.log("Welcome to the End of the program."); // global scope

//Creat program to allow people to rent rooms in our hotel - read page 100 for Hotel
//Code that is written within the main/global scope of the program is exucuted automatically
console.log("Welcome to the program."); //global scope


var hotel  = {
    name: "CareerDevs Hotel",  //Properties = key/value pairs
    
    doThisThing: function(param1, param2) { // the value of a method is always a function.
    //a method is a function within an object
    //lines of javascript code
    //more lines of code
    console.log("Welcome to the Method."); // local scope to the method and the object
 }    
};

console.log("Welcome to the Middle of the program."); // global scope

function doThisThing(param1, param2) {
    console.log("Welcome to Fucntion."); // local scope to the function.
    //line of javascript code
}

console.log("Welcome to the End of the program."); // global scope