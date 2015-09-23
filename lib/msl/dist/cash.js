"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./Function","./Generator","./methods","./Type/Method","./Type/Pred-Type","./Type/Type","./io/time","./Try","./compare","./math/Number","./math/methods","./Try"],(exports,_64_0,Function_1,Generator_2,methods_3,Method_4,Pred_45Type_5,Type_6,time_7,Try_8,compare_9,Number_10,methods_11,Try_12)=>{
	exports._get=_ms.lazy(()=>{
		const _64=_ms.getDefaultExport(_64_0),_$1=_ms.getModule(_64_0),flatten=_ms.get(_$1,"flatten"),_$2=_ms.getModule(Function_1),Action=_ms.get(_$2,"Action"),Generator=_ms.getDefaultExport(Generator_2),_$3=_ms.getModule(methods_3),sub=_ms.get(_$3,"sub"),_$4=_ms.getModule(Method_4),self_45impl_33=_ms.get(_$4,"self-impl!"),_$5=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$5,"Any"),_$6=_ms.getModule(Type_6),_61_62=_ms.get(_$6,"=>"),_$7=_ms.lazyGetModule(time_7),$after_45time=_ms.lazyProp(_$7,"$after-time"),_$8=_ms.lazyGetModule(Try_8),$catch=_ms.lazyProp(_$8,"$catch"),_$9=_ms.lazyGetModule(compare_9),_61_63=_ms.lazyProp(_$9,"=?"),_$10=_ms.lazyGetModule(Number_10),divisible_63=_ms.lazyProp(_$10,"divisible?"),_$11=_ms.lazyGetModule(methods_11),_43=_ms.lazyProp(_$11,"+"),_$12=_ms.lazyGetModule(Try_12),$try=_ms.lazyProp(_$12,"$try");
		const $=exports.default=(()=>{
			return Promise
		})();
		self_45impl_33(sub,$,()=>{
			return $
		});
		const $done=exports.$done=(()=>{
			return _=>{
				_ms.checkContains($,_,"_");
				return _ms.unlazy($catch)(_,err=>{
					console.log(`=== error ===
${err.message}
${err.stack}
=== error ===`);
					throw err
				})
			}
		})();
		const $fail_45after_45time=exports["$fail-after-time"]=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				const $x=_ms.unlazy($after_45time)(100,()=>{
					return 1
				});
				const a=(yield _ms.unlazy($try)($fail_45after_45time($x,1)));
				_ms.assert(_ms.unlazy(_61_63),a.message,`Took longer than 1 milliseconds.`);
				_ms.assert(_ms.unlazy(_61_63),1,(yield $fail_45after_45time($x,200)))
			};
			return _ms.set((_,time_45ms)=>{
				_ms.checkContains($,_,"_");
				_ms.checkContains(Number,time_45ms,"time-ms");
				return _ms.checkContains($,new ($)((resolve,reject)=>{
					$after(_,resolve);
					const timeout=function timeout(){
						return reject(new (Error)(`Took longer than ${time_45ms} milliseconds.`))
					};
					return setTimeout(timeout,time_45ms)
				}),"res")
			},built)
		})();
		const $after=exports.$after=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),2,(yield $after($resolved(1),_ms.sub(_ms.unlazy(_43),1))))
			};
			return _ms.set((_,then)=>{
				_ms.checkContains($,_,"_");
				_ms.checkContains(Function,then,"then");
				return _ms.checkContains($,_.then(then),"res")
			},built)
		})();
		const $resolved=exports.$resolved=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),1,(yield $resolved(1)))
			};
			return _ms.set(value=>{
				return _ms.checkContains($,$.resolve(value),"res")
			},built)
		})();
		const $rejected=exports.$rejected=(()=>{
			const built={};
			const test=built.test=function test(){
				return $ing(function*(){
					const r=$rejected(`a`);
					_ms.assert(_ms.unlazy(_61_63),`a`,(yield _ms.unlazy($try)(r)));
					_ms.assert(_ms.unlazy(_61_63),`a`,(yield _ms.unlazy($try)($after(r,()=>{
						throw new (Error)(`b`)
					}))))
				})
			};
			return _ms.set(_=>{
				return $.reject(_)
			},built)
		})();
		const $delay=exports.$delay=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),1,(yield $delay(()=>{
					return 1
				})))
			};
			return _ms.set(delayed=>{
				_ms.checkContains(Action,delayed,"delayed");
				return _ms.unlazy($after_45time)(0,delayed)
			},built)
		})();
		const $all=exports.$all=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[1,2],(yield $all([$resolved(1),$resolved(2)])));
				const all_45rejected=$all([$rejected(`a`),$rejected(`b`)]);
				_ms.assert(_ms.unlazy(_61_63),`a`,(yield _ms.unlazy($try)(all_45rejected)))
			};
			return _ms.set(_=>{
				_ms.checkContains(_ms.sub(_64,$),_,"_");
				return _ms.checkContains(_ms.sub($,Array),$.all(_61_62(Array,_)),"res")
			},built)
		})();
		const $map=exports.$map=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[2,3,4],(yield $map([1,2,3],_=>{
					return $delay(()=>{
						return _ms.unlazy(_43)(_,1)
					})
				})))
			};
			return _ms.set((mapped,mapper)=>{
				_ms.checkContains(_64,mapped,"mapped");
				_ms.checkContains(_ms.sub(Function,Any,$),mapper,"mapper");
				return _ms.checkContains(_ms.sub($,Array),$.all((()=>{
					const built=[];
					for(let _ of mapped){
						_ms.add(built,mapper(_))
					};
					return built
				})()),"res")
			},built)
		})();
		const $flat_45map=exports["$flat-map"]=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[1,1,2,2,3,3],(yield $flat_45map([1,2,3],_=>{
					return $delay(()=>{
						return [_,_]
					})
				})))
			};
			return _ms.set((mapped,mapper)=>{
				_ms.checkContains(_64,mapped,"mapped");
				_ms.checkContains(_ms.sub(Function,Any,_ms.sub($,_64)),mapper,"mapper");
				return _ms.checkContains(_ms.sub($,_64),$after($map(mapped,mapper),flatten),"res")
			},built)
		})();
		const $keep=exports.$keep=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),[2,4],(yield $keep([1,2,3,4],_=>{
					return $delay(()=>{
						return _ms.unlazy(divisible_63)(_,2)
					})
				})))
			};
			return _ms.set((keep_45some,keep_45if_63)=>{
				_ms.checkContains(_64,keep_45some,"keep-some");
				_ms.checkContains(_ms.sub(Function,Any,_ms.sub($,Boolean)),keep_45if_63,"keep-if?");
				return _ms.checkContains(_ms.sub($,Array),$flat_45map(keep_45some,_=>{
					return $after(keep_45if_63(_),keep=>{
						return (keep?_ms.some((()=>{
							return _
						})()):_ms.None)
					})
				}),"res")
			},built)
		})();
		const $ing=exports.$ing=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),`res`,(yield $ing(function*(){
					const promised=(yield $resolved(`promised`));
					_ms.assert(_ms.unlazy(_61_63),`promised`,promised);
					return `res`
				})));
				const $whoops=(yield _ms.unlazy($try)($ing(function*(){
					(yield $rejected(`whoops`));
					throw new (Error)(`It's been rejected, so the rest is never called.`)
				})));
				_ms.assert(_ms.unlazy(_61_63),`whoops`,$whoops)
			};
			return _ms.set(code=>{
				_ms.checkContains(_ms.sub(Function,Generator),code,"code");
				const $_45generator=code();
				const do_45next=function do_45next(last_45value){
					const _$0=$_45generator.next(last_45value),value=_$0.value,done=_$0.done;
					return (done?value:$after(value,do_45next))
				};
				return _ms.checkContains($,do_45next(),"res")
			},built)
		})();
		const name=exports.name=`$`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvJC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWtCQSx3QkFDRSxLQUFBO1VBRUQ7RUFBQTtFQUVELGVBQVcsSUFBSSxFQUNHLElBQUE7VUFBakI7RUFBQTtFQUlELDBCQUNNLEtBQUE7VUFJSixHQUNHO3NCQUREOzhCQUNLLEVBQUksS0FDRztLQUNiLFlBQ0MsaUJBQ0MsZUFDQTtLQUdGLE1BQU87SUFBQTtHQUFBO0VBQUE7RUFFVix1REFDaUIsS0FBQTs7R0FDaEIsd0JBQ1UsaUJBQUE7SUFBVCxtQ0FBaUIsSUFDSyxJQUFBO1lBQXJCO0lBQUE7SUFDRCxRQUFLLHdCQUFNLHFCQUFpQixHQUFHO2tDQUNwQixVQUFXO2tDQUNYLEVBQUcsT0FBRyxxQkFBaUIsR0FBRztHQUFBO2tCQUNyQyxDQUFHLEVBQUksWUFDYztzQkFEaEI7c0JBQVU7NkJBQWQsRUFDRCxLQUFJLEdBQUcsQ0FBQSxRQUFRLFNBQ007S0FBcEIsT0FBTyxFQUFFO0tBQ1QsY0FDVyxrQkFBQTthQUFWLE9BQU8sS0FBSSxPQUFPLG9CQUFrQjs7WUFDckMsV0FBVyxRQUFRO0lBQUE7OztFQUV0Qiw0QkFDTyxLQUFBOztHQUVOLHdCQUNVLGlCQUFBO2tDQUFFLEVBQUcsT0FBRyxPQUFRLFVBQVUsMkJBQUs7R0FBQTtrQkFDeEMsQ0FBRyxFQUFJLE9BQ2E7c0JBRGY7c0JBMkZHOzZCQTNGUCxFQUNELE9BQU87OztFQUVULGtDQUNVLEtBQUE7O0dBQ1Qsd0JBQ1UsaUJBQUE7a0NBQUUsRUFBRyxPQUFHLFVBQVU7R0FBQTtrQkFDeEIsT0FDSzs2QkFEUCxFQUNELFVBQVU7OztFQUVaLGtDQUNVLEtBQUE7O0dBQ1Qsc0JBQ08sZUFBQTtXQUFOLEtBQ1EsV0FBQTtLQUFQLFFBQUksVUFBVzttQ0FDSCxJQUFJLHdCQUFRO21DQUVaLElBQUksd0JBQVMsT0FBTyxFQUNJLElBQUE7TUFBbkMsa0JBQVE7Ozs7a0JBQ1YsR0FDQztXQUFELFNBQVM7R0FBQTs7RUFFWCw0QkFDTyxLQUFBOztHQUlOLHdCQUNVLGlCQUFBO2tDQUFFLEVBQUcsT0FBRyxPQUNRLElBQUE7WUFBeEI7SUFBQTtHQUFBO2tCQUNELFNBQ2M7c0JBRE47cUNBRUksRUFBRTtHQUFBOztFQUVoQix3QkFDSyxLQUFBOztHQUVKLHdCQUNVLGlCQUFBO2tDQUFFLENBQUMsRUFBRSxHQUFJLE9BQUksS0FBSyxDQUFFLFVBQVUsR0FBSSxVQUFVO0lBQ3JELHFCQUFlLEtBQUssQ0FBRSxVQUFXLEtBQUssVUFBVztrQ0FDckMsSUFBSSx3QkFBUTtHQUFBO2tCQUNkLEdBQ007OEJBREosSUFBRTtxQ0FBYixFQThCRSxPQTdCSCxNQUFPLE9BNkJKLE1BN0JhOzs7RUFFbEIsd0JBQ0ssS0FBQTs7R0FFSix3QkFDVSxpQkFBQTtrQ0FBRSxDQUFDLEVBQUUsRUFBRSxHQUFJLE9BQUcsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFJLEdBQ0M7WUFBckMsT0FDUSxJQUFBOzZCQUFMLEVBQUU7S0FBQTtJQUFBO0dBQUE7a0JBQ04sQ0FBVSxPQUFTLFNBQ3NCO3NCQUR4Qjs4QkF3Q1QsU0F4QzJCLElBQUk7cUNBQXRDLEVBb0JFLE9BbkJILE1BQVc7O2FBQUEsS0FBQSxPQUNNO29CQUFoQixPQUFBO0tBQUE7Ozs7O0VBRUgsdUNBQ1UsS0FBQTs7R0FDVCx3QkFDVSxpQkFBQTtrQ0FBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFJLE9BQUksWUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFJLEdBQ0M7WUFBakQsT0FDUSxJQUFBO2FBQVAsQ0FBQyxFQUFFO0tBQUE7SUFBQTtHQUFBO2tCQUNMLENBQU0sT0FBUyxTQUN5QjtzQkFEM0I7OEJBOEJMLFNBOUJ1QixZQUFJLEVBQUU7cUNBQXBDLEVBQUUsS0FDSCxPQUFRLEtBQUssT0FBTyxRQUFROzs7RUFFOUIsMEJBQ00sS0FBQTs7R0FFTCx3QkFDVSxpQkFBQTtrQ0FBRSxDQUFDLEVBQUUsR0FBSSxPQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFJLEdBQ0M7WUFBdkMsT0FDUSxJQUFBO3NDQUFJLEVBQUU7S0FBQTtJQUFBO0dBQUE7a0JBQ2YsQ0FBVSxZQUFZLGVBQ2lDO3NCQURuQzs4QkFvQlosU0FwQmdDLFlBQUksRUFBRTtxQ0FBN0MsRUFBRSxPQUNILFlBQVUsWUFBVyxHQUNDO1lBQXJCLE9BQU8sYUFBQSxHQUFXLE1BQ0k7YUFBckIsQ0FBRyxtQkFDSTtjQUFOO01BQUE7Ozs7O0VBRUwsd0JBQ0ssS0FBQTs7R0FJSix3QkFDVSxpQkFBQTtrQ0FBRyxNQUFNLE9BQUcsS0FDTyxXQUFBO0tBQTNCLGVBQVksT0FBQSxVQUFXO21DQUNYLFdBQVU7WUFDckI7O0lBQ0YsY0FBVyx3QkFBTSxLQUNRLFdBQUE7WUFBckIsVUFBVztLQUNkLGtCQUFROztrQ0FDRyxTQUFRO0dBQUE7a0JBQ2pCLE1BQ3dCOzhCQURuQixTQUFTO0lBQ2pCLG9CQUFjO0lBQ2QsZ0JBQVcsbUJBQUEsYUFDVTtLQUFwQixVQUFhLG1CQUFpQjtZQUN6QixDQUFBLEtBQUssTUFBTyxPQUFPLE1BQU07SUFBQTs2QkFKOUIsRUFLRDs7O0VBaEtGLHdCQUFBIiwiZmlsZSI6ImNhc2guanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==