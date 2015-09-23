"use strict";
define(["msl/private/boot","exports","./math","msl/math/methods","msl/compare","msl/math/Number"],(_boot,exports,math_0,methods_1,compare_2,Number_3)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(math_0),range_45_62fraction=_ms.get(_$0,"range->fraction"),_$1=_ms.getModule(methods_1),_47=_ms.get(_$1,"/"),_43=_ms.get(_$1,"+"),_45=_ms.get(_$1,"-"),_42=_ms.get(_$1,"*"),_$2=_ms.getModule(compare_2),_60_63=_ms.get(_$2,"<?"),_60_61_63=_ms.get(_$2,"<=?"),_$3=_ms.getModule(Number_3),neg=_ms.get(_$3,"neg");
	const Speed_45Of_45Light=299792456;
	const doppler_45factor=exports["doppler-factor"]=function doppler_45factor(vel){
		const beta=_47(vel,Speed_45Of_45Light);
		return Math.sqrt(_43(1,beta),_45(1,beta))
	};
	const wavelength_45_62color=exports["wavelength->color"]=function wavelength_45_62color(wavelength_45nanometers){
		const rgb=wavelength_45_62uncorrected_45rgb(wavelength_45nanometers);
		const c=luminance_45correction(wavelength_45nanometers);
		return rgb.map(_ms.sub(_42,c))
	};
	const wavelength_45_62uncorrected_45rgb=function wavelength_45_62uncorrected_45rgb(_){
		const ffr=function ffr(lo,hi){
			return range_45_62fraction(_,lo,hi)
		};
		return (()=>{
			if(_60_63(_,380)){
				return [0,0,0]
			} else if(_60_63(_,440)){
				return [neg(ffr(380,440)),0,1]
			} else if(_60_63(_,490)){
				return [0,ffr(440,490),1]
			} else if(_60_63(_,510)){
				return [0,1,ffr(510,490)]
			} else if(_60_63(_,580)){
				return [ffr(510,580),1,0]
			} else if(_60_63(_,645)){
				return [1,ffr(645,580),0]
			} else if(_60_61_63(_,780)){
				return [1,0,0]
			} else {
				return [0,0,0]
			}
		})()
	};
	const luminance_45correction=function luminance_45correction(_){
		const ffr=function ffr(lo,hi){
			return range_45_62fraction(_,lo,hi)
		};
		return (()=>{
			if(_60_63(_,420)){
				return _43(0.3,_42(0.7,ffr(350,420)))
			} else if(_60_61_63(_,700)){
				return 1
			} else {
				return _43(0.3,_42(0.7,ffr(780,700)))
			}
		})()
	};
	const name=exports.name=`physics`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9waHlzaWNzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FHQSx5QkFBaUI7Q0FFakIsaURBQWlCLDBCQUFBLElBQ0c7RUFFbkIsV0FBTyxJQUFFLElBQUk7U0FDYixVQTBDRSxJQTFDVyxFQUFFLE1BQU8sSUFBRSxFQUFFO0NBQUE7Q0FFM0IseURBQW9CLCtCQUFBLHdCQUNxQjtFQUF4QyxVQUFNLGtDQUE0QjtFQUNsQyxRQUFJLHVCQUFxQjtTQUN6QixnQkFxQ1MsSUFyQ0M7Q0FBQTtDQUVYLHdDQUErQiwyQ0FBQSxFQUNDO0VBQy9CLFVBQU8sYUFBQSxHQUFHLEdBQ0U7VUFBWCxvQkFBZ0IsRUFBRSxHQUFHO0VBQUE7U0FTbEI7R0FBSCxHQXNCQSxPQXRCRyxFQUFFLEtBQ0c7V0FBUCxDQUFDLEVBQUUsRUFBRTtHQUFBLE9BQ04sR0FvQkEsT0FwQkcsRUFBRSxLQUNHO1dBQVAsQ0FBRSxJQUFLLElBQUksSUFBSSxNQUFNLEVBQUU7R0FBQSxPQUN4QixHQWtCQSxPQWxCRyxFQUFFLEtBQ0c7V0FBUCxDQUFDLEVBQUcsSUFBSSxJQUFJLEtBQUs7R0FBQSxPQUNsQixHQWdCQSxPQWhCRyxFQUFFLEtBQ0c7V0FBUCxDQUFDLEVBQUUsRUFBRyxJQUFJLElBQUk7R0FBQSxPQUNmLEdBY0EsT0FkRyxFQUFFLEtBQ0c7V0FBUCxDQUFFLElBQUksSUFBSSxLQUFLLEVBQUU7R0FBQSxPQUNsQixHQVlBLE9BWkcsRUFBRSxLQUNHO1dBQVAsQ0FBQyxFQUFHLElBQUksSUFBSSxLQUFLO0dBQUEsT0FDbEIsR0FZQSxVQVpJLEVBQUUsS0FDRztXQUFSLENBQUMsRUFBRSxFQUFFO0dBQUEsT0FFRjtXQUFILENBQUMsRUFBRSxFQUFFO0dBQUE7RUFBQTtDQUFBO0NBRVIsNkJBQXdCLGdDQUFBLEVBQ0M7RUFDeEIsVUFBTyxhQUFBLEdBQUcsR0FDRTtVQUFYLG9CQUFnQixFQUFFLEdBQUc7RUFBQTtTQUVsQjtHQUFILEdBQUEsT0FBRyxFQUFFLEtBQ0c7V0FBUCxJQUFFLElBQUssSUFBRSxJQUFLLElBQUksSUFBSTtHQUFBLE9BQ3ZCLEdBQUEsVUFBSSxFQUFFLEtBQ0c7V0FBUjtHQUFBLE9BRUc7V0FKSCxJQUlFLElBSkssSUFJRSxJQUFLLElBQUksSUFBSTtHQUFBO0VBQUE7Q0FBQTtDQXZEekIsd0JBQUEiLCJmaWxlIjoiLi9waHlzaWNzLmpzIn0=