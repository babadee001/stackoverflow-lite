const express = require('express');

const app = express();
app.use(express.json());

/* DEMO REQUEST */
const questions = [
  { id: 1, question: 'what is the full meaning of HTML?', answers: [] },
  { id: 2, question: 'is node.js a framework?', answers: [] },
  { id: 3, question: 'how do i add to a declare a variable?', answers: [] },
  { id: 4, question: 'what is css used for?', answers: [] },
];

/*  GET ALL QUESTIONS */
app.get('/api/v1/questions', (req, res) => {
  res.status(200).send(questions);
});

// GET A SPECIFIC QUESTION
app.get('/api/v1/questions/:id', (req, res) => {
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }
  res.status(200).send(specificQuestion);
  // res.status(200).send(specificQuestion.question);
});

// GET ANSWERS TO SPECIFIC QUESTIONS
app.get('/api/v1/questions/:id/answers', (req, res) => {
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }
  res.status(200).send(specificQuestion.answers);
});

// POST A QUESTION
app.post('/api/v1/questions', (req, res) => {
/* input validation */
  // 400  Bad request
  if (!req.body.question || req.body.question === '') {
    res.send('Bad request');
  }

  const askedQuestions = {
    id: questions.length + 1,
    question: req.body.question,
    answers: [],
  };

  questions.push(askedQuestions);
  res.status(200).send(askedQuestions);
});

// POST AN ANSWER
app.post('/api/v1/questions/:id/answers', (req, res) => {
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }

  const newAns = { answer: req.body.answer };
  specificQuestion.answers.push(newAns.answer);
  res.status(200).send(specificQuestion);
});


// CHANGING A QUESTION
app.put('/api/v1/questions/:id', (req, res) => {
  // search the question
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }

  // UPDATE QUESTION
  specificQuestion.question = req.body.question;
  res.status(200).send(specificQuestion);
});

// DELETE A QUESTION
app.delete('/api/v1/questions/:id', (req, res) => {
  // SEARCH THE QUESTION
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }

  // DELETE QUESTION
  const index = questions.indexOf(specificQuestion);
  questions.splice(index, 1);

  res.status(200).send(`Question: "${specificQuestion.question}" has been deleted`);
});

// DELETE ANSWER
app.delete('/api/v1/questions/:id/:answers', (req, res) => {
  // SEARCH THE QUESTION
  const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
  if (!specificQuestion) {
    res.send('question with the ID cannot be found');
  }

  // GET ID OF QUESTION
  const specificAns = specificQuestion.answers.find(d => d.answers === req.params.answers);

  // GET SPECIFIC QUESTION
  const ansindex = specificQuestion.answers.indexOf(specificAns);
  specificQuestion.answers.splice(ansindex, 1);

  res.status(200).send(specificQuestion);
});

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`loading port ${port}.....`); });

module.exports = port;
