const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CoursesDB', {useNewUrlParser: true}, (err) => {
	if (!err){
		console.log('Successfully establish connection with MongoDB');
	}
	else {
		console.log('Failed to establish connection with MongoDB with error: ' + err);
	}
});

// Connecting Node and MongoDB
require('../models/course.model');
