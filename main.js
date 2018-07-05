// Creating an object for the first store, and then displaying
// Added opening (6AM) and closing (8PM) hours

let storeOne = {
    location:"1st and Pike",
    open:6,
    close:20,
    minCust:23,
    maxCust:65,
    avgCookies:6.3
};
console.log(storeOne)

// Adding a math.random function to come up with avgSales for 6AM-7AM
// let avgSales = (Math.floor(Math.random() * (storeOne.maxCust - storeOne.minCust + 1) )+ storeOne.minCust) * storeOne.avgCookies;
// console.log(avgSales)

//     // Round to the nearest cookie
//     console.log("6AM: " + Math.round(avgSales) + " cookies sold")

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

let storeTwo = {
    location:"SeaTac Airport",
    open:6,
    close:20,
    minCust:3,
    maxCust:24,
    avgCookies:1.2
};
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

let storeThree = {
    location:"Seattle Center",
    open:6,
    close:20,
    minCust:11,
    maxCust:38,
    avgCookies:3.7
};
let dailyCookiesThree = 0;
for (let i = storeThree.open; i < storeThree.close; i++) {
    let avgCookies = Math.round((Math.floor(Math.random() * (storeThree.maxCust - storeThree.minCust + 1) ) + storeThree.minCust) * storeThree.avgCookies);
    dailyCookiesThree = dailyCookiesThree + avgCookies
}
console.log("Daily cookies sold at " + storeThree.location + ": " + dailyCookiesThree)

let storeFour = {
    location:"Capitol Hill",
    open:6,
    close:20,
    minCust:20,
    maxCust:38,
    avgCookies:2.3
};
let dailyCookiesFour = 0;
for (i = storeFour.open; i < storeFour.close; i++) {
    let avgCookies = Math.round((Math.floor(Math.random() * (storeFour.maxCust - storeFour.minCust + 1) ) + storeFour.minCust) * storeFour.avgCookies);
    dailyCookiesFour = dailyCookiesFour + avgCookies
}
console.log("Daily cookies sold at " + storeFour.location + ": " + dailyCookiesFour)
  
let storeFive = {
    location:"Alki",
    open:6,
    close:20,
    minCust:2,
    maxCust:16,
    avgCookies:4.6
};
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
