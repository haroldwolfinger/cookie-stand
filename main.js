// Creating an object using constructor notation 
// Added opening (6AM) and closing (8PM) hours

let Store = function(location, open, close, minCust, maxCust, avgCookies) {
    this.location = location;
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

// Now, let's create another object using constructor notation, this time to capture hourly sales
let Sales = function(s06, s07, s08, s09, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20) {
    this.s0600 = s06
    this.s0700 = s07
    this.s0800 = s08
    this.s0900 = s09
    this.s1000 = s10
    this.s1100 = s11
    this.s1200 = s12
    this.s1300 = s13
    this.s1400 = s14
    this.s1500 = s15
    this.s1600 = s16
    this.s1700 = s17
    this.s1800 = s18
    this.s1900 = s19
    this.s2000 = s20
}

let dailyCookiesOne = 0
let salesOne = new Sales(
    // s06
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s07
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s08
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s09
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s10
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s11
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s12
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s13
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s14
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s15
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s16
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s17
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s18
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s19
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies), 
    // s20
    Math.round((Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies))

let salesArray = []
salesArray.push(salesOne)
console.log(salesOne)

// Sum the hourly sales into one dailyCookiesOne variable
// The long way
    //dailyCookiesOne = salesOne.s0600 + salesOne.s0700 + salesOne.s0800 + salesOne.s0900 + salesOne.s1000 + salesOne.s1100 + salesOne.s1200 + salesOne.s1300 + salesOne.s1400 + salesOne.s1500 + salesOne.s1600 + salesOne.s1700 + salesOne.s1800 + salesOne.s1900 + salesOne.s2000

// Sum the hourly sales into one dailyCookiesOne variable using a FOR LOOP
for (i = salesOne.s0600; i < salesOne.s2000; i++) {
    dailyCookiesOne = dailyCookiesOne + i
}

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