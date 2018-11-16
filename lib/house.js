const Room = require("./room")

module.exports = class House {
  constructor() {
    this._rooms = [];
  }
  createRoom(name) {
    const room = new Room(name);
    this._rooms.push(room);
  }
  getRooms() {
    return this._rooms;
  }
  getRoom(name) {
    return this._rooms.filter(room => room.name === name)[0]
  }

}