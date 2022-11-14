const en = require('../data/languages/en.js');
const id = require('../data/languages/id.js');
const kr = require('../data/languages/kr.js');

const dict = { en, id, kr };

module.exports = {
  index(req, res) {
    const { lang } = req.params;

    res.render('index', { lang, data: dict[lang], currentPage: 'home' });
  },
  profile(req, res) {
    const { lang } = req.params;

    res.render('company-profile', {
      lang,
      data: dict[lang],
      currentPage: 'profile',
    });
  },
  service(req, res) {
    const { lang } = req.params;

    res.render('services', { lang, data: dict[lang], currentPage: 'service' });
  },
  partnership(req, res) {
    const { lang } = req.params;

    res.render('partnership', {
      lang,
      data: dict[lang],
      currentPage: 'partnership',
    });
  },
  contact(req, res) {
    const { lang } = req.params;

    res.render('contact', { lang, data: dict[lang], currentPage: 'contact' });
  },
};
