define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.scaleExponential = scaleExponential;
	exports.unScaleExponential = unScaleExponential;
	exports.fractionToRange = fractionToRange;
	const logScale = (fraction, min, max, exponent) => fractionToRange(scaleExponential(fraction, exponent), min, max);

	exports.logScale = logScale;
	const logUnscale = (value, min, max, exponent) => unScaleExponential(fractionFromRange(value, min, max), exponent);

	exports.logUnscale = logUnscale;

	function scaleExponential(fraction, exponent) {
		//assert(isFraction(fraction) && exponent >= 1)
		return (Math.pow(exponent, fraction) - 1) / (exponent - 1);
	}

	function unScaleExponential(fraction, exponent) {
		//assert(isFraction(fraction) && exponent >= 1)
		return log(fraction * (exponent - 1) + 1, exponent);
	}

	const clamp = (val, min, max) => val <= min ? min : val >= max ? max : val;

	exports.clamp = clamp;
	const log = (a, b) => Math.log(a) / Math.log(b);

	exports.log = log;

	function fractionToRange(fraction, min, max) {
		//assert(isFraction(fraction))
		return min + (max - min) * fraction;
	}

	const fractionFromRange = (num, min, max) => (num - min) / (max - min);

	exports.fractionFromRange = fractionFromRange;
	const isFraction = fraction => 0 <= fraction && fraction <= 1;

	exports.isFraction = isFraction;
	const square = num => num * num;

	exports.square = square;
	const roundToNearest = (a, b) => Math.round(a / b) * b;

	exports.roundToNearest = roundToNearest;
	const wrapToRange = (num, min, max) => modulo(num - min, max - min) + min;

	exports.wrapToRange = wrapToRange;
	const modulo = (a, b) => a < 0 ? Math.abs(b) + a % b : a % b;
	exports.modulo = modulo;
});