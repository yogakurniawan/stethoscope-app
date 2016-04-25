/**
 * Main application routes
 * All responses are routed through the middleware.extendResponse middleware.
 * POST, PUT, PATCH and DELETE requests are
 * routed through the middleware.removeReservedSchemaKeywords middleware.
 */

'use strict';

var path = require('path');

module.exports = function (app) {
    // Insert routes below	
	// All undefined asset or api routes should return a 404
	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
		.get(function invalidRoute(req, res) { return res.notFound(); });

	// All other routes should redirect to the index.html
	app.route('/*')
		.get(function getIndexFile(req, res) {
			res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
		});
};
