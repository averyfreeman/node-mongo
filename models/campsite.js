const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema(
	{
		// document properties
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	// global properties
	{
		timestamps: true,
	},
);

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;
