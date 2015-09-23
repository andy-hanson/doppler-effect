"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Kind","../compare","../Object","./Method","./Kind"],(exports,Kind_0,compare_1,Object_2,Method_3,Kind_4)=>{
	exports._get=_ms.lazy(()=>{
		const Kind=_ms.getDefaultExport(Kind_0),_$0=_ms.getModule(Kind_0),kind_33=_ms.get(_$0,"kind!"),unchecked_45kind_33=_ms.get(_$0,"unchecked-kind!"),_$1=_ms.lazyGetModule(compare_1),_61_63=_ms.lazyProp(_$1,"=?"),_$2=_ms.lazyGetModule(Object_2),empty_45Object_33=_ms.lazyProp(_$2,"empty-Object!"),Method=_ms.lazy(()=>_ms.getDefaultExport(Method_3)),_$3=_ms.lazyGetModule(Method_3),impl_33=_ms.lazyProp(_$3,"impl!"),_$4=_ms.lazyGetModule(Kind_4),kind_63=_ms.lazyProp(_$4,"kind?");
		const Impl_45Type=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Impl-Type";
			const test=built.test=function test(){
				const A=new (Kind)();
				const B=new (Kind)();
				const C=class C{
					dummy(){
						const _this=this;
						return _this
					}
				};
				kind_33(B,A);
				kind_33(C,B);
				_ms.assert(_ms.unlazy(kind_63),B,A);
				_ms.assert(_ms.unlazy(kind_63),C,B);
				_ms.assert(_ms.unlazy(kind_63),C,A);
				_ms.assertNot(_ms.unlazy(kind_63),A,B)
			};
			return built
		})());
		unchecked_45kind_33(Function,Impl_45Type);
		kind_33(Kind,Impl_45Type);
		const Self_45Type=exports["Self-Type"]=(()=>{
			const _=class Self_45Type{
				constructor(prototype){
					_ms.checkContains(Object,prototype,"prototype");
					_ms.newProperty(this,"prototype",prototype)
				}
			};
			kind_33(_,Impl_45Type);
			_ms.newProperty(_,"test",()=>{
				const x=_ms.unlazy(empty_45Object_33)();
				const m=new (_ms.unlazy(Method))((()=>{
					const built={};
					built[`name`]="m";
					return built
				})());
				_ms.unlazy(impl_33)(m,new (Self_45Type)(x),()=>{
					return 1
				});
				_ms.assert(_ms.unlazy(_61_63),m(x),1)
			});
			return _
		})();
		const name=exports.name=`Impl-Type`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHlwZS9JbXBsLVR5cGUubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFTQSxrQ0FBVyxLQUFJLE1BQ0ksS0FBQTs7U0FFbEIsUUFBQTtHQUNBLHNCQUNRLGVBQUE7SUFDUCxRQUFJLEtBQUk7SUFDUixRQUFJLEtBQUk7SUFDUixRQUNTO1lBRUM7WUFBUjthQUFBO0tBQUE7SUFBQTtJQUNGLFFBQU0sRUFBRTtJQUNSLFFBQU0sRUFBRTttQ0FDTSxFQUFFO21DQUNGLEVBQUU7bUNBQ0YsRUFBRTtzQ0FDRixFQUFFO0dBQUE7OztFQUVsQixvQkFBZ0IsU0FBUztFQUN6QixRQUFNLEtBQUs7RUFFWCx1Q0FDZ0IsS0FHWjtTQURIO0lBWVcsWUFBQSxVQUNnQjt1QkFETjtxQkFDcEIsaUJBQWE7SUFBQTtHQUFBO0dBWmIsUUFBTSxFQUFFO21CQUdSLFNBQ1csSUFBQTtJQUFWO0lBQ0EsUUFBSSx5QkFDVSxLQUFBOztXQUFiLFFBQUE7Ozt3QkFDSyxFQUFHLEtBQUksYUFBVSxHQUNJLElBQUE7WUFBMUI7SUFBQTtrQ0FDVyxFQUFFLEdBQUc7R0FBQTtVQVZuQjtFQUFBO0VBbENELHdCQUFBIiwiZmlsZSI6IlR5cGUvSW1wbC1UeXBlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=