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

// Create array of hourly + daily sales
let hoursArray = ["6:00 AM", "7:00 AM", "8:00AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "Daily Total"];

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
    for (i = 0; i < (this.close - this.open); i++) {
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

// append the header of the table to the body
    let elRow = document.createElement('tr')
    elTable.appendChild(elRow) ;

    let elHourHeader = document.createElement('th') ;
        elRow.appendChild(elHourHeader) ;
        console.log(elHourHeader.innerText)
        elRow.appendChild(elHourHeader)

        for (let h = 0; h <= 14; h++) {
            let newText = document.createElement('td') ;
            newText.innerText = hoursArray[h] ;
            // console.log(newText.innerText)
            elRow.appendChild(newText)
        }

// create a row for the first instance
for (i = 0; i <= storeArray.length - 1; i++) {
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
        let newText = document.createElement('td') ;
        newText.innerText = storeArray[i].dailySales ;
        elRow.appendChild(newText)

}

// Total sales at each location
for (i =0; i < storeArray.length - 1; i++) {
    console.log("Daily cookies sold at " + storeArray[i].location + ": " + storeArray[i].dailySales) ;
}

// All locations aggregated
let dailyCookiesSoldAll = storeOne.dailySales + storeTwo.dailySales + storeThree.dailySales + storeFour.dailySales + storeFive.dailySales
console.log("Total cookies sold across all locations: " + dailyCookiesSoldAll)

// ***********************************************************************

// Dynamically populate new store instances using the form built in html

let form = document.getElementById('storeForm') 

// Forms access via names in dot.notation; elements can have elements and IDs; however, you would access that by the document.getElementByID

let storeName = form.location ;
let storeMinCust = form.minCust ;
let storeMaxCust = form.maxCust ; 
let storeAvgCookies = form.avgCookies ;

form.addEventListener('submit', function(event) {
    event.preventDefault() ;
    // You need to access the value, which you do by using .notation (.value)
    let newStore = new Store(storeName.value, 6, 20, storeMinCust.value, storeMaxCust.value, storeAvgCookies.value, 0)
    storeArray.push(newStore)
       
    Store.prototype.createAvgArray = function() {
        for (let i = newStore.open; i < newStore.close; i++){
            averageSales = Math.round((Math.floor(Math.random() * (newStore.maxCust - newStore.minCust + 1) )+ newStore.minCust) * newStore.avgCookies) ;
            newStore.avgCust.push(averageSales) ;
        }
    }
    
    Store.prototype.createDailySales = function() {
        for (i = 0; i < (newStore.close - newStore.open); i++) {
             newStore.dailySales += newStore.avgCust[i]
        }
    }


    // Now, append the new store instance to its own row
        let elRow = document.createElement('tr') ;
        elTable.appendChild(elRow) ; 
        
        let elTh = document.createElement('th') ; 
            elTh.innerText = storeArray[storeArray.length - 1].location ; 
            console.log(elTh.innerText)
            elRow.appendChild(elTh)

            console.log(newStore)
            console.log(storeArray.length)        

            for (let j = 0; j < 14; j++) {
                let newText = document.createElement('td') ;
                newText.innerText = storeArray[storeArray.length-1].avgCust[j] ;
                console.log(newText.innerText)
                elRow.appendChild(newText)
            }
            let newText = document.createElement('td') ;
            newText.innerText = storeArray[storeArray.length-1].dailySales ;
            elRow.appendChild(newText)})