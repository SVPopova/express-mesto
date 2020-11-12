const path = require('path');
const router = require('express').Router();

const readFile = require('../utils/read-file');

const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json');
router.get('/cards', (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => {
      console.error('err = ', err);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
});

module.exports = router;
