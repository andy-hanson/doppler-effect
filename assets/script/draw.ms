import
	global document

circle. !\ctx x y rad
	ctx.beginPath()
	ctx.arc x y rad 0 (* Math.PI 2) true
	ctx.closePath()

color-image. \img rgb
	canvas = with document.createElement 'canvas
		_.width := img.width
		_.height := img.height
	c = canvas.getContext "2d"
	c.drawImage img 0 0
	with c.getImageData 0 0 img.width img.height
		mult-image-data! _ rgb

mult-image-data! = !\image-data rgb
	*r = rgb[0]
	*g = rgb[1]
	*b = rgb[2]

	d = image-data.data

	i = 0
	max-i = d.length
	assert divisible? max-i 4

	for
		|| r
		d.(i) := * d.(i) *r
		i := + 1 i
		|| g
		d.(i) := * d.(i) *g
		i := + 1 i
		|| b
		d.(i) := * d.(i) *b
		i := + 1 i
		|| a ( no change)
		i := + 1 i
		if =? i max-i
			break

rgb->style. \rgb
	f = &(Math.round * 255 rgb[_])
	"rgb(#(f 0), #(f 1), #(f 2))"
