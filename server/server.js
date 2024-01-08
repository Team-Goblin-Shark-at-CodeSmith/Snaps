const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const userRouter = require('./routes/userRouter');
const snapsRouter = require('./routes/snapsRouter');

// Handle parsing of request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle requests for static files
app.use(express.static(path.resolve(__dirname, '../public')));

// Define route handlers
app.use('/user', userRouter);
app.use('/my-snaps', snapsRouter);

// Catch-all route handler
app.use('/*', (req, res) => {
  return res.status(404).send('Page not found - 404');
});

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Server listening on PORT 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
