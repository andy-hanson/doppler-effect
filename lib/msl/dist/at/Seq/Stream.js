"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Function","../../Generator","../../Type/Kind","../../Type/Method","../at","../at-Type","./Seq"],(exports,Function_0,Generator_1,Kind_2,Method_3,_64_4,_64_45Type_5,Seq_6)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Function_0),thunk=_ms.get(_$0,"thunk"),Generator=_ms.getDefaultExport(Generator_1),_$1=_ms.getModule(Generator_1),empty_45Generator=_ms.get(_$1,"empty-Generator"),_$2=_ms.getModule(Kind_2),kind_33=_ms.get(_$2,"kind!"),self_45kind_33=_ms.get(_$2,"self-kind!"),_$3=_ms.getModule(Method_3),self_45impl_33=_ms.get(_$3,"self-impl!"),_$4=_ms.getModule(_64_4),iterator=_ms.get(_$4,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_5),_$5=_ms.getModule(_64_45Type_5),empty=_ms.get(_$5,"empty"),from_45stream=_ms.get(_$5,"from-stream"),Seq=_ms.getDefaultExport(Seq_6),_$6=_ms.getModule(Seq_6),seq_61_63=_ms.get(_$6,"seq=?");
		const Stream=exports.default=(()=>{
			const _=class Stream{
				static [_ms.symbol(from_45stream)](_){
					const _this=this;
					return new (_this)(()=>{
						return iterator(_)
					})
				}
				constructor(make_45iterator){
					_ms.checkContains(_ms.sub(Function,Generator),make_45iterator,"make-iterator");
					Object.defineProperty(this,Symbol.iterator,(()=>{
						const built={};
						const value=built.value=make_45iterator;
						return built
					})())
				}
			};
			self_45kind_33(_,_64_45Type);
			kind_33(_,Seq);
			self_45impl_33(empty,_,thunk(new (_)(()=>{
				return empty_45Generator
			})));
			return _
		})();
		_ms.newProperty(Stream,"test",()=>{
			const _=new (Stream)(function*(){
				(yield 1);
				(yield 2)
			});
			_ms.assert(seq_61_63,_,[1,2]);
			_ms.assert(seq_61_63,_,[1,2])
		});
		const name=exports.name=`Stream`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXEvU3RyZWFtLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBU0EsNkJBQ2EsS0FJVDtTQURIO0lBUUMsbUJBQUEsZ0JBQWEsRUFDQztXQUFUO1lBQUosS0FBSSxPQUNNLElBQUE7YUFBVCxTQUFBO0tBQUE7SUFBQTtJQUVRLFlBQUEsZ0JBQ2lDOytCQURuQixTQUFTO0tBQ2pDLHNCQUFzQixLQUFLLGdCQUNlLEtBQUE7O01BQXpDLHdCQUFPOzs7OztHQWJSLGVBQVcsRUFBRTtHQUNiLFFBQU0sRUFBRTtHQUVSLGVBQVcsTUFBTSxFQUFHLE1BQU8sS0FBSSxHQUNHLElBQUE7V0FBakM7R0FBQTtVQUxGO0VBQUE7a0JBaUJELGNBQ2dCLElBQUE7R0FBZixRQUFJLEtBQUksUUFDVSxXQUFBO1dBQWQ7V0FDQTtHQUFBO2NBQ0ksVUFBTSxFQUFFLENBQUMsRUFBRTtjQUVYLFVBQU0sRUFBRSxDQUFDLEVBQUU7RUFBQTtFQXBDcEIsd0JBQUEiLCJmaWxlIjoiYXQvU2VxL1N0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9