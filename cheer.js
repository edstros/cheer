#!/usr/bin/env node

/*
var prompt = require('prompt');
prompt.get('name', function (err, result) {
  printCheer(result.name);
});
*/

/*function printCheer(name) {*/
//  console.log('All right, it\'s ' + name.toUpperCase() + '!'); //separate the letters in the name

  var args = [];

  for (var i = 2; i < process.argv.length; i++) {
    args.push(process.argv[i]);

    var letters = args.toString().toUpperCase().split('');
    letters = letters.filter(function (str) { //filter removes the white spaces returned by indexOf
      return str.indexOf(' ');
    });
    for (var i = 0; i < letters.length; i++) { //take each letter in the name and loop through the test array then print result
      if (['A', 'E', 'F', 'H', 'I', 'L', 'M', 'N', 'O', 'R', 'S', 'X'].indexOf(letters[i]) !== -1) {
        process.stdout.write('Give me an ' + letters[i] + '!\n');
      } else {
        process.stdout.write('Give me a ' + letters[i] + '!\n');
      };
    }
  }
//}
