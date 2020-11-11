const router = require('express').Router();
const path = require('path');
const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json');
const readFile = require('../utils/read-file.js');

router.get('/users', (req, res) => {
  readFile(jsonDataPath).then((data) => res.send(data));
});

router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  readFile(jsonDataPath)
    .then((data) => {
      const userToFind = data.users.find((user) => user._id === id);
      return userToFind;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch((err) => {
      console.error('err = ', err);
      res.status(500).send({ message: 'Ошибка на сервере' });
    });
});

module.exports = router;
