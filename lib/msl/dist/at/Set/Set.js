"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../Type/Type","../../Type/Kind","../../Type/Method","../at","../at-Type","./Hash-Set","../at"],(exports,compare_0,Type_1,Kind_2,Method_3,_64_4,_64_45Type_5,Hash_45Set_6,_64_7)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),same_63=_ms.get(_$0,"same?"),_$1=_ms.getModule(Type_1),_61_62=_ms.get(_$1,"=>"),type_45of=_ms.get(_$1,"type-of"),Kind=_ms.getDefaultExport(Kind_2),_$2=_ms.getModule(Kind_2),kind_33=_ms.get(_$2,"kind!"),self_45kind_33=_ms.get(_$2,"self-kind!"),Method=_ms.getDefaultExport(Method_3),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),self_45impl_33=_ms.get(_$3,"self-impl!"),_64=_ms.getDefaultExport(_64_4),_$4=_ms.getModule(_64_4),all_63=_ms.get(_$4,"all?"),count=_ms.get(_$4,"count"),keep=_ms.get(_$4,"keep"),_64_45Type=_ms.getDefaultExport(_64_45Type_5),_$5=_ms.getModule(_64_45Type_5),empty=_ms.get(_$5,"empty"),Hash_45Set=_ms.lazy(()=>_ms.getDefaultExport(Hash_45Set_6)),_$6=_ms.lazyGetModule(_64_7),_45_45=_ms.lazyProp(_$6,"--");
		const Set=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Set";
			return built
		})());
		self_45kind_33(Set,_64_45Type);
		kind_33(Set,_64);
		self_45impl_33(empty,Set,()=>{
			return empty(_ms.unlazy(Hash_45Set))
		});
		impl_33(_61_63,Set,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				const a=_61_62(Set,[1,2]);
				const b=_61_62(Set,[1,2]);
				_ms.assoc(built,[a,b],true);
				_ms.assoc(built,[a,[_ms.unlazy(_45_45),b,[1]]],false);
				return built
			};
			return _ms.set(function(other){
				const _this=this;
				return ((same_63(type_45of,_this,other)&&same_63(count,_this,other))&&all_63(_this,_=>{
					return _ms.contains(other,_)
				}))
			},built)
		})());
		const set_61_63=exports["set=?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2,3],[3,2,1]],true);
				_ms.assoc(built,[[1],[1,1,1]],true);
				_ms.assoc(built,[[1,2],[1,2,3]],false);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(_64,a,"a");
				_ms.checkContains(_64,b,"b");
				return _61_63(_61_62(Set,a),_61_62(Set,b))
			},built)
		})();
		const intersect=exports.intersect=new (Method)((()=>{
			const built={};
			built[`name`]="intersect";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_61_62(Set,[1,2]),_61_62(Set,[2,3])],_61_62(Set,[2]));
				return built
			};
			const args=built.args=2;
			const _default=built.default=function _default(_64intersect_45with){
				const _this=this;
				return keep(_this,_=>{
					return _ms.contains(_61_62(Set,_64intersect_45with),_)
				})
			};
			return built
		})());
		const name=exports.name=`Set`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXQvU2V0Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBWUEsMEJBQUssS0FBSSxNQUNJLEtBQUE7O1NBRVosUUFBQTs7O0VBRUQsZUFBVyxJQUFJO0VBQ2YsUUFBTSxJQUFJO0VBRVYsZUFBVyxNQUFNLElBQ0ssSUFBQTtVQUFyQjs7RUFFRCxRQUFNLE9BQUcsSUFDRyxLQUFBOztHQUNYLHNCQUNPLGVBQUE7O0lBQU4sUUFBSSxPQUFHLElBQUksQ0FBQyxFQUFFO0lBQ2QsUUFBSSxPQUFHLElBQUksQ0FBQyxFQUFFO29CQUNkLENBQUMsRUFBRSxHQUFNO29CQUNULENBQUMsRUFBRSxvQkFBSSxFQUFFLENBQUMsS0FBUTs7O2tCQUNqQixTQUFBLE1BQ0s7VUFtQkQ7V0FuQkwsRUFBSyxRQUFNLFVBbUJOLE1BbkJtQixRQUFRLFFBQU0sTUFtQmpDLE1BbkI0QyxTQUFRLE9BbUJwRCxNQW5CK0QsR0FDQzt5QkFBbkUsTUFBRDtJQUFBO0dBQUE7O0VBRUgsaUNBQ00sS0FBQTs7R0FDTCxzQkFDTyxlQUFBOztvQkFBTixDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBTztvQkFDckIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBTztvQkFDakIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFPOzs7a0JBQ25CLENBQUEsRUFBSSxJQUNHO3NCQURMO3NCQUFJO1dBQ04sT0FBSSxPQUFHLElBQUksR0FBSSxPQUFHLElBQUk7R0FBQTs7RUFFeEIsa0NBQVcsS0FBSSxRQUNNLEtBQUE7O1NBQ3BCLFFBQUE7R0FDQSxzQkFDTyxlQUFBOztvQkFBTixDQUFFLE9BQUcsSUFBSSxDQUFDLEVBQUUsSUFBSyxPQUFHLElBQUksQ0FBQyxFQUFFLEtBQVEsT0FBRyxJQUFJLENBQUM7OztHQUM1QyxzQkFBTTtHQUNOLDZCQUFXLGtCQUFBLG9CQUNlO1VBQXBCO1dBQUwsS0FBSyxNQUFNLEdBQ0M7eUJBQVIsT0FBRyxJQUFJLHFCQUFWO0lBQUE7R0FBQTs7O0VBbkRILHdCQUFBIiwiZmlsZSI6ImF0L1NldC9TZXQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==