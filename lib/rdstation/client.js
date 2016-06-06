'use strict';

var Q = require('q');
var url = require('url');
var baseURL = 'https://www.rdstation.com.br';
var apiURL = baseURL + '/api/1.2/';
var request = require('superagent');

var self = module.exports = {

	post: function post(endpoint, body){
		return self.exec('post', endpoint, body);
	},

	
	put: function put(endpoint, body){
		return self.exec('put', endpoint, body);
	},
	
	exec: function exec(method, endpoint, body){
		var deferred = Q.defer(); // to convert callback into promise
		request[method](url.resolve(apiURL, endpoint))
			.send(body)
			.end(function(error, res){
				if (error) return deferred.reject(error);
				deferred.resolve(res);
			});
		return deferred.promise;
	},

	baseURL: baseURL

};


