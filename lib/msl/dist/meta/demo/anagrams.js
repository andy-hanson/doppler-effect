"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/at","../../at/at-Type","../../at/Map/Map","../../at/Map/Id-Map","../../at/Map/multi-map","../../compare","../../at/Seq/Seq","../../RegExp"],(exports,_64_0,_64_45Type_1,Map_2,Id_45Map_3,multi_45map_4,compare_5,Seq_6,RegExp_7)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(_64_0),count=_ms.get(_$0,"count"),keep=_ms.get(_$0,"keep"),_$1=_ms.getModule(_64_45Type_1),empty=_ms.get(_$1,"empty"),_$2=_ms.getModule(Map_2),values=_ms.get(_$2,"values"),Id_45Map=_ms.getDefaultExport(Id_45Map_3),_$3=_ms.getModule(multi_45map_4),add_45to_45_64_33=_ms.get(_$3,"add-to-@!"),_$4=_ms.getModule(compare_5),_61_63=_ms.get(_$4,"=?"),max=_ms.get(_$4,"max"),sort=_ms.get(_$4,"sort"),_$5=_ms.lazyGetModule(Seq_6),seq_61_63=_ms.lazyProp(_$5,"seq=?"),_$6=_ms.lazyGetModule(RegExp_7),rgx=_ms.lazyProp(_$6,"rgx");
		const maximum_45anagram_45sets=exports["maximum-anagram-sets"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const w=`abel able bale bela elba
alger glare lager large regal
angel angle galen glean lange
caret carte cater crate trace
elan lane lean lena neal
evil levi live veil vile
random words to prove it's doing work`;
				const words=w.split(_ms.unlazy(rgx)`\s`);
				_ms.assert(_ms.unlazy(seq_61_63),maximum_45anagram_45sets(words),(()=>{
					const built=[];
					_ms.add(built,[`abel`,`able`,`bale`,`bela`,`elba`]);
					_ms.add(built,[`alger`,`glare`,`lager`,`large`,`regal`]);
					_ms.add(built,[`angel`,`angle`,`galen`,`glean`,`lange`]);
					_ms.add(built,[`caret`,`carte`,`cater`,`crate`,`trace`]);
					_ms.add(built,[`elan`,`lane`,`lean`,`lena`,`neal`]);
					_ms.add(built,[`evil`,`levi`,`live`,`veil`,`vile`]);
					return built
				})())
			};
			return _ms.set(words=>{
				const sorted_45_62words=empty(Id_45Map);
				for(let _ of words){
					add_45to_45_64_33(sorted_45_62words,sort(_),[_])
				};
				const max_45count=max((()=>{
					const built=[];
					for(let _ of values(sorted_45_62words)){
						_ms.add(built,count(_))
					};
					return built
				})());
				return keep(values(sorted_45_62words),_=>{
					return _61_63(count(_),max_45count)
				})
			},built)
		})();
		const name=exports.name=`anagrams`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL2FuYWdyYW1zLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBV0EsK0RBQ3FCLEtBQUE7O0dBQ3BCLHNCQUNRLGVBQUE7SUFBUCxRQUNDO0lBT0QsWUFBUSx1QkFBWTtxQ0FDTCx5QkFBcUIsT0FDTSxLQUFBOzttQkFBdkMsQ0FBRSxPQUFPLE9BQU8sT0FBTyxPQUFPO21CQUM5QixDQUFFLFFBQVEsUUFBUSxRQUFRLFFBQVE7bUJBQ2xDLENBQUUsUUFBUSxRQUFRLFFBQVEsUUFBUTttQkFDbEMsQ0FBRSxRQUFRLFFBQVEsUUFBUSxRQUFRO21CQUNsQyxDQUFFLE9BQU8sT0FBTyxPQUFPLE9BQU87bUJBQzlCLENBQUUsT0FBTyxPQUFPLE9BQU8sT0FBTzs7OztrQkFDakMsT0FDSztJQUNMLHdCQUFnQixNQUFNO0lBQ2pCLFFBQUEsS0FBQSxNQUNLO0tBQ1Qsa0JBQVUsa0JBQWMsS0FBQSxHQUFNLENBQUM7SUFBQTtJQUNoQyxrQkFBWSxJQUFTOzthQUFBLEtBQUEsT0FBTyxtQkFDYTtvQkFBeEMsTUFBQTtLQUFBOzs7V0FDRCxLQUFNLE9BQU8sbUJBQWdCLEdBQ0M7WUFBN0IsT0FBRyxNQUFBLEdBQU87SUFBQTtHQUFBOztFQXZDYix3QkFBQSIsImZpbGUiOiJtZXRhL2RlbW8vYW5hZ3JhbXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==