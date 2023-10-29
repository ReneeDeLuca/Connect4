# Cats Vs Dogs Connect 4

Get four in a row to win! Classic Connect 4 with a cute theme of Cats vs Dogs.

**Link to project:** https://catsvsdogs.reneedeluca.dev

![Screenshot of Cats Vs Dogs Connect 4](https://github.com/ReneeDeLuca/Connect4/blob/main/RDConnect4.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Taking lessons learned from Tic Tac Toe tutorial and applying them to Connect 4.

- [tutorial used](https://www.codebrainer.com/blog/tic-tac-toe-javascript-game)

  ### Basic game behavior and board construction

  - board size 7x6 grid
  - player1 and player2 swap, ~~hover~~, set
  - array for win conditions and game over checks
  - reset button/game end show/hide

  ### Game logic

  - when thinking about how Connect 4 is played in person, the player drops the chip from the top of the game board after hovering over the column they eventually choose. I didn't want to take the player out of the experience of the game by using an alert if they clicked on a square not directly above an existing chip or by not allowing the player to select anywhere in the column they want to drop the chip.
  - instead of putting the mark on the cell where the selection is made (ie Tic Tac Toe), changed logic to force the 'chip' to 'drop' into the next available open cell from the bottom
  - needed to add 'hidden' bottom row (change grid to 7x7) in order to correct issue with logic not taking into account if bottom row was empty and player clicked on cell above that.

  ### Theme - Cats vs Dogs

  - change player 'chips' from basic circles to picutres of a cat and a dog
    - background images for cat and dog themed 'chips', will change to API or array in the future to randomize images on click
    - ~~hover and~~ set behaviors should show based on which player turn it is - see section below
  - need to change game end message to match theme
    - API info for a random cat or dog images (need third animal for draw), depending on which player wins or instead possibly happy cat/sad dog & sad cat/happy dog combo of images.

## Optimizations

### Elasticity

- original layout not viewable on mobile, media query not working with flex grid/game board size (boxes too small)
- reworked layout for a better feel in a vertical format (ie portrait view on a phone screen)

## Lessons Learned/Reinforced:

- Event listeners
- Conditional statements
- Array Methods
- Player switching
- Flex grid - layout
- Hover
  - having an issue on multi input device (touchscreen laptop) where hover is sticky when using touch
  - known issue with multi input devices
  - there is currently no solution
  - see https://drafts.csswg.org/mediaqueries/#hover > 7.3 example 47
