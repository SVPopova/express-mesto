const router = require('express').Router();

const User = require('../models/user');

router.get('/users', (req, res) => {
  User.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.post('/users', (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.patch('/users/me', (req, res) => {
  const me = req.user._id;
  const { name, about } = req.body;
  User.findByIdAndUpdate(me, { name, about }, {
    new: true,
    runValidators: true,
    upsert: false,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.patch('/users/me/avatar', (req, res) => {
  const me = req.user._id;
  const { avatar } = req.body;
  User.findByIdAndUpdate(me, { avatar }, {
    new: true,
    runValidators: true,
    upsert: false,
  })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

module.exports = router;
