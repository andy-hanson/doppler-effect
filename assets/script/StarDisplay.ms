use
	global document Image setTimeout
	.draw circle color-image rgb->style
	.math wrap-to-range

Eye-Size = 50
FPS = 30
Meters-Per-Pixel = 200000

StarDisplay. class
	construct!
		.canvas = document.getElementById "starCanvas"
		.context = .canvas.getContext "2d"
		.width = .canvas.width
		.height = .canvas.height
		.star-img = with new Image
			_.src := "image/star.png"
			_.onload := !|
				.image-loaded = true
				.-color-image!()
				.-clock!()
		.star-x ::= 0

	"set-velocity-and-color!" !|vel rgb
		.vel := vel
		.color := rgb

		if! .image-loaded
			.-color-image!()

	"-clock!" !|
		.star-x :=
			x = + .star-x (/ .vel (* Meters-Per-Pixel FPS))
			max-x = - .width (/ .star-img.width 2)
			wrap-to-range x Eye-Size max-x
		.-draw!()
		c = !|
			.-clock!()
		setTimeout c (/ 1000 FPS)

	"-draw!" !|
		.context.save()
		.context.clearRect 0 0 .width .height
		.context.translate 0 (/ .height 2)
		draw-eye! .context 50 .color
		star-y = neg (/ .star-img.height 4)
		.context.putImageData .star-image-data .star-x star-y
		.context.restore()

	"-color-image!" !|
		.star-image-data := color-image .star-img .color

draw-eye! = !|ctx rad iris-color
	ctx.save()
	|| clipped to orb
	circle ctx 0 0 rad
	ctx.clip()
	|| iris
	circle ctx rad 0 (* rad (/ 2 3))
	ctx.fillStyle := rgb->style iris-color
	ctx.fill()
	|| pupil
	circle ctx rad 0 (/ rad 3)
	ctx.fillStyle := "black"
	ctx.fill()
	ctx.restore()
	|| draw orb unclipped and on top
	circle ctx 0 0 rad
	ctx.strokeStyle := "black"
	ctx.lineWidth := 2
	ctx.stroke()
