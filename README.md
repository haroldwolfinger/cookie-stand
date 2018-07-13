Check out the actual site: https://haroldwolfinger.github.io/cookie-stand/

# cookie-stand
This repo contains work for lab-06 through lab-09

## CodePartners Initial Assignment Overview (Problem Domain)
[Here's the link to the initial problem domain laying out the project](https://github.com/CodePartnersMD/MD201-01/blob/master/lecture-06/lab/assets/support.md "Assignment Overview: Lab 6 - Problem Domain")

After creating the sales table for Pat's Crab Cookies, i took the project in a different direction and adjusted the business to Harold's h'alphabet hoagies.  I added a store location page with embedded maps, as well as an index page with basic info on the business.  The sales chart designed for Pat's was revised to project daily sales for a new Harold's offering, the ABC cookie.

### What i learned
I began learning how to populate html dynamically using JavaScript, how to create an object literal and object constructor (preferred), and i got to practice using FOR LOOPS. I also got to practice CSS, and one thing i did which helped me was to stage the html and css in codepen.  I really like codepen.  It was cool because i got to see immediately whether the css was working the way i wanted, instead of saving a file within Visual Studio Code and then reloading the page multiple times.  The only thing i didn't add to Codepen was my JavaScript, so it meant that tweaking the table's CSS took some time.

My main hurdle was populating html dynamically using JavaScript.  I felt utterly confused the first few days of trying to implement a solution.  How did i figure it out?  I asked a ton of questions, of Zach, of Davis, of Brittany and Patrice, and of stackoverflow and w3schools.  I still am not grounded in this like i want to be--which made rendering the footer also extremely difficult and time-consuming for me--but i can say i've made some progress.  It was fun to step away from the JavaScript code to the css, even though css isn't really my thing right now.  I'm proud of my little website.

## lab-06 (day01 branch)
The main.js file includes FOR LOOPs to calculate avgSales and daily cookies sold for each store location; however, content is not being pushed correctly to the sales.html file. Daily cookies sold are tallied correctly in the concatenated string within the console.log statements; they are listed first by each location, and then as the total aggregate sold.

### Technical Requirements
 - New repository properly set up with a license and README, and cloned to local machine
 - Working on a non-master branch, with regular commit history
 - Good use of Object Literals **(no constructors allowed today)**; one for each store model(at least 3); properties/values and methods are correctly constructed and given meaningful names
 - Main page meets requirements of the problem domain
 - Stores are correctly rendering as lists to the main page

## lab-07 (day02 branch)
The main.js file was revised from object literals to object constructors.  Table implemented.

### Technical Requirements
- Good use of a constructor function; style and syntax are correctly implemented
- Each cookie stand location should have a separate render() method that creates and appends its row to the table
- The header row and footer row are each created in their own stand-alone function
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

## lab-08 (day03 branch)
Added the form so that new locations can be added to the table.

### Technical Requirements / "Instructions"
Here's some of the steps you'll need to take, but not necessarily in this order:

- Add the necessary HTML to create the input form.
- Don't forget \<fieldset>!
- Use the constructor function as your guide to determine what input fields your form needs (hint: also consider what is passed in when creating instances!)
- Your JS will need an event listener and and event handler, and you may also want a variable to facilitate DOM access to the form.
- As we saw in class, the event handler should use the take the data from the input field, pass it into the constructor function, and create a new instance of a cookie stand that then appends to the table.
- Are you going to do any error correction on input? You probably should. Look at what kind of input validation is built in to HTML5.
- Write a stand-alone function to generate a footer row which will display the total number of cookies sold per hour for all locations. When a new store is added using your form, the totals in the footer row should update to include these new sales numbers.
- Build incrementally. Test frequently.
- Be attentive to overall code structure.
- This is a good point to refactor your code into smaller functions/methods if you have some huge functions going on. Remember that each function should do one thing, and then you can compose more complex behavior out of functions.
- Anywhere you have repeated chunks of code, maybe you can start to apply some DRY principles. Generally, once some chunk of code is appearing for a 3rd time or so, that's when you want to consider refactoring.
- When making code more DRY, look for repeated behaviors that act on different pieces of data. Put the behavior into a function that is declared with parameters to receive the unique data, and then replace the repeated code with the function called with the unique data in arguments.

## lab-09 (day04 branch)
Added .css to the pages, and created locations.html page with embedded iframe maps in addition to the welcome (index.html) page.

### Technical Requirements / "Instructions"
Continue working on the functionality of your **sales.html** page if you do not have it working 100% yet, including the row of totals across the bottom.

Here's your other tasks for today:

- Style up the public facing page (**index.html**) to make it appealing to customers. NOTE: You **must** use all of the images in the adjacent asset directory. Your client insists that you use Every. Single. One. (hw note: I did not use the salmon related images, but did take the "family" photo)
- Your public-facing **index.html** page should have all of the things you'd expect such a page to have for such a business: locations with addresses, hours open, contact information, and so us. Just do mockups of these things since this is not a real business, of course.
- You can also mock up references (either links or little sections on the **index.html** page) for things like About Us (company history and mission), Merchandise (sales of t-shirts, mugs, stickers, etc.), links to salmon events like the Salmon Days in Issaquah, etc.
- Apply a similar style to the **sales.html** page.