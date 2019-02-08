# Tournament Tracker

We are creating an application to track players and the results of the games they play against one another.

## Base

Create an unordered list of players. It should be possible to add a new player to this list (using an input and submit button).

Upon refresh, newly added players should still appear on the DOM (they should be stored on the server).

## Stretch###################################################

### Add Games

It should be possible to record games. A user should be able to select two players and enter their scores. The players and scores should be added to a table.

### Determine Winner

In addition to storing the values added by the user, the server should use the scores to determine who won the game and store that information as well. The winner should also be displayed in the table.

playerName:
opponentName:
playerScore:
opponentScore:
winner (calculated on the server)

![base mode gif](base-mode.gif)

### Clear game history

For new tournaments to start, a button should be available to a user to allow them to remove the entire history of all games played. This would be bad to do on accident, so an alert should pop up to confirm if the user is sure they would like to do this.

### Sort names

Names in the dropdowns should appear in alphabetical order.

### Validation

Games should return an error if the opponent or player isn't in the list.

### Delete single game

If a game is entered by mistake, it should be possible to delete any of the games (it should stay deleted after refresh).
