const express = require("express");
const router = express.Router();

const Question = require("../models/questions.model");

router.get("/", async (req, res) => {
  try {
    if (req.query.cat == "general") req.query.cat = "General Knowledge";
    const questions = await Question.find({
      category: req.query.cat,
      difficulty: req.query.diff,
    }).limit(req.query.limit);
    return res.status(200).send(questions);
  } catch (error) {
    return res.status(500).send(500);
  }
});

module.exports = router;
