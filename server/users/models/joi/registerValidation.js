const Joi = require("joi");

const registerValidation = user => {
  const schema = Joi.object({
    name: Joi.object()
      .keys({
        first: Joi.string().min(3).max(256).required(),
        last: Joi.string().min(3).max(256).required(),
      })
      .required(),

    phone: Joi.string()
      .ruleset.regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)

      .rule({ message: '"phone" mast be a valid phone number' })
      .required(),
    email: Joi.string()
      .ruleset.pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .rule({ message: 'user "mail" mast be a valid mail' })
      .required(),
    password: Joi.string()
      .ruleset.regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .rule({
        message:
          'use 9+ characters, 1 uppercase, 1 lowercase, 1 number, 1 special character',
      })
      .required(),
    image: Joi.object()
      .keys({
        url: Joi.string()
          .ruleset.regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
          )
          .rule({ message: "image mast be a valid url" })
          .allow(""),
        alt: Joi.string().min(2).max(256).allow(""),
      })
      .required(false),
    address: Joi.object()
      .keys({
        country: Joi.string().min(2).required(),
        city: Joi.string().min(2).required(),
        street: Joi.string().min(2).required(),
        houseNumber: Joi.number().required(),
        zip: Joi.number(),
      })
      .required(),
    isSeller: Joi.boolean().allow(""),
    isAdmin: Joi.boolean().allow(""),
  });
  return schema.validate(user, {
    abortEarly: false
  });
};

module.exports = registerValidation;
