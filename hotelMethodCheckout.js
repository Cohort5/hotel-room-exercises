var hotel = {  //var=name, method is a function inside of an object
    name: "CareerDevs Hotel",  //key, value, pair aka properties 
    ratiing: 5.0, //decimals=floating point values
    roomRate: 325.00,
    roomNumbersAvailable: ["101" ,"102" , "103" , "104" , "105" , "106"], //key to array contain a string
    roomNumbersBooked: [],
    roomType: "Queen", //intergers
    
    numberOfRoomsAvailable: function() { //lenght of the number of rooms available array
        return this.roomNumbersAvailable.length;  //return=intergers
       
   },
   
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length; //lenght-returns number of items in array as an interger
        
    },
   
    numberOfRooms: function() { //avail rooms + booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
       
    },
    bookRoom: function() { // only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
        var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]); 
    }  
    checkoutRoom: function() { // only book a room if one or more is available
        if (this.numberOfRoomsAvailable() > 0) { //select a random available room + return randomAvailRoom
        var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.roomNumbersBooked.unshift(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1)[0]);     
        
        //add the random room to roomNumbersBooked
        //I can use .push, .concat, .unshift, 
        }
    },
}; //hotel.bookRoom();   hotel.roomNumbersBooked; hotel.roomNumbersAvailable;
    
    
// Math.floor(5);
// 5
// > Math.random();
// 0.9384399524692626
// > Math.floor(2.89238492347);
// 2
// > Math.floor[Math.random()*10]
// undefined
// > Math.floor(Math.random()*10)
// 2
// > Math.floor(Math.random()*11)
// 9
// > Math.floor(Math.random()*11, 1);
// 2
// > Math.floor(Math.random()*11, +1);
// 10
// > Math.floor(Math.random());
//> Math.floor(9.9999999999999999);
//10
    
    
    
    
    
            
           
            
//             pop, splice, push
//         }
//     }
    
// };

//Sandbox:  //https://love2dev.com/blog/javascript-remove-from-array/

// var ar = [1, 2, 3, 4, 5, 6];
// ar.pop(); // returns 6
// console.log( ar ); // [1, 2, 3, 4, 5]
// var newAr = [];
// var removedItem = ar.pop();

//https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
//Math.floor()
//Math.Random() bw "0-1" exclusive
//Math.random()*10 bw "0-9.9" exclusive
//Math.ceil()
//Math.floor(Math.random()*10) bw "0-9.9" exclusive
//Math.floor(Math.random()*playArray.length) exculisive, not including the high number "5" - bw "0-4.9"
//Math.floor(Math.random()*playArray.length)
//playArray[Math.floor(Math.random()*playArray.length)]
// arrays contain Index's for each postion
// > var months = ["Jan" , "Feb" , "March" ,"April", "May", "June"]
// undefined
// > months.splice(3, 1);
// [ 'April' ]