# Week One Project

## Project- Build out the website!

I've chosen to build my website around an eco-friendly campsite opening in Spain.

I generally found the task of creating the structure of the website OK, and good fun!

### What went well

I really got stuck into this task and had fun doing it.
I was able to pull from my notes, and felt comfortable writing the code, and using the tools such as VSCode and git.
I was _really_ pleased with the eventual style of the web page!

### Sticky points

I had to look up a few things such as certain CSS attributes, and JavaScript syntax.
I wrote a ridiculously verbose 'if statement', and got help making it more streamlined with help from ChatGPT.

## Further Detail

### Styling

There were a few pointers I borrowed, and new things I learned from the example SpaceY website.
I've not used the 'gap' CSS attribute before, and I found that useful for directing space exactly where I needed it in the header, between the heading and the nav.
I read this to get some further info: https://w3things.com/blog/margin-vs-padding-vs-gap/

I quite liked how the header stayed fixed, and thought the translucent background it had was a nice effect on the page.

I struggled to find a happy solution to the 'width' of my header. Upon 'inspecting' that element, the padding shows on the top, left, and bottom but I can't see the right edge of the headers padding.
Maybe this is characteristic of it taking up 100% of the page width.

## Anchors

I edited the styling of the buttons in the header, namely giving them a distinct look with a different colour and made them more noticeable with a border.

I got some pseudo-classes working for the anchors, using 'hover' and 'active'.

Through the page, I adjusted the 'font-weight' attribute down to give my text a bit more of a sleek and modern look.

I centered the pages <a> elements over their respective text boxes, with help from here: https://www.codeguage.com/courses/css/transformations-translation

The footer is very basic. Keeping it simple!

### JavaScript

**Changing background images**

As a stretch, I attempted to add some buttons to allow the user to change the background images they see.

Firstly, this discussion let me design the buttons on the page how I wanted them: https://stackoverflow.com/questions/38320878/circle-button-css

I found the correct syntax I needed to access the backgroundImage property here: https://www.w3schools.com/cssref/tryit.php?filename=trycss_js_background-image

I wrote out some javascript which declared variables attached to the buttons and page sections, added 'mouse over' colour changes, and finally changed the background images of the sections. This worked great!

**If-statements for mouseover events**

I really had to spend a lot of time fiddling around with an 'if' statement to try to keep the button colours as they should be, depending on which image was set.

I used ChatGPT to look over the code I had written (which I've retained in app.js but commented out). It suggested a tidier if-statement which I ended up using, however, it wasn't complete!

I had to add an extra 'else if' to it's suggested code, to make sure the colours were correct in all states.

Following that I duplicated the code so that each section had buttons, and the buttons changed the background (I left out duplicating the 'mouseover' code until we do functions!)
