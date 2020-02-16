const { Schema, model } = require('mongoose');

const comment = new Schema({
	name: {type: String},
	content: {type: String},
	idPost: {type: String}
});

module.exports = model('comments', comment)