var assert = require('assert');
var should = require('should');
var sinon = require('sinon');
var Cosign = require('../bin/Cosign').class();

describe('Cosign', function(){

  describe('#Cosign', function(){
    it('should create a new cosign with no error', function() {
      var cosign = new Cosign(["","","dump"]);
      cosign.program.args[0].should.equal("dump");
    });
  });

  describe('#main', function() {

    describe('clean', function() {
      it('should call the clean function', function() {
        var cosign = new Cosign(["","","clean"]);
        cosign.remove_database = sinon.spy();
        cosign.main();
        cosign.remove_database.calledOnce.should.equal(true);
      });
    });

    describe('help', function() {
      it('should call the list_commands function', function() {
        var cosign = new Cosign(["","","help"]);
        cosign.list_commands = sinon.spy();
        cosign.main();
        cosign.list_commands.calledOnce.should.equal(true);
      });
    });

    describe('init', function() {
      it('should init the database file', function() {
        var fs = {};
        fs.writeFile = sinon.spy();
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","init"]);
        cosign.main();
        cosign.program.args[0].should.equal("init");
        fs.writeFile.calledOnce.should.equal(true);
      });
    });
  });
});
