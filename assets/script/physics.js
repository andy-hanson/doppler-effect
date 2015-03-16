var
	_ = require("./math"),
		fractionFromRange = _.fractionFromRange,
		square = _.square

var SpeedOfLight = 299792458 // m/s

var e = module.exports = {
	// wavelength at observer / wavelength at source
	// https://en.wikipedia.org/wiki/Relativistic_Doppler_effect#Motion_along_the_line_of_sight
	dopplerFactor: function(vel) {
		var beta = vel / SpeedOfLight
		return Math.sqrt((1 + beta) / (1 - beta))
	},

	// http://codingmess.blogspot.com/2009/05/conversion-of-wavelength-in-nanometers.html
	wavelengthToRgb: function(wavelengthNanometers) {
		var rgb = wavelengthToUncorrectedRgb(wavelengthNanometers)
		var c = luminanceCorrection(wavelengthNanometers)
		return rgb.map(function(_) { return c * _ })
	},
}

function wavelengthToUncorrectedRgb(w) {
	var ffr = function(min, max) { return fractionFromRange(w, min, max) }
	var ffrDown = function(min, max) { return -ffr(max, min) }
	/* Linear interpolation between:
		380: [ 0, 0, 0 ]
		440: [ 0, 0, 1 ]
		490: [ 0, 1, 1 ]
		510: [ 0, 1, 0 ]
		580: [ 1, 1, 0 ]
		645: [ 1, 0, 0 ]
	*/
	return w < 380 ?
		[ 0, 0, 0 ] :
		w < 440 ?
		[ ffrDown(380, 440), 0, 1 ] :
		w < 490 ?
		[ 0, ffr(440, 490), 1 ] :
		w < 510 ?
		[ 0, 1, ffr(510, 490) ] :
		w < 580 ?
		[ ffr(510, 580), 1, 0 ] :
		w < 645 ?
		[ 1, ffr(645, 580), 0 ] :
		w <= 780 ?
		[ 1, 0, 0 ] :
		[ 0, 0, 0 ]
}

function luminanceCorrection(w) {
	var ffr = function(min, max) { return fractionFromRange(w, min, max) }
	return w < 420 ?
		0.3 + 0.7 * ffr(350, 420) :
		w <= 700 ?
		1 :
		0.3 + 0.7 * ffr(780, 700)
}



