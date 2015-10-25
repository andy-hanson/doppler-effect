clamp. \_ lo hi
	case
		<? _ lo
			lo
		>? _ hi
			hi
		else
			_

round-to-nearest. \a b
	* (Math.round / a b) b

log-scale. \fraction lo hi exponent
	fraction->range (scale-exponential fraction exponent) lo hi

log-unscale. \value lo hi exponent
	un-scale-exponential (range->fraction value lo hi) exponent

wrap-to-range. \num lo hi
	+ lo (modulo (- num lo) - hi lo)

range->fraction. \num lo hi
	/ (- num lo) - hi lo

region private
	scale-exponential = \fraction:Fraction exponent
		assert >=? exponent 1
		num = - (** exponent fraction) 1
		denom = - exponent 1
		/ num denom

	un-scale-exponential = \fraction:Fraction exponent
		assert >=? exponent 1
		log-base exponent + 1 * fraction - exponent 1

	fraction->range = \fraction:Fraction lo hi
		+ lo * fraction - hi lo

	todo Range method
	Fraction = new Pred-Type
		name.
		predicate. &(<=? 0 _ 1)
