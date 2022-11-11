const en = require('../data/languages/en.js');
const id = require('../data/languages/id.js');

const dict = { en, id };

module.exports = {
  index(req, res) {
    const { lang } = req.params;

    res.render('index', { lang, data: dict[lang] });
  },
  profile(req, res) {
    const { lang } = req.params;

    res.render('company-profile', { lang, data: dict[lang] });
  },
  service(req, res) {
    const { lang } = req.params;

    res.render('services', { lang, data: dict[lang] });
  },
  partnership(req, res) {
    const { lang } = req.params;

    res.render('partnership', { lang, data: dict[lang] });
  },
  contact(req, res) {
    const { lang } = req.params;

    res.render('contact', { lang, data: dict[lang] });
  },
};
