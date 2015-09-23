"use strict";
define(["msl/private/boot","exports","msl/compare","msl/math/methods","msl/math/Number"],(_boot,exports,compare_0,methods_1,Number_2)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(compare_0),_60_63=_ms.get(_$0,"<?"),_62_63=_ms.get(_$0,">?"),_62_61_63=_ms.get(_$0,">=?"),_60_61_63=_ms.get(_$0,"<=?"),_$1=_ms.getModule(methods_1),_42=_ms.get(_$1,"*"),_47=_ms.get(_$1,"/"),_43=_ms.get(_$1,"+"),_45=_ms.get(_$1,"-"),_$2=_ms.getModule(Number_2),modulo=_ms.get(_$2,"modulo"),log=_ms.get(_$2,"log");
	const clamp=exports.clamp=function clamp(_,lo,hi){
		return (()=>{
			if(_60_63(_,lo)){
				return lo
			} else if(_62_63(_,hi)){
				return hi
			} else {
				return _
			}
		})()
	};
	const round_45to_45nearest=exports["round-to-nearest"]=function round_45to_45nearest(a,b){
		return _42(Math.round(_47(a,b)),b)
	};
	const log_45scale=exports["log-scale"]=function log_45scale(fraction,lo,hi,exponent){
		return fraction_45_62range(scale_45exponential(fraction,exponent),lo,hi)
	};
	const log_45unscale=exports["log-unscale"]=function log_45unscale(value,lo,hi,exponent){
		return un_45scale_45exponential(range_45_62fraction(value,lo,hi),exponent)
	};
	const wrap_45to_45range=exports["wrap-to-range"]=function wrap_45to_45range(num,lo,hi){
		return _43(lo,modulo(_45(num,lo),_45(hi,lo)))
	};
	const range_45_62fraction=exports["range->fraction"]=function range_45_62fraction(num,lo,hi){
		return _47(_45(num,lo),_45(hi,lo))
	};
	const scale_45exponential=function scale_45exponential(fraction,exponent){
		_ms.assert(is_45fraction_63,fraction);
		_ms.assert(_62_61_63,exponent,1);
		const num=_45(Math.pow(exponent,fraction),1);
		const denom=_45(exponent,1);
		return _47(num,denom)
	};
	const un_45scale_45exponential=function un_45scale_45exponential(fraction,exponent){
		_ms.assert(is_45fraction_63,fraction);
		_ms.assert(_62_61_63,exponent,1);
		return log(exponent,_43(1,_42(fraction,_45(exponent,1))))
	};
	const fraction_45_62range=function fraction_45_62range(fraction,lo,hi){
		_ms.assert(is_45fraction_63,fraction);
		return _43(lo,_42(fraction,_45(hi,lo)))
	};
	const is_45fraction_63=function is_45fraction_63(fraction){
		return (_60_61_63(0,fraction)&&_60_61_63(fraction,1))
	};
	const name=exports.name=`math`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9tYXRoLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FBQSwwQkFBUSxlQUFBLEVBQUUsR0FBRyxHQUNFO1NBQ1Y7R0FBSCxHQUFBLE9BQUcsRUFBRSxJQUNFO1dBQU47R0FBQSxPQUNELEdBQUEsT0FBRyxFQUFFLElBQ0U7V0FBTjtHQUFBLE9BRUc7V0FBSDtHQUFBO0VBQUE7Q0FBQTtDQUVILHVEQUFtQiw4QkFBQSxFQUFFLEVBQ0M7U0E2QmQsSUFYRyxXQUVULElBcEJnQixFQUFFLElBQUk7Q0FBQTtDQUV4Qix1Q0FBWSxxQkFBQSxTQUFTLEdBQUcsR0FBRyxTQUNRO1NBQWxDLG9CQUFpQixvQkFBa0IsU0FBUyxVQUFVLEdBQUc7Q0FBQTtDQUUxRCwyQ0FBYyx1QkFBQSxNQUFNLEdBQUcsR0FBRyxTQUNRO1NBQWpDLHlCQUFzQixvQkFBZ0IsTUFBTSxHQUFHLElBQUk7Q0FBQTtDQUVwRCxpREFBZ0IsMkJBQUEsSUFBSSxHQUFHLEdBQ0U7U0FvQnZCLElBcEJDLEdBQUksT0FvQmEsSUFwQkgsSUFBSSxJQW9CRCxJQXBCUSxHQUFHO0NBQUE7Q0FFL0IscURBQWtCLDZCQUFBLElBQUksR0FBRyxHQUNFO1NBUXpCLElBU2tCLElBakJkLElBQUksSUFpQlUsSUFqQkgsR0FBRztDQUFBO0NBR25CLDBCQUFxQiw2QkFBQSxTQUFTLFNBQ1E7YUFBN0IsaUJBQWE7YUFRYixVQVBJLFNBQVM7RUFDckIsVUFXa0IsSUFYVCxTQUFTLFNBQVMsVUFBVTtFQUNyQyxZQVVrQixJQVZSLFNBQVM7U0FDbkIsSUFBRSxJQUFJO0NBQUE7Q0FFUCwrQkFBd0Isa0NBQUEsU0FBUyxTQUNRO2FBQWhDLGlCQUFhO2FBQ2IsVUFBSSxTQUFTO1NBQ3JCLElBQUksU0FJSixJQUpnQixFQUlWLElBSmUsU0FJSCxJQUplLFNBQVM7Q0FBQTtDQUUzQywwQkFBbUIsNkJBQUEsU0FBUyxHQUFHLEdBQ0U7YUFBeEIsaUJBQWE7U0FDckIsSUFBRSxHQUFJLElBQUUsU0FBVSxJQUFFLEdBQUc7Q0FBQTtDQUl4Qix1QkFBZ0IsMEJBQUEsU0FDUTtTQUF2QixDQUFzQixVQUFiLEVBQUUsV0FBVyxVQUFJLFNBQVM7Q0FBQTtDQTVDckMsd0JBQUEiLCJmaWxlIjoiLi9tYXRoLmpzIn0=