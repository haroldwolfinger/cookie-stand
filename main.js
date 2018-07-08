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

// **********************************************
// *** Beginning of code for first store instance


// Create an instance of the first store
let storeOne = new Store("1st and Pike", 6, 20, 23, 65, 6.3, 0)

// Push the instance of the first store
let storeArray = [storeOne]
console.log(storeOne)

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
console.log(storeOne.avgCust)

// Create an averageDailySales to capture the sum of all hourly sales (the daily sales)

// Calculate the daily sales and store it
Store.prototype.createDailySales = function() {
    for (i = 0; i < this.avgCust.length; i++) {
         this.dailySales += this.avgCust[i]
    }
}

// Call the dailySales function
storeOne.createDailySales()
console.log("Daily sales: " + storeOne.dailySales)


// **********************************************************************************************
// Now, let's dynamically populate the HTML for the first instance using the JavaScript variables
let elBody = document.getElementById('salesTable')
let elTable = document.createElement('table')

// setting a class to the table
elTable.setAttribute('id', 'id-table')

// appending the table to the body
elBody.appendChild(elTable)

// create a row for the first instance
let elRow = document.createElement('tr') ;
    elTable.appendChild(elRow) ; 
    
// create the row header for the first instance (the location)
let elTh = document.createElement('th') ; 
    elTh.innerText = storeOne.location ; 
    console.log(elTh.innerText)
    elRow.appendChild(elTh)

// loop through the hourly sales, adding the next hourly sales data to a new column 
for (let i = 0; i < 14; i++) {
    // Question for above: why isn't putting a variable, such as i = storeOne.open; i < storeOne.close; i++, working? It's only working when i hardcode in 0 and 14
    let newText = document.createElement('td') ;
    newText.innerText = storeOne.avgCust[i] ;
    // console.log(newText.innerText)
    elRow.appendChild(newText)
}

// *** End of code for first store instance
// ****************************************

// Creating an object for the second, third, fourth, and fifth store
let storeTwo = new Store("SeaTac Airport", 6, 20, 3, 24, 1.2, 0)
storeArray.push(storeTwo)
storeTwo.createAvgArray()
storeTwo.createDailySales()

// Create and insert row, row header, and hourly sales data for second instance
    elRow = document.createElement('tr') ;
    elTable.appendChild(elRow) 

    elTh = document.createElement('th') ; 
    elTh.innerText = storeTwo.location ; 
    elRow.appendChild(elTh)

for (let i = 0; i < 14; i++) {
    let newText = document.createElement('td') ;
    newText.innerText = storeTwo.avgCust[i] ;
    elRow.appendChild(newText)
}
// ***storeThree
let storeThree = new Store("Seattle Center", 6, 20, 11, 38, 3.7, 0)
storeArray.push = [storeThree]
storeThree.createAvgArray()
storeThree.createDailySales()

// Create and insert row, row header, and hourly sales data for third instance
    elRow = document.createElement('tr') ;
    elTable.appendChild(elRow)

    elTh = document.createElement('th') ;
    elTh.innerText = storeThree.location ;
    elRow.appendChild(elTh)

for (let i = 0; i < 14; i++) {
    let newText = document.createElement('td') ;
    newText.innerText = storeThree.avgCust[i] ;
    elRow.appendChild(newText)
}
// ***storeFour and storeFive
let storeFour = new Store("Capitol Hill", 6, 20, 20, 38, 2.3, 0)
storeArray = [storeFour]
storeFour.createAvgArray()
storeFour.createDailySales()

    elRow = document.createElement('tr') ;
    elTable.appendChild(elRow)

    elTh = document.createElement('th') ;
    elTh.innerText = storeFour.location ;
    elRow.appendChild(elTh)

for (let i = 0; i < 14; i++) {
    let newText = document.createElement('td') ;
    newText.innerText = storeFour.avgCust[i] ;
    elRow.appendChild(newText)
}

let storeFive = new Store("Alki", 6, 20, 2, 16, 4.6, 0)
storeArray = [storeFive]
storeFive.createAvgArray()
storeFive.createDailySales()
    
    elRow = document.createElement('tr') ;
    elTable.appendChild(elRow)

    elTh = document.createElement ('th') ;
    elTh.innerText = storeFive.location ;
    elRow.appendChild(elTh)

for (let i = 0; i < 14; i++) {
    let newText = document.createElement('td') ;
    newText.innerText = storeFive.avgCust[i] ;
    elRow.appendChild(newText)
}

// Total sales at each location
console.log("Daily cookies sold at " + storeOne.location + ": " + storeOne.dailySales)
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