/*global describe, it, before */
'use strict';
var assert = require('assert');
var lib = require('../lib/rdstation');
var client = require('../lib/rdstation/client.js');
var nock = require('nock');
var factory = require('./factory.js');

describe('leads', function () {
	describe('when leads set stage to lead and not is opportunity', function () {
		before(function () {
			nock(client.baseURL)
				.put('/api/1.2/leads/' + factory.lead.email, {
					"auth_token": factory.token ,
					"lead": {
					"lifecycle_stage": 0,
					"opportunity": false}
				})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var leads = new lib.Leads(factory.token);
			leads.changeStatusToLead(factory.lead.email, false)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});
	
	describe('when leads set stage to lead and is opportunity', function () {
		before(function () {
			nock(client.baseURL)
				.put('/api/1.2/leads/' + factory.lead.email, {
					"auth_token": factory.token ,
					"lead": {
					"lifecycle_stage": 0,
					"opportunity": true}
					})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var leads = new lib.Leads(factory.token);
			leads.changeStatusToLead(factory.lead.email, true)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});
	
	describe('when leads set stage to lead qualified and not is opportunity', function () {
		before(function () {
			nock(client.baseURL)
				.put('/api/1.2/leads/' + factory.lead.email, {
					"auth_token": factory.token ,
					"lead": {
					"lifecycle_stage": 1,
					"opportunity": false}
					})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var leads = new lib.Leads(factory.token);
			leads.changeStatusToQualified(factory.lead.email, false)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});
	
	describe('when leads set stage to lead qualified and is opportunity', function () {
		before(function () {
			nock(client.baseURL)
				.put('/api/1.2/leads/' + factory.lead.email, {
					"auth_token": factory.token ,
					"lead": {
					"lifecycle_stage": 1,
					"opportunity": true}
					})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var leads = new lib.Leads(factory.token);
			leads.changeStatusToQualified(factory.lead.email, true)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});

	describe('when leads set stage to client and not is opportunity', function () {
		before(function () {
			nock(client.baseURL)
				.put('/api/1.2/leads/' + factory.lead.email, {
					"auth_token": factory.token ,
					"lead": {
					"lifecycle_stage": 2,
					"opportunity": false}
					})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var leads = new lib.Leads(factory.token);
			leads.changeStatusToClient(factory.lead.email, false)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});
	
	describe('when leads set stage to client and is opportunity', function () {
		before(function () {
			nock(client.baseURL)
				.put('/api/1.2/leads/' + factory.lead.email, {
					"auth_token": factory.token ,
					"lead": {
					"lifecycle_stage": 2,
					"opportunity": true}
					})
				.reply(200);
		});

		it('should call the API with correct parameters', function (done) {
			var leads = new lib.Leads(factory.token);
			leads.changeStatusToClient(factory.lead.email, true)
				.then(function () {
					done();
				})
				.catch(done);
		});
	});

});