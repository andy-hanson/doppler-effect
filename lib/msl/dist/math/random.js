"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","./Number","./methods"],(exports,compare_0,Number_1,methods_2)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(Number_1),Int=_ms.get(_$1,"Int"),_$2=_ms.getModule(methods_2),_42=_ms.get(_$2,"*"),_45=_ms.get(_$2,"-"),_43=_ms.get(_$2,"+");
		const random_45int_45upto=exports["random-int-upto"]=function random_45int_45upto(max){
			_ms.checkContains(Int,max,"max");
			return Math.floor(_42(Math.random(),max))
		};
		const random_45int=exports["random-int"]=function random_45int(min,max){
			_ms.checkContains(Int,min,"min");
			_ms.checkContains(Int,max,"max");
			const diff=_45(max,min);
			const random_45diff=random_45int_45upto(diff);
			return _43(min,random_45diff)
		};
		const random_45bool=exports["random-bool"]=function random_45bool(){
			return _60_63(Math.random(),0.5)
		};
		const name=exports.name=`random`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWF0aC9yYW5kb20ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFLQSxxREFBa0IsNkJBQUEsSUFDTztxQkFESDtVQVNsQixXQVJTLElBUVQsY0FSeUI7RUFBQTtFQUU3Qix5Q0FBYSxzQkFBQSxJQUFRLElBQ087cUJBRFg7cUJBQVE7R0FDeEIsV0FBTyxJQUFFLElBQUk7R0FDYixvQkFBYyxvQkFBZ0I7VUFDOUIsSUFBRSxJQUFJO0VBQUE7RUFFUCwyQ0FDYyx3QkFBQTtVQUFiLE9BQUcsY0FBYztFQUFBO0VBZGxCLHdCQUFBIiwiZmlsZSI6Im1hdGgvcmFuZG9tLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=