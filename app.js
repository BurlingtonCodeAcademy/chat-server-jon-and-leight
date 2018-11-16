const fs = require('fs');
const $path = require('path');
const express = require('express');
const Room = require('./lib/room');
const House = require('./lib/house');
const Message = require('./lib/message');

const app = express();
const port = process.env.PORT || 5000;
const publicDir = $path.resolve('./public');
const chatDir = $path.resolve('./public');

const house = new House();
house.createRoom("main");



// app.get("/.json", (_request, response) => {
//   const messages = house.getRoom("main").getMessages()
//   response.send(messages)
// })


app.get("/:room.json", (request, response) => {
  const messages = house.getRoom(request.params.room).getMessages()
  response.send(messages);
})

app.get("/chat/:room", (request, response) => {
  response.sendFile($path.join(publicDir, "index.html"))
})

app.post("/createRoom", express.urlencoded({extended: false}), (request, response) => {
  console.log(request.body)
  house.createRoom(request.body.room)
  response.redirect(`/chat/${request.body.room}`)
})

app.post("/send", express.urlencoded({ extended: false }), (request, response) => {
  house.getRoom(request.body.room).createMessage(request.body.body, request.body.author)
  response.redirect(`/chat/${request.body.room}`)
})

app.get("/", (_request, response) => {
  response.redirect("/chat/main")
})

app.use(express.static('public'));
app.listen(port, () => console.log(`Chat app listening on port ${port}!`));

