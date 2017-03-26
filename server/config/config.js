var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development: {
		db: 'mongodb://localhost/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 5000
	},
	production: {
		db: '',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}