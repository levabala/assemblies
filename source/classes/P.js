class P {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
    return this;
  }

  add(p) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }

  clone() {
    return new P(this.x, this.y);
  }

  inRange(x_range, y_range, include = true) {
    return x_range.isIn(this.x, include) && y_range.isIn(this.y, include);
  }

  toString() {
    return `${this.x}:${this.y}`;
  }
}

export default P;
