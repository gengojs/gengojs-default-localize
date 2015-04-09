/*global describe, it*/
var chai = require('chai');
var assert = chai.assert;
var Core = require('gengojs-core');
var localize = require('../');

describe('Localize', function() {
  'use strict';
  describe('load plugin', function() {
    it('should exist in the core', function() {
      var gengo = new Core({}, localize());
      assert.isDefined(gengo.plugins.localizes[0]);
    });
  });
});