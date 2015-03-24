import $ from 'jquery'
import assert from 'assert'
import { clamp, logScale, logUnscale, roundToNearest } from './math'
import { dopplerFactor, wavelengthToRgb } from './physics'
import StarDisplay from './StarDisplay'
import numeral from 'numeral'

const
	// Higher number will give more detail for low velocity and less for high velocity
	ExpScale = 8,
	// nm for green light
	SourceWavelength = 500

$(() => {
	$('#sourceWavelength').text(SourceWavelength)

	const
		velTextBox = $('#velocityTextBox'),
		velSlider = $('#velocitySlider'),
		VMin = Number(velTextBox.attr('min')),
		VMax = Number(velTextBox.attr('max'))

	velTextBox.change(() => setVelocity(clamp(velTextBox.val(), VMin, VMax)))
	velSlider.on('input', () => setVelocity(logScale(velSlider.val(), VMin, VMax, ExpScale)))

	const star = new StarDisplay()

	setVelocity(0)

	function setVelocity(velMm) {
		velMm = roundToNearest(velMm, velTextBox.attr('step'))
		velTextBox.val(velMm)
		velSlider.val(logUnscale(velMm, VMin, VMax, ExpScale))

		const vel = megametersToMeters(velMm)
		star.setVelocity(vel)
		const d = dopplerFactor(vel)
		$('#dopplerFactor').text(numeral(d).format('0.00'))

		const wavelength = SourceWavelength * d
		$('#observerWavelength').text(numeral(wavelength).format('0'))

		star.setColor(wavelengthToRgb(wavelength))
	}
})

const megametersToMeters = megameters => megameters * 1000000
