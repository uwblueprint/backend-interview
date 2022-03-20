const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// enable cors
app.use(cors());

app.get('/test/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}!`);
});

app.listen(PORT, () => {
  console.info(`Listening to port ${PORT}`);
});

module.exports = app;
