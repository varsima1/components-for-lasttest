const express = require("express");
const {
  getCards,
  getCard,
  createCard,
} = require("../controllers/cardsController");
const auth = require("../../auth/authService");
const router = express.Router();

router.get("/", getCards);
router.get("/:cardId", getCard);
router.post("/", auth, createCard);

module.exports = router;
