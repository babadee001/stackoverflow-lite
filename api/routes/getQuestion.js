const express = require('express');
const router = express.Router();
router.use(express.json());

/* DEMO REQUEST */
const questions = [
  { id: 1, question: 'what is the full meaning of HTML?', answers: [] },
  { id: 2, question: 'is node.js a framework?', answers: [] },
  { id: 3, question: 'how do i add to a declare a variable?', answers: [] },
  { id: 4, question: 'what is css used for?', answers: [] },
];

// GET A SPECIFIC QUESTION
router.get('/api/v1/questions/:id', (req, res) => {
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }
  res.status(200).send(specificQuestion);

  console.log(specificQuestion.id)

  // res.status(200).send(specificQuestion.question);
});


module.exports = router;
