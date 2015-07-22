var prompt = require('prompt');

var an = [A, E, F, H, I, L, M, N, O, R, S, X];
var a = [B, C, D, G, J, K, P, Q, T, U, V, W, Y, Z];

prompt.get('name', function (err, result) {
  printHelloMessage(result.name);
});

function printCheer() {
  console.log(name);
}


module.exports = function () {
    printCheer();
    process.exit(1);
  }
