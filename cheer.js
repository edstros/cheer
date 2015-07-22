#!/usr/bin/env node

var prompt = require('prompt');

prompt.get('name', function (err, result) {
  printCheer(result.name);
});

function printCheer(name) {
     console.log('Hello, ' + name + '!');
    var options = {
      encoding: 'utf8'
    };
    var letters = name.split('');
    for (var i = 0; i < letters.length; i++)
      process.stdout.write('Give me a ' + letters[i] + '!\n'); //more direct way to write to the console;

    }
