define(['exports', 'jquery', './math', './physics', './StarDisplay', 'numeral'], function (exports, _jquery, _math, _physics, _StarDisplay, _numeral) {
	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _$ = _interopRequireDefault(_jquery);

	var _StarDisplay2 = _interopRequireDefault(_StarDisplay);

	var _numeral2 = _interopRequireDefault(_numeral);

	const
	// Higher number will give more detail for low velocity and less for high velocity
	ExpScale = 8,
	     
	// nm for green light
	SourceWavelength = 500;

	(0, _$.default)(() => {
		(0, _$.default)('#sourceWavelength').text(SourceWavelength);

		const velTextBox = (0, _$.default)('#velocityTextBox'),
		      velSlider = (0, _$.default)('#velocitySlider'),
		      VMin = Number(velTextBox.attr('min')),
		      VMax = Number(velTextBox.attr('max'));

		velTextBox.change(() => setVelocity((0, _math.clamp)(velTextBox.val(), VMin, VMax)));
		velSlider.on('input', () => setVelocity((0, _math.logScale)(velSlider.val(), VMin, VMax, ExpScale)));

		const star = new _StarDisplay2.default();

		setVelocity(0);

		function setVelocity(velMm) {
			velMm = (0, _math.roundToNearest)(velMm, velTextBox.attr('step'));
			velTextBox.val(velMm);
			velSlider.val((0, _math.logUnscale)(velMm, VMin, VMax, ExpScale));

			const vel = megametersToMeters(velMm);
			star.setVelocity(vel);
			const d = (0, _physics.dopplerFactor)(vel);
			(0, _$.default)('#dopplerFactor').text((0, _numeral2.default)(d).format('0.00'));

			const wavelength = SourceWavelength * d;
			(0, _$.default)('#observerWavelength').text((0, _numeral2.default)(wavelength).format('0'));

			star.setColor((0, _physics.wavelengthToRgb)(wavelength));
		}
	});

	const megametersToMeters = megameters => megameters * 1000000;
});