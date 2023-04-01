# Cats Vs Dogs Connect 4 

Get four in a row to win! Classic Connect 4 with a cute theme of Cats vs Dogs.

**Link to project:** https://rdelucaconnect4.netlify.app/

![Screenshot of Cats Vs Dogs Connect 4](https://github.com/ReneeDeLuca/Connect4/RDConnect4.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Taking lessons learned from Tic Tac Toe tutorial and applying them to Connect4. 

- [tutorial used](https://www.codebrainer.com/blog/tic-tac-toe-javascript-game)

  ### Basic game behavior and board construction
    - board size 7x6 grid 
    - player1 and player2 swap, ~~hover~~, set 
    - array for win conditions and game over checks 
    - reset button/game end show/hide 

  ### Game logic 
    - instead of putting mark on the cell where the selection is made, changed logic to force the 'chip' to be placed in the next available open cell from the bottom 
    - needed to add 'hidden' bottom row (change grid to 7x7) in order to correct issue with logic not taking into account if bottom row was empty and player clicked on cell above that. 

  ### Theme - Cats vs Dogs
    - change player 'chips' from basic circles to cats and dogs 
      - ~~lesson needed - how to use emojis in HTML/CSS/JS~~ decided to go with background images 
      - ~~ [article found](https://dev.to/beumsk/how-to-add-emoji-s-in-your-website-using-html-css-or-javascript-4g6g) ~~
      - ~~hover and~~ set behaviors should show based on which player turn it is - see section below 
      - considering a future change to pull API random photo for each cell chosen. 
    - need to change game end message to match theme
      - API info for a random cat or dog photo (need third animal for draw), depending on which player wins

## Optimizations

### Elasticity 
    - original layout not viewable on mobile, media query not working with game board size 
    - reworked layout for a better feel in a vertical format (ie portrait view on a phone screen)

## Lessons Learned:

Flex grid - layout
Hover  
    - having an issue on multi input device (touchscreen laptop) where hover is sticky when using touch 
    - known issue with multi input devices 
      - there is currently no solution 
        - see https://drafts.csswg.org/mediaqueries/#hover > 7.3 example 47






