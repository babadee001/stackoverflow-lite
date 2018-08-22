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

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`loading port ${port}.....`); });

module.exports = port;