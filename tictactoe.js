var prompt = require('prompt');
const exec = require('child_process').exec

var currentPlayer = 1;
var board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

var checkBoard = function() {
    // check rows 
    if ((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O')) {
        return true;
    } else if ((board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O')) {
        return true;
    } else if ((board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') || (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')) {
        return true;
    }
    // check columns
    else if ((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O')) {
        return true;
    } else if ((board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O')) {
        return true;
    } else if ((board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')) {
        return true;
    }
    // check columns
    else if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')) {
        return true;
    } else if ((board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') || (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')) {
        return true;
    } else {
        return false;
    }
}

var gameplay = function() {
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
    prompt.get(['row', 'column', 'Letter'], function(err, result) {
        // Check to see if spot is empty
        if (result.row < 3 && result.row < 3 && !board[result.row][result.column]) {
            // If it is then set the value to the letter 
            board[result.row][result.column] = result.Letter.toUpperCase();
            // Check to see if person won... 
            if (checkBoard()) {
                console.log(`Player ${currentPlayer} won!...`);
                console.log('\n' +
                    ' ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2] + '\n' +
                    ' ---------\n' +
                    ' ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2] + '\n' +
                    ' ---------\n' +
                    ' ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + '\n');
                console.log('Play again?');
                prompt.start();
                prompt.get(['Y/N'], function(err, result) {
                    console.log(result['Y/N']);
                    if (result['Y/N'].toUpperCase() === 'Y') {
                        currentPlayer = 1;
                        board = [
                            ['', '', ''],
                            ['', '', ''],
                            ['', '', '']
                        ];
                        gameplay();
                    } else {
                        process.exit();
                    }
                });
            } else {
                // Change player to next player
                currentPlayer === 1 ? currentPlayer = 2 : currentPlayer = 1;
                gameplay();
            }
        }
        // else throw error, and start again
        else {
            console.log('Sorry, try again...');
            gameplay();
        }
    });
}

gameplay();


