"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./at/at-Type","./at/Seq/Seq","./compare","./control","./Function","./to-string","./Type/Impl-Type","./Type/Kind","./Type/Method","./Type/Pred-Type","./Type/Type","./at/at","./Function"],(exports,_64_0,_64_45Type_1,Seq_2,compare_3,control_4,Function_5,to_45string_6,Impl_45Type_7,Kind_8,Method_9,Pred_45Type_10,Type_11,_64_12,Function_13)=>{
	exports._get=_ms.lazy(()=>{
		const _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),count=_ms.get(_$0,"count"),empty_63=_ms.get(_$0,"empty?"),_64_45Type=_ms.getDefaultExport(_64_45Type_1),_$1=_ms.getModule(_64_45Type_1),empty=_ms.get(_$1,"empty"),from_45stream=_ms.get(_$1,"from-stream"),Seq=_ms.getDefaultExport(Seq_2),_$2=_ms.getModule(compare_3),_61_63=_ms.get(_$2,"=?"),sort=_ms.get(_$2,"sort"),_$3=_ms.getModule(control_4),opr=_ms.get(_$3,"opr"),_$4=_ms.getModule(Function_5),thunk=_ms.get(_$4,"thunk"),to_45string=_ms.getDefaultExport(to_45string_6),_$5=_ms.getModule(Impl_45Type_7),Self_45Type=_ms.get(_$5,"Self-Type"),_$6=_ms.getModule(Kind_8),kind_33=_ms.get(_$6,"kind!"),self_45kind_33=_ms.get(_$6,"self-kind!"),_$7=_ms.getModule(Method_9),impl_33=_ms.get(_$7,"impl!"),impl_45double_33=_ms.get(_$7,"impl-double!"),self_45impl_33=_ms.get(_$7,"self-impl!"),_$8=_ms.getModule(Pred_45Type_10),Opt=_ms.get(_$8,"Opt"),_$9=_ms.getModule(Type_11),_61_62=_ms.get(_$9,"=>"),_$10=_ms.lazyGetModule(_64_12),map=_ms.lazyProp(_$10,"map"),_$11=_ms.lazyGetModule(Function_13),identity=_ms.lazyProp(_$11,"identity");
		const test=exports.test=function test(){
			_ms.assert(_61_63,`123`,_ms.unlazy(map)(`123`,_ms.unlazy(identity)))
		};
		self_45kind_33(String,_64_45Type);
		self_45impl_33(empty,String,thunk(""));
		self_45impl_33(from_45stream,String,_=>{
			return from_45stream(Array,_)
		});
		impl_45double_33(_61_62,new (Self_45Type)(String),_64,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[String,[1,2,3]],`123`);
				_ms.assoc(built,[String,[1,2,3],`, `],`1, 2, 3`);
				return built
			};
			return _ms.set((vals,joiner)=>{
				_ms.checkContains(_ms.sub(Opt,String),joiner,"joiner");
				joiner=opr(joiner,"");
				const arr=(()=>{
					const built=[];
					for(let _ of vals){
						_ms.add(built,to_45string(_))
					};
					return built
				})();
				return arr.join(joiner)
			},built)
		})());
		impl_33(sort,String,(()=>{
			const built={};
			const test=built.test=function test(){};
			return _ms.set(function(_63sort_45by){
				const _this=this;
				_ms.checkContains(_ms.sub(Opt,Function),_63sort_45by,"?sort-by");
				return sort.default.call(_this,_63sort_45by).join("")
			},built)
		})());
		kind_33(String,Seq);
		impl_33(count,String,function(){
			const _this=this;
			return _this.length
		});
		impl_33(empty_63,String,function(){
			const _this=this;
			return _61_63(0,_this.length)
		});
		const name=exports.name=`String-as-Seq`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvU3RyaW5nLWFzLVNlcS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQW1CQSx3QkFDUSxlQUFBO2NBQUMsT0FBSSxzQkFBVzs7RUFFeEIsZUE0QmEsT0E1Qks7RUFDbEIsZUFBVyxNQTJCRSxPQTNCWSxNQXNCaUI7RUFwQjFDLGVBQVcsY0F5QkUsT0F6QmtCLEdBQ0M7VUFBL0IsY0FBWSxNQUFNO0VBQUE7RUFHbkIsaUJBQWEsT0FBSSxLQUFJLGFBcUJSLFFBckIwQixJQUNDLEtBQUE7O0dBQXZDLHNCQUNPLGVBQUE7O29CQUFOLENBbUJXLE9BbkJILENBQUMsRUFBRSxFQUFFLElBQVE7b0JBQ3JCLENBa0JXLE9BbEJILENBQUMsRUFBRSxFQUFFLEdBQUksTUFBUzs7O2tCQUMxQixDQUFBLEtBQUssU0FDa0I7OEJBRFgsSUFpQkQ7V0FoQkQsSUFBSSxPQVcwQjtJQVZ4QyxVQUFXOzthQUFBLEtBQUEsS0FDSTtvQkFBZCxZQUFBO0tBQUE7OztXQUNELFNBQVM7R0FBQTs7RUFHWCxRQUFNLEtBVU8sT0FUSSxLQUFBOztHQUFoQixzQkFDUSxlQUFBO2tCQUVOLFNBQUEsYUFDc0I7VUFNbkI7OEJBUE0sSUFBSTtXQUNiLGtCQU1HLE1BTm9CLG1CQUFnQjtHQUFBOztFQUUxQyxRQUdhLE9BSEE7RUFDYixRQUFNLE1BRU8sT0FEUSxVQUFBO1NBRWY7VUFBQTs7RUFETixRQUFNLFNBQU8sT0FDUyxVQUFBO1NBQWhCO1VBQUwsT0FBRyxFQUFFOztFQW5ETix3QkFBQSIsImZpbGUiOiJTdHJpbmctYXMtU2VxLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=