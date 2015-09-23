"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/at","../../cash","../../compare","../../io/console","../../io/time","../../Function","../../math/Number","../../math/methods"],(exports,_64_0,$_1,compare_2,console_3,time_4,Function_5,Number_6,methods_7)=>{
	exports._get=_ms.lazy(()=>{
		const _64=_ms.getDefaultExport(_64_0),$=_ms.getDefaultExport($_1),_$1=_ms.getModule($_1),$after=_ms.get(_$1,"$after"),_$2=_ms.getModule(compare_2),_60_63=_ms.get(_$2,"<?"),_$3=_ms.getModule(console_3),log_33=_ms.get(_$3,"log!"),_$4=_ms.getModule(time_4),current_45time_45ms=_ms.get(_$4,"current-time-ms"),_$5=_ms.getModule(Function_5),Action=_ms.get(_$5,"Action"),_$6=_ms.getModule(Number_6),Nat=_ms.get(_$6,"Nat"),_$7=_ms.getModule(methods_7),_45=_ms.get(_$7,"-");
		const time_33=exports["time!"]=(()=>{
			return (test_45name,time_45me)=>{
				_ms.checkContains(String,test_45name,"test-name");
				_ms.checkContains(Action,time_45me,"time-me");
				const _$0=time(time_45me),val=_$0.val,time_45taken=_$0["time-taken"];
				log_33(`${test_45name}: ${time_45taken}`);
				return val
			}
		})();
		const time_42_33=exports["time*!"]=(()=>{
			return (test_45name,times,time_45me)=>{
				_ms.checkContains(String,test_45name,"test-name");
				_ms.checkContains(Nat,times,"times");
				_ms.checkContains(Action,time_45me,"time-me");
				return time_33(test_45name,()=>{
					let i=times;
					const arr=[];
					for(;;){
						if(! _60_63(0,i)){
							break
						};
						i=_45(i,1);
						arr.push(time_45me(i))
					};
					return arr
				})
			}
		})();
		const race_42_33=exports["race*!"]=(()=>{
			return (times,time_45us)=>{
				_ms.checkContains(Nat,times,"times");
				_ms.checkContains(_ms.sub(_64,Action),time_45us,"time-us");
				for(let _ of time_45us){
					time_42_33(`.`,times,_)
				}
			}
		})();
		const time=exports.time=(()=>{
			return time_45me=>{
				_ms.checkContains(Function,time_45me,"time-me");
				const built={};
				const start=current_45time_45ms();
				const val=built.val=time_45me();
				const end=current_45time_45ms();
				const time_45taken=built["time-taken"]=_45(end,start);
				return built
			}
		})();
		const $time=exports.$time=(()=>{
			return $time_45me=>{
				_ms.checkContains(_ms.sub(Action,$),$time_45me,"$time-me");
				const start=current_45time_45ms();
				return _ms.checkContains(_ms.sub($,Number),$after($time_45me(),()=>{
					const end=current_45time_45ms();
					return _45(end,start)
				}),"res")
			}
		})();
		const $time_33=exports["$time!"]=(()=>{
			return (test_45name,$time_45me)=>{
				_ms.checkContains(String,test_45name,"test-name");
				_ms.checkContains(_ms.sub(Action,$),$time_45me,"$time-me");
				return _ms.checkContains($,$after($time($time_45me),time=>{
					_ms.checkContains(Number,time,"time");
					log_33(`${test_45name}: ${time}`)
				}),"res")
			}
		})();
		const name=exports.name=`perf-test`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS90ZXN0cy9wZXJmLXRlc3QubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSwrQkFDTSxLQUFBO1VBQ0osQ0FBQSxZQUFpQixZQUNjO3NCQTJDbEI7c0JBNUNZO0lBQ3pCLFVBQWlCLEtBQUs7SUFDdEIsT0FBTSxHQUFDLGdCQUFhO1dBQ3BCO0dBQUE7RUFBQTtFQUVGLG1DQUNPLEtBQUE7VUFDTCxDQUFBLFlBQWlCLE1BQVUsWUFDYztzQkFvQzVCO3NCQXJDVTtzQkFBWTtXQUNuQyxRQUFNLFlBQ1csSUFBQTtLQUFoQixNQUFNO0tBQ04sVUFBTTtLQUVGLE9BQUE7TUFBSCxLQUFRLE9BQUcsRUFBRSxHQUNDO09BQWI7TUFBQTtRQUNJLElBQUUsRUFBRTtNQUNULFNBQVUsVUFBUTtLQUFBO1lBQ25CO0lBQUE7R0FBQTtFQUFBO0VBRUgsbUNBQ08sS0FBQTtVQUNKLENBQUEsTUFBVSxZQUNpQjtzQkFEckI7OEJBQVksSUFBRTtJQUNoQixRQUFBLEtBQUEsVUFDTztLQUFYLFdBQVEsSUFBRyxNQUFNO0lBQUE7R0FBQTtFQUFBO0VBRXBCLHdCQUNLLEtBQUE7VUFDSCxXQUNnQjtzQkFEUjs7SUFDUixZQUFRO0lBQ1Isb0JBQUs7SUFDTCxVQUFNO0lBQ04sdUNBQVksSUFBRSxJQUFJOzs7O0VBRXBCLDBCQUNNLEtBQUE7VUFHTyxZQUNrQjs4QkFEVCxPQUFPO0lBQzNCLFlBQVE7cUNBRFAsRUFTOEIsUUFQL0IsT0FBTyxhQUNZLElBQUE7S0FBbEIsVUFBTTtZQUNOLElBQUUsSUFBSTtJQUFBOzs7RUFFVCxpQ0FDTyxLQUFBO1VBQ0wsQ0FBRyxZQUFpQixhQUNrQjtzQkFEekI7OEJBQWdCLE9BQU87NkJBQW5DLEVBQ0QsT0FBUSxNQUFNLFlBQVksTUFDVzt1QkFETjtLQUM5QixPQUFNLEdBQUMsZ0JBQWE7Ozs7RUExRHZCLHdCQUFBIiwiZmlsZSI6Im1ldGEvdGVzdHMvcGVyZi10ZXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=