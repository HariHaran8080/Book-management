const Joi = require('joi');

const bookCreate = Joi.object({
  title: Joi.string().trim().min(1).required(),
  author: Joi.string().trim().min(1).required(),
  year: Joi.number().integer().required()
});

const bookUpdate = Joi.object({
  title: Joi.string().trim().min(1),
  author: Joi.string().trim().min(1),
  year: Joi.number().integer()
}).min(1); 

module.exports = { bookCreate, bookUpdate };
