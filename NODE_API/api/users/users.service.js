const User = require('./user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

module.exports.signUp = async (email, password) => {
	try {
		const existingUser = await User.find({ email });
		if (existingUser.length) {
			throw new Error('MAIL_EXISTS');
		}

		const hashedPassword = await new Promise((resolve, reject) => {
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) reject(err);
				resolve(hash);
			});
		});

		const user = new User({
			_id: new mongoose.Types.ObjectId(),
			email: email,
			password: hashedPassword
		});

		await user.save();
		return 'USER_CREATED';
	} catch (error) {
		throw error;
	}
};

module.exports.login = async (email, password) => {
	try {
		const user = await User.findOne({ email });

		if (!user) {
			throw new Error('AUTH_FAILED');
		}

		return await new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (err) reject('AUTH_FAILED');
				if (result) {
					const token = jwt.sign(
						{
							email: user.email,
							userId: user._id
						},
						process.env.JWT_SECRET,
						{
							expiresIn: '4h'
						}
					);
					resolve({
						message: 'AUTH_SUCCESSFUL',
						token: token
					});
				}
			});
		});
	} catch (error) {
		throw error;
	}
};

module.exports.removeUser = async id => {
	try {
		return await User.remove({ _id: id });
	} catch (error) {
		throw error;
	}
};