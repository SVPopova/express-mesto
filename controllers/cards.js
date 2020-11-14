const Card = require('../models/card');

module.exports.findCard = (req, res) => {
  Card.find({})
    .then((card) => {
      if (!card) return res.status(404).send({ message: 'Переданы некорректные данные' });
      res.send({ data: card });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'DocumentNotFoundError') return res.status(404).send({ message: 'Переданы некорректные данные' });
      if (err.name === 'CastError' || 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.createCard = (req, res) => {
  const owner = req.user._id;
  Card.create({ owner, ...req.body })
    .then((card) => {
      if (!card) return res.status(404).send({ message: 'Переданы некорректные данные' });
      res.send({ data: card });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'DocumentNotFoundError') return res.status(404).send({ message: 'Переданы некорректные данные' });
      if (err.name === 'CastError' || 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) return res.status(404).send({ message: 'Переданы некорректные данные' });
      res.send({ data: card });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'DocumentNotFoundError') return res.status(404).send({ message: 'Переданы некорректные данные' });
      if (err.name === 'CastError' || 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) return res.status(404).send({ message: 'Переданы некорректные данные' });
      res.send({ data: card });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'DocumentNotFoundError') return res.status(404).send({ message: 'Переданы некорректные данные' });
      if (err.name === 'CastError' || 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
module.exports.deleteLikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((card) => {
      if (!card) return res.status(404).send({ message: 'Переданы некорректные данные' });
      res.send({ data: card });
    })
    .catch((err) => {
      console.error('err = ', err);
      if (err.name === 'DocumentNotFoundError') return res.status(404).send({ message: 'Переданы некорректные данные' });
      if (err.name === 'CastError' || 'ValidationError') return res.status(400).send({ message: 'Запрашиваемый ресурс не найден' });
      return res.status(500).send({ message: 'Произошла ошибка' });
    });
};
