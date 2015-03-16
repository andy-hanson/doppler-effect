"use strict"

var
	assert = require("assert")

var e = module.exports = {
	circle: function(c, x, y, rad) {
		c.beginPath()
		c.arc(x, y, rad, 0, Math.PI * 2, true)
		c.closePath()
	},

	colorMultiply: function(c, rgb) {
		e.applyFilter(c, function(r, g, b, a) {
			return [ rgb[0] * r, rgb[1] * g, rgb[2] * b, a ]
		})
	},

	applyFilter: function(c, filter) {
		var imageData = c.getImageData(0, 0, c.canvas.width, c.canvas.height)
		var d = imageData.data
		for (var i = 0; i < d.length; i += 4) {
			var rgba = filter(d[i], d[i + 1], d[i + 2], d[i + 3])
			assert(rgba.length === 4)
			for (var j = 0; j < 4; j++)
				d[i + j] = rgba[j]
		}
		c.putImageData(imageData, 0, 0)
	}
}

