/*global describe, it, before */
'use strict';
var assert = require('assert');
var lib = require('../lib/rdstation');
var client = require('../lib/rdstation/client.js');
var nock = require('nock');
var factory = require('./factory.js');

describe('Conversions', function () {
	describe('when a conversion is created', function () {
		before(function () {
			nock(client.baseURL)
				.post('/api/1.2/conversions', {
					token_rdstation: factory.token,
					identificador: 'action-name',
					email: factory.lead.email,
					nome: 'Lead name'
				})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var conversions = new lib.Conversions(factory.token);
			conversions.createConversion('action-name', {
				email: factory.lead.email,
				nome: 'Lead name'
			}).then(function () {
				done();
			})
			.catch(done);
		});
	});
});