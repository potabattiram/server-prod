const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hare Krishna!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
