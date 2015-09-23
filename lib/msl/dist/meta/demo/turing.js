"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/at","../../at/Seq/Deque","../../at/Seq/Seq","../../compare","../../js","../../math/methods","../../Object","../../Type/Type","../../Type/Pred-Type"],(exports,_64_0,Deque_1,Seq_2,compare_3,js_4,methods_5,Object_6,Type_7,Pred_45Type_8)=>{
	exports._get=_ms.lazy(()=>{
		const _$2=_ms.getModule(_64_0),count=_ms.get(_$2,"count"),empty_63=_ms.get(_$2,"empty?"),Deque=_ms.getDefaultExport(Deque_1),Seq=_ms.getDefaultExport(Seq_2),_$3=_ms.getModule(Seq_2),_60_43_43_33=_ms.get(_$3,"<++!"),_43_43_62_33=_ms.get(_$3,"++>!"),set_45nth_33=_ms.get(_$3,"set-nth!"),_$4=_ms.getModule(compare_3),_61_63=_ms.get(_$4,"=?"),_$5=_ms.getModule(js_4),id_61_63=_ms.get(_$5,"id=?"),_$6=_ms.getModule(methods_5),_43=_ms.get(_$6,"+"),_45=_ms.get(_$6,"-"),_$7=_ms.getModule(Object_6),p=_ms.get(_$7,"p"),_$8=_ms.getModule(Type_7),_61_62=_ms.get(_$8,"=>"),_$9=_ms.getModule(Pred_45Type_8),Any=_ms.get(_$9,"Any");
		const R=exports.R=function R(written,new_45state){
			return {
				write:written,
				"go-right":true,
				state:new_45state
			}
		};
		const L=exports.L=function L(written,new_45state){
			return {
				write:written,
				"go-right":false,
				state:new_45state
			}
		};
		const fin=exports.fin=new (Object)();
		const run_45turing=exports["run-turing"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				const incrementer=(()=>{
					const built={};
					const init_45state=built["init-state"]=`a`;
					const blank=built.blank=0;
					const rules=built.rules=(()=>{
						const built={};
						const a=built.a=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,1,R(1,`a`));
							_ms.assoc(built,0,fin);
							return built
						})();
						return built
					})();
					return built
				})();
				_ms.assoc(built,[incrementer,[1,1,1]],[1,1,1,0]);
				const busy_45beaver=(()=>{
					const built={};
					const init_45state=built["init-state"]=`a`;
					const blank=built.blank=0;
					const rules=built.rules=(()=>{
						const built={};
						const a=built.a=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,0,R(1,`b`));
							_ms.assoc(built,1,L(1,`c`));
							return built
						})();
						const b=built.b=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,0,L(1,`a`));
							_ms.assoc(built,1,R(1,`b`));
							return built
						})();
						const c=built.c=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,0,L(1,`b`));
							_ms.assoc(built,1,fin);
							return built
						})();
						return built
					})();
					return built
				})();
				_ms.assoc(built,[busy_45beaver,[]],[1,1,1,1,1,1]);
				const sorting_45test=(()=>{
					const built={};
					const init_45state=built["init-state"]=`a`;
					const blank=built.blank=0;
					const rules=built.rules=(()=>{
						const built={};
						const a=built.a=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,0,L(0,`e`));
							_ms.assoc(built,1,R(1,`a`));
							_ms.assoc(built,2,R(3,`b`));
							return built
						})();
						const b=built.b=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,0,L(0,`c`));
							_ms.assoc(built,1,R(1,`b`));
							_ms.assoc(built,2,R(2,`b`));
							return built
						})();
						const c=built.c=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,1,L(2,`d`));
							_ms.assoc(built,2,L(2,`c`));
							_ms.assoc(built,3,L(2,`e`));
							return built
						})();
						const d=built.d=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,1,L(1,`d`));
							_ms.assoc(built,2,L(2,`d`));
							_ms.assoc(built,3,R(1,`a`));
							return built
						})();
						const e=built.e=(()=>{
							const built=new (global.Map)();
							_ms.assoc(built,0,fin);
							_ms.assoc(built,1,L(1,`e`));
							return built
						})();
						return built
					})();
					return built
				})();
				_ms.assoc(built,[sorting_45test,[2,2,2,1,1,1]],[0,1,1,1,2,2,2,0]);
				return built
			};
			return _ms.set((spec,init_45tape)=>{
				_ms.checkContains(Seq,init_45tape,"init-tape");
				const _$1=spec,rules=_ms.checkContains(Object,_$1.rules,"rules"),blank=_ms.checkContains(Any,_$1.blank,"blank"),init_45state=_ms.checkContains(Any,_$1["init-state"],"init-state");
				const tape=_61_62(Deque,(empty_63(init_45tape)?[blank]:init_45tape));
				let index=0;
				let state=init_45state;
				return (()=>{
					for(;;){
						const symbol_45here=_ms.sub(tape,index);
						const rule_45here=_ms.sub(p(rules,state),symbol_45here);
						if(id_61_63(rule_45here,fin)){
							return _61_62(Array,tape)
						};
						const _$0=rule_45here,write=_$0.write,go_45right=_$0["go-right"];
						state=rule_45here.state;
						set_45nth_33(tape,index,write);
						index=(()=>{
							const _=index;
							if(go_45right){
								if(_61_63(_,_45(count(tape),1))){
									_43_43_62_33(tape,[blank])
								};
								return _43(_,1)
							} else if(_61_63(_,0)){
								_60_43_43_33(tape,[blank]);
								return 0
							} else {
								return _45(_,1)
							}
						})()
					}
				})()
			},built)
		})();
		const name=exports.name=`turing`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL3R1cmluZy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVlDLGtCQUFJLFdBQUEsUUFBUSxZQUNTO1VBQ3BCO1VBQVE7ZUFBa0I7VUFBWTtHQUFBO0VBQUE7RUFDdkMsa0JBQUksV0FBQSxRQUFRLFlBQ1M7VUFBcEI7VUFBUTtlQUFrQjtVQUFhO0dBQUE7RUFBQTtFQUN4QyxzQkFBSyxLQXVERTtFQXJEUix5Q0FDVyxLQUFBOztHQUNWLHNCQUNPLGVBQUE7O0lBQU4sa0JBQ2EsS0FBQTs7S0FBWix1Q0FBYTtLQUNiLHdCQUFPO0tBQ1Asd0JBQ00sS0FBQTs7TUFBTCxnQkFDRSxLQUFBOzt1QkFBRCxFQUFLLEVBQUUsRUFBRzt1QkFDVixFQUFLOzs7Ozs7O29CQUNSLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFPLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFFaEMsb0JBQ2EsS0FBQTs7S0FBWix1Q0FBYTtLQUNiLHdCQUFPO0tBQ1Asd0JBQ00sS0FBQTs7TUFBTCxnQkFDRSxLQUFBOzt1QkFBRCxFQUFLLEVBQUUsRUFBRzt1QkFDVixFQUFLLEVBQUUsRUFBRzs7O01BQ1gsZ0JBQ0UsS0FBQTs7dUJBQUQsRUFBSyxFQUFFLEVBQUc7dUJBQ1YsRUFBSyxFQUFFLEVBQUc7OztNQUNYLGdCQUNFLEtBQUE7O3VCQUFELEVBQUssRUFBRSxFQUFHO3VCQUNWLEVBQUs7Ozs7Ozs7b0JBQ1IsQ0FBQyxjQUFZLElBQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFFL0IscUJBQ2MsS0FBQTs7S0FBYix1Q0FBYTtLQUNiLHdCQUFPO0tBQ1Asd0JBQ00sS0FBQTs7TUFBTCxnQkFDRSxLQUFBOzt1QkFBRCxFQUFLLEVBQUUsRUFBRzt1QkFDVixFQUFLLEVBQUUsRUFBRzt1QkFDVixFQUFLLEVBQUUsRUFBRzs7O01BQ1gsZ0JBQ0UsS0FBQTs7dUJBQUQsRUFBSyxFQUFFLEVBQUc7dUJBQ1YsRUFBSyxFQUFFLEVBQUc7dUJBQ1YsRUFBSyxFQUFFLEVBQUc7OztNQUNYLGdCQUNFLEtBQUE7O3VCQUFELEVBQUssRUFBRSxFQUFHO3VCQUNWLEVBQUssRUFBRSxFQUFHO3VCQUNWLEVBQUssRUFBRSxFQUFHOzs7TUFDWCxnQkFDRSxLQUFBOzt1QkFBRCxFQUFLLEVBQUUsRUFBRzt1QkFDVixFQUFLLEVBQUUsRUFBRzt1QkFDVixFQUFLLEVBQUUsRUFBRzs7O01BQ1gsZ0JBQ0UsS0FBQTs7dUJBQUQsRUFBSzt1QkFDTCxFQUFLLEVBQUUsRUFBRzs7Ozs7OztvQkFDYixDQUFDLGVBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7OztrQkFFL0MsQ0FBQSxLQUFLLGNBQ2E7c0JBREg7SUFDZixVQUF3Qyw2QkFBbEMsa0RBQWEsc0RBQWU7SUFDbEMsV0FBTyxPQUFHLE1BQVcsQ0FBQyxTQUFPLGFBQVcsQ0FBQyxPQUFPO0lBQ2hELFVBQVU7SUFDVixVQUFVO1dBRVA7WUFBQTtNQUFGLDRCQUFjLEtBQUs7TUFDbkIsMEJBQWEsRUFBRSxNQUFNLE9BQU87TUFFNUIsR0FBSSxTQUFLLFlBQVUsS0FDRztPQUFyQixPQUFNLE9BQUcsTUFBTTtNQUFBO01BRWhCLFVBQWlCO1lBQ1I7TUFDVCxhQUFTLEtBQUssTUFBTTtZQUNOO09BQUEsUUFBQTtPQUNiLEdBQUEsV0FDUTtRQUFQLEdBQUksT0FBRyxFQUFHLElBQUcsTUFBTSxNQUFNLElBQ0U7U0FDMUIsYUFBSyxLQUFLLENBQUM7UUFBQTtlQUNaLElBQUUsRUFBRTtPQUFBLE9BQ0wsR0FBQSxPQUFHLEVBQUUsR0FDQztRQUNMLGFBQUssS0FBSyxDQUFDO2VBQ1g7T0FBQSxPQUVHO2VBQUgsSUFBRSxFQUFFO09BQUE7TUFBQTtLQUFBO0lBQUE7R0FBQTs7RUFqR1Qsd0JBQUEiLCJmaWxlIjoibWV0YS9kZW1vL3R1cmluZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9