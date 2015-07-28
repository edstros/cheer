#!/usr/bin/env node

var should = require('chai').should();
var cp = require('child_process');



describe('Tests', function () {
  it('truthyness', function () {
    true.should.equal(true);
  });
});
describe.only('CLI', function () {
  it('should handle lowercase letters', function (done) {
    cp.execFile('./cheer.js', ['name'], function (err, stdout) {
      stdout.should.equal('Give me an N!\nGive me an A!\nGive me an M!\nGive me an E!\n')
      done();
    });
  });
  it('should remove spaces in multiple word names', function (done) {
    cp.execFile('./cheer.js', ['Jim Bob'], function (err, stdout) {
      stdout.should.equal('Give me a J!\nGive me an I!\nGive me an M!\nGive me a B!\nGive me an O!\nGive me a B!\n')
      done();
    })
  });
});
