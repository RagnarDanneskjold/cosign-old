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

    describe('raw.create', function() {
      it('should call cmd_raw_create', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","raw.create"]);
        cosign.cmd_raw_create = sinon.spy();
        cosign.main();
        cosign.program.args[0].should.equal("raw.create");
        cosign.cmd_raw_create.calledOnce.should.equal(true);
      });
    });

    describe('raw.sign', function() {
      it('should call cmd_raw_sign', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","raw.sign"]);
        cosign.cmd_raw_sign = sinon.spy();
        cosign.main();
        cosign.program.args[0].should.equal("raw.sign");
        cosign.cmd_raw_sign.calledOnce.should.equal(true);
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

    describe('raw.create', function() {
      it('should call cmd_raw_create', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","raw.create"]);
        cosign.cmd_raw_create = sinon.spy();
        cosign.main();
        cosign.cmd_raw_create.calledOnce.should.equal(true);
      });
    });

    describe('validate.all', function() {
      it('should call cmd_validate_all', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.all"]);
        cosign.cmd_validate_all = sinon.spy();
        cosign.main();
        cosign.cmd_validate_all.calledOnce.should.equal(true);
      });
    });

    describe('validate.fees', function() {
      it('should call cmd_validate_fees', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.fees"]);
        cosign.cmd_validate_fees = sinon.spy();
        cosign.main();
        cosign.cmd_validate_fees.calledOnce.should.equal(true);
      });
    });

    describe('validate.inputs', function() {
      it('should call cmd_validate_inputs', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.inputs"]);
        cosign.cmd_validate_inputs = sinon.spy();
        cosign.main();
        cosign.cmd_validate_inputs.calledOnce.should.equal(true);
      });
    });

    describe('validate.inputtxs', function() {
      it('should call cmd_validate_inputtxs', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.inputtxs"]);
        cosign.cmd_validate_inputtxs = sinon.spy();
        cosign.main();
        cosign.cmd_validate_inputtxs.calledOnce.should.equal(true);
      });
    });

    describe('validate.outputs', function() {
      it('should call cmd_validate_outputs', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.outputs"]);
        cosign.cmd_validate_outputs = sinon.spy();
        cosign.main();
        cosign.cmd_validate_outputs.calledOnce.should.equal(true);
      });
    });

    describe('validate.p2sh', function() {
      it('should call cmd_validate_p2sh', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.p2sh"]);
        cosign.cmd_validate_p2sh = sinon.spy();
        cosign.main();
        cosign.cmd_validate_p2sh.calledOnce.should.equal(true);
      });
    });

    describe('validate.pubkeys', function() {
      it('should call cmd_validate_pubkeys', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.pubkeys"]);
        cosign.cmd_validate_pubkeys = sinon.spy();
        cosign.main();
        cosign.cmd_validate_pubkeys.calledOnce.should.equal(true);
      });
    });

    describe('validate.redeem', function() {
      it('should call cmd_validate_redeem', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.redeem"]);
        cosign.cmd_validate_redeem = sinon.spy();
        cosign.main();
        cosign.cmd_validate_redeem.calledOnce.should.equal(true);
      });
    });

    describe('validate.sigs', function() {
      it('should call cmd_validate_sigs', function() {
        var fs = {};
        fs.readFileSync = function(){return "{}";};
        var Cosign2 = require('../bin/Cosign').createClass({fs: fs});
        var cosign = new Cosign2(["","","validate.sigs"]);
        cosign.cmd_validate_sigs = sinon.spy();
        cosign.main();
        cosign.cmd_validate_sigs.calledOnce.should.equal(true);
      });
    });
  });
});
