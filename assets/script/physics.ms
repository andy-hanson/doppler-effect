import
	.math range->fraction

Speed-Of-Light = 299792456

doppler-factor. |vel
	| wavelength at observer / wavelength at source
	| en.wikipedia.org/wiki/Relativistic_Doppler_effect#Motion_along_the_line_of_sight
	beta = / vel Speed-Of-Light
	Math.sqrt (+ 1 beta) (- 1 beta)

wavelength->color. |wavelength-nanometers
	rgb = wavelength->uncorrected-rgb wavelength-nanometers
	c = luminance-correction wavelength-nanometers
	rgb.map *[c]

wavelength->uncorrected-rgb = |_
	todo KILL
	ffr = |lo hi
		range->fraction _ lo hi
	|| Linear interpolation between:
	|| 380: [ 0, 0, 0 ]
	|| 440: [ 0, 0, 1 ]
	|| 490: [ 0, 1, 1 ]
	|| 510: [ 0, 1, 0 ]
	|| 580: [ 1, 1, 0 ]
	|| 645: [ 1, 0, 0 ]
	case
		<? _ 380
			[0 0 0]
		<? _ 440
			[(neg (ffr 380 440)) 0 1]
		<? _ 490
			[0 (ffr 440 490) 1]
		<? _ 510
			[0 1 (ffr 510 490)]
		<? _ 580
			[(ffr 510 580) 1 0]
		<? _ 645
			[1 (ffr 645 580) 0]
		<=? _ 780
			[1 0 0]
		else
			[0 0 0]

luminance-correction = |_
	todo KILL
	ffr = |lo hi
		range->fraction _ lo hi
	case
		<? _ 420
			+ 0.3 (* 0.7 (ffr 350 420))
		<=? _ 700
			1
		else
			+ 0.3 (* 0.7 (ffr 780 700))
