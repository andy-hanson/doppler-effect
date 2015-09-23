"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../cash","../compare"],(exports,$_0,compare_1)=>{
	exports._get=_ms.lazy(()=>{
		const $=_ms.getDefaultExport($_0),_$0=_ms.lazyGetModule(compare_1),_61_63=_ms.lazyProp(_$0,"=?");
		const current_45time_45ms=exports["current-time-ms"]=(()=>{
			return ()=>{
				return new (Date)().getTime()
			}
		})();
		const $after_45time=exports["$after-time"]=(()=>{
			const built={};
			const $test=built.$test=function* $test(){
				_ms.assert(_ms.unlazy(_61_63),1,(yield $after_45time(1,()=>{
					return 1
				})))
			};
			return _ms.set((time_45ms,_)=>{
				_ms.checkContains(Number,time_45ms,"time-ms");
				_ms.checkContains(Function,_,"_");
				return new ($)(resolve=>{
					const f=function f(){
						resolve(_())
					};
					setTimeout(f,time_45ms)
				})
			},built)
		})();
		const name=exports.name=`time`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvaW8vdGltZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVFBLHFEQUNnQixLQUFBO1VBRWQsSUFBQTtXQUNDLEtBQUk7OztFQUVQLDJDQUNZLEtBQUE7O0dBQ1gsd0JBQ1UsaUJBQUE7a0NBQUUsRUFBRyxPQUFHLGNBQVksRUFDRyxJQUFBO1lBQS9CO0lBQUE7R0FBQTtrQkFDRCxDQUFBLFVBQWUsSUFDVTtzQkFEakI7c0JBQVM7V0FDakIsS0FBSSxHQUFJLFNBQ087S0FBZCxRQUNNLFlBQUE7TUFBTCxRQUFRO0tBQUE7S0FDVCxXQUFXLEVBQUU7SUFBQTtHQUFBOztFQXZCaEIsd0JBQUEiLCJmaWxlIjoiaW8vdGltZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9