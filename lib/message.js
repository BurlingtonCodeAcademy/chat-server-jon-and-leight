module.exports = class Message {
  constructor(body, author) {
    this.body = body;
    this.author = author;
    this.when = (new Date()).toISOString()
  }
  
}