'use strict';

var client = require('./client.js');

function Services(token) {
	var resource = 'services';

	this.dealWon = function dealWon(value, email, leadId) {
		var body = {
			status: 'won',
			value: value
		};
		return send(body, email, leadId);
	};
	this.dealLost = function dealLost(reason, email, leadId) {
		var body = {
			status: 'lost',
			lost_reason: reason
		};
		return send(body, email, leadId);
	};

	function send(body, email, leadId) {
		// this should be done inside client, but since the token is in the URL, it is better to be here
		var endpoint = [resource, token, 'generic'].join('/');

		if (email) body.email = email;
		if (leadId)	body.leadId = leadId;

		return client.post(endpoint, body);
	}
}

module.exports = Services;