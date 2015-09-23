"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/Seq/Seq","../../at/Seq/Stream","../../compare","../../math/Number","../../math/methods","../../Type/Type"],(exports,Seq_0,Stream_1,compare_2,Number_3,methods_4,Type_5)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Seq_0),reverse=_ms.get(_$0,"reverse"),tail=_ms.get(_$0,"tail"),take_45while_126=_ms.get(_$0,"take-while~"),Stream=_ms.getDefaultExport(Stream_1),_$1=_ms.getModule(compare_2),_61_63=_ms.get(_$1,"=?"),_60_61_63=_ms.get(_$1,"<=?"),_$2=_ms.getModule(Number_3),Nat=_ms.get(_$2,"Nat"),_$3=_ms.getModule(methods_4),_43=_ms.get(_$3,"+"),_45=_ms.get(_$3,"-"),_$4=_ms.getModule(Type_5),_61_62=_ms.get(_$4,"=>");
		const fibs=(()=>{
			const rec=function* rec(prev,cur){
				_ms.checkContains(Nat,prev,"prev");
				_ms.checkContains(Nat,cur,"cur");
				(yield cur);
				(yield* rec(cur,_43(prev,cur)))
			};
			return new (Stream)(_ms.sub(rec,0,1))
		})();
		const zeckendorf=exports.default=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[0],"");
				_ms.assoc(built,[1],`1`);
				_ms.assoc(built,[19],`101001`);
				_ms.assoc(built,[1111],`100001010000001`);
				return built
			};
			return _ms.set(n=>{
				_ms.checkContains(Nat,n,"n");
				const z_45fibs=tail(fibs);
				const candidate_45fibs=reverse(take_45while_126(z_45fibs,_=>{
					return _60_61_63(_,n)
				}));
				let left=n;
				const digits=(()=>{
					const built=[];
					for(let _ of candidate_45fibs){
						_ms.add(built,(()=>{
							if(_60_61_63(_,left)){
								left=_45(left,_);
								return 1
							} else {
								return 0
							}
						})())
					};
					return built
				})();
				_ms.assert(_61_63,0,left);
				return _61_62(String,digits)
			},built)
		})();
		const name=exports.name=`zeckendorf`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL3plY2tlbmRvcmYubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFRQSxXQUNNLEtBQUE7R0FBTCxVQUFTLGNBQUEsS0FBUyxJQUNPO3NCQURYO3NCQUFRO1dBQ2xCO1lBQ0MsSUFBSSxJQUFLLElBQUUsS0FBSztHQUFBO1VBQ3JCLEtBQUksZ0JBQU8sSUFBSSxFQUFFO0VBQUE7RUFFbEIsaUNBQ1csS0FBQTs7R0FDVixzQkFDTyxlQUFBOztvQkFBTixDQUFDLEdBQU87b0JBQ1IsQ0FBQyxHQUFPO29CQUNSLENBQUMsSUFBUTtvQkFDVCxDQUFDLE1BQVU7OztrQkFDWCxHQUNLO3NCQURIO0lBQ0YsZUFBUyxLQUFLO0lBQ2QsdUJBQWlCLFFBQVMsaUJBQVksU0FBUSxHQUNDO1lBQTlDLFVBQUksRUFBRTtJQUFBO0lBQ1AsU0FBUztJQUNULGFBQWM7O2FBQUEsS0FBQSxpQkFDYztvQkFDdkI7T0FBSCxHQUFBLFVBQUksRUFBRSxNQUNJO2FBQUQsSUFBRSxLQUFLO2VBQ2Y7T0FBQSxPQUVHO2VBQUg7T0FBQTtNQUFBO0tBQUE7OztlQUNLLE9BQUcsRUFBRTtXQUNiLE9BQUcsT0FBTztHQUFBOztFQWxDWix3QkFBQSIsImZpbGUiOiJtZXRhL2RlbW8vemVja2VuZG9yZi5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9