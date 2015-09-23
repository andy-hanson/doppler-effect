"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Function","../../math/Number","../../math/methods","../../Type/Kind","../../Type/Method","../at","../at-Type","../q","./Seq","./Stream","../../math/methods","../Range","./Seq","../../compare","../../control"],(exports,Function_0,Number_1,methods_2,Kind_3,Method_4,_64_5,_64_45Type_6,_63_7,Seq_8,Stream_9,methods_10,Range_11,Seq_12,compare_13,control_14)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Function_0),call=_ms.get(_$0,"call"),thunk=_ms.get(_$0,"thunk"),_$1=_ms.getModule(Number_1),Nat=_ms.get(_$1,"Nat"),_$2=_ms.getModule(methods_2),_45=_ms.get(_$2,"-"),_$3=_ms.getModule(Kind_3),kind_33=_ms.get(_$3,"kind!"),self_45kind_33=_ms.get(_$3,"self-kind!"),_$4=_ms.getModule(Method_4),impl_33=_ms.get(_$4,"impl!"),self_45impl_33=_ms.get(_$4,"self-impl!"),_$5=_ms.getModule(_64_5),count=_ms.get(_$5,"count"),iterator=_ms.get(_$5,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_6),_$6=_ms.getModule(_64_45Type_6),empty=_ms.get(_$6,"empty"),from_45stream=_ms.get(_$6,"from-stream"),_$7=_ms.getModule(_63_7),Some=_ms.get(_$7,"Some"),Seq=_ms.getDefaultExport(Seq_8),_$8=_ms.getModule(Seq_8),_63nth=_ms.get(_$8,"?nth"),Stream=_ms.getDefaultExport(Stream_9),_$9=_ms.lazyGetModule(methods_10),_43=_ms.lazyProp(_$9,"+"),Range=_ms.lazy(()=>_ms.getDefaultExport(Range_11)),_$10=_ms.lazyGetModule(Seq_12),seq_61_63=_ms.lazyProp(_$10,"seq=?"),take_126=_ms.lazyProp(_$10,"take~"),_$11=_ms.lazyGetModule(compare_13),_61_63=_ms.lazyProp(_$11,"=?"),_$12=_ms.lazyGetModule(control_14),build=_ms.lazyProp(_$12,"build");
		const Lazy_45Stream=exports.default=(()=>{
			const _=class Lazy_45Stream{
				static [_ms.symbol(from_45stream)](_){
					const _this=this;
					return new (_this)(()=>{
						return iterator(_)
					})
				}
				constructor(stream){
					_ms.checkContains(Function,stream,"stream");
					_ms.newProperty(this,"cache",[]);
					const strm=new (Stream)(stream);
					const self=this;
					_ms.newProperty(this,"caching-iterator",call(function*(){
						for(let _ of strm){
							self.cache.push(_);
							(yield _)
						}
					}))
				}
				[_ms.symbol(_63nth)](n){
					const _this=this;
					_ms.checkContains(Nat,n,"n");
					return (()=>{
						const _=_63nth(_this.cache,n);
						if(_ms.contains(Some,_)){
							return _
						} else {
							const n_45left=_45(n,count(_this.cache));
							return _63nth(Stream(_this["caching-iterator"]),n_45left)
						}
					})()
				}
			};
			self_45kind_33(_,_64_45Type);
			self_45impl_33(empty,_,thunk(new (_)(function*(){})));
			kind_33(_,Seq);
			return _
		})();
		_ms.newProperty(Lazy_45Stream,"test",()=>{
			const fibonaccis=new (Lazy_45Stream)(function*(){
				(yield 1);
				(yield 1);
				for(let _ of new (_ms.unlazy(Range))(2,Number.POSITIVE_INFINITY)){
					(yield _ms.unlazy(_43)(_ms.sub(fibonaccis,_45(_,1)),_ms.sub(fibonaccis,_45(_,2))))
				}
			});
			_ms.assert(_ms.unlazy(seq_61_63),_ms.unlazy(take_126)(fibonaccis,10),[1,1,2,3,5,8,13,21,34,55])
		});
		impl_33(iterator,Lazy_45Stream,(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(_ms.unlazy(_61_63),[1,2],_ms.unlazy(build)(_yield=>{
					const _=new (Lazy_45Stream)(function*(){
						_yield(1);
						(yield 1);
						_yield(2);
						(yield 2);
						_yield(3)
					});
					_ms.assert(_ms.unlazy(seq_61_63),[1],_ms.unlazy(take_126)(_,1));
					_ms.assert(_ms.unlazy(seq_61_63),[1,2],_ms.unlazy(take_126)(_,2))
				}))
			};
			return _ms.set(function*(){
				const _this=this;
				(yield* iterator(_this.cache));
				(yield* _this["caching-iterator"])
			},built)
		})());
		const name=exports.name=`Lazy-Stream`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXEvTGF6eS1TdHJlYW0ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFtQkEsb0NBQ2tCLEtBS2Q7U0FESDtJQVFDLG1CQUFBLGdCQUFhLEVBQ0M7V0FrRFY7WUFsREgsS0FrREcsT0FqRE8sSUFBQTthQUFULFNBQUE7S0FBQTtJQUFBO0lBRVEsWUFBQSxPQUNlO3VCQURSO3FCQUVqQixhQUFTO0tBSVQsV0FBTyxLQUFJLFFBQU87S0FDbEIsV0FBTztxQkFDUCx3QkFBb0IsS0FDUSxXQUFBO01BQXRCLFFBQUEsS0FBQSxLQUNJO09BQ1IsZ0JBQWdCO2NBQ2I7TUFBQTtLQUFBO0lBQUE7SUFFTixZQUFBLFNBQU0sRUFDSztXQWdDTjt1QkFqQ0c7WUFFRjtNQUFBLFFBQUEsT0ErQkQsWUEvQmE7TUFDaEIsZ0JBQUMsS0FBRCxHQUNLO2NBQUo7TUFBQSxPQUVHO09BQUgsZUFBUyxJQUFFLEVBQUcsTUEyQlo7Y0ExQkYsT0FBTSxPQTBCSiwyQkExQjhCO01BQUE7S0FBQTtJQUFBO0dBQUE7R0FoQ2xDLGVBQVcsRUFBRTtHQUViLGVBQVcsTUFBTSxFQUFHLE1BQU8sS0FBSSxHQUNLLFdBQUE7R0FDcEMsUUFBTSxFQUFFO1VBTFQ7RUFBQTtrQkFvQ0QscUJBQ3FCLElBQUE7R0FBcEIsaUJBQWEsS0FBSSxlQUNlLFdBQUE7V0FBNUI7V0FDQTtJQUNFLFFBQUEsS0FBQSx3QkFBVSxFQUFFLDBCQUN3QjtvQ0FDbkMsV0FBWSxJQUFFLEVBQUUsWUFBSSxXQUFZLElBQUUsRUFBRTtJQUFBO0dBQUE7eURBQ3RCLFdBQVcsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxHQUFHO0VBQUE7RUFHM0QsUUFBTSxTQUFTLGNBQ1csS0FBQTs7R0FBekIsc0JBQ1EsZUFBQTtrQ0FBSSxDQUFDLEVBQUUscUJBQVksUUFDSztLQUE5QixRQUFJLEtBQUksZUFDZSxXQUFBO01BQXRCLE9BQU07YUFDSDtNQUNILE9BQU07YUFDSDtNQUNILE9BQU07S0FBQTtzQ0FDTyxDQUFDLHdCQUFVLEVBQUU7c0NBQ2IsQ0FBQyxFQUFFLHdCQUFVLEVBQUU7SUFBQTtHQUFBO2tCQUUzQixXQUFBO1VBQ0M7WUFEQSxTQUNBO1lBQUE7OztFQW5GTix3QkFBQSIsImZpbGUiOiJhdC9TZXEvTGF6eS1TdHJlYW0uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==