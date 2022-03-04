const mongoose = require('mongoose');
const Campsite = require('./models/campsite');

const url = 'mongodb://bionicmongo:27017/nucampsite';

const connect = mongoose.connect(url, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

connect.then(() => {
	console.log('connected correctly to server');

	// comment out description and run to demonstrate validation
	const newCampsite = new Campsite({
		name: 'React Lake Campground',
		description: 'test',
	});

	newCampsite
		.save()
		.then((campsite) => {
			console.log(campsite);
			return Campsite.find();
		})
		.then((campsites) => {
			console.log(campsites);
			return Campsite.deleteMany();
		})
		.then(() => {
			return mongoose.connection.close();
		})
		.catch((err) => {
			console.error(err);
		});
});
