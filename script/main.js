"use strict";
define(["msl/private/boot","exports","numeral","./math","./physics","./StarDisplay","msl/math/methods"],(_boot,exports,numeral_0,math_1,physics_2,StarDisplay_3,methods_4)=>{
	_ms.getModule(_boot);
	const numeral=_ms.getDefaultExport(numeral_0),_$0=_ms.getModule(math_1),clamp=_ms.get(_$0,"clamp"),log_45scale=_ms.get(_$0,"log-scale"),log_45unscale=_ms.get(_$0,"log-unscale"),round_45to_45nearest=_ms.get(_$0,"round-to-nearest"),_$1=_ms.getModule(physics_2),doppler_45factor=_ms.get(_$1,"doppler-factor"),wavelength_45_62color=_ms.get(_$1,"wavelength->color"),StarDisplay=_ms.getDefaultExport(StarDisplay_3),_$2=_ms.getModule(methods_4),_42=_ms.get(_$2,"*");
	const Exp_45Scale=(()=>{
		return 8
	})();
	const Source_45Wavelength=(()=>{
		return 500
	})();
	document.getElementById(`sourceWavelength`).textContent=Source_45Wavelength;
	const megameters_45_62meters=function megameters_45_62meters(Mm){
		return _42(Mm,1000000)
	};
	const set_45velocity_33=function set_45velocity_33(vel_45Mm){
		vel_45Mm=round_45to_45nearest(vel_45Mm,V_45Step);
		vel_45text_45box.value=vel_45Mm;
		vel_45slider.value=log_45unscale(vel_45Mm,V_45Min,V_45Max,Exp_45Scale);
		const vel=megameters_45_62meters(vel_45Mm);
		const dop=doppler_45factor(vel);
		const wavelength=_42(Source_45Wavelength,dop);
		document.getElementById(`dopplerFactor`).textContent=(()=>{
			return numeral(dop).format(`0.00`)
		})();
		document.getElementById(`observerWavelength`).textContent=(()=>{
			return numeral(wavelength).format(`0`)
		})();
		star["set-velocity-and-color!"](vel,wavelength_45_62color(wavelength))
	};
	const vel_45text_45box=document.getElementById(`velocityTextBox`);
	const vel_45slider=document.getElementById(`velocitySlider`);
	const V_45Min=Number(vel_45text_45box.min);
	const V_45Max=Number(vel_45text_45box.max);
	const V_45Step=Number(vel_45text_45box.step);
	vel_45text_45box.addEventListener(`change`,()=>{
		set_45velocity_33(clamp(Number(vel_45text_45box.value),V_45Min,V_45Max))
	});
	vel_45slider.addEventListener(`input`,()=>{
		set_45velocity_33(log_45scale(Number(vel_45slider.value),V_45Min,V_45Max,Exp_45Scale))
	});
	const star=new (StarDisplay)();
	const main=exports.default=set_45velocity_33(0);
	const name=exports.name=`main`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9tYWluLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FPQSxrQkFDVyxLQUFBO1NBQ1Y7Q0FBQTtDQUNELDBCQUNtQixLQUFBO1NBQ2xCO0NBQUE7Q0FFQSx3QkFBeUIsZ0NBQWtDO0NBRTVELDZCQUFzQixnQ0FBQSxHQUNFO1NBU1YsSUFUWCxHQUFHO0NBQUE7Q0FHTix3QkFBa0IsMkJBQUEsU0FDTTtXQUFiLHFCQUFpQixTQUFPO0VBQ2xDLHVCQUFzQjtFQUN0QixtQkFBb0IsY0FBWSxTQUFPLFFBQU0sUUFBTTtFQUNuRCxVQUFNLHVCQUFtQjtFQUN6QixVQUFNLGlCQUFlO0VBQ3JCLGlCQUFhLElBQUUsb0JBQWtCO0VBRWhDLHdCQUF5Qiw2QkFDOEIsS0FBQTtVQUF0RCxRQUFRLFlBQWE7O0VBQ3RCLHdCQUF5QixrQ0FDbUMsS0FBQTtVQUEzRCxRQUFRLG1CQUFvQjs7RUFFOUIsZ0NBQTZCLElBQUssc0JBQWtCO0NBQUE7Q0FFckQsdUJBQWUsd0JBQXlCO0NBQ3hDLG1CQUFhLHdCQUF5QjtDQUV0QyxjQU8yQixPQVBaO0NBQ2YsY0FNMkIsT0FOWjtDQUNmLGVBSzJCLE9BTFg7Q0FFaEIsa0NBQStCLFNBQ1UsSUFBQTtFQUF4QyxrQkFBZSxNQUVXLE9BRkcsd0JBQW9CLFFBQU07Q0FBQTtDQUN4RCw4QkFBNkIsUUFDUyxJQUFBO0VBQXJDLGtCQUFlLFlBQVcsT0FBTyxvQkFBa0IsUUFBTSxRQUFNO0NBQUE7Q0FFaEUsV0FBTyxLQUFJO0NBQ1gsMkJBQUEsa0JBQWM7Q0FoRGQsd0JBQUEiLCJmaWxlIjoiLi9tYWluLmpzIn0=