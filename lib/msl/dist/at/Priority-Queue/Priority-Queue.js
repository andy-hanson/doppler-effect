"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Type/Kind","../../Type/Method","../at","../at-Type","../q","./Heap-Priority-Queue","../../compare","../at","../q"],(exports,Kind_0,Method_1,_64_2,_64_45Type_3,_63_4,Heap_45Priority_45Queue_5,compare_6,_64_7,_63_8)=>{
	exports._get=_ms.lazy(()=>{
		const Kind=_ms.getDefaultExport(Kind_0),_$0=_ms.getModule(Kind_0),kind_33=_ms.get(_$0,"kind!"),Method=_ms.getDefaultExport(Method_1),_$1=_ms.getModule(Method_1),self_45impl_33=_ms.get(_$1,"self-impl!"),_64=_ms.getDefaultExport(_64_2),_$2=_ms.getModule(_64_45Type_3),empty=_ms.get(_$2,"empty"),_63=_ms.getDefaultExport(_63_4),Heap_45Priority_45Queue=_ms.lazy(()=>_ms.getDefaultExport(Heap_45Priority_45Queue_5)),_$3=_ms.lazyGetModule(compare_6),_61_63=_ms.lazyProp(_$3,"=?"),_$4=_ms.lazyGetModule(_64_7),_43_43_33=_ms.lazyProp(_$4,"++!"),empty_63=_ms.lazyProp(_$4,"empty?"),_$5=_ms.lazyGetModule(_63_8),_63None=_ms.lazyProp(_$5,"?None"),_63some=_ms.lazyProp(_$5,"?some");
		const Priority_45Queue=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Priority-Queue";
			const implmentor_45test=built["implmentor-test"]=function implmentor_45test(type){
				const _=empty(type);
				_ms.unlazy(_43_43_33)(_,[3,1,2]);
				_ms.assert(_ms.unlazy(_61_63),_ms.unlazy(_63some)(1),_63pop_33(_));
				_ms.assert(_ms.unlazy(_61_63),_ms.unlazy(_63some)(2),_63pop_33(_));
				_ms.assert(_ms.unlazy(_61_63),_ms.unlazy(_63some)(3),_63pop_33(_));
				_ms.assert(_ms.unlazy(empty_63),_);
				_ms.assert(_ms.unlazy(_61_63),_ms.unlazy(_63None),_63pop_33(_))
			};
			return built
		})());
		kind_33(Priority_45Queue,_64);
		self_45impl_33(empty,Priority_45Queue,()=>{
			return empty(_ms.unlazy(Heap_45Priority_45Queue))
		});
		const _63pop_33=exports["?pop!"]=new (Method)((()=>{
			const built={};
			built[`name`]="?pop!";
			const args=built.args=1;
			const returns=built.returns=_63;
			return built
		})());
		const name=exports.name=`Priority-Queue`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9Qcmlvcml0eS1RdWV1ZS9Qcmlvcml0eS1RdWV1ZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWFBLHVDQUFnQixLQUFJLE1BQ0ksS0FBQTs7U0FHdkIsUUFBQTtHQUNBLGlEQUFtQiwyQkFBQSxLQUNJO0lBQXRCLFFBQUksTUFBTTswQkFDTixFQUFFLENBQUMsRUFBRSxFQUFFO3NEQUNPLEdBQUcsVUFBQTtzREFDSCxHQUFHLFVBQUE7c0RBQ0gsR0FBRyxVQUFBO29DQUNOO3NEQUNFLFVBQUE7R0FBQTs7O0VBRW5CLFFBQU0saUJBQWU7RUFFckIsZUFBVyxNQUFNLGlCQUNnQixJQUFBO1VBQWhDOztFQUdELGlDQUFPLEtBQUksUUFDTSxLQUFBOztTQUNoQixRQUFBO0dBQ0Esc0JBQU07R0FDTiw0QkFBUzs7O0VBckNWLHdCQUFBIiwiZmlsZSI6ImF0L1ByaW9yaXR5LVF1ZXVlL1ByaW9yaXR5LVF1ZXVlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=