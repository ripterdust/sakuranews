const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = 'mongodb+srv://ripterdust:itgmynOXDWzKc8YA@sakuranews-zd7e2.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(console.log('DB in connected'))
	.catch(err => console.log(err));