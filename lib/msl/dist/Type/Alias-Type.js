"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../methods","./Kind","./Type","../compare"],(exports,methods_0,Kind_1,Type_2,compare_3)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(methods_0),sub=_ms.get(_$0,"sub"),_$1=_ms.getModule(Kind_1),kind_33=_ms.get(_$1,"kind!"),Type=_ms.getDefaultExport(Type_2),_$2=_ms.getModule(Type_2),contains_63=_ms.get(_$2,"contains?"),_$3=_ms.lazyGetModule(compare_3),_61_63=_ms.lazyProp(_$3,"=?");
		const Alias_45Type=exports.default=(()=>{
			const _=class Alias_45Type{
				constructor(params){
					Object.assign(this,params);
					_ms.assert(_ms.contains,String,this.name);
					_ms.assert(_ms.contains,Type,this["alias-of"])
				}
				[_ms.symbol(contains_63)](value){
					const _this=this;
					return _ms.contains(_this["alias-of"],value)
				}
				[_ms.symbol(sub)](){
					const _this=this;
					const args=[].slice.call(arguments,0);
					return sub(_this["alias-of"],...args)
				}
			};
			kind_33(_,Type);
			return _
		})();
		_ms.newProperty(Alias_45Type,"test",()=>{
			const A=new (Alias_45Type)((()=>{
				const built={};
				built[`name`]="A";
				const alias_45of=built["alias-of"]=String;
				return built
			})());
			_ms.assert(_ms.contains,A,`0`);
			_ms.assertNot(_ms.unlazy(_61_63),A,String)
		});
		const name=exports.name=`Alias-Type`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHlwZS9BbGlhcy1UeXBlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0EsbUNBQ2lCLEtBR2I7U0FESDtJQUdXLFlBQUEsT0FDTTtLQUFoQixjQUFjLEtBQUs7NkJBb0JQLE9BbkJKOzZCQUNVLEtBQVY7O0lBRVQsWUFBQSxjQUFXLE1BQ0s7V0FPWDt5QkFBQSxrQkFQSjtJQUFBO0lBRUQsWUFBQSxPQUNZO1dBSVA7O1lBQUosSUFBSSxrQkFBVSxHQUFBO0lBQUE7R0FBQTtHQWZkLFFBQU0sRUFBRTtVQURUO0VBQUE7a0JBbUJELG9CQUNvQixJQUFBO0dBQW5CLFFBQUksS0FBSSxjQUNVLEtBQUE7O1VBQWpCLFFBQUE7SUFDQSxtQ0FFWTs7OzJCQURELEVBQUg7b0NBQ0UsRUFBRTtFQUFBO0VBbENkLHdCQUFBIiwiZmlsZSI6IlR5cGUvQWxpYXMtVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9