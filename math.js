class Vector2d {
  constructor(x, y) {
    this.height = height;
    this.width = width;
  }

  add(another) {
    return new Vector2d();
  }

  get x() {
    return this.x;
  }

  /*
   * Vector Addition with another Vector
   * @return Returns another Vector
   */
  add(another) {
    return new Vector2d(this.x + another.x, this.y + another.y);
  }

  mul(another) {}

  length() {}

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
