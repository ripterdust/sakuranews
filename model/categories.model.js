const { Schema, model } = require('mongoose');

const categories = new Schema({
	name: { type: String }
})

module.exports = model('categories', categories);