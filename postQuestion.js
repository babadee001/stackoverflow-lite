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
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`loading port ${port}.....`); });

module.exports = port;
