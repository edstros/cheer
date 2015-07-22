function Cheer(type) {
  this.toUpperCase = true;
  this.type = type;
  this.health = 1;
  //lets animal accept a type (ie 'cat', 'dog')
  //pass the parameter in the function
};
Animal.prototype.beCute = function () {
  this.isCute = true;
  //so that beCute can make the animal cute
};
