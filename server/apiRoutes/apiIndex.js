// apiRoutes/index.js
const router = require('express').Router();

// // SOME EXAMPLES OF ROUTES BELOW (ALL TAKEN FROM OUR ROUTES FOLDER)
// router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

router.use(function (req, res, next) {
  const err = new Error('Hi! Sorry, API route not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
