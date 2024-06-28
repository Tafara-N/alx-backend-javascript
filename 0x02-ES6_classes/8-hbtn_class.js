export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (clue === 'string') {
      return this._location;
    }
    if (clue === 'number') {
      return this._size;
    }
    return null;
  }
}
