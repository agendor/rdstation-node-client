/*global describe, it, before */
'use strict';
var assert = require('assert');
var lib = require('../lib/rdstation');
var client = require('../lib/rdstation/client.js');
var nock = require('nock');
var factory = require('./factory.js');

describe('Services', function () {
	describe('when a deal is set to won', function () {
		before(function () {
			nock(client.baseURL)
				.post('/api/1.2/services/' + factory.token + '/generic', {
					status: 'won',
					value: 999,
					email: factory.lead.email
				})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var services = new lib.Services(factory.token);
			services.dealWon(999, factory.lead.email)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});
	describe('when a deal is set to lost', function () {
		before(function () {
			nock(client.baseURL)
				.post('/api/1.2/services/' + factory.token + '/generic', {
					status: 'lost',
					lost_reason: 'market price is lower',
					email: factory.lead.email
				})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var services = new lib.Services(factory.token);
			services.dealLost('market price is lower', factory.lead.email)
				.then(function () {
					done();
				})
				.catch(done);
		});

	});
		describe('using the lead id instead of email', function () {
			before(function () {
				nock(client.baseURL)
					.post('/api/1.2/services/' + factory.token + '/generic', {
						status: 'lost',
						lost_reason: 'market price is lower',
						lead_id: factory.lead.id
					})
					.reply(200);
			});

			it('should call the API with correct parameters', function (done) {
				var services = new lib.Services(factory.token);
				services.dealLost('market price is lower', null, factory.lead.id)
					.then(function () {
						done();
					})
					.catch(done);
			});
		});

});