# Connect4 
Taking lessons learned from Tic Tac Toe tutorial and applying them to Connect4. The idea is to create a Cats vs Dogs themed Connect 4 game.

## Tic Tac Toe 
  - [tutorial used](https://www.codebrainer.com/blog/tic-tac-toe-javascript-game)
   
## Things to change 

  ### Basic game behavior and board construction
    - increase board size to 7x6 grid COMPLETE
    - original player1 and player2 swap, hover, set (changed both to circles instead of circles and crosses) COMPLETE
    - create array for win conditions and game over checks **COMPLETE**
    - reset button/game end show/hide **COMPLETE**

  ### Game logic 
    - instead of putting mark on the cell where the selection is made, need to have logic that will force the 'chip' to be placed in the next available open cell from the bottom COMPLETE
    - needed to add 'hidden' bottom row (change grid to 7x7) in order to correct issue with logic not taking into account if bottom row was empty and player clicked on cell above that. **COMPLETE**
    - 
  ### Theme - Cats vs Dogs
    - change player 'chips' from basic circles to cats and dogs **COMPLETE**
      - ~~lesson needed - how to use emojis in HTML/CSS/JS~~ decided to go with background images 
        - considering a future change to pull API random photo for each cell chosen. 
      - ~~ [article found](https://dev.to/beumsk/how-to-add-emoji-s-in-your-website-using-html-css-or-javascript-4g6g) ~~
      - ~~hover and~~ set behaviors should show based on which player turn it is - see Bugs section below **COMPLETE-ISH**
    - change game end message to match theme
      - pull API info to insert a random cat or dog photo (need third animal for draw), depending on which player wins

  ### Elasticity 
    - not viewable on mobile, looks terrible. COMPLETE
    - rework layout - COMPLETE

## Bugs
  ### Hover
    - having an issue on multi input device (touchscreen laptop) where hover is sticky when using touch 
    - known issue with multi input devices 
      - there is currently no solution 
        - see https://drafts.csswg.org/mediaqueries/#hover > 7.3 example 47
  
