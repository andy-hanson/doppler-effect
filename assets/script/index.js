"use strict"

var
	assert = require("assert"),
	$ = require("jquery"),
	_ = require("./math"),
		clamp = _.clamp,
		logScale = _.logScale,
		logUnscale = _.logUnscale,
		roundToNearest = _.roundToNearest,
	_ = require("./physics"),
		dopplerFactor = _.dopplerFactor,
		wavelengthToRgb = _.wavelengthToRgb,
	StarDisplay = require("./StarDisplay"),
	numeral = require("numeral")

var
	// Higher number will give more detail for low velocity and less for high velocity
	ExpScale = 8,
	// nm for green light
	SourceWavelength = 500

$(function() {
	$("#sourceWavelength").text(SourceWavelength)

	var
		velTextBox = $("#velocityTextBox"),
		velSlider = $("#velocitySlider"),
		VMin = Number(velTextBox.attr("min")),
		VMax = Number(velTextBox.attr("max"))

	velTextBox.change(function() {
		setVelocity(clamp(velTextBox.val(), VMin, VMax))
	})
	velSlider.on("input", function() {
		setVelocity(logScale(velSlider.val(), VMin, VMax, ExpScale))
	})

	var star = new StarDisplay()

	setVelocity(0)

	function setVelocity(velMm) {
		velMm = roundToNearest(velMm, velTextBox.attr("step"))
		velTextBox.val(velMm)
		velSlider.val(logUnscale(velMm, VMin, VMax, ExpScale))

		var vel = megametersToMeters(velMm)
		star.setVelocity(vel)
		var d = dopplerFactor(vel)
		$("#dopplerFactor").text(numeral(d).format('0.00'))

		var wavelength = SourceWavelength * d
		$("#observerWavelength").text(numeral(wavelength).format("0"))

		star.setColor(wavelengthToRgb(wavelength))
	}
})

function megametersToMeters(megameters) {
	return megameters * 1000000
}

