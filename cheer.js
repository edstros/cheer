#!/usr/bin/env node
 //var includes = require('lodash/collection/includes')
var prompt = require('prompt');
prompt.get('name', function (err, result) {
  printCheer(result.name);
});

function printCheer(name) {
  console.log('All right, it\'s ' + name + '!');
  var letters = name.toUpperCase().split('');
  //filter removes the white spaces
  //returned by indexOf
  letters = letters.filter(function (str) {
    return str.indexOf(' ');
  });
  for (var i = 0; i < letters.length; i++) {
    if (['A', 'E', 'F', 'H', 'I', 'L', 'M', 'N', 'O', 'R', 'S', 'X'].indexOf(letters[i]) !== -1) {
      process.stdout.write('Give me an ' + letters[i] + '!\n');
    } else {
      process.stdout.write('Give me a ' + letters[i] + '!\n');
    };
  }
}
