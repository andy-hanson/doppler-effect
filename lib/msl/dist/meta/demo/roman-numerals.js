"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../math/Number","../../math/methods","../../at/Range"],(exports,compare_0,Number_1,methods_2,Range_3)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_61_63=_ms.get(_$0,"<=?"),_$1=_ms.getModule(Number_1),log=_ms.get(_$1,"log"),Nat=_ms.get(_$1,"Nat"),pow=_ms.get(_$1,"pow"),round_45down=_ms.get(_$1,"round-down"),_$2=_ms.getModule(methods_2),_45=_ms.get(_$2,"-"),_42=_ms.get(_$2,"*"),Range=_ms.lazy(()=>_ms.getDefaultExport(Range_3));
		const roman_45digits=(()=>{
			const built=new (global.Map)();
			_ms.assoc(built,1,`I`);
			_ms.assoc(built,5,`V`);
			_ms.assoc(built,10,`X`);
			_ms.assoc(built,50,`L`);
			_ms.assoc(built,100,`C`);
			_ms.assoc(built,500,`D`);
			_ms.assoc(built,1000,`M`);
			return built
		})();
		const power_45of_4510_45below=function power_45of_4510_45below(_){
			return pow(10,round_45down(log(10,_)))
		};
		const roman=exports.roman=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1],`I`);
				_ms.assoc(built,[4],`IV`);
				_ms.assoc(built,[5],`V`);
				_ms.assoc(built,[9],`IX`);
				_ms.assoc(built,[44],`XLIV`);
				_ms.assoc(built,[49],`XLIX`);
				_ms.assoc(built,[2014],`MMXIV`);
				return built
			};
			return _ms.set(n=>{
				_ms.checkContains(Nat,n,"n");
				_ms.assert(_ms.contains,new (_ms.unlazy(Range))(1,4000),n);
				const dec=power_45of_4510_45below(n);
				const dig=function dig(dec_45multiple){
					return _ms.sub(roman_45digits,_42(dec_45multiple,dec))
				};
				const rec=function rec(dec_45multiple){
					return (()=>{
						const _=_45(n,_42(dec_45multiple,dec));
						if(_61_63(_,0)){
							return ""
						} else {
							return roman(_)
						}
					})()
				};
				const gt_63=function gt_63(dec_45multiple){
					return _60_61_63(_42(dec_45multiple,dec),n)
				};
				return (()=>{
					if(gt_63(9)){
						return `${dig(1)}${dig(10)}${rec(9)}`
					} else if(gt_63(5)){
						return `${dig(5)}${rec(5)}`
					} else if(gt_63(4)){
						return `${dig(1)}${dig(5)}${rec(4)}`
					} else {
						return `${dig(1)}${rec(1)}`
					}
				})()
			},built)
		})();
		const name=exports.name=`roman-numerals`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL3JvbWFuLW51bWVyYWxzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EscUJBQ2MsS0FBQTs7bUJBQWIsRUFBTTttQkFDTixFQUFNO21CQUNOLEdBQU87bUJBQ1AsR0FBTzttQkFDUCxJQUFRO21CQUNSLElBQVE7bUJBQ1IsS0FBUzs7O0VBRVYsOEJBQXFCLGlDQUFBLEVBQ0M7VUFBckIsSUFBSSxHQUFJLGFBQVksSUFBSSxHQUFHO0VBQUE7RUFFNUIsMEJBQ00sS0FBQTs7R0FFTCxzQkFDTyxlQUFBOztvQkFBTixDQUFDLEdBQU87b0JBQ1IsQ0FBQyxHQUFPO29CQUNSLENBQUMsR0FBTztvQkFDUixDQUFDLEdBQU87b0JBQ1IsQ0FBQyxJQUFRO29CQUNULENBQUMsSUFBUTtvQkFDVCxDQUFDLE1BQVU7OztrQkFFWCxHQUlBO3NCQUpFOzRCQUVVLHdCQUFVLEVBQUUsTUFBZjtJQUVULFVBQU0sd0JBQWtCO0lBQ3hCLFVBQU8sYUFBQSxlQUNZO29CQUFsQixlQUFjLElBQUUsZUFBYTtJQUFBO0lBQzlCLFVBQU8sYUFBQSxlQUNZO1lBQWI7TUFBQSxRQUFBLElBQUUsRUFBRyxJQUFFLGVBQWE7TUFDeEIsR0FBQSxPQUFHLEVBQUUsR0FDQztjQUFKO01BQUEsT0FFRTtjQUFILE1BQUE7TUFBQTtLQUFBO0lBQUE7SUFDSCxZQUFPLGVBQUEsZUFDWTtZQUFsQixVQUFLLElBQUUsZUFBYSxLQUFLO0lBQUE7V0FFdEI7S0FBSCxHQUFBLE1BQUksR0FDQzthQUFILEdBQUMsSUFBSSxLQUFHLElBQUksTUFBSSxJQUFJO1lBQ3RCLEdBQUEsTUFBSSxHQUNDO2FBQUgsR0FBQyxJQUFJLEtBQUcsSUFBSTtZQUNkLEdBQUEsTUFBSSxHQUNDO2FBQUgsR0FBQyxJQUFJLEtBQUcsSUFBSSxLQUFHLElBQUk7WUFFakI7YUFBRixHQUFDLElBQUksS0FBRyxJQUFJOzs7OztFQXREakIsd0JBQUEiLCJmaWxlIjoibWV0YS9kZW1vL3JvbWFuLW51bWVyYWxzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=