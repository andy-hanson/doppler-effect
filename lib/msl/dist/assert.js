"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./compare","./at/at","./at/Map/Map","./at/Seq/Seq","./Function","./to-string","./String","./Type/Type","./compare","./math/methods","./to-string","./Try"],(exports,compare_0,_64_1,Map_2,Seq_3,Function_4,to_45string_5,String_6,Type_7,compare_8,methods_9,to_45string_10,Try_11)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_1)),_$1=_ms.lazyGetModule(_64_1),map=_ms.lazyProp(_$1,"map"),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_2)),_$2=_ms.lazyGetModule(Seq_3),tail=_ms.lazyProp(_$2,"tail"),_$3=_ms.lazyGetModule(Function_4),Pred=_ms.lazyProp(_$3,"Pred"),_$4=_ms.lazyGetModule(to_45string_5),inspect=_ms.lazyProp(_$4,"inspect"),_$5=_ms.lazyGetModule(String_6),indent=_ms.lazyProp(_$5,"indent"),_$6=_ms.lazyGetModule(Type_7),_61_62=_ms.lazyProp(_$6,"=>"),_$7=_ms.lazyGetModule(compare_8),same_63=_ms.lazyProp(_$7,"same?"),_$8=_ms.lazyGetModule(methods_9),_43=_ms.lazyProp(_$8,"+"),to_45string=_ms.lazy(()=>_ms.getDefaultExport(to_45string_10)),_$9=_ms.lazyGetModule(Try_11),fails_45with_63=_ms.lazyProp(_$9,"fails-with?");
		const assert_45call_33=exports["assert-call!"]=(()=>{
			const built={};
			const test=built.test=function test(){
				assert_45call_33(_ms.unlazy(_43),(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,[1,1],2);
					return built
				})());
				const nope=`+ of:
	1
	1
Should =?:
	3
Got:
	2`;
				_ms.assert(_ms.unlazy(fails_45with_63),nope,()=>{
					assert_45call_33(_ms.unlazy(_43),(()=>{
						const built=new (global.Map)();
						_ms.assoc(built,[1,1],3);
						return built
					})())
				})
			};
			return _ms.set((fun,args_45_62result)=>{
				_ms.checkContains(Function,fun,"fun");
				_ms.checkContains(_ms.unlazy(Map),args_45_62result,"args->result");
				assert_45call_45with_33(_61_63,fun,args_45_62result)
			},built)
		})();
		const assert_45this_45call_33=exports["assert-this-call!"]=(()=>{
			const built={};
			const test=built.test=function test(){};
			return _ms.set((fun,args_45_62result)=>{
				_ms.checkContains(Function,fun,"fun");
				_ms.checkContains(_ms.unlazy(Map),args_45_62result,"args->result");
				for(let _ of args_45_62result){
					const args=_ms.checkContains(_ms.unlazy(_64),_ms.sub(_,0),"args");
					const expected_45res=_ms.sub(_,1);
					const actual=fun.apply(_ms.sub(args,0),_ms.unlazy(tail)(args));
					if(! _61_63(actual,expected_45res))throw new (Error)(`${fun} of:
	${_ms.unlazy(indent)(_ms.unlazy(_61_62)(String,_ms.unlazy(map)(args,_ms.unlazy(inspect)),`\n`))}
Should ${_61_63}:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(expected_45res))}
Got:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(actual))}`)
				}
			},built)
		})();
		const assert_45call_45with_33=exports["assert-call-with!"]=(()=>{
			const built={};
			const test=built.test=function test(){
				assert_45call_45with_33(_ms.sub(_ms.unlazy(same_63),_ms.unlazy(to_45string)),_ms.unlazy(_43),(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,[1,2],`3`);
					return built
				})())
			};
			return _ms.set((equal_63,fun,args_45_62result)=>{
				_ms.checkContains(_ms.unlazy(Pred),equal_63,"equal?");
				_ms.checkContains(Function,fun,"fun");
				_ms.checkContains(_ms.unlazy(Map),args_45_62result,"args->result");
				for(let _ of args_45_62result){
					const args=_ms.checkContains(_ms.unlazy(_64),_ms.sub(_,0),"args");
					const expected_45res=_ms.sub(_,1);
					const actual=fun(...args);
					if(! equal_63(actual,expected_45res))throw new (Error)(`${fun} of:
	${_ms.unlazy(indent)(_ms.unlazy(_61_62)(String,_ms.unlazy(map)(args,_ms.unlazy(inspect)),`\n`))}
Should ${equal_63}:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(expected_45res))}
Got:
	${_ms.unlazy(indent)(_ms.unlazy(inspect)(actual))}`)
				}
			},built)
		})();
		const name=exports.name=`assert`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvYXNzZXJ0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBbUJBLCtDQUNhLEtBQUE7O0dBQVosc0JBQ1EsZUFBQTtJQUFQLGlDQUNjLEtBQUE7O3FCQUFiLENBQUMsRUFBRSxHQUFNOzs7SUFDVixXQUNDOzJDQU9tQixLQUNPLElBQUE7S0FBMUIsaUNBQ2MsS0FBQTs7c0JBQWIsQ0FBQyxFQUFFLEdBQU07Ozs7O2tCQUNWLENBQUEsSUFBYSxtQkFDZ0I7c0JBNkJiOztJQTNCakIsd0JBQWtCLE9BQUcsSUFBSTtHQUFBOztFQUUzQiwyREFDa0IsS0FBQTs7R0FDakIsc0JBQ1EsZUFBQTtrQkFFTixDQUFBLElBQWEsbUJBQ2dCO3NCQW1CYjs7SUFsQlosUUFBQSxLQUFBLGlCQUNZO0tBQ2hCLHFEQUFTLEVBQUU7S0FDWCw2QkFBZSxFQUFFO0tBQ2pCLGFBQVMsa0JBQVUsS0FBSyxvQkFBUztLQUN6QixLQUFBLE9BQUcsT0FBTyxrQ0FDakIsR0FBQyxrREFxQlksdUJBcEJZLDBCQUFlLGlCQUNoQyxtREFDVSxpRUFFQTs7OztFQUV0QiwyREFDa0IsS0FBQTs7R0FDakIsc0JBQ1EsZUFBQTtJQUFQLDZGQUNvQyxLQUFBOztxQkFBbkMsQ0FBQyxFQUFFLEdBQU87Ozs7a0JBQ1YsQ0FBQSxTQUFZLElBQWEsbUJBQ2dCOztzQkFEekI7O0lBRVosUUFBQSxLQUFBLGlCQUNZO0tBQ2hCLHFEQUFTLEVBQUU7S0FDWCw2QkFBZSxFQUFFO0tBQ2pCLGFBQVMsSUFBSSxHQUFBO0tBQ0wsS0FBQSxTQUFPLE9BQU8sa0NBQ3JCLEdBQUMsa0RBQ1ksdUJBQVksMEJBQWUsaUJBQ2hDLHFEQUNVLGlFQUVBOzs7O0VBN0V0Qix3QkFBQSIsImZpbGUiOiJhc3NlcnQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==