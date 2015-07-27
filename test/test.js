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
      stdout.should.equal('Give me an N!\n Give me an A!\n Give me an M!\n Give me an E!\n')
      done();
    });
  });
  it('should remove spaces in multiple word names', function () {
    cp.execFile('./cheer.js', ['Jim Bob'], function (err, stdout) {
      stdout.should.equal('Give me a J!\n Give me an I!\n Give me an M!\n Give me a B!\n Give me an O!\n Give me a B!\n')
      done();
    })
  });
});
