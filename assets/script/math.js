import assert from 'assert'

export const logScale = (fraction, min, max, exponent) =>
	fractionToRange(scaleExponential(fraction, exponent), min, max)

export const logUnscale = (value, min, max, exponent) =>
	unScaleExponential(fractionFromRange(value, min, max), exponent)

export function scaleExponential(fraction, exponent) {
	assert(isFraction(fraction) && exponent >= 1)
	return (Math.pow(exponent, fraction) - 1) / (exponent - 1)
}

export function unScaleExponential(fraction, exponent) {
	assert(isFraction(fraction) && exponent >= 1)
	return log(fraction * (exponent - 1) + 1, exponent)
}

export const clamp = (val, min, max) =>
	(val <= min) ? min : (val >= max) ? max : val;

export const log = (a, b) =>
	Math.log(a) / Math.log(b)

export function fractionToRange(fraction, min, max) {
	assert(isFraction(fraction))
	return min + (max - min) * fraction
}

export const fractionFromRange = (num, min, max) =>
	(num - min) / (max - min)

export const isFraction = fraction =>
	0 <= fraction && fraction <= 1

export const square = num =>
	num * num

export const roundToNearest = (a, b) =>
	Math.round(a / b) * b

export const wrapToRange = (num, min, max) =>
	modulo(num - min, max - min) + min

export const modulo = (a, b) =>
	(a < 0) ? Math.abs(b) + (a % b) : a % b
