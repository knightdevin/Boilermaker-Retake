const express = require('express');
const app = express();

// our loggin middleware:
const morgan = require('morgan');
app.use(morgan('dev'));

// our static middleware:
app.use(express.static(path.join(__dirname, './path/to/static/assets')));

// here is our parsing middleware:
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// server.js
app.use('/api', require('./apiRoutes')); // matches all requests to /api


// THIS WILL SEND THE INDEX HTML (Send index.html for any other requests)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './path/to/index.html'); // <<<--- MAY NEED TO ADJUST THE PATH?
});

// This handles the 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})


const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log('Knock, knock');
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
