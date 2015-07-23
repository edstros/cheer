#!/usr/bin/env node

var includes = require('lodash/collection/includes')
var prompt = require('prompt');

prompt.get('name', function (err, result) {
  printCheer(result.name);
});

function printCheer(name) {
  console.log('All right, it\'s ' + name + '!');

  var letters = name.toUpperCase().split('');
  //get rid of any whitespace
  letters = letters.filter(function (str) {
    return /\S/.test(str);
  });
  for (var i = 0; i < letters.length; i++)


  /*var anLetters = ['AEFHILMNORSX'];
     if(var article = letters[i] == _.includes(anLetters, letters[i]){
           return 'an';
           } else {
           return 'a';
           }
          );*/

    process.stdout.write('Give me a ' + letters[i] + '!\n'); //more direct way to write to the console;
}
