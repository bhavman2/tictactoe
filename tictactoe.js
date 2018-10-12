var prompt = require('prompt');

var currentPlayer = 1;
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

var gameplay = function () {
  // Show current board
  console.log('\n' +
    ' ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2] + '\n' +
    ' ---------\n' +
    ' ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2] + '\n' +
    ' ---------\n' +
    ' ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + '\n');

  //Prompt current user to start
  console.log(`Player ${currentPlayer} start!`);
  prompt.start();
  prompt.get(['row', 'column', 'Letter'], function (err, result) {
    // Check to see if spot is empty
    // If it is then set the value to the letter 
    // else throw error, and start again
    if (!board[result.row][result.column]) {
      board[result.row][result.column] = result.Letter;

      // Check to see if person won... 

      // Change player to next player
      currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
      gameplay();
    } else {
      console.log('Sorry, that spot is taken. Try again...');
      gameplay();
    }
  });
}

gameplay();
