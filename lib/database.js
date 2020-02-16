const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = 'mongodb://localhost:27017/animeBlog';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(console.log('DB in connected'))
	.catch(err => console.log(err));