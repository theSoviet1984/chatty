const express = require('express');
const app = express();
const port = 8881;
const bodyParser = require('body-parser');

app.use(bodyParser.json());




let messages = ["message example",'left brain is working','right brain is bored'];

app.options('/', (req, res, next)=>{
  res.status(200).set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  })
  .send(JSON.stringify(messages));
})

app.get('/', (req, res, next) => {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify(messages));
});

app.post('/', (req, res, next) => {
  messages.push({
    message: req.body.message,
    time: new Date()
  });
   res.status(200).set({
   'Content-Type': 'application/json',
   'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
   'X-XSS-Protection': '1; mode=block',
   'X-Frame-Options': 'SAMEORIGIN',
   'Content-Security-Policy': "default-src 'self' devmountain.github.io"
 }).send(JSON.stringify(messages));
});




app.listen(port, () => {
    console.log(`express is running on port ${port}`);
})
