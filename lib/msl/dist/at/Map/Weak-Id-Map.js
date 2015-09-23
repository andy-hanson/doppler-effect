"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Type/Kind","../../Type/Method","../at","../at-Type","../q","./Map","./Map-Type"],(exports,Kind_0,Method_1,_64_2,_64_45Type_3,_63_4,Map_5,Map_45Type_6)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Kind_0),kind_33=_ms.get(_$0,"kind!"),self_45kind_33=_ms.get(_$0,"self-kind!"),_$1=_ms.getModule(Method_1),impl_33=_ms.get(_$1,"impl!"),self_45impl_33=_ms.get(_$1,"self-impl!"),_$2=_ms.getModule(_64_2),empty_33=_ms.get(_$2,"empty!"),_$3=_ms.getModule(_64_45Type_3),empty=_ms.get(_$3,"empty"),_$4=_ms.getModule(_63_4),Opt_45_62_63=_ms.get(_$4,"Opt->?"),Map=_ms.getDefaultExport(Map_5),_$5=_ms.getModule(Map_5),assoc_33=_ms.get(_$5,"assoc!"),_63get=_ms.get(_$5,"?get"),has_45key_63=_ms.get(_$5,"has-key?"),keys=_ms.get(_$5,"keys"),un_45assoc_33=_ms.get(_$5,"un-assoc!"),Map_45Type=_ms.getDefaultExport(Map_45Type_6);
		const Weak_45Id_45Map=exports.default=(()=>{
			return WeakMap
		})();
		self_45kind_33(Weak_45Id_45Map,Map_45Type);
		self_45impl_33(empty,Weak_45Id_45Map,()=>{
			return new (Weak_45Id_45Map)()
		});
		kind_33(Weak_45Id_45Map,Map);
		impl_33(_63get,Weak_45Id_45Map,function(key){
			const _this=this;
			return Opt_45_62_63(_this.get(key))
		});
		impl_33(has_45key_63,Weak_45Id_45Map,function(key){
			const _this=this;
			return _this.has(key)
		});
		impl_33(assoc_33,Weak_45Id_45Map,function(key,val){
			const _this=this;
			_this.set(key,val)
		});
		impl_33(un_45assoc_33,Weak_45Id_45Map,function(key){
			const _this=this;
			return (_=>{
				_this.delete(key);
				return _
			})(_63get(_this,key))
		});
		impl_33(keys,Weak_45Id_45Map,function(){
			const _this=this;
			throw new (Error)(`Weak-Id-Map does not support \`keys\`.`)
		});
		impl_33(empty_33,Weak_45Id_45Map,function(){
			const _this=this;
			throw new (Error)(`Weak-Id-Map does not support \`empty!\`.`)
		});
		const name=exports.name=`Weak-Id-Map`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvV2Vhay1JZC1NYXAubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxzQ0FDWSxLQUFBO1VBR1g7RUFBQTtFQUVELGVBQVcsZ0JBQVk7RUFDdkIsZUFBVyxNQUFNLGdCQUNhLElBQUE7VUFBN0IsS0FBSTtFQUFBO0VBRUwsUUFBTSxnQkFBWTtFQUNsQixRQUFNLE9BQUssZ0JBQWMsU0FBQSxJQUNHO1NBTWpCO1VBTlYsYUFNVSxVQU5HO0VBQUE7RUFDZCxRQUFNLGFBQVMsZ0JBQWMsU0FBQSxJQUNHO1NBSXJCO1VBQUEsVUFKTDtFQUFBO0VBQ04sUUFBTSxTQUFPLGdCQUFlLFNBQUEsSUFBSSxJQUNHO1NBRXhCO0dBQUEsVUFGTCxJQUFJO0VBQUE7RUFDVixRQUFNLGNBQVUsZ0JBQWMsU0FBQSxJQUNHO1NBQXRCO1VBQUwsSUFDYTtJQURSLGFBQ0Q7O01BREosT0FBSyxNQUFLO0VBQUE7RUFJaEIsUUFBTSxLQUFLLGdCQUNlLFVBQUE7U0FMZjtHQU1WLGtCQUFROztFQUVULFFBQU0sU0FBTyxnQkFDZSxVQUFBO1NBVGpCO0dBVVYsa0JBQVE7O0VBdENULHdCQUFBIiwiZmlsZSI6ImF0L01hcC9XZWFrLUlkLU1hcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9