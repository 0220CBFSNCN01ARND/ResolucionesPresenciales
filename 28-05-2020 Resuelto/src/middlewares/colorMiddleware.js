module.exports = function colorMiddleware (req, res, next) {
	req.color = req.cookies.color ? req.cookies.color : req.session.color;
	next();
}
