import Vector2 from "./Vector2.js"

export default class Rectangle {
	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.position = new Vector2(x, y)

		this.size = new Vector2(width, height)
	}

	get left() {
		return this.position.x
	}

	set left(value) {
		if (value >= this.right) {
			this.size.x = 0
		} else {
			this.size.x = this.right - value
		}

		this.position.x = value
	}

	get right() {
		return this.position.x + this.size.x
	}

	set right(value) {
		if (value <= this.position.x) {
			this.size.x = 0
		} else {
			this.size.x = value - this.position.x
		}
	}

	get top() {
		return this.position.y
	}

	set top(value) {
		if (value >= this.bottom) {
			this.size.y = 0
		} else {
			this.size.y = this.bottom - value
		}

		this.position.y = value
	}

	get bottom() {
		return this.position.y + this.size.y
	}

	set bottom(value) {
		if (value <= this.position.y) {
			this.size.y = 0
		} else {
			this.size.y = value - this.position.y
		}
	}

	get center() {
		return new Vector2(this.position.x + this.size.x / 2, this.position.y + this.size.y / 2)
	}

	set center({ x, y }) {
		this.x = x - this.size.x / 2
		this.y = y - this.size.y / 2
	}

	set(x, y, width, height) {
		this.position.set(x, y)
		this.size.set(width, height)
	}

	contains(point) {
		return (
			point.x >= this.left &&
			point.x <= this.right &&
			point.y >= this.top &&
			point.y <= this.bottom
		)
	}

	intersectsCircle(circle) {
		return !(
			circle.position.x + circle.radius <= this.left &&
			circle.position.x + circle.radius >= this.right &&
			circle.position.y + circle.radius <= this.top &&
			circle.position.y + circle.radius >= this.bottom
		)
	}

	intersectsRectangle(rectangle) {
		if (Math.abs(this.position.x - rectangle.position.x) > this.size.x / 2 + rectangle.size.x / 2)
			return false;
		if (Math.abs(this.position.y - rectangle.position.y) > this.size.y / 2 + rectangle.size.y / 2)
			return false;
		return true;
	}
}