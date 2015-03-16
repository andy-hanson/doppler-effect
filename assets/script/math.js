"use strict"

var assert = require("assert")

var e = module.exports = {
	logScale: function(fraction, min, max, exponent) {
		return e.fractionToRange(e.scaleExponential(fraction, exponent), min, max)
	},

	logUnscale: function(value, min, max, exponent) {
		return e.unScaleExponential(e.fractionFromRange(value, min, max), exponent)
	},

	scaleExponential: function(fraction, exponent) {
		assert(e.isFraction(fraction) && exponent >= 1)
		return (Math.pow(exponent, fraction) - 1) / (exponent - 1)
	},

	unScaleExponential: function(fraction, exponent) {
		assert(e.isFraction(fraction) && exponent >= 1)
		return e.log(fraction * (exponent - 1) + 1, exponent)
	},

	clamp: function(val, min, max) {
		return (val <= min) ? min : (val >= max) ? max : val;
	},

	log: function(a, b) {
		return Math.log(a) / Math.log(b)
	},

	fractionToRange: function(fraction, min, max) {
		assert(e.isFraction(fraction))
		return min + (max - min) * fraction
	},

	fractionFromRange: function(num, min, max) {
		return (num - min) / (max - min)
	},

	isFraction: function (fraction) {
		return 0 <= fraction && fraction <= 1
	},

	square: function(num) {
		return num * num
	},

	roundToNearest: function(a, b) {
		return Math.round(a / b) * b
	},

	wrapToRange: function(num, min, max) {
		return e.modulo(num - min, max - min) + min
	},

	modulo: function(a, b) {
		return (a < 0) ? Math.abs(b) + (a % b) : a % b
	}
}

