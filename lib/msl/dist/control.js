"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./methods","./Type/Pred-Type","./at/Seq/Seq","./compare"],(exports,js_0,methods_1,Pred_45Type_2,Seq_3,compare_4)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(js_0),defined_63=_ms.get(_$0,"defined?"),js_45=_ms.get(_$0,"js-"),js_60_61=_ms.get(_$0,"js<="),_$1=_ms.getModule(methods_1),freeze=_ms.get(_$1,"freeze"),_$2=_ms.getModule(Pred_45Type_2),Opt=_ms.get(_$2,"Opt"),Seq=_ms.lazy(()=>_ms.getDefaultExport(Seq_3)),_$3=_ms.lazyGetModule(Seq_3),_43_43_62_33=_ms.lazyProp(_$3,"++>!"),_$4=_ms.lazyGetModule(compare_4),_61_63=_ms.lazyProp(_$4,"=?");
		const do_45times_33=exports["do-times!"]=(()=>{
			const built={};
			const test=built.test=function test(){
				let i=0;
				do_45times_33(10,()=>{
					i=js_45(i,1)
				});
				_ms.assert(_ms.unlazy(_61_63),i,- 10)
			};
			return _ms.set((n_45times,action)=>{
				_ms.assert(js_60_61,0,n_45times);
				let n=n_45times;
				for(;;){
					if(! n){
						break
					};
					action();
					n=js_45(n,1)
				}
			},built)
		})();
		const opr=exports.opr=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[void 0,1],1);
				_ms.assoc(built,[1,2],1);
				return built
			};
			return _ms.set((_,_default)=>{
				_ms.checkContains(Opt,_,"_");
				return (defined_63(_)?_:_ms.unlazy(_default))
			},built)
		})();
		const build=exports.build=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(_ms.unlazy(_61_63),[0,1],build(_yield=>{
					_yield(0);
					return _yield(1)
				}))
			};
			return _ms.set(calls_45yield=>{
				_ms.checkContains(Function,calls_45yield,"calls-yield");
				const yielded=[];
				const _yield=function _yield(_){
					return _ms.unlazy(_43_43_62_33)(yielded,[_])
				};
				calls_45yield(_yield);
				return _ms.checkContains(_ms.unlazy(Seq),freeze(yielded),"res")
			},built)
		})();
		const unreachable_33=exports["unreachable!"]=(()=>{
			return ()=>{
				throw new (Error)(`This should not be reachable.`)
			}
		})();
		const TODO=exports.TODO=(()=>{
			return ()=>{
				throw new (Error)(`This function has not yet been implemented.`)
			}
		})();
		const name=exports.name=`control`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvY29udHJvbC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLHlDQUNVLEtBQUE7O0dBQ1Qsc0JBQ1EsZUFBQTtJQUFQLE1BQU07SUFDTixjQUFVLEdBQ0ssSUFBQTtPQUFULE1BQUksRUFBRTtJQUFBO2tDQUNELEVBQUU7O2tCQUNaLENBQUEsVUFBUSxTQUNNO2VBQVAsU0FBSyxFQUFFO0lBQ2YsTUFBTTtJQUVGLE9BQUE7S0FBSCxLQUFRLEVBQ0M7TUFBUjtLQUFBO0tBQ0Q7T0FDSyxNQUFJLEVBQUU7SUFBQTtHQUFBOztFQUVkLHNCQUNJLEtBQUE7O0dBQ0gsc0JBQ08sZUFBQTs7b0JBQU4sQ0FBQyxPQUFVLEdBQU07b0JBQ2pCLENBQUMsRUFBRSxHQUFNOzs7a0JBQ1QsQ0FBQSxFQUFNLFdBQ1E7c0JBRFo7V0FDRyxDQUFBLFdBQUEsR0FBVTs7O0VBRWpCLDBCQUNNLEtBQUE7O0dBRUwsc0JBQ1EsZUFBQTtrQ0FBSSxDQUFDLEVBQUUsR0FBSSxNQUFPLFFBQ0s7S0FBN0IsT0FBTTtZQUNOLE9BQU07SUFBQTtHQUFBO2tCQUNGLGVBQ29CO3NCQURSO0lBQ2pCLGNBQVU7SUFDVixhQUFTLGdCQUFBLEVBQ0M7cUNBQUosUUFBUSxDQUFDO0lBQUE7SUFDZixjQUFZOzZDQUNaLE9BQU87OztFQUdULDZDQUNhLEtBQUE7VUFFVixJQUFBO0lBQUQsa0JBQVE7OztFQUdWLHdCQUNLLEtBQUE7VUFFRixJQUFBO0lBQUQsa0JBQVE7OztFQXpEVix3QkFBQSIsImZpbGUiOiJjb250cm9sLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=