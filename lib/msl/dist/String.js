"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./compare","./js","./Type/Kind","./Type/Method","./Type/Pred-Type","./at/at"],(exports,compare_0,js_1,Kind_2,Method_3,Pred_45Type_4,_64_5)=>{
	exports._get=_ms.lazy(()=>{
		const compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(js_1),id_61_63=_ms.get(_$1,"id=?"),Kind=_ms.getDefaultExport(Kind_2),_$2=_ms.getModule(Method_3),impl_33=_ms.get(_$2,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_4),_$3=_ms.lazyGetModule(_64_5),count=_ms.lazyProp(_$3,"count");
		const String_45Test=exports["String-Test"]=new (Kind)((()=>{
			const built={};
			built[`name`]="String-Test";
			const implementors=built.implementors=[String,RegExp];
			return built
		})());
		const Char=exports.Char=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Char";
			const predicate=built.predicate=function predicate(_){
				return (_ms.contains(String,_)&&_61_63(_ms.unlazy(count)(_),1))
			};
			return built
		})());
		const indent=exports.indent=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				const s=`a
b`;
				const s_45indented=`a
	b`;
				_ms.assoc(built,[s],s_45indented);
				_ms.assoc(built,[`a`],`a`);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(String,_,"_");
				return _.replace(new (RegExp)(`\n`,`g`),`\n\t`)
			},built)
		})();
		impl_33(_61_63,String,function(other){
			const _this=this;
			return id_61_63(_this,other)
		});
		impl_33(compare,String,function(other){
			const _this=this;
			return _this.localeCompare(other)
		});
		const name=exports.name=`String`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvU3RyaW5nLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBU0EsMkNBQWEsS0FBSSxNQUNJLEtBQUE7O1NBQ3BCLFFBQUE7R0FDQSxzQ0FBYyxDQXlCRCxPQUpHOzs7RUFuQmpCLHdCQUFNLEtBQUksYUFDUyxLQUFBOztTQUNsQixRQUFBO0dBQ0EsZ0NBQVksbUJBQUEsRUFDQztXQUFaLGNBbUJZLE9BbkJSLElBQVMseUJBQUcsR0FBTztHQUFBOzs7RUFFekIsNEJBQ08sS0FBQTs7R0FFTixzQkFDTyxlQUFBOztJQUFOLFFBQ0M7SUFFRCxtQkFDQztvQkFFRCxDQUFDLEdBQU07b0JBQ1AsQ0FBRSxLQUFROzs7a0JBQ1YsR0FDUTtzQkFJSTtXQUpaLFVBQVcsS0FBSSxRQUFRLEtBQUssS0FBSzs7O0VBRW5DLFFBQU0sT0FFUSxPQUZJLFNBQUEsTUFDSztTQUV0QjtVQUZBLFNBRUEsTUFGVTtFQUFBO0VBQ1gsUUFBTSxRQUFRLE9BQVMsU0FBQSxNQUNLO1NBQTNCO1VBQUEsb0JBQWU7RUFBQTtFQXRDaEIsd0JBQUEiLCJmaWxlIjoiU3RyaW5nLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=