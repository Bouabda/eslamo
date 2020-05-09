let express=require('express')
let router=express.Router()
let bcrypt = require('bcrypt')
let Promise = require('bluebird')

let connection = require('../../database/index')

router.get('/', function(req,res){
	const userData = {
		email: req.query.email,
		password: req.query.password,
		initialize: function() {
			this.on('creating', this.hashPassword);
		  },
		  comparePassword: function(attemptedPassword, callback) {
			bcrypt.compare(attemptedPassword, this.get('password'), function(err, isMatch) {
			  callback(isMatch);
			});
		  },
		  hashPassword: function() {
			var cipher = Promise.promisify(bcrypt.hash);
			return cipher(this.get('password'), null, null).bind(this)
			  .then(function(hash) {
				this.set('password', hash);
			  });
		  }
    }
  })

//   User.comparePassword = function(candidatePassword, savedPassword, cb) {
// 	bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
// 	  if (err) {
// 		return cb(err);
// 	  }
// 	  cb(null, isMatch);
// 	});
//   };
  
//   userSchema.pre('save', function(next) {
// 	var cipher = Promise.promisify(bcrypt.hash);
// 	return cipher(this.password, null, null)
// 	  .bind(this)
// 	  .then(function(hash) {
// 		this.password = hash;
// 		next();
// 	  });

// router.get('/', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.email + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

// else{
// 	res.send({
// 		 "code":204,
// 		 "success":"Email and password does not match"
// 	})
//   }
// console.log('Received Signin POST request from client with ', userData);

//     const searchUserQuery = ' SELECT user_id FROM users WHERE email = ?'
// 	const addPassword = `INSERT INTO passwords(user_password,salt,user_id) VALUES(?,?,?)`;
// 	const selectingPassword = `SELECT user_id FROM passwords WHERE user_password = ?`
//     const salt = bcrypt.genSaltSync(10, "a");
// 	connection.query(searchUserQuery,[userData.email],(error, results) => {
// 	  if (error) {
// 		res.send({
// 		  "code":400,
// 		  "failed":"error ocurred"
// 		})
// 	  }else{
// 		if(results.length >0){
// 				bcrypt.hash(userData.password, salt, (err, hash) => {
// 					if (err) console.log('errhash' + hash)
// 					connection.query(addPassword, [hash, salt, resl.insertId], (error, resPass) => {
// 						if (error) console.log('errPAssword ' + error)
// 						res.json({
// 							message: 'sending the user data'
// 						})
// 					})
// 				})
// 				bcrypt.compareSync(selectingPassword, )
// 		  }
// 		else{
// 		  res.send({
// 			"code":206,
// 			"success":"Email does not exits"
// 			  });
// 		}
// 	  }
// 	  });

module.exports=router