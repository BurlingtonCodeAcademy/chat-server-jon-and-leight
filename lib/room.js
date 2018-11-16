const Message = require("./message")

module.exports = class Room {
  constructor(name) {
    this.name = name;
    this._messages = [];
  }

  createMessage(body, author) {
    const message = new Message(body, author)
    this._messages.push(message)
  }

  getMessages() {
    if (this._messages.length) {
      return this._messages
    } else {
      return [{"author": "Your gracious moderator", "body":"No messages", "when":""}]
    }
  }
  
  
}