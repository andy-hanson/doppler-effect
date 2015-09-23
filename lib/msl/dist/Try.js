"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/q","./cash","./compare","./Function","./Type/Pred-Type","./Type/Type","./cash","./Function"],(exports,_63_0,$_1,compare_2,Function_3,Pred_45Type_4,Type_5,$_6,Function_7)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(_63_0),_63some=_ms.get(_$0,"?some"),_63None=_ms.get(_$0,"?None"),$=_ms.getDefaultExport($_1),_$1=_ms.getModule($_1),$after=_ms.get(_$1,"$after"),_$2=_ms.getModule(compare_2),_61_63=_ms.get(_$2,"=?"),_$3=_ms.getModule(Function_3),Action=_ms.get(_$3,"Action"),_$4=_ms.getModule(Pred_45Type_4),Any=_ms.get(_$4,"Any"),Union=_ms.get(_$4,"Union"),Type=_ms.getDefaultExport(Type_5),_$5=_ms.lazyGetModule($_6),$rejected=_ms.lazyProp(_$5,"$rejected"),$resolved=_ms.lazyProp(_$5,"$resolved"),_$6=_ms.lazyGetModule(Function_7),thunk=_ms.lazyProp(_$6,"thunk");
		const fail_33=function fail_33(){
			throw new (Error)("An error occurred.")
		};
		const Success=exports.Success=class Success{
			constructor(val){
				_ms.newProperty(this,"val",val)
			}
		};
		const try_45result=exports["try-result"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(thunk)(1)],new (Success)(1));
				_ms.assert(_61_63,try_45result(fail_33).message,`An error occurred.`);
				return built
			};
			return _ms.set(tried=>{
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						return new (Success)(tried())
					}catch(_){
						return _
					}
				})()
			},built)
		})();
		const _63try=exports["?try"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(thunk)(1)],_63some(1));
				_ms.assoc(built,[fail_33],_63None);
				return built
			};
			return _ms.set(tried=>{
				_ms.checkContains(_ms.sub(Function,Any),tried,"tried");
				return (()=>{
					try {
						return _63some(tried())
					}catch(_){
						return _63None
					}
				})()
			},built)
		})();
		const fails_63=exports["fails?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(fails_63,()=>{
					throw new (Error)("An error occurred.")
				});
				_ms.assertNot(fails_63,()=>{})
			};
			return _ms.set(tried=>{
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						tried();
						return false
					}catch(_){
						return true
					}
				})()
			},built)
		})();
		const fails_45with_63=exports["fails-with?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(fails_45with_63,`message`,()=>{
					throw new (Error)(`message`)
				});
				_ms.assert(fails_45with_63,TypeError,()=>{
					return null["missing-property"]
				})
			};
			return _ms.set((expected_45error,tried)=>{
				_ms.checkContains(_ms.sub(Union,String,Type),expected_45error,"expected-error");
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						tried();
						return false
					}catch(error){
						return (()=>{
							const _=expected_45error;
							if(_ms.contains(Type,_)){
								return _ms.contains(_,error)
							} else if(_ms.contains(String,_)){
								return _61_63(error.message,_)
							} else throw new (Error)("No branch of `case` matches.")
						})()
					}
				})()
			},built)
		})();
		const annotate_45errors=exports["annotate-errors"]=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(fails_45with_63,`ab`,()=>{
					annotate_45errors(`a`,()=>{
						throw new (Error)(`b`)
					})
				})
			};
			return _ms.set((annotation,tried)=>{
				_ms.checkContains(Action,tried,"tried");
				return (()=>{
					try {
						return tried()
					}catch(_){
						_.stack=`${_ms.unlazy(annotation)}${_.stack}`;
						_.message=`${_ms.unlazy(annotation)}${_.message}`;
						throw _
					}
				})()
			},built)
		})();
		const $try=exports.$try=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_61_63,new (Success)(1),(yield $try(_ms.unlazy($resolved)(1))));
				_ms.assert(_61_63,`a`,(yield $try(_ms.unlazy($rejected)(`a`))));
				_ms.assert(_61_63,`a`,(yield $try($.reject(`a`))))
			};
			return _ms.set(_=>{
				_ms.checkContains($,_,"_");
				const success=$after(_,val=>{
					return new (Success)(val)
				});
				return success.catch(err=>{
					return err
				})
			},built)
		})();
		const $catch=exports.$catch=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_61_63,`a`,(yield $.reject(`a`).catch(_=>{
					return _
				})))
			};
			return _ms.set((promise,catcher)=>{
				_ms.checkContains($,promise,"promise");
				_ms.checkContains(Function,catcher,"catcher");
				return _ms.checkContains($,promise.catch(catcher),"res")
			},built)
		})();
		const $annotate_45errors=exports["$annotate-errors"]=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_61_63,`ab`,(yield $try($annotate_45errors(`a`,_ms.unlazy($rejected)(new (Error)(`b`))))).message)
			};
			return _ms.set((annotation,$tried)=>{
				_ms.checkContains($,$tried,"$tried");
				return $catch($tried,_=>{
					if(_ms.contains(Error,_)){
						_.stack=`${_ms.unlazy(annotation)}${_.stack}`;
						_.message=`${_ms.unlazy(annotation)}${_.message}`
					};
					throw _
				})
			},built)
		})();
		const name=exports.name=`Try`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHJ5Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBYU0sY0FDVSxrQkFBQTtHQUFmOztFQUVELDhCQUNjO0dBQ0YsWUFBQSxJQUNJOzs7O0VBRWhCLHlDQUNXLEtBQUE7O0dBRVYsc0JBQ08sZUFBQTs7b0JBQU4sbUJBQVEsSUFBTyxLQUFJLFNBQVE7ZUFDbkIsT0FBSSxhQUFXLGlCQUFnQjs7O2tCQUN2QyxPQUNZO3NCQUROO1dBRUE7U0FDRjthQUFGLEtBQUksU0FBUTtLQUFBLENBQ2IsTUFDSyxFQUFBO2FBQUo7S0FBQTtJQUFBO0dBQUE7O0VBR0osNkJBQ0ssS0FBQTs7R0FHSixzQkFDTyxlQUFBOztvQkFBTixtQkFBUSxJQUFPLFFBQU07b0JBQ3JCLENBQUMsU0FBVTs7O2tCQUNYLE9BQ21COzhCQStFRyxTQWhGUDtXQUVUO1NBQ0Y7YUFBRixRQUFNO0tBQUEsQ0FDUCxNQUNLLEVBQUE7YUFDSjtLQUFBO0lBQUE7R0FBQTs7RUFFSixpQ0FDTyxLQUFBOztHQUNOLHNCQUNRLGVBQUE7ZUFBQyxTQUNTLElBQUE7S0FBaEI7O2tCQUNPLFNBQ1MsSUFBQTtHQUFBO2tCQUNqQixPQUNZO3NCQUROO1dBRUE7U0FDRjtNQUFGO2FBQ0E7S0FBQSxDQUNELE1BQ0ssRUFBQTthQUNKO0tBQUE7SUFBQTtHQUFBOztFQUVKLDZDQUNZLEtBQUE7O0dBQ1gsc0JBQ1EsZUFBQTtlQUFDLGdCQUFhLFVBQ1csSUFBQTtLQUEvQixrQkFBUTs7ZUFDRCxnQkFBWSxVQUNXLElBQUE7WUFBOUI7OztrQkFDRCxDQUFBLGlCQUFrQyxRQUNZOzhCQUQvQixNQVNYLE9BVHdCO3NCQUFZO1dBRWxDO1NBQ0Y7TUFBRjthQUNBO0tBQUEsQ0FDRCxNQUFNLE1BQ0s7YUFBTDtPQUFBLFFBQUE7T0FDSixnQkFBQyxLQUFELEdBQ0s7NEJBQUUsRUFBTjtPQUFBLE9BQ0QsZ0JBQUMsT0FBRCxHQUNPO2VBQU4sT0FBRyxjQUFjO09BQUE7Ozs7OztFQUV2QixtREFDZ0IsS0FBQTs7R0FDZixzQkFDUSxlQUFBO2VBQUMsZ0JBQWEsS0FDTSxJQUFBO0tBQTFCLGtCQUFpQixJQUNLLElBQUE7TUFBckIsa0JBQVE7Ozs7a0JBQ1YsQ0FBQSxXQUFtQixRQUNZO3NCQUROO1dBRW5CO1NBQ0Y7YUFBRjtLQUFBLENBQ0QsTUFDSyxFQUFBO01BQUosUUFBWSw0QkFBYTtNQUN6QixVQUFjLDRCQUFhO01BQzNCLE1BQU87S0FBQTtJQUFBO0dBQUE7O0VBR1Ysd0JBQ0ssS0FBQTs7R0FDSix3QkFDVSxpQkFBQTtlQUFELE9BQUksS0FBSSxTQUFRLEdBQUksT0FBRywyQkFBZ0I7ZUFDdkMsT0FBSSxJQUFJLE9BQUksMkJBQWlCO2VBRTdCLE9BQUksSUFBSSxPQUFJLEtBQU0sU0FBVTs7a0JBQ3BDLEdBQ0c7c0JBREQ7SUFFRixjQUFVLE9BQU8sRUFBRyxLQUNHO1lBQXRCLEtBQUksU0FBUTtJQUFBO1dBQ2IsY0FBZSxLQUNHO1lBQWpCO0lBQUE7R0FBQTs7RUFFSCw0QkFDTyxLQUFBOztHQUdOLHdCQUNVLGlCQUFBO2VBQUQsT0FBSSxJQUFJLE9BQUksU0FBVSxXQUFXLEdBQ0M7WUFBekM7SUFBQTtHQUFBO2tCQUNELENBQUcsUUFBVSxVQUNnQjtzQkFEbEI7c0JBQVU7NkJBQXBCLEVBQ0QsY0FBYzs7O0VBRWhCLHFEQUNpQixLQUFBOztHQUNoQix3QkFDVSxpQkFBQTtlQUFELE9BQUksS0FBSyxPQUFHLEtBQU0sbUJBQWtCLDBCQUFlLEtBR3JELE9BSGdFOztrQkFDdEUsQ0FBQSxXQUFtQixTQUNRO3NCQUREO1dBQzFCLE9BQU8sT0FBUSxHQUNDO0tBQWYsZ0JBQUssTUFBRCxHQUNNO01BQVQsUUFBWSw0QkFBYTtNQUN6QixVQUFjLDRCQUFhOztLQUM1QixNQUFPO0lBQUE7R0FBQTs7RUF0SVgsd0JBQUEiLCJmaWxlIjoiVHJ5LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=