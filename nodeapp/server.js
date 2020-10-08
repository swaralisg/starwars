const express = require("express");
const peopleRoute = require('./Routes/peopleRoute');
const app = express();
const cors = require('cors');

const router = express.Router();
const request = require('request');

app.use('/people', peopleRoute);
app.use(cors({origin :'http://localhost:4200'}));

app.listen(8080, () => {
  console.log("Server is listening on port: 8080");
});