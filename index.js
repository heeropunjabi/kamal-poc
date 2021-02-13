const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const Joi = require('joi');
const app = express();

app.use(express.static(path.join(__dirname, "website")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "website", "contacts.html"));
});

app.post("/", (request, response) => {
  console.log(request.body);

  // validation
  // const schema = Joi.object({
  //     email: Joi.string().trim().email().required(),
  //     password: Joi.string().min(5).max(10).required()
  // });
  // // const validation = schema.validate(request.body);
  // const validation = schema.validate({ email: 'abc@gnail.com', password: 'abc123' });

  // if (validation.error) {
  //     console.log(validation.error);
  //     response.send('an error has occured: ' + validation.error);
  // } else {
  //     console.log(validation.result);
  response.send("successfully posted data");
  // }

  // schema.validate(request.body, (error, result) => {

  // })

  // perform database operations here
});

app.get("/example", (request, response) => {
  response.send("Hitting Example Route");
});

// app.get('/example/:name/:age', (request, response) => {
//     console.log(request.params);
//     console.log(request.query);
//     response.send(request.params.name + ' : ' + request.params.age + ' : ' + request.query.data);
// });

app.listen(3001);

// ///
// [
//   { name: 'email', value: 'kamal@heady.io' },
//   { name: 'password', value: 'aa' }
// ]
