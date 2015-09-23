"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./private/bootstrap","./Type/Method"],(exports,bootstrap_0,Method_1)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(bootstrap_0),msDef=_ms.get(_$0,"msDef"),Method=_ms.getDefaultExport(Method_1);
		const sub=exports.sub=new (Method)((()=>{
			const built={};
			built[`name`]="sub";
			return built
		})());
		msDef(`sub`,sub);
		const freeze=exports.freeze=new (Method)((()=>{
			const built={};
			built[`name`]="freeze";
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return Object.freeze(_this)
			};
			return built
		})());
		const frozen_63=exports["frozen?"]=Object.isFrozen;
		const name=exports.name=`methods`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0aG9kcy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQUtDLHNCQUFLLEtBQUksUUFDTSxLQUFBOztTQUNkLFFBQUE7OztFQUNELE1BQU8sTUFBSztFQUlaLDRCQUFRLEtBQUksUUFDTSxLQUFBOztTQUVqQixRQUFBO0dBQ0Esc0JBQU07R0FDTiw2QkFDVyxtQkFBQTtVQUFJO1dBRVAsY0FGTztHQUFBOzs7RUFFaEIsbUNBQVM7RUFwQlYsd0JBQUEiLCJmaWxlIjoibWV0aG9kcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9