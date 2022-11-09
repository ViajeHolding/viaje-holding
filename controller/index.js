module.exports = {
  index(req, res) {
    res.render('index');
  },
  companyProfile(req, res) {
    res.render('company-profile');
  },
  services(req, res) {
    res.render('services');
  },
  partnership(req, res) {
    res.render('partnership');
  },
  contact(req, res) {
    res.render('contact');
  },
};
