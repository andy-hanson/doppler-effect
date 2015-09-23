"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../Type/Type"],(exports,Type_0)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Type_0),_61_62=_ms.get(_$0,"=>");
		const log_33=exports["log!"]=(()=>{
			return a=>{
				console.log(a)
			}
		})();
		const warn_33=exports["warn!"]=(()=>{
			return function(){
				const args=[].slice.call(arguments,0);
				console.warn(...args)
			}
		})();
		const dbg_33=exports["dbg!"]=(()=>{
			return function(){
				const args=[].slice.call(arguments,0);
				warn_33(`-->`);
				for(let _ of args){
					warn_33(_)
				};
				warn_33(`<--`)
			}
		})();
		const trace_33=exports["trace!"]=(()=>{
			return function(){
				const args=[].slice.call(arguments,0);
				console.trace(_61_62(String,args,` `))
			}
		})();
		const name=exports.name=`console`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvaW8vY29uc29sZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQU1BLDZCQUNLLEtBQUE7VUFHRixHQUNDO0lBQUYsWUFBWTtHQUFBO0VBQUE7RUFFZCwrQkFDTSxLQUFBO1VBQ0gsVUFDTzs7SUFBUixhQUFhLEdBQUE7R0FBQTtFQUFBO0VBR2QsNkJBQ0ssS0FBQTtVQUNGLFVBQ087O0lBQVIsUUFBTztJQUNGLFFBQUEsS0FBQSxLQUNJO0tBQVIsUUFBTTtJQUFBO0lBQ1AsUUFBTzs7O0VBRVQsaUNBQ08sS0FBQTtVQUNKLFVBQ087O0lBQVIsY0FBZSxPQUFHLE9BQU8sS0FBTTs7O0VBOUJsQyx3QkFBQSIsImZpbGUiOiJpby9jb25zb2xlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=