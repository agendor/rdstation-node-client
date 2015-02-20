#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Client wrapper for Node.js integration with RDStation.


## Install

```sh
$ npm install --save rdstation-node-client
```


## Usage

#### First, initialize the resource

Currently, there is only `Services`.

```
var rdclient = require('rdstation-node-client');
var services = new rdclient.Services('your_private_token');
```

#### Mark a deal as won

```js
var value = 120.00;
var email = 'email@example.com';

return services.dealWon(value, email)
    .then(function (data) {
        console.log('Request done ', data);
    })
    .catch(function (err) {
        console.error(err);
    });
```

#### Mark a deal as lost

```js
var reason = 'Customer chose competitor product';
var leadId = 9999;

return services.dealLost(reason, null, leadId)
    .then(function (data) {
        console.log('Request done ', data);
    })
    .catch(function (err) {
        console.error(err);
    });
```

## Future development

Currently, this wrapper just help to make the request "Close a deal and mark a deal as lost" described in [this article][rd-api-help-deal].

There are few more possible actions with RD Station API [as described here][rd-api-help-all] like "Send a lead or change a lead state".

## License

MIT © [Agendor](https://www.agendor.com.br/)


[npm-url]: https://npmjs.org/package/rdstation-node-client
[npm-image]: https://badge.fury.io/js/rdstation-node-client.svg
[travis-url]: https://travis-ci.org/agendor/rdstation-node-client
[travis-image]: https://travis-ci.org/agendor/rdstation-node-client.svg?branch=master
[daviddm-url]: https://david-dm.org/agendor/rdstation-node-client.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/agendor/rdstation-node-client
[rd-api-help-deal]: http://ajuda.rdstation.com.br/hc/pt-br/articles/202640385-Marcar-venda-e-lost-via-formul%C3%A1rio-pr%C3%B3prio-ou-sistema-API-
[rd-api-help-all]: http://ajuda.rdstation.com.br/hc/pt-br/articles/200310549-Guia-de-integra%C3%A7%C3%B5es-com-o-RD-Station