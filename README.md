# etch-a-sketch
This project is a part of The Odin Project's curriculum. This was great practice for DOM manipulation since we were asked not to create the 16x16 div in html. The instructions said to use float/clear, inline-block, CSS Grid, or flexbox, and I chose to make the divs appear as a grid using flexbox. In addition to DOM manipulation using event listeners, I was also able to utilize for loops and if/else statements in my functions. 

I added a colored pen option, but it would recolor a box that was already colored. I believe that would be an easy fix with an if statement (pseudocode: if box is already colored then do not add new background color). 

Toggling the pen on and off was an interesting add: users can click in the grid to toggle the pen if they want to stop drawing. This usually happens with etch-a-sketch where unintentionally lines are made when trying to move out of the grid. 

At the time of writing, even though the placeholder text says 1-100 in terms of the grid size, users can input numbers > 100. Large grid sizes make the boxes too small for the users to view; this will require yet another quick fix (pseudocode: if user input for grid size is less than 1 or greater than 100, then prompt user to enter a value within that range).