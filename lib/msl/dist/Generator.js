"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Type/Method","./Type/Pred-Type"],(exports,Method_0,Pred_45Type_1)=>{
	exports._get=_ms.lazy(()=>{
		const Method=_ms.getDefaultExport(Method_0),Pred_45Type=_ms.getDefaultExport(Pred_45Type_1);
		const Generator=exports.default=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Generator";
			const predicate=built.predicate=function predicate(_){
				return (_ms.contains(Object,_)&&_ms.contains(Function,_.next))
			};
			return built
		})());
		const empty_45Generator=exports["empty-Generator"]=(()=>{
			const g=function* g(){};
			return g()
		})();
		const gen_45next_33=exports["gen-next!"]=new (Method)((()=>{
			const built={};
			built[`name`]="gen-next!";
			const impl_45symbol=built["impl-symbol"]=`next`;
			return built
		})());
		const name=exports.name=`Generator`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvR2VuZXJhdG9yLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBSUEsZ0NBQVcsS0FBSSxhQUNTLEtBQUE7O1NBRXZCLFFBQUE7R0FDQSxnQ0FBWSxtQkFBQSxFQUNDO1dBQVosY0FBSyxPQUFELGlCQUFlLFNBQVA7Ozs7RUFFZCxtREFDZ0IsS0FBQTtHQUNmLFFBQ08sYUFBQTtVQUNQO0VBQUE7RUFFRCx5Q0FBVyxLQUFJLFFBQ00sS0FBQTs7U0FDcEIsUUFBQTtHQUNBLHlDQUFjOzs7RUFwQmYsd0JBQUEiLCJmaWxlIjoiR2VuZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=