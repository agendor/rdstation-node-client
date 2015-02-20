'use strict';

var url = require('url');
var client = require('client.js');

function Services(token) {
	this.resource = 'services';
	this.dealWon = function dealWon(value, email, leadId) {
		// this should be done inside client, but since the token is in the URL, it is better to be here
		var endpoint = url.resolve(this.resource, token, 'generic');

		var body = {
			status: 'won',
			value: value
		};
		if (email) body.email = email;
		if (leadId)	body.leadId = leadId;

		return client.post(endpoint, body);
	}
}

module.exports = Services;