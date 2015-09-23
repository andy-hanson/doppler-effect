"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/q","../../at/Map/Map","../../at/Map/Id-Map","../../at/Map/multi-map","../../at/Range","../../at/Seq/Stream","../../math/Number","../../math/methods","../../Type/Type","../../at/at","../../at/Seq/Seq","../../math/Number"],(exports,_63_0,Map_1,Id_45Map_2,multi_45map_3,Range_4,Stream_5,Number_6,methods_7,Type_8,_64_9,Seq_10,Number_11)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(_63_0),Some=_ms.get(_$0,"Some"),_$1=_ms.getModule(Map_1),assoc_33=_ms.get(_$1,"assoc!"),un_45assoc_33=_ms.get(_$1,"un-assoc!"),Id_45Map=_ms.getDefaultExport(Id_45Map_2),_$2=_ms.getModule(multi_45map_3),add_45to_45_64_33=_ms.get(_$2,"add-to-@!"),Range=_ms.getDefaultExport(Range_4),Stream=_ms.getDefaultExport(Stream_5),_$3=_ms.getModule(Number_6),square=_ms.get(_$3,"square"),_$4=_ms.getModule(methods_7),_43=_ms.get(_$4,"+"),_42=_ms.get(_$4,"*"),_$5=_ms.getModule(Type_8),_61_62=_ms.get(_$5,"=>"),_$6=_ms.lazyGetModule(_64_9),any_63=_ms.lazyProp(_$6,"any?"),_$7=_ms.lazyGetModule(Seq_10),take=_ms.lazyProp(_$7,"take"),_$8=_ms.lazyGetModule(Number_11),divisible_63=_ms.lazyProp(_$8,"divisible?");
		const primes=exports.primes=(()=>{
			const built={};
			const test=built.test=function test(){
				const is_45prime_63=function is_45prime_63(_){
					return ! _ms.unlazy(any_63)(new (Range)(2,_),_ms.sub(_ms.unlazy(divisible_63),_))
				};
				for(let _ of _ms.unlazy(take)(primes,20)){
					_ms.assert(is_45prime_63,_)
				}
			};
			return _ms.set(new (Stream)(function*(){
				(yield 2);
				(yield 3);
				const prime_45factors=_61_62(Id_45Map,(yield* function*(){
					const built=new (global.Map)();
					_ms.assoc(built,9,[3]);
					return built
				}()));
				for(let candidate of new (Range)(5,Number.POSITIVE_INFINITY,2)){
					{
						const _=un_45assoc_33(prime_45factors,candidate);
						{
							const _$=_ms.extract(Some,_);
							if((_$!==null)){
								const factors=_$[0];
								for(let _ of factors){
									const key=_43(candidate,_42(2,_));
									add_45to_45_64_33(prime_45factors,key,[_])
								}
							} else {
								(yield candidate);
								assoc_33(prime_45factors,square(candidate),[candidate])
							}
						}
					}
				}
			}),built)
		})();
		const name=exports.name=`sieve-of-eratosthenes`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL3NpZXZlLW9mLWVyYXRvc3RoZW5lcy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWVBLDRCQUNPLEtBQUE7O0dBRU4sc0JBQ1EsZUFBQTtJQUFQLG9CQUFhLHVCQUFBLEVBQ0M7WUFBYixxQkFBVSxLQUFJLE9BQU0sRUFBRSxvQ0FBYztJQUFBO0lBQ2hDLFFBQUEsc0JBQUssT0FBTyxJQUNFO2dCQUFWLGNBQVU7SUFBQTtHQUFBO2tCQUNwQixLQUFJLFFBQ1UsV0FBQTtXQUFWO1dBQ0E7SUFFSCxzQkFBZ0IsT0FBRyxTQUNNLG1CQUFBOztxQkFBeEIsRUFBSyxDQUFDOzs7SUFDRixRQUFBLGFBQWEsS0FBSSxPQUFNLEVBQUUseUJBQXlCLEdBQ0M7S0FDakQ7TUFBQSxRQUFBLGNBQVUsZ0JBQWM7TUFDN0I7NEJBQUMsS0FBRDtzQkFDYTs7UUFBUCxRQUFBLEtBQUEsUUFDTztTQUFYLFVBQU0sSUFBRSxVQUFXLElBQUUsRUFBRTtTQUV2QixrQkFBVSxnQkFBYyxJQUFJLENBQUM7UUFBQTtPQUFBLE9BRTNCO2VBQUE7UUFDSCxTQUFPLGdCQUFlLE9BQU8sV0FBVyxDQUFDO09BQUE7TUFBQTtLQUFBO0lBQUE7R0FBQTs7RUF2QzlDLHdCQUFBIiwiZmlsZSI6Im1ldGEvZGVtby9zaWV2ZS1vZi1lcmF0b3N0aGVuZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==