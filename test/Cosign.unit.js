var assert = require('assert');
var Cosign = require('../bin/Cosign').class();

describe('Cosign', function(){
  describe('#Cosign', function(){
    it('should create a new cosign with no error', function() {
      var cosign = new Cosign(["","","dump"]);
    });
  });
});
