# Connect4 
Taking lessons learned from Tic Tac Toe tutorial and applying them to Connect4
  -tutorial //https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
  - game board construction and behavior
    -increase board size to 7x6 grid
  - original player1 and player2 swap, hover, set (changed both to circles instead of circles and crosses)
  - create array for win conditions and game over checks
  - reset button/game end show/hide
Things to change -
  COMPLETE - game logic - instead of putting mark on the cell where the selection is made, need to have logic that will force the 'chip' to be placed in the next available open cell from the bottom
    - needed to add 'hidden' bottom row (change grid to 7x7) in order to correct issue with logic not taking into account if bottom row was empty and player clicked on cell above that. 
  -Theme - Cats vs Dogs
    - change player 'chips' from basic circles to cats and dogs 
      - lesson needed - how to use emojis in HTML/CSS/JS (article found: //https://dev.to/beumsk/how-to-add-emoji-s-in-your-website-using-html-css-or-javascript-4g6g)
      - hover and set behaviors should show based on which player turn it is
    - change game end message to match theme
      - pull API info to insert a random cat or dog photo (need third animal for draw), depending on which player wins
  
