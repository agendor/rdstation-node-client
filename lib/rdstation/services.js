'use strict';

var client = require('./client.js');

function Services(token) {
	this.resource = 'services';
	this.dealWon = function dealWon(value, email, leadId) {
		// this should be done inside client, but since the token is in the URL, it is better to be here
		var endpoint = [this.resource, token, 'generic'].join('/');

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