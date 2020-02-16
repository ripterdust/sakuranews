const { Schema, model } = require('mongoose');

const post = new Schema({
	title: {type: String},
	description:{type: String},
	content: {type: String},
	category: {type: String}
});

module.exports = model('New', post);