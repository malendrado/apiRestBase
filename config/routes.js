'use strict';

module.exports = {
	'GET /health/':{
		controller: 'healthController',
		action: 'health',
        auth: false
	},
	'POST /loginRut/':{
		controller: 'mysqlController/loginController',
		action: 'loginRut',
        auth: false,
		dataRequired: ['rut', 'pass']
	},
	'POST /loginEmail/':{
		controller: 'mysqlController/loginController',
		action: 'loginEmail',
        auth: false,
		dataRequired: ['email', 'pass']
	}
}