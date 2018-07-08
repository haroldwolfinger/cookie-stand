// Creating an object using constructor notation 
// Added opening (6AM) and closing (8PM) hours

let Store = function(location, open, close, minCust, maxCust, avgCookies, dailySales) {
    this.location = location;
    this.open = open; // use military time (only hour) for this
    this.close = close; // use military time (only hour) for this
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCust = [];
    this.avgCookies = avgCookies;
    this.dailySales = dailySales;
    }


// Create an array of stores
let storeArray = []

// **********************************************

// Create instances for each store
let storeOne = new Store("1st and Pike", 6, 20, 23, 65, 6.3, 0)
let storeTwo = new Store("SeaTac Airport", 6, 20, 3, 24, 1.2, 0)
let storeThree = new Store("Seattle Center", 6, 20, 11, 38, 3.7, 0)
let storeFour = new Store("Capitol Hill", 6, 20, 20, 38, 2.3, 0)
let storeFive = new Store("Alki", 6, 20, 2, 16, 4.6, 0)

storeArray.push(storeOne, storeTwo, storeThree, storeFour, storeFive)

// Create an averageSalesArray to capture the hourly sales
// let averageSalesArray = []

// Calculate the hourly sales and push them to the averageSalesArray, using a function called avgArray
Store.prototype.createAvgArray = function() {
    for (let i = this.open; i < this.close; i++){
        averageSales = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) )+ this.minCust) * this.avgCookies) ;
        this.avgCust.push(averageSales) ;
    }
}

storeOne.createAvgArray()
storeTwo.createAvgArray()
storeThree.createAvgArray()
storeFour.createAvgArray()
storeFive.createAvgArray()

// Create an averageDailySales to capture the sum of all hourly sales (the daily sales)

// Calculate the daily sales and store it
Store.prototype.createDailySales = function() {
    for (i = 0; i < this.avgCust.length; i++) {
         this.dailySales += this.avgCust[i]
    }
}

// Call the dailySales function
storeOne.createDailySales()
storeTwo.createDailySales()
storeThree.createDailySales()
storeFour.createDailySales()
storeFive.createDailySales()

// **********************************************************************************************
// Now, let's dynamically populate the HTML using the JavaScript variables
let elBody = document.getElementById('salesTable')
let elTable = document.createElement('table')

// setting a class to the table
elTable.setAttribute('id', 'id-table')

// appending the table to the body
elBody.appendChild(elTable)

// create a row for the first instance
for (i =0; i <= 5; i++) {
    let elRow = document.createElement('tr') ;
    elTable.appendChild(elRow) ; 
    
    let elTh = document.createElement('th') ; 
        elTh.innerText = storeArray[i].location ; 
        console.log(elTh.innerText)
        elRow.appendChild(elTh)

// loop through the hourly sales, adding the next hourly sales data to a new column 
    for (let j = 0; j < 14; j++) {
        let newText = document.createElement('td') ;
        newText.innerText = storeArray[i].avgCust[j] ;
        // console.log(newText.innerText)
        elRow.appendChild(newText)
    }
}


// Total sales at each location
console.log("Daily cookies sold at " + storeArray[0].location + ": " + storeArray[0].dailySales)
console.log("Daily cookies sold at " + storeTwo.location + ": " + storeTwo.dailySales)
console.log("Daily cookies sold at " + storeThree.location + ": " + storeThree.dailySales)
console.log("Daily cookies sold at " + storeFour.location + ": " + storeFour.dailySales)
console.log("Daily cookies sold at " + storeFive.location + ": " + storeFive.dailySales)

// All locations aggregated
let dailyCookiesSoldAll = storeOne.dailySales + storeTwo.dailySales + storeThree.dailySales + storeFour.dailySales + storeFive.dailySales
console.log("Total cookies sold across all locations: " + dailyCookiesSoldAll)

// ***********************************************************************
// Now, let's dynamically populate the HTML using the JavaScript variables
// access & change the FIRST text node (Duckett, JavaScript & jQuery, p215)

var itemOne = document.getElementById('one');
var elText = itemOne.firstChild.nodeValue; 
elText = elText.replace('Store 1', "Daily cookies sold at " + storeOne.location + ": " + storeOne.dailySales);
itemOne.firstChild.nodeValue = elText;

// access & change the SECOND-FIFTH text node
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('Store 2', "Daily cookies sold at " + storeTwo.location + ": " + storeTwo.dailySales);
itemTwo.firstChild.nodeValue = elText;

var itemThree = document.getElementById('three');
var elText = itemThree.firstChild.nodeValue;
elText = elText.replace('Store 3', "Daily cookies sold at " + storeThree.location + ": " + storeThree.dailySales);
itemThree.firstChild.nodeValue = elText;

var itemFour = document.getElementById('four');
var elText = itemFour.firstChild.nodeValue;
elText = elText.replace('Store 4', "Daily cookies sold at " + storeFour.location + ": " + storeFour.dailySales);
itemFour.firstChild.nodeValue = elText;

var itemFive = document.getElementById('five');
var elText = itemFive.firstChild.nodeValue;
elText = elText.replace('Store 5', "Daily cookies sold at " + storeFive.location + ": " + storeFive.dailySales);
itemFive.firstChild.nodeValue = elText;

// access & change the TOTAL text node
var itemTotal = document.getElementById('total');
var elText = itemTotal.firstChild.nodeValue;
elText = elText.replace('Total cookies sold across all locations', "Daily cookies sold across all the above locations: " + dailyCookiesSoldAll);
itemTotal.firstChild.nodeValue = elText;