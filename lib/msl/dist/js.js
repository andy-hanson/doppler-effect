"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/Range","./compare"],(exports,Range_0,compare_1)=>{
	exports._get=_ms.lazy(()=>{
		const Range=_ms.lazy(()=>_ms.getDefaultExport(Range_0)),_$0=_ms.lazyGetModule(compare_1),_61_63=_ms.lazyProp(_$0,"=?");
		const op=function op(op_45name){
			return Function(`a`,`b`,`return a ${op_45name} b`)
		};
		const unary_45op=function unary_45op(op_45name){
			return Function(`_`,`return ${op_45name} _`)
		};
		const js_45and=exports["js-and"]=op(`&`);
		const js_45caret=exports["js-caret"]=op(`^`);
		const js_60_60=exports["js<<"]=op(`<<`);
		const js_62_62=exports["js>>"]=op(`>>`);
		const js_62_62_62=exports["js>>>"]=op(`>>>`);
		const js_61_61_61=exports["js==="]=op(`===`);
		const js_61_61=exports["js=="]=op(`==`);
		const js_60=exports["js<"]=op(`<`);
		const js_62=exports["js>"]=op(`>`);
		const js_60_61=exports["js<="]=op(`<=`);
		const js_62_61=exports["js>="]=op(`>=`);
		const js_43=exports["js+"]=op(`+`);
		const js_45=exports["js-"]=op(`-`);
		const js_42=exports["js*"]=op(`*`);
		const js_47=exports["js/"]=op(`/`);
		const js_45mod=exports["js-mod"]=op(`%`);
		const js_45bar=exports["js-bar"]=op(`|`);
		const js_126=exports["js~"]=unary_45op(`~`);
		const js_33=exports["js!"]=unary_45op(`!`);
		const js_45sub=exports["js-sub"]=Function(`obj`,`prop`,`return obj[prop]`);
		const js_45set=exports["js-set"]=Function(`obj`,`prop`,`val`,`obj[prop] = val`);
		const js_45delete=exports["js-delete"]=Function(`obj`,`prop`,`delete obj[prop]`);
		const js_45instanceof=exports["js-instanceof"]=op(`instanceof`);
		const regex=exports.regex=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(_ms.unlazy(_61_63),regex`a${1}b`,RegExp(`a1b`))
			};
			return _ms.set(function(strings){
				const values=[].slice.call(arguments,1);
				let _="";
				for(let i of new (_ms.unlazy(Range))(0,values.length)){
					_=`${_}${_ms.sub(strings,i)}${_ms.sub(values,i)}`
				};
				_=`${_}${_ms.sub(strings,values.length)}`;
				return RegExp(_)
			},built)
		})();
		const defined_63=exports["defined?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[void 0],false);
				_ms.assoc(built,[0],true);
				return built
			};
			return _ms.set(_=>{
				return ! id_61_63(_,void 0)
			},built)
		})();
		const id_61_63=exports["id=?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[`a`,`a`],true);
				_ms.assoc(built,[[`a`],[`a`]],false);
				return built
			};
			return _ms.set(Object.is,built)
		})();
		const truthy_63=exports["truthy?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				for(let _ of [null,void 0,0,Number.NaN,"",false]){
					_ms.assertNot(truthy_63,_)
				};
				_ms.assert(truthy_63,[]);
				_ms.assert(truthy_63,true)
			};
			return _ms.set(_=>{
				return ! js_33(_)
			},built)
		})();
		const js_45typeof=exports["js-typeof"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[void 0],`undefined`);
				_ms.assoc(built,[null],`object`);
				_ms.assoc(built,[true],`boolean`);
				_ms.assoc(built,[0],`number`);
				_ms.assoc(built,[`a`],`string`);
				_ms.assoc(built,[Symbol(`s`)],`symbol`);
				_ms.assoc(built,[js_45typeof],`function`);
				_ms.assoc(built,[{
					a:1
				}],`object`);
				return built
			};
			return _ms.set(unary_45op(`typeof`),built)
		})();
		const name=exports.name=`js`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvanMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFPQSxTQUFNLFlBQUEsVUFDTztVQXlCRixTQXpCQSxJQUFJLElBQUksWUFBVTs7RUFDN0IsaUJBQVksb0JBQUEsVUFDTztVQXVCUixTQXZCQSxJQUFJLFVBQVE7O0VBRXZCLGlDQUFRLEdBQUk7RUFDWixxQ0FBVSxHQUFJO0VBQ2QsK0JBQU0sR0FBSTtFQUNWLCtCQUFNLEdBQUk7RUFDVixtQ0FBTyxHQUFJO0VBQ1gsbUNBQU8sR0FBSTtFQUNYLCtCQUFNLEdBQUk7RUFDViwyQkFBSyxHQUFJO0VBQ1QsMkJBQUssR0FBSTtFQUNULCtCQUFNLEdBQUk7RUFDViwrQkFBTSxHQUFJO0VBQ1YsMkJBQUssR0FBSTtFQUNULDJCQUFLLEdBQUk7RUFDVCwyQkFBSyxHQUFJO0VBQ1QsMkJBQUssR0FBSTtFQUNULGlDQUFRLEdBQUk7RUFDWixpQ0FBUSxHQUFJO0VBQ1osNEJBQUssV0FBVTtFQUNmLDJCQUFLLFdBQVU7RUFDZixpQ0FFVyxTQUZPLE1BQU0sT0FBTztFQUMvQixpQ0FDVyxTQURPLE1BQU0sT0FBTyxNQUFNO0VBQ3JDLHVDQUFXLFNBQVUsTUFBTSxPQUFPO0VBQ2xDLCtDQUFlLEdBQUk7RUFFbkIsMEJBQ00sS0FBQTs7R0FDTCxzQkFDUSxlQUFBO2tDQUFJLEtBQU0sSUFBRSxLQU9uQixPQVBpQzs7a0JBRWpDLFNBQUEsUUFDaUI7O0lBQWpCLE1BMEJtQztJQXpCOUIsUUFBQSxLQUFLLHdCQUFVLEVBQUUsZUFDYTtPQUE1QixHQUFDLFlBQUcsUUFBUSxhQUFJLE9BQU87O01BQ3hCLEdBQUMsWUFBRyxRQUFRO1dBQ2xCLE9BQU87R0FBQTs7RUFFVCxxQ0FDUyxLQUFBOztHQUNSLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsUUFBYztvQkFDZixDQUFDLEdBQU07OztrQkFDUCxHQUNDO1dBQUQsRUFBSSxTQUFLLEVBQUU7OztFQUViLCtCQUNLLEtBQUE7O0dBR0osc0JBQ08sZUFBQTs7b0JBQU4sQ0FBRSxJQUFJLEtBQU87b0JBQ2IsQ0FBQyxDQUFFLEtBQUksQ0FBRSxNQUFROzs7a0JBQ2xCOztFQUVELG1DQUNRLEtBQUE7O0dBQ1Asc0JBQ1EsZUFBQTtJQUFGLFFBQUEsS0FBQSxDQUFDLEtBQUssT0FBVSxFQUFFLFdBQVksR0FBRSxPQUNNO21CQUFsQyxVQUFRO0lBQUE7ZUFDVCxVQUFRO2VBQ1IsVUFBUTtHQUFBO2tCQUNoQixHQUNDO1dBQUQsRUFBSSxNQUFBO0dBQUE7O0VBRU4sdUNBQ1UsS0FBQTs7R0FDVCxzQkFDTyxlQUFBOztvQkFBTixDQUFDLFFBQWU7b0JBQ2hCLENBQUMsTUFBVTtvQkFDWCxDQUFDLE1BQVU7b0JBQ1gsQ0FBQyxHQUFPO29CQUNSLENBQUUsS0FBUTtvQkFDVixDQUFFLE9BQVEsTUFBUztvQkFDbkIsQ0FBQyxhQUFlO29CQUNoQixDQUFDO09BQUk7SUFBQSxHQUFROzs7a0JBQ2QsV0FBVTs7RUF0Rlgsd0JBQUEiLCJmaWxlIjoianMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==