"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../at/Set/Id-Set","../js","../Object","../String","../to-string","../Type/Method","../Type/Type"],(exports,Id_45Set_0,js_1,Object_2,String_3,to_45string_4,Method_5,Type_6)=>{
	exports._get=_ms.lazy(()=>{
		const Id_45Set=_ms.getDefaultExport(Id_45Set_0),_$0=_ms.getModule(js_1),js_45typeof=_ms.get(_$0,"js-typeof"),_$1=_ms.getModule(Object_2),_64p=_ms.get(_$1,"@p"),_64p_45all=_ms.get(_$1,"@p-all"),_$2=_ms.getModule(String_3),indent=_ms.get(_$2,"indent"),_$3=_ms.getModule(to_45string_4),inspect=_ms.get(_$3,"inspect"),_$4=_ms.getModule(Method_5),impl_33=_ms.get(_$4,"impl!"),_$5=_ms.getModule(Type_6),_61_62=_ms.get(_$5,"=>");
		impl_33(inspect,Object,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[{
					a:1,
					b:2
				}],`Object
	a. 1
	b. 2`);
				return built
			};
			return _ms.set(function(){
				const _this=this;
				return (()=>{
					switch(_this.toString){
						case Object.prototype.toString:{
							const props=_64p_45all(_this);
							const enumerable_45props=_61_62(Id_45Set,_64p(_this));
							let s=`${_this.constructor.name}`;
							for(let _ of props){
								s=`${s}\n\t${inspect_45property(_this,_,_ms.contains(enumerable_45props,_))}`
							};
							return s
						}
						default:return _this.toString()
					}
				})()
			},built)
		})());
		const inspect_45property=function inspect_45property(obj,key,enumerable_63){
			const desc=Object.getOwnPropertyDescriptor(obj,key);
			const prop_45name=(enumerable_63?key:`[${key}]`);
			const str=(()=>{
				if((desc.get&&desc.set)){
					return `[Getter/Setter]`
				} else if(desc.get){
					return `[Getter]`
				} else if(desc.set){
					return `[Setter]`
				} else {
					const str=inspect(desc.value);
					return (_ms.contains(str,`\n`)?`\n${indent(str)}`:str)
				}
			})();
			return `${prop_45name}. ${str}`
		};
		const inspect_45primitive=function inspect_45primitive(){
			const _this=this;
			return (()=>{
				switch(js_45typeof(_this)){
					case `object`:{
						return `[${_this.constructor.name} ${_this}]`
					}
					default:return `${_this}`
				}
			})()
		};
		impl_33(inspect,Boolean,inspect_45primitive);
		impl_33(inspect,Number,inspect_45primitive);
		impl_33(inspect,String,function(){
			const _this=this;
			return (()=>{
				switch(js_45typeof(_this)){
					case `object`:{
						return `[String ${inspect(_this.valueOf())}]`
					}
					default:return JSON.stringify(_this)
				}
			})()
		});
		const impl_45inspect=exports.default=impl_33(inspect,Symbol,function(){
			const _this=this;
			return (()=>{
				switch(js_45typeof(_this)){
					case `object`:{
						return `[Symbol ${inspect(_this.valueOf())}]`
					}
					default:return _this.toString()
				}
			})()
		});
		const name=exports.name=`impl-inspect`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvcHJpdmF0ZS9pbXBsLWluc3BlY3QubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxRQUFNLFFBb0JFLE9BbkJZLEtBQUE7O0dBQW5CLHNCQUNPLGVBQUE7O29CQUFOLENBQUM7T0FBSTtPQUFLO0lBQUEsR0FDVDs7O2tCQUtBLFVBQUE7VUFnRGU7V0FoRFQ7WUFnRFM7V0FwQ1YsMEJBVm9CO09BQXhCLFlBQVEsV0E4Q007T0E3Q2QseUJBQW1CLE9BQUcsU0FBUSxLQTZDaEI7T0E1Q2QsTUFBTyxHQTRDTztPQTNDVCxRQUFBLEtBQUEsTUFDSztVQUFILEdBQUMsUUFBTyxtQkEwQ0QsTUExQ3VCLGVBQUcsbUJBQUQ7O2NBQ3ZDO01BQUE7cUJBeUNjOzs7OztFQXJDbEIseUJBQW9CLDRCQUFBLElBQUksSUFBSSxjQUNXO0dBQXRDLFdBQU8sZ0NBQWdDLElBQUk7R0FFM0Msa0JBQWlCLENBQUEsY0FBWSxJQUFLLElBQUU7R0FFcEMsVUFDVTtJQUFULEdBQUEsQ0FBSSxVQUFTLFVBQ1E7WUFBbkI7V0FDRixHQUFBLFNBQ1E7WUFBTjtXQUNGLEdBQUEsU0FDUTtZQUFOO1dBRUU7S0FBSCxVQUFNLFFBQVE7WUFDVCxjQUFLLElBQUosTUFBUyxLQUFHLE9BQU8sT0FBTTtJQUFBO0dBQUE7VUFFaEMsR0FBQyxnQkFBYTs7RUFHaEIsMEJBQ3NCLDhCQUFBO1NBaUJKO1VBakJWO1dBQUEsWUFpQlU7VUFoQmYsU0FDTzthQUFOLElBZWM7O29CQWJkLEdBYWM7Ozs7RUFYbEIsUUFBTSxRQUFRLFFBQVE7RUFDdEIsUUFBTSxRQUFRLE9BQU87RUFFckIsUUFBTSxRQUFRLE9BQ1MsVUFBQTtTQU9MO1VBUFY7V0FBQSxZQU9VO1VBTmYsU0FDTzthQUFOLFdBQVMsUUFLSzs7b0JBSGYsZUFHZTtJQUFBO0dBQUE7RUFBQTtFQURsQixxQ0FBQSxRQUFNLFFBQVEsT0FDUyxVQUFBO1NBQUw7VUFBVjtXQUFBLFlBQVU7VUFDZixTQUNPO2FBQU4sV0FBUyxRQUZLOztvQkFBQTs7OztFQWxFbEIsd0JBQUEiLCJmaWxlIjoicHJpdmF0ZS9pbXBsLWluc3BlY3QuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==