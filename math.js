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

  /*
   * Vector Subtraction with another Vector
   * @return Returns another Vector
   */
  sub(another) {
    return new Vector2d(this.x - another.x, this.y - another.y);
  }

  /*
   * Scales a Vector
   * @return Returns the scaled vector
   */
  scale(scalar) {
    return new Vector2d(this.x * scalar, this.y * scalar);
  }

  /*
   * Normalises the Vector
   * @return Returns a Vector with same Direction but length 1
   */
  norm() {
    const normLength = 1 / this.length();
    const normVector = this.scale(normLength);
    return normVector;
  }

  /*
   *@return Returns the length of the Vector
   * TODO not ready
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /*
   * Calculates the Scalar poruct (inner product)
   *
   */
  scalarproduct(another) {
    return new Vector(this.x * another.x + this.y * another.this.y);
  }

  get toString() {
    return `[${x},${y}]`;
  }
}

export { Vector2d };
