import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import methodOverride from 'method-override';

// Require click schema
import Click from './models/article';

const app = express();

const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// public Directory
app.use(express.static('./public'));

// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: [
    'views/partials'
  ]
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// -------------------------------------------------

// hook mongoose with our mongodb database
//local uri
// create mongoDB nytreact
let databaseUri = 'mongodb://localhost/nytreact';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Mongoose Error:', err);
});

db.once('open', () => {
  console.log('Mongoose connection successful.');
});

// Routes
// Main "/" Route. This will redirect the user to our rendered React application
app.use(require('./routes/saved'));
app.use(require('./routes/main'));

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get('/api', (req,res) => {
  Click.find({}).exec((err, doc)=>{
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.

app.post('/api', (req, res) => {
  let clickID = req.body.clickID;
  let clicks = parseInt(req.body.clicks);

    // Note how this route utilizes the findOneAndUpdate function to update the clickCount
    // { upsert: true } is an optional object we can pass into the findOneAndUpdate method
    // If included, Mongoose will create a new document matching the description if one is not found
  Click.findOneAndUpdate({
    clickID: clickID
  }, {
    $set: {
      clicks: clicks
    }
  }, {upsert: true}).exec((err)=>{
    if (err) {
      console.log(err);
    }else {
      res.send('Updated Click Count!');
    }
  });
});

app.listen(PORT, () =>{
  console.log('App listening on PORT: ' + PORT);
});