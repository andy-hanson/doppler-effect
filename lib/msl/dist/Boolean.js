"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports"],exports=>{
	exports._get=_ms.lazy(()=>{
		const implies=exports.implies=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[false,false],true);
				_ms.assoc(built,[false,true],true);
				_ms.assoc(built,[true,false],false);
				_ms.assoc(built,[true,true],true);
				return built
			};
			return _ms.set((if_63,then_63)=>{
				_ms.checkContains(Boolean,if_63,"if?");
				return (if_63?_ms.unlazy(then_63):true)
			},built)
		})();
		const xor=exports.xor=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[false,false],false);
				_ms.assoc(built,[false,true],true);
				_ms.assoc(built,[true,false],true);
				_ms.assoc(built,[true,true],false);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Boolean,a,"a");
				_ms.checkContains(Boolean,b,"b");
				return (a?! b:b)
			},built)
		})();
		const name=exports.name=`Boolean`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQm9vbGVhbi5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0VBQUEsOEJBQ1EsS0FBQTs7R0FFUCxzQkFDTyxlQUFBOztvQkFBTixDQUFDLE1BQU0sT0FBVTtvQkFDakIsQ0FBQyxNQUFNLE1BQVM7b0JBQ2hCLENBQUMsS0FBSyxPQUFVO29CQUNoQixDQUFDLEtBQUssTUFBUzs7O2tCQUNmLENBQUEsTUFBWSxVQUNjO3NCQVNkO1dBVFAsQ0FBQSwwQkFBVTtHQUFBOztFQUVqQixzQkFDSSxLQUFBOztHQUNILHNCQUNPLGVBQUE7O29CQUFOLENBQUMsTUFBTSxPQUFVO29CQUNqQixDQUFDLE1BQU0sTUFBUztvQkFDaEIsQ0FBQyxLQUFLLE9BQVU7b0JBQ2hCLENBQUMsS0FBSyxNQUFTOzs7a0JBQ2YsQ0FBQSxFQUFVLElBQ1M7c0JBRFA7c0JBQUE7V0FDUCxDQUFBLEVBQUcsRUFBSSxFQUFHO0dBQUE7O0VBbkJqQix3QkFBQSIsImZpbGUiOiJCb29sZWFuLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=