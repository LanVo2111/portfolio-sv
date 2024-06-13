const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 3005

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  credentials: true,
  optionsSuccessStatus: 200
}));
// Add headers before the routes are defined
// app.use(function (req, res, next) {

//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   // Pass to next layer of middleware
//   next();
// });
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let routes = require('./api/route') //importing route
routes(app)

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)

