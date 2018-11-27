var library = {  //var=name, method is a function inside of an object
    name: "CareerDevs Library",  //key, value, pair aka properties 
    ratiing: 5.0, //decimals=floating point values
    bookRate: 125.00,
    bookTitlesAvailable: ["Dune" ,"1984" , "Frankenstein" , "The War of the Worlds" , "The Time Machine" , "Alien"], //key to array contain a string
    bookTitlesOut: [],
    bookType: "Sci Fi", //intergers
    
    numberOfBooksAvailable: function() { //lenght of the number of rooms available array
        return this.bookTitlesAvailable.length;  //return=intergers
       
   },
   
    numberOfbookTitlesOut: function() {
        return this.bookTitlesOut.length; //lenght-returns number of items in array as an interger
        
    },
   
    numberOfBooks: function() { //avail rooms + booked rooms
        return this.bookTitlesAvailable.length + this.bookTitlesOut.length;
       
    },
    titlesOut: function() { // only book a room if one or more is available
        if (this.bookTitlesAvailable() > 0) { //select a random available room + return randomAvailRoom
        var randomBook = this.bookTitlesAvailable[Math.floor(Math.random()*this.bookTitlesAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.bookTitlesOut.unshift(this.bookTitlesAvailable.splice(this.bookTitlesAvailable.indexOf(randomRoom), 1)[0]); 
    }  
    checkoutBook: function() { // only book a room if one or more is available
        if (this.bookTitlesAvailable() > 0) { //select a random available room + return randomAvailRoom
        var checkoutRandomBook = this.bookTitlesAvailable[Math.floor(Math.random()*this.bookTitlesAvailable.length)];
        //list.splice( list.indexOf("foo"), 1); returns the position of the item in the array
        //remove the booked room from roomNumbersAvailable and add it to roomNumbersBooked
        this.bookTitlesOut.unshift(this.bookTitlesAvailable.splice(this.bookTitlesAvailable.indexOf(randomBook), 1)[0]);  