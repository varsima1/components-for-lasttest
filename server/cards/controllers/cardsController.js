const { handleError } = require("../../utils/handleErrors");
const normalizeCard = require("../helpers/normalizeCard");
const validateCard = require("../models/joi/validateCard");
const Card = require("../models/mongoose/Card");

const getCards = async (req, res) => {
  try {
    const cards = await Card.find().sort({ createdAt: "descending" });
    return res.send(cards);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

const getCard = (req, res) => {
  res.send({ message: "in getCard" });
};

const createCard = async (req, res) => {
  try {
    const card = req.body;
    const user = req.user;

    if (!user.isBusiness)
      throw new Error(
        "You must be a business type user in order to create a new business card"
      );

    const { error } = validateCard(card);
    if (error)
      return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

    const normalizedCard = normalizeCard(card, user._id);

    const cardToDB = new Card(normalizedCard);
    const cardFromDB = await cardToDB.save();
    res.send(cardFromDB);
  } catch (error) {
    return handleError(res, 500, `Mongoose Error: ${error.message}`);
  }
};

exports.getCards = getCards;
exports.getCard = getCard;
exports.createCard = createCard;
