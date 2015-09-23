"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Type/Method","../../Type/Kind","../at-Type","./Map","./Splay-Tree","../../compare","./Map"],(exports,Method_0,Kind_1,_64_45Type_2,Map_3,Splay_45Tree_4,compare_5,Map_6)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Method_0),self_45impl_33=_ms.get(_$0,"self-impl!"),Kind=_ms.getDefaultExport(Kind_1),_$1=_ms.getModule(Kind_1),kind_33=_ms.get(_$1,"kind!"),_$2=_ms.getModule(_64_45Type_2),empty=_ms.get(_$2,"empty"),Map=_ms.getDefaultExport(Map_3),Splay_45Tree=_ms.lazy(()=>_ms.getDefaultExport(Splay_45Tree_4)),_$3=_ms.lazyGetModule(compare_5),sorted_63=_ms.lazyProp(_$3,"sorted?"),_$4=_ms.lazyGetModule(Map_6),assoc_33=_ms.lazyProp(_$4,"assoc!"),keys=_ms.lazyProp(_$4,"keys");
		const Sorted_45Map=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Sorted-Map";
			const implementor_45test=built["implementor-test"]=function implementor_45test(type){
				const _=empty(type);
				for(let key of [1,3,5,4,2]){
					_ms.unlazy(assoc_33)(_,key,key)
				};
				_ms.assert(_ms.unlazy(sorted_63),_ms.unlazy(keys)(_))
			};
			return built
		})());
		kind_33(Sorted_45Map,Map);
		self_45impl_33(empty,Sorted_45Map,()=>{
			return empty(_ms.unlazy(Splay_45Tree))
		});
		const name=exports.name=`Sorted-Map`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvU29ydGVkLU1hcC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVdBLG1DQUFZLEtBQUksTUFDSSxLQUFBOztTQUVuQixRQUFBO0dBQ0EsbURBQW9CLDRCQUFBLEtBQ0k7SUFBdkIsUUFBSSxNQUFNO0lBQ0wsUUFBQSxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUNFOzBCQUFmLEVBQUUsSUFBSTtJQUFBO3NEQUNFO0dBQUE7OztFQUVsQixRQUFNLGFBQVc7RUFFakIsZUFBVyxNQUFNLGFBQ1ksSUFBQTtVQUE1Qjs7RUF4QkQsd0JBQUEiLCJmaWxlIjoiYXQvTWFwL1NvcnRlZC1NYXAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==