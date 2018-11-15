const fs = require('fs');
const $path = require('path');
const express = require('express');
const Room = require('./lib/Room');

const app = express();
const port = process.env.PORT || 5000;
const publicDir = $path.resolve('./public');

app.get("/", (request, response) => {
  const main = new Room('main')
  response.sendFile($path.join(publicDir, "index.html"))
})

app.use(express.static('public'));
app.listen(port, () => console.log(`Chat app listening on port ${port}!`));

