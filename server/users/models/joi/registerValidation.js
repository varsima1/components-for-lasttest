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
      .regex(/0[0-9]{1,2}\-?\s?[0-9]{3}\s?[0-9]{4}/)
      .message('Phone number must be a valid phone number')
      .required(),
    email: Joi.string()
      .pattern(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      )
      .message('Email must be a valid email address')
      .required(),
    password: Joi.string()
      .regex(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
      )
      .message('Use 9+ characters, 1 uppercase, 1 lowercase, 1 number, 1 special character')
      .required(),
    image: Joi.object()
      .keys({
        url: Joi.string()
          .regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
          )
          .message('Image must be a valid URL')
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
