#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Client wrapper for Node.js integration with RDStation.


## Install

```sh
$ npm install --save rdstation-node-client
```


## Usage

**First, initialize the resource**

Currently, there are `Services` , `Conversions` and  Leads modules.

```
var rdclient = require('rdstation-node-client');
var services = new rdclient.Services('your_private_token');
var conversions = new rdclient.Conversions('your_token');
var leads = new rdclient.Leads('your_private_token');
```

### Services

**Set a deal as won**

```js
var value = 120.00;
var email = 'email@example.com';

services.dealWon(value, email)
    .then(function (data) {
        console.log('Request done ', data);
    })
    .catch(function (err) {
        console.error(err);
    });
```

**Set a deal as lost**

```js
var reason = 'Customer chose competitor product';
var leadId = 9999;

services.dealLost(reason, null, leadId)
    .then(function (data) {
        console.log('Request done ', data);
    })
    .catch(function (err) {
        console.error(err);
    });
```

### Conversions

**Create a new conversion**

```js
var identifier = 'action-name';

conversions.createConversion(identifier, {
    email: 'email@example.com',
    nome: 'Lead name',
}).then(function (data) {
    console.log('Request done ', data);
})
.catch(function (err) {
    console.error(err);
});
```

### Leads

**Change a lead stage to Lead**

```js
var email = 'email@example.com';
var opportunity = false; 
leads.changeStatusToLead(email, opportunity).then(function (data) {
    console.log('Request done ', data);
})
.catch(function (err) {
    console.error(err);
});	
```
**Change a lead stage to Lead Qualified**

```js
var email = 'email@example.com';
var opportunity = false; 
leads.changeStatusToQualified(email, opportunity).then(function (data) {
    console.log('Request done ', data);
})
.catch(function (err) {
    console.error(err);
});	
```

**Change a lead stage to Client**

```js
var email = 'email@example.com';
var opportunity = false; 
leads.changeStatusToClient(email, opportunity).then(function (data) {
    console.log('Request done ', data);
})
.catch(function (err) {
    console.error(err);
});	
```

## Future development

Currently, this wrapper helps to:

1. Make the request "Close a deal and mark a deal as lost" described in [this article][rd-api-help-deal].
2. Make the request to create a new conversion as described in [this article][rd-api-help-conversion].
3. Make the request to change  a lead stage described in [this article][rd-api-help-change].

There are few more possible actions with RD Station API [as described here][rd-api-help-all].

## License

MIT © [Agendor](https://www.agendor.com.br/)


[npm-url]: https://npmjs.org/package/rdstation-node-client
[npm-image]: https://badge.fury.io/js/rdstation-node-client.svg
[travis-url]: https://travis-ci.org/agendor/rdstation-node-client
[travis-image]: https://travis-ci.org/agendor/rdstation-node-client.svg?branch=master
[daviddm-url]: https://david-dm.org/agendor/rdstation-node-client.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/agendor/rdstation-node-client
[rd-api-help-deal]: http://ajuda.rdstation.com.br/hc/pt-br/articles/202640385-Marcar-venda-e-lost-via-formul%C3%A1rio-pr%C3%B3prio-ou-sistema-API-
[rd-api-help-all]: http://ajuda.rdstation.com.br/hc/pt-br/categories/200086659-Integra%C3%A7%C3%B5es 
[rd-api-help-conversion]: http://ajuda.rdstation.com.br/hc/pt-br/articles/200310589
[rd-api-help-change]: http://ajuda.rdstation.com.br/hc/pt-br/articles/200310699--Alterar-est%C3%A1gio-do-Lead-no-funil-do-RD-Station-API-
