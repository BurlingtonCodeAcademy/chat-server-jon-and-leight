module.exports = class Message {
  constructor(body, author) {
    this.body = this.validate(body);
    this.author = author || "Anonymous";
    this.when = (new Date()).toISOString()
  }

  validate(body) {
    if (body.length <= 500 || body.length !== 0) {
      return body
    } else {
      throw "Message exceeds 500 characters"
    }
  }
}