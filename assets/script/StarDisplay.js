"use strict"

var
	$ = require("jquery"),
	_ = require("./draw"),
		circle = _.circle,
		colorMultiply = _.colorMultiply,
	_ = require("./math"),
		wrapToRange = _.wrapToRange,
	_ = require("./physics"),
		doppler = _.doppler,
		wavelengthToColor = _.wavelengthToColor

var
	EyeSize = 50,
	FPS = 30,
	MetersPerPixel = 200000

module.exports = StarDisplay
function StarDisplay() {
	var c = $("#starCanvas")
	this.canvas = c.get(0)
	this.width = c.width()
	this.height = c.height()

	this.starImg = new Image()
	this.starImg.src = "image/star.png"
	var self = this
	this.starImg.onload = function() { self.clock() }

	this.starX = 0
}
StarDisplay.prototype = {
	clock: function() {
		this.starX = wrapToRange(
			this.starX + this.vel / MetersPerPixel / FPS,
			EyeSize,
			this.width - this.starImg.width / 2)
		this.draw()
		var self = this
		window.setTimeout(function() { self.clock() }, 1000 / FPS)
	},

	draw: function() {
		var c = this.canvas.getContext("2d")
		c.save()
			c.clearRect(0, 0, this.width, this.height)
			c.translate(0, this.height / 2)
			drawEye(c, 50)
			c.drawImage(this.starImg, this.starX, - this.starImg.height / 2)
			colorMultiply(c, this.color)
		c.restore()
	},

	setVelocity: function(vel) { this.vel = vel },
	setColor: function(rgb) { this.color = rgb }
}

function drawEye(c, rad) {
	c.save() // Clipped to orb:
		circle(c, 0, 0, rad)
		c.clip()

		// Iris
		circle(c, rad, 0, rad * 2 / 3)
		c.fillStyle = "white" // Gets colored by color()
		c.fill()

		// Pupil
		circle(c, rad, 0, rad / 3)
		c.fillStyle = "black"
		c.fill()
	c.restore()

	// Draw orb unclipped and on top
	circle(c, 0, 0, rad)
	c.strokeStyle = "black"
	c.lineWidth = 2
	c.stroke()
}
