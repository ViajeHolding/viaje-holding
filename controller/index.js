module.exports = {
  index(req, res) {
    res.render('index', { title: 'Viaje' });
  },
  about(req, res) {
    res.render('about');
  },
  contact(req, res) {
    res.render('contact');
  },
};
