#!/usr/bin/env node

var fs = require('fs'); //file system, needs to be required. part of node but not baked in
var prompt = require('prompt');



/*
prompt.override = argv;
prompt.message = prompt.delimeter = '';
prompt.start();
*/

prompt.get('name', function (err, result) {
  printCheer(result.name);
});


function printCheer(name) {
  console.log('Hello, ' + name + '!');
    var options = {
      encoding: 'utf8'
    };


  process.stdout.write('Hello ' + name + ' Again!\n'); //more direct way to write to the console;

}

/*
app should:
- prompt for a name input
- split the on the letters of the name
- make the letters uppercase
- concat 'Give me ' + a/an 'letter'
- new line for each letter
*/
