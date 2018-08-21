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

app.post('/api/v1/questions/:id/answers', (req, res) => {
    const specificQuestion = questions.find(c => c.id === parseInt(req.params.id, 10));
    if (!specificQuestion) {
      res.send('question with the ID cannot be found');
    }
  
    const newAns = { answer: req.body.answer };
    specificQuestion.answers.push(newAns.answer);
    res.status(200).send(specificQuestion);
  });
    
const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`loading port ${port}.....`); });

module.exports = port;