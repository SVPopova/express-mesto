const router = require('express').Router();

const Card = require('../models/card');

router.get('/cards', (req, res) => {
  Card.find({})
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.post('/cards', (req, res) => {
  const owner = req.user._id;
  Card.create({ owner, ...req.body })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.delete('/cards/:cardId', (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.put('/cards/:cardId/likes', (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

router.delete('/cards/:cardId/likes', (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      console.error('err = ', err);
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
});

module.exports = router;
