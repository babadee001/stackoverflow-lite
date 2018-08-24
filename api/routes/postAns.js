const express = require('express');
const router = express.Router();
router.use(express.json());

/* DEMO REQUEST */
const questions = [
  { id: 1, question: 'what is the full meaning of HTML?', answers: [{ id: 1, answer: 'hypertext markup language' }] },
  { id: 2, question: 'is node.js a framework?', answers: [{ id: 1, answer: 'yes it is a framework' }] },
  { id: 3, question: 'how do i a declare a variable in javascript?', answers: [{ id: 1, answer: 'you can use LET' }] },
  { id: 4, question: 'what is css used for?', answers: [{ id: 1, answer: 'it is used for styling....' }] },
];

router.post('/api/v1/questions/:id/answers', (req, res) => {
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }

  const newAns = {
    id: specificQuestion.answers.length + 1,
    answer: req.body.answer,
  };

  specificQuestion.answers.push(newAns);
  res.status(200).send(specificQuestion);
});

module.exports = router;
