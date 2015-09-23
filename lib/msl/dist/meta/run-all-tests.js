"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../private/boot","../at/Seq/Array","require","../cash","./modules","./tests/run-tests","./tests/perf-test"],(exports,boot_0,Array_1,require_2,$_3,modules_4,run_45tests_5,perf_45test_6)=>{
	exports._get=_ms.lazy(()=>{
		_ms.getModule(boot_0);
		_ms.getModule(Array_1);
		const require=_ms.getDefaultExport(require_2),_$0=_ms.getModule($_3),$done=_ms.get(_$0,"$done"),$ing=_ms.get(_$0,"$ing"),_$1=_ms.getModule(modules_4),$_64all_45modules=_ms.get(_$1,"$@all-modules"),_$2=_ms.getModule(run_45tests_5),$test_45all=_ms.get(_$2,"$test-all"),_$3=_ms.getModule(perf_45test_6),$time_33=_ms.get(_$3,"$time!");
		const run_45all_45tests=exports.default=function run_45all_45tests(){
			$done($ing(function*(){
				const _64all=(yield $_64all_45modules(require,`../modules-list`));
				return (yield $time_33(`test`,()=>{
					return $test_45all(_64all)
				}))
			}))
		};
		const name=exports.name=`run-all-tests`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9ydW4tYWxsLXRlc3RzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7RUFZRSx3Q0FBQSw0QkFBQTtHQUFELE1BQU8sS0FDTyxXQUFBO0lBQ2IsYUFBUSxPQUFBLGtCQUFjLFFBQVM7V0FDNUIsT0FBQSxTQUFRLE9BQ08sSUFBQTtZQUFqQixZQUFVO0lBQUE7R0FBQTtFQUFBO0VBaEJiLHdCQUFBIiwiZmlsZSI6Im1ldGEvcnVuLWFsbC10ZXN0cy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9