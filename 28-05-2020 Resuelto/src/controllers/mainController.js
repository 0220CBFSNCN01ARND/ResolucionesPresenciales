const fs = require('fs');
const path = require('path');

const controller = {
	index: (req, res) => {
		res.render('index', { color: req.color });
	},
	queColorEs: (req, res) => {
		res.render('queColor', { color: req.color });
	},
	color: (req, res) => {
		req.session.color = req.body.color;
		if (req.body.recordar_color) {
			res.cookie('color', req.body.color, { maxAge: 120000 });
		}
		res.redirect('/');
	}, 
	borrar: (req, res) => {
		req.session.color = null;
		res.cookie('color', null, { maxAge: -1 });
		res.send('borrada');
	},
	
};

module.exports = controller
