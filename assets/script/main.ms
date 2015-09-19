use
	global document
	numeral
	.math clamp log-scale log-unscale round-to-nearest
	.physics doppler-factor wavelength->color
	.StarDisplay

Exp-Scale =
	| Higher number will give more detail for low velocity, and less for high velocity.
	8
Source-Wavelength =
	| nm for green light.
	500

(document.getElementById "sourceWavelength").textContent := Source-Wavelength

megameters->meters = |Mm
	* Mm 1000000


set-velocity! = !|vel-Mm
	vel-Mm := round-to-nearest vel-Mm V-Step
	vel-text-box.value := vel-Mm
	vel-slider.value := log-unscale vel-Mm V-Min V-Max Exp-Scale
	vel = megameters->meters vel-Mm
	dop = doppler-factor vel
	wavelength = * Source-Wavelength dop

	(document.getElementById "dopplerFactor").textContent :=
		(numeral dop).format "0.00"
	(document.getElementById "observerWavelength").textContent :=
		(numeral wavelength).format "0"

	star.set-velocity-and-color! vel (wavelength->color wavelength)

vel-text-box = document.getElementById "velocityTextBox"
vel-slider = document.getElementById "velocitySlider"

V-Min = Number vel-text-box.min
V-Max = Number vel-text-box.max
V-Step = Number vel-text-box.step

vel-text-box.addEventListener "change" !|
	set-velocity! (clamp (Number vel-text-box.value) V-Min V-Max)
vel-slider.addEventListener "input" !|
	set-velocity! (log-scale (Number vel-slider.value) V-Min V-Max Exp-Scale)

star = new StarDisplay
set-velocity! 0
