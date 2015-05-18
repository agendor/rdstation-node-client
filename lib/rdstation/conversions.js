'use strict';

var client = require('./client.js');
var _ = require('lodash');
var Q = require('q');

function Conversions(token) {
	var resource = 'conversions';

	this.createConversion = function createConversion(identifier, leadParams) {
		var body = {
			'token_rdstation': token,
			'identificador': identifier
		};
		_.assign(body, leadParams);
		return send(body);
	};

	function send(body) {
		if (!body.token_rdstation) return Q(new Error('Validation: token is required'));
		if (!body.identificador) return Q(new Error('Validation: identificador is required'));
		if (!body.email) return Q(new Error('Validation: email is required'));

		return client.post(resource, body);
	}
}

module.exports = Conversions;