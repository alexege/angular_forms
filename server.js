const express = require("express");
const path = require("path");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(session({
  secret: 'somethingcool',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(express.static( __dirname + '/public/dist/public' ));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(8000, ()=>{
    console.log(`Listening on PORT: 8000!`);
});