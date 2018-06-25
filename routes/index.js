let express = require('express');
let cors = require('cors')
let router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://127.0.0.1:27017/homePage'

let resResult = 'balabala...'
let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

MongoClient.connect(url, function (err, db) {
	if (err) throw err
	let homePage = db.db('homePage')
	homePage.collection('users').find({}).toArray(function (error, result) {
		if (error) throw error
		resResult = result[0].name
		console.log('result is:', result)
	})
})

/* GET home page. */
router.post('/test', function(req, res, next) {
  res.json({data: resResult})
});

module.exports = router;
