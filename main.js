// Creating an object using constructor notation 
// Added opening (6AM) and closing (8PM) hours

let Store = function(location, open, close, minCust, maxCust, avgCookies) {
    this.location = name;
    this.open = open;
    this.close = close;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
}

// Create an instance of the first store
let storeOne = new Store("1st and Pike", 6, 20, 23, 65, 6.3)

// Push the instance of the first store
let storeArray = []
storeArray.push(storeOne)
console.log(storeOne)

// Now, let's create a FOR LOOP to calculate each hour of sales per day from opening to close    
let hourlySales;
let dailyCookiesOne = 0;
for (hourlySales = storeOne.open; hourlySales < storeOne.close; hourlySales++) { 
    // Calculate avgSales during a specific hour
    let avgSales = Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies);
    console.log(hourlySales + "'o clock sales (during the hour): " + avgSales)
    // Calculate running tally of cookies sold
    dailyCookiesOne = dailyCookiesOne + avgSales
    console.log("Daily cookies sold as of " + (hourlySales+1) + " are this number: " + dailyCookiesOne)
    }
console.log("Daily cookies sold at " + storeOne.location + ": " + dailyCookiesOne)

// Creating an object for the second, third, fourth, and fifth store
let storeTwo = new Store("SeaTac Airport", 6, 20, 3, 24, 1.2)
storeArray.push(storeTwo)
console.log(storeTwo)

// Adding the FOR LOOP to calculate avgSales and dailyCookies sold
// Note: when i first tried to *copy* the code from storeOne, i received an error: i couldn't declare the same variable twice.  I realized that i could simplify the code from storeOne by just using i as the FOR LOOP variable, but i still had an issue with the dailyCookies sold.  Zach suggested eliminating the word "let", and restarting the count at zero; however, i decided to create separate counts for each store so that i keep totals from each location and enable me to tally my entire empire each day.

let dailyCookiesTwo = 0;
for (let i = storeTwo.open; i < storeTwo.close; i++) { 
    let avgSales = Math.round((Math.floor(Math.random() * (storeTwo.maxCust - storeTwo.minCust + 1) ) + storeTwo.minCust) * storeTwo.avgCookies);
    console.log(i + "'o clock sales (during the hour): " + avgSales)
    dailyCookiesTwo = dailyCookiesTwo + avgSales
    console.log("Daily cookies sold as of " + (i+1) + " are this number: " + dailyCookiesTwo)
    }
console.log("Daily cookies sold at " + storeTwo.location + ": " + dailyCookiesTwo)

let storeThree = new Store("Seattle Center", 6, 20, 11, 38, 3.7)
storeArray.push(storeThree)
console.log(storeThree)

let dailyCookiesThree = 0;
for (let i = storeThree.open; i < storeThree.close; i++) {
    let avgCookies = Math.round((Math.floor(Math.random() * (storeThree.maxCust - storeThree.minCust + 1) ) + storeThree.minCust) * storeThree.avgCookies);
    dailyCookiesThree = dailyCookiesThree + avgCookies
}
console.log("Daily cookies sold at " + storeThree.location + ": " + dailyCookiesThree)

let storeFour = new Store("Capitol Hill", 6, 20, 20, 38, 2.3)
storeArray.push(storeFour)
console.log(storeFour)

let dailyCookiesFour = 0;
for (i = storeFour.open; i < storeFour.close; i++) {
    let avgCookies = Math.round((Math.floor(Math.random() * (storeFour.maxCust - storeFour.minCust + 1) ) + storeFour.minCust) * storeFour.avgCookies);
    dailyCookiesFour = dailyCookiesFour + avgCookies
}
console.log("Daily cookies sold at " + storeFour.location + ": " + dailyCookiesFour)

let storeFive = new Store("Alki", 6, 20, 2, 16, 4.6)
storeArray.push(storeFive)
console.log(storeFive)

let dailyCookiesFive = 0;
for (i = storeFive.open; i <storeFive.close; i++) {
    let avgCookies = Math.round((Math.floor(Math.random() * (storeFive.maxCust - storeFive.minCust + 1) ) + storeFive.minCust) * storeFive.avgCookies);
    dailyCookiesFive = dailyCookiesFive + avgCookies
}
console.log("Daily cookies sold at " + storeFive.location + ": " + dailyCookiesFive)

// Total sales at each location
console.log("Daily cookies sold at " + storeOne.location + ": " + dailyCookiesOne)
console.log("Daily cookies sold at " + storeTwo.location + ": " + dailyCookiesTwo)
console.log("Daily cookies sold at " + storeThree.location + ": " + dailyCookiesThree)
console.log("Daily cookies sold at " + storeFour.location + ": " + dailyCookiesFour)
console.log("Daily cookies sold at " + storeFive.location + ": " + dailyCookiesFive)

// All locations aggregated
let dailyCookiesSoldAll = dailyCookiesOne + dailyCookiesTwo + dailyCookiesThree + dailyCookiesFour + dailyCookiesFive
console.log("Total cookies sold across all locations: " + dailyCookiesSoldAll)

// ***********************************************************************
// Now, let's dynamically populate the HTML using the JavaScript variables

// access & change the FIRST text node (Duckett, JavaScript & jQuery, p215)

var itemOne = document.getElementById('one');
var elText = itemOne.firstChild.nodeValue; 
elText = elText.replace('Store 1', "Daily cookies sold at " + storeOne.location + ": " + dailyCookiesOne);
itemOne.firstChild.nodeValue = elText;

// access & change the SECOND-FIFTH text node
var itemTwo = document.getElementById('two');
var elText = itemTwo.firstChild.nodeValue;
elText = elText.replace('Store 2', "Daily cookies sold at " + storeTwo.location + ": " + dailyCookiesTwo);
itemTwo.firstChild.nodeValue = elText;

var itemThree = document.getElementById('three');
var elText = itemThree.firstChild.nodeValue;
elText = elText.replace('Store 3', "Daily cookies sold at " + storeThree.location + ": " + dailyCookiesThree);
itemThree.firstChild.nodeValue = elText;

var itemFour = document.getElementById('four');
var elText = itemFour.firstChild.nodeValue;
elText = elText.replace('Store 4', "Daily cookies sold at " + storeFour.location + ": " + dailyCookiesFour);
itemFour.firstChild.nodeValue = elText;

var itemFive = document.getElementById('five');
var elText = itemFive.firstChild.nodeValue;
elText = elText.replace('Store 5', "Daily cookies sold at " + storeFive.location + ": " + dailyCookiesFive);
itemFive.firstChild.nodeValue = elText;

// access & change the TOTAL text node
var itemTotal = document.getElementById('total');
var elText = itemTotal.firstChild.nodeValue;
elText = elText.replace('Total cookies sold across all locations', "Daily cookies sold across all the above locations: " + dailyCookiesSoldAll);
itemTotal.firstChild.nodeValue = elText;