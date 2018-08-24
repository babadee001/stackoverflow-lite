const express = require('express');
const pg = require("pg")
const router = express.Router();
router.use(express.json());

const connectString = 'postgres://ajnmkensznevyg:809e1ebf837f1ecaa53bf71cc4d16f394b6ca586344d3b762bfbf09fdf35fcc0@ec2-54-243-216-33.compute-1.amazonaws.com:5432/d7egqn7mdul5o2'


/*  GET ALL QUESTIONS */
router.get('/api/v1/questions', (req, res) => {
  pg.connect(connectString, (err, client, done) => {
    if(err){
      res.status(400).send("not able to connect" + err);
    }
    client.query('SELECT * FROM questions()', (err, result) =>{
      if(err){
        res.status(400).send(err);
      }
      res.status(200).send(result.rows)
    })
  })
  res.status(200).send(questions);
});

module.exports = router;
