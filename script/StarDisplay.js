define(['exports', 'module', 'jquery', './draw', './math'], function (exports, module, _jquery, _draw, _math) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _$ = _interopRequireDefault(_jquery);

	const EyeSize = 50,
	      FPS = 30,
	      MetersPerPixel = 200000;

	class StarDisplay {
		constructor() {
			const c = (0, _$.default)('#starCanvas');
			this.canvas = c.get(0);
			this.width = c.width();
			this.height = c.height();

			this.starImg = new Image();
			this.starImg.src = 'image/star.png';
			this.starImg.onload = () => this.clock();

			this.starX = 0;
		}

		clock() {
			this.starX = (0, _math.wrapToRange)(this.starX + this.vel / MetersPerPixel / FPS, EyeSize, this.width - this.starImg.width / 2);
			this.draw();
			window.setTimeout(() => this.clock(), 1000 / FPS);
		}

		draw() {
			const c = this.canvas.getContext('2d');
			c.save();
			c.clearRect(0, 0, this.width, this.height);
			c.translate(0, this.height / 2);
			drawEye(c, 50);
			c.drawImage(this.starImg, this.starX, -this.starImg.height / 2);
			(0, _draw.colorMultiply)(c, this.color);
			c.restore();
		}

		setVelocity(vel) {
			this.vel = vel;
		}
		setColor(rgb) {
			this.color = rgb;
		}
	}

	module.exports = StarDisplay;

	function drawEye(c, rad) {
		c.save();
		// Clipped to orb

		(0, _draw.circle)(c, 0, 0, rad);
		c.clip();

		// Iris
		(0, _draw.circle)(c, rad, 0, rad * 2 / 3);
		// Gets colored by color()
		c.fillStyle = 'white';
		c.fill();

		// Pupil
		(0, _draw.circle)(c, rad, 0, rad / 3);
		c.fillStyle = 'black';
		c.fill();

		c.restore();

		// Draw orb unclipped and on top
		(0, _draw.circle)(c, 0, 0, rad);
		c.strokeStyle = 'black';
		c.lineWidth = 2;
		c.stroke();
	}
});