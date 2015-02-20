/*global describe, it */
'use strict';
var assert = require('assert');
var rdstationNodeClient = require('../');

describe('rdstation-node-client services', function () {
  it('must have at least one test', function () {
    assert(rdstationNodeClient.Services != null);
  });
});
