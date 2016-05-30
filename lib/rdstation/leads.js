'use strict';

var client = require('./client.js');
var Q = require('q');

function Leads(token){
	var resource = 'leads';


	this.changeStatusToLead = function chageStatusClient(email, opportunity ) {
		return chageStatus(email, opportunity, 0)
	};

	this.changeStatusToQualified = function chageStatusClient(email, opportunity ) {
		return chageStatus(email, opportunity, 1)
	};
	
	this.changeStatusToClient = function chageStatusClient(email, opportunity ) {
		return chageStatus(email, opportunity, 2)
	};
	
	
	function chageStatus(email, opportunity,  lifecycle_stage ) {
/*
0 - Lead;
1 - Lead Qualificado; 
2 - Cliente
*/
		var body = {
			'auth_token': token,
			'lead': {'lifecycle_stage': lifecycle_stage, 'opportunity': opportunity}
		};
		return send(body, email);
	};
	

	function send(body, email) {
		// this should be done inside client, but since the token is in the URL, it is better to be here
		var endpoint = [resource, email].join('/');

		if (!body.auth_token) return Q(new Error('Validation: token is required'));
		if (!email) return Q(new Error('Validation: email is required'));
		return client.put(endpoint, body);
	}
}

module.exports = Leads;