var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

console.log('\n' +
  ' ' + board[0][0] + ' | ' + board[0][1] + ' | ' + board[0][2] + '\n' +
  ' ---------\n' +
  ' ' + board[1][0] + ' | ' + board[1][1] + ' | ' + board[1][2] + '\n' +
  ' ---------\n' +
  ' ' + board[2][0] + ' | ' + board[2][1] + ' | ' + board[2][2] + '\n');

var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['username', 'email'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  username: ' + result.username);
  console.log('  email: ' + result.email);
});