class HomeController {
	index(req, res) {
		res.send('It is really working');
	}
}

module.exports = new HomeController();
