const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Vizsga szerver');
});

app.listen(port, () => {
  console.log(`A szerver fut a http://127.0.0.1:${port}/ címen.`);
});