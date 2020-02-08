//Config deploy production
var webpack = require('webpack');

module.exports = require('./webpack.config.js');
delete module.exports.devtool;
module.exports.plugins.pop();
module.exports.plugins.push(    
    new webpack.DefinePlugin({
		config: JSON.stringify(process.env)
	})
);

module.exports.module.rules.forEach(rule => {
    delete rule.exclude;
    return rule;
});