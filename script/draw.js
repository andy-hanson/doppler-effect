"use strict";
define(["msl/private/boot","exports","msl/js","msl/math/methods","msl/math/Number","msl/compare"],(_boot,exports,js_0,methods_1,Number_2,compare_3)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(js_0),js_45sub=_ms.get(_$0,"js-sub"),js_45set=_ms.get(_$0,"js-set"),_$1=_ms.getModule(methods_1),_42=_ms.get(_$1,"*"),_43=_ms.get(_$1,"+"),_$2=_ms.getModule(Number_2),divisible_63=_ms.get(_$2,"divisible?"),_$3=_ms.getModule(compare_3),_61_63=_ms.get(_$3,"=?");
	const circle=exports.circle=function circle(ctx,x,y,rad){
		ctx.beginPath();
		ctx.arc(x,y,rad,0,_42(Math.PI,2),true);
		ctx.closePath()
	};
	const color_45image=exports["color-image"]=function color_45image(img,rgb){
		const canvas=(_=>{
			_.width=img.width;
			_.height=img.height;
			return _
		})(document.createElement(`canvas`));
		const c=canvas.getContext(`2d`);
		c.drawImage(img,0,0);
		return (_=>{
			mult_45image_45data_33(_,rgb);
			return _
		})(c.getImageData(0,0,img.width,img.height))
	};
	const mult_45image_45data_33=function mult_45image_45data_33(image_45data,rgb){
		const _42r=_ms.sub(rgb,0);
		const _42g=_ms.sub(rgb,1);
		const _42b=_ms.sub(rgb,2);
		const d=image_45data.data;
		let i=0;
		const max_45i=d.length;
		_ms.assert(divisible_63,max_45i,4);
		for(;;){
			js_45set(d,i,_42(js_45sub(d,i),_42r));
			i=_43(1,i);
			js_45set(d,i,_42(js_45sub(d,i),_42g));
			i=_43(1,i);
			js_45set(d,i,_42(js_45sub(d,i),_42b));
			i=_43(1,i);
			i=_43(1,i);
			if(_61_63(i,max_45i)){
				break
			}
		}
	};
	const rgb_45_62style=exports["rgb->style"]=function rgb_45_62style(rgb){
		const f=function f(_){
			return Math.round(_42(255,_ms.sub(rgb,_)))
		};
		return `rgb(${f(0)}, ${f(1)}, ${f(2)})`
	};
	const name=exports.name=`draw`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9kcmF3Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Q0FJQSw0QkFBVSxnQkFBQSxJQUFJLEVBQUUsRUFBRSxJQUNHO0VBQXBCO0VBQ0EsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQXlDSCxJQUFaLFFBekM0QixHQUFHO0VBQ2hDOztDQUVELDJDQUFjLHVCQUFBLElBQUksSUFDRztFQUFwQixhQUFjLElBQytCO0dBQTVDLFFBQVc7R0FDWCxTQUFZOztLQUZDLHVCQUF3QjtFQUd0QyxRQUFJLGtCQUFtQjtFQUN2QixZQUFZLElBQUksRUFBRTtTQUNiLElBQ3VDO0dBQTNDLHVCQUFpQixFQUFFOztLQURmLGVBQWUsRUFBRSxFQUFFLFVBQVU7O0NBR25DLDZCQUFxQixnQ0FBQSxhQUFXLElBQ0c7RUFBbEMsbUJBQUssSUFBSTtFQUNULG1CQUFLLElBQUk7RUFDVCxtQkFBSyxJQUFJO0VBRVQsUUFBSTtFQUVKLE1BQU07RUFDTixjQUFRO2FBRUEsYUFBVyxRQUFNO0VBR3JCLE9BQUE7R0FDSCxTQUFPLEVBQUUsRUFlRyxJQWZHLFNBQU8sRUFBRSxHQUFHO0tBU3RCLElBUkUsRUFBRTtHQUVULFNBQU8sRUFBRSxFQVlHLElBWkcsU0FBTyxFQUFFLEdBQUc7S0FNdEIsSUFMRSxFQUFFO0dBRVQsU0FBTyxFQUFFLEVBU0csSUFURyxTQUFPLEVBQUUsR0FBRztLQUd0QixJQUZFLEVBQUU7S0FFSixJQUFFLEVBQUU7R0FDVCxHQUFJLE9BQUcsRUFBRSxTQUNLO0lBQWI7R0FBQTtFQUFBO0NBQUE7Q0FFSCwyQ0FBYSx3QkFBQSxJQUNHO0VBQWYsUUFBSyxXQUFBLEVBQ0M7VUFBTCxXQUFZLElBQUUsWUFBSSxJQUFJO0VBQUE7U0FDdEIsT0FBSyxFQUFFLE9BQUssRUFBRSxPQUFLLEVBQUU7O0NBaER2Qix3QkFBQSIsImZpbGUiOiIuL2RyYXcuanMifQ==