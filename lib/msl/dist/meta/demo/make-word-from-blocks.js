"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/at","../../at/q","../../at/Seq/Seq"],(exports,_64_0,_63_1,Seq_2)=>{
	exports._get=_ms.lazy(()=>{
		const _64=_ms.getDefaultExport(_64_0),_$0=_ms.getModule(_64_0),_43_43=_ms.get(_$0,"++"),_45_45=_ms.get(_$0,"--"),empty_63=_ms.get(_$0,"empty?"),flat_45map_126=_ms.get(_$0,"flat-map~"),keep=_ms.get(_$0,"keep"),map=_ms.get(_$0,"map"),map_126=_ms.get(_$0,"map~"),_63=_ms.getDefaultExport(_63_1),_$1=_ms.getModule(Seq_2),_63first=_ms.get(_$1,"?first"),tail=_ms.get(_$1,"tail");
		const make_45word_45from_45blocks=exports.default=(()=>{
			return (word,blocks)=>{
				_ms.checkContains(String,word,"word");
				_ms.checkContains(_64,blocks,"blocks");
				const rec=function rec(chars_45left,blocks_45left){
					return (()=>{
						const _=chars_45left;
						if(empty_63(_)){
							return _63([])
						} else {
							const rest_45word=tail(_);
							const this_45char_45blocks=keep(blocks_45left,_=>{
								return _ms.contains(_,_ms.sub(chars_45left,0))
							});
							return _63first(flat_45map_126(this_45char_45blocks,_=>{
								return map_126(rec(rest_45word,_45_45(blocks_45left,[_])),ans=>{
									return _43_43([_],ans)
								})
							}))
						}
					})()
				};
				return _ms.checkContains(_63,rec(word.toUpperCase(),map(blocks,_=>{
					return _.toUpperCase()
				})),"res")
			}
		})();
		const name=exports.name=`make-word-from-blocks`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL21ha2Utd29yZC1mcm9tLWJsb2Nrcy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQUtBLGtEQUNzQixLQUFBO1VBMENwQixDQUFHLEtBQVksU0FDd0M7c0JBRC9DO3NCQUFjO0lBQ3RCLFVBQU8sYUFBQSxhQUFXLGNBQ1c7WUFBdkI7TUFBQSxRQUFBO01BQ0osR0FBQSxTQUFBLEdBQ087Y0FBTixJQUFFO01BQUEsT0FFQztPQUFILGtCQUFZLEtBQUE7T0FDWiwyQkFBbUIsS0FBSyxjQUFhLEdBQ0M7NEJBQXZCLFVBQWQsYUFBVztPQUFBO2NBRVosU0FBUSxlQUFVLHFCQUFrQixHQUNDO2VBQ3BDLFFBQU0sSUFBSSxZQUFXLE9BQUcsY0FBWSxDQUFDLEtBQU0sS0FDRztnQkFBN0MsT0FBRyxDQUFDLEdBQUc7UUFBQTtPQUFBO01BQUE7S0FBQTtJQUFBOzZCQWJYLElBY0QsSUFBSSxtQkFBb0IsSUFBSSxPQUFRLEdBQ0M7WUFBcEM7Ozs7RUEvREgsd0JBQUEiLCJmaWxlIjoibWV0YS9kZW1vL21ha2Utd29yZC1mcm9tLWJsb2Nrcy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9