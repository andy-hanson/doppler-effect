"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../js","../../math/methods","../../Type/Kind","../../Type/Method","../../Type/Type","../at","../at-Type","../Set/Set","./Seq","../../math/Number","../../Function","../../math/Number"],(exports,compare_0,js_1,methods_2,Kind_3,Method_4,Type_5,_64_6,_64_45Type_7,Set_8,Seq_9,Number_10,Function_11,Number_12)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_61_63=_ms.get(_$0,"<=?"),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(js_1),js_45set=_ms.get(_$1,"js-set"),js_45sub=_ms.get(_$1,"js-sub"),_$2=_ms.getModule(methods_2),_43=_ms.get(_$2,"+"),_$3=_ms.getModule(Kind_3),kind_33=_ms.get(_$3,"kind!"),self_45kind_33=_ms.get(_$3,"self-kind!"),_$4=_ms.getModule(Method_4),impl_33=_ms.get(_$4,"impl!"),self_45impl_33=_ms.get(_$4,"self-impl!"),_$5=_ms.getModule(Type_5),_61_62=_ms.get(_$5,"=>"),_64=_ms.getDefaultExport(_64_6),_$6=_ms.getModule(_64_6),_45_33=_ms.get(_$6,"-!"),_45_45_33=_ms.get(_$6,"--!"),count=_ms.get(_$6,"count"),empty_33=_ms.get(_$6,"empty!"),empty_63=_ms.get(_$6,"empty?"),_64_45Type=_ms.getDefaultExport(_64_45Type_7),_$7=_ms.getModule(_64_45Type_7),empty=_ms.get(_$7,"empty"),from_45stream=_ms.get(_$7,"from-stream"),Set=_ms.getDefaultExport(Set_8),Seq=_ms.getDefaultExport(Seq_9),_$8=_ms.getModule(Seq_9),_60_43_43_33=_ms.get(_$8,"<++!"),_43_43_62_33=_ms.get(_$8,"++>!"),indexes=_ms.get(_$8,"indexes"),_63nth=_ms.get(_$8,"?nth"),_63_60pop_33=_ms.get(_$8,"?<pop!"),_63pop_62_33=_ms.get(_$8,"?pop>!"),set_45nth_33=_ms.get(_$8,"set-nth!"),_$9=_ms.lazyGetModule(Number_10),Nat=_ms.lazyProp(_$9,"Nat"),_$10=_ms.lazyGetModule(Function_11),identity=_ms.lazyProp(_$10,"identity"),_$11=_ms.lazyGetModule(Number_12),divisible_63=_ms.lazyProp(_$11,"divisible?");
		self_45kind_33(Array,_64_45Type);
		self_45impl_33(empty,Array,()=>{
			return []
		});
		self_45impl_33(from_45stream,Array,stream=>{
			const arr=[];
			for(let _ of stream){
				arr.push(_)
			};
			return arr
		});
		kind_33(Array,Seq);
		impl_33(count,Array,function(){
			const _this=this;
			return _this.length
		});
		impl_33(_63nth,Array,function(n){
			const _this=this;
			return (_60_63(n,count(_this))?_ms.some((()=>{
				return js_45sub(_this,n)
			})()):_ms.None)
		});
		impl_33(_60_43_43_33,Array,function(added){
			const _this=this;
			_ms.checkContains(_64,added,"added");
			return Array.prototype.unshift.apply(_this,_61_62(Array,added))
		});
		impl_33(_43_43_62_33,Array,function(added){
			const _this=this;
			_ms.checkContains(_64,added,"added");
			return Array.prototype.push.apply(_this,_61_62(Array,added))
		});
		impl_33(_63_60pop_33,Array,function(){
			const _this=this;
			return (empty_63(_this)?_ms.None:_ms.some((()=>{
				return _this.shift()
			})()))
		});
		impl_33(_63pop_62_33,Array,function(){
			const _this=this;
			return (empty_63(_this)?_ms.None:_ms.some((()=>{
				return _this.pop()
			})()))
		});
		impl_33(empty_33,Array,function(){
			const _this=this;
			for(;;){
				if(empty_63(_this)){
					break
				};
				_this.pop()
			}
		});
		impl_33(set_45nth_33,Array,function(n,val){
			const _this=this;
			_ms.checkContains(_ms.unlazy(Nat),n,"n");
			js_45set(_this,n,val)
		});
		impl_33(_45_33,Array,function(em){
			const _this=this;
			for(let i of indexes(_this)){
				if(_61_63(_ms.sub(_this,i),em)){
					_this.splice(i,1);
					break
				}
			}
		});
		impl_33(_45_45_33,Array,function(_64deleted){
			const _this=this;
			_64deleted=_61_62(Set,_64deleted);
			filter_33(_this,em=>{
				return (_=>{
					if(_){
						_45_45_33(_64deleted,[em])
					};
					return _
				})(_ms.contains(_64deleted,em))
			})
		});
		const filter_33=exports["filter!"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const arr=[1,2,3,4,5];
				filter_33(arr,_=>{
					return _ms.unlazy(divisible_63)(_,2)
				});
				_ms.assert(_61_63,arr,[2,4])
			};
			return _ms.set((arr,keep_45if_63)=>{
				let read_45idx=0;
				let write_45idx=0;
				for(;;){
					if(_60_61_63(arr.length,read_45idx)){
						break
					};
					const here=_ms.sub(arr,read_45idx);
					if(keep_45if_63(here)){
						set_45nth_33(arr,write_45idx,here);
						write_45idx=_43(1,write_45idx)
					};
					read_45idx=_43(1,read_45idx)
				};
				arr.length=write_45idx
			},built)
		})();
		const fill=exports.fill=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[3,_ms.unlazy(identity)],[0,1,2]);
				return built
			};
			return _ms.set((count,filler)=>{
				_ms.checkContains(Number,count,"count");
				_ms.checkContains(Function,filler,"filler");
				return (_=>{
					for(let i of indexes(_)){
						set_45nth_33(_,i,filler(i))
					};
					return _
				})(new (Array)(count))
			},built)
		})();
		const name=exports.name=`Array`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXEvQXJyYXkubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFtQkEsZUEyRlcsTUEzRk07RUFDakIsZUFBVyxNQTBGQSxNQXpGYSxJQUFBO1VBQXZCO0VBQUE7RUFDRCxlQUFXLGNBd0ZBLE1BeEZtQixRQUNNO0dBQW5DLFVBQU07R0FDRCxRQUFBLEtBQUEsT0FDTTtJQUFWLFNBQVM7R0FBQTtVQUNWO0VBQUE7RUFHRCxRQWlGVyxNQWpGQztFQUVaLFFBQU0sTUErRUssTUE5RVMsVUFBQTtTQXlDWDtVQUFBOztFQXZDVCxRQUFNLE9BNEVLLE1BNUVRLFNBQUEsRUFDQztTQXNDWDtVQXRDUixDQUFHLE9BQUcsRUFBRyxNQXNDRCxzQkFyQ1k7V0FBbkIsU0FxQ08sTUFyQ0s7R0FBQTs7RUFFZCxRQUFNLGFBd0VLLE1BeEVRLFNBQUEsTUFDTztTQWtDakI7cUJBbkNnQjtVQXdFZCw4QkFyQ0YsTUFqQzRCLE9Bc0UxQixNQXRFbUM7RUFBQTtFQUU5QyxRQUFNLGFBb0VLLE1BcEVRLFNBQUEsTUFDTztTQThCakI7cUJBL0JnQjtVQW9FZCwyQkFyQ0YsTUE3QnlCLE9Ba0V2QixNQWxFZ0M7RUFBQTtFQUUzQyxRQUFNLGFBZ0VLLE1BL0RVLFVBQUE7U0EwQlo7VUExQlIsQ0FBTyxTQTBCQyw4QkF6QlU7V0F5QlY7OztFQXZCVCxRQUFNLGFBNERLLE1BM0RVLFVBQUE7U0FzQlo7VUF0QlIsQ0FBTyxTQXNCQyw4QkFyQlU7V0FxQlY7OztFQW5CVCxRQUFNLFNBd0RLLE1BdkRXLFVBQUE7U0FrQmI7R0FmSixPQUFBO0lBQUgsR0FBSSxTQWVHLE9BZFE7S0FBZDtJQUFBO0lBY007OztFQVhULFFBQU0sYUFnREssTUFoRGEsU0FBQSxFQUFNLElBQ0c7U0FVeEI7O0dBVlIsU0FVUSxNQVZJLEVBQUU7RUFBQTtFQUVmLFFBQU0sT0E2Q0ssTUE3Q08sU0FBQSxHQUNFO1NBT1g7R0FQSCxRQUFBLEtBQUssUUFPRixPQU5jO0lBQXJCLEdBQUksZUFNRyxNQU5LLEdBQUcsSUFDRTtLQUtWLGFBTEUsRUFBRTtLQUNWO0lBQUE7R0FBQTtFQUFBO0VBRUgsUUFBTSxVQXVDSyxNQXZDUSxTQUFBLFdBQ1E7U0FDbEI7Y0FESSxPQUFHLElBQUk7R0FDbkIsVUFBUSxNQUFNLElBQ0U7V0FBVixJQUNXO0tBQWYsR0FBSSxFQUNDO01BQ0osVUFBSSxXQUFTLENBQUM7S0FBQTs7b0JBSFIsV0FBSDtHQUFBO0VBQUE7RUFNUCxtQ0FDUSxLQUFBOztHQUFQLHNCQUNRLGVBQUE7SUFBUCxVQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNmLFVBQVEsSUFBSyxHQUNDO3FDQUFGLEVBQUU7SUFBQTtlQUNOLE9BQUcsSUFBSSxDQUFDLEVBQUU7R0FBQTtrQkFFakIsQ0FBQSxJQUFJLGVBQ1E7SUFBYixlQUFhO0lBQ2IsZ0JBQWM7SUFHVixPQUFBO0tBQUgsR0FBSSxVQUFJLFdBQVcsWUFDUTtNQUExQjtLQUFBO0tBRUQsbUJBQU8sSUFBSTtLQUNYLEdBQUksYUFBUyxNQUNJO01BQ2hCLGFBQVMsSUFBSSxZQUFVO2tCQUNWLElBQUUsRUFBRTtLQUFBO2dCQUVOLElBQUUsRUFBRTtJQUFBO0lBRWpCLFdBQWM7R0FBQTs7RUFFaEIsd0JBQ0ssS0FBQTs7R0FDSixzQkFDTyxlQUFBOztvQkFBTixDQUFDLHdCQUFlLENBQUMsRUFBRSxFQUFFOzs7a0JBQ3JCLENBQUEsTUFBYSxTQUNlO3NCQUR0QjtzQkFBYztXQUNmLElBQ2U7S0FBZCxRQUFBLEtBQUssUUFBQSxHQUNRO01BQ2pCLGFBQVMsRUFBRSxFQUFHLE9BQU87S0FBQTs7T0FIbEIsS0FBSSxPQUFNO0dBQUE7O0VBOUdqQix3QkFBQSIsImZpbGUiOiJhdC9TZXEvQXJyYXkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==