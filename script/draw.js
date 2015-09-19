define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.circle = circle;
	exports.colorMultiply = colorMultiply;

	function circle(c, x, y, rad) {
		c.beginPath();
		c.arc(x, y, rad, 0, Math.PI * 2, true);
		c.closePath();
	}

	function colorMultiply(c, rgb) {
		applyFilter(c, (r, g, b, a) => [rgb[0] * r, rgb[1] * g, rgb[2] * b, a]);
	}

	function applyFilter(c, filter) {
		const imageData = c.getImageData(0, 0, c.canvas.width, c.canvas.height);
		const d = imageData.data;
		for (let i = 0; i < d.length; i = i + 4) {
			const rgba = filter(d[i], d[i + 1], d[i + 2], d[i + 3]);
			//assert(rgba.length === 4)
			for (let j = 0; j < 4; j = j + 1) d[i + j] = rgba[j];
		}
		c.putImageData(imageData, 0, 0);
	}
});