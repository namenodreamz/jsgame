class Vector2d {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /*
   * Vector Addition with another Vector
   * @return Returns another Vector
   */
  add(another) {
    return new Vector2d(this.x + another.x, this.y + another.y);
  }

  sub(another) {
    return new Vector2d(this.x - another.x, this.y - another.y);
  }

  scale(scalar) {
    return new Vector2d(this.x * scalar, this.y * scalar);
  }

  norm() {
    const normLength = 1 / this.length();
    const normVector = this.scale(normLength);
    return normVector;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  get toString() {
    return `[${x},${y}]`;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return "(" + this.x + ", " + this.y + ")";
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

export { Vector2d, Point };
