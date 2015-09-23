"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","../control","../Function","../math/Number","../math/methods","../Type/Kind","../Type/Method","../Type/Pred-Type","./at","./at-Type","./Seq/Seq","./Seq/Seq"],(exports,compare_0,control_1,Function_2,Number_3,methods_4,Kind_5,Method_6,Pred_45Type_7,_64_8,_64_45Type_9,Seq_10,Seq_11)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_60_63=_ms.get(_$0,"<?"),_60_61_63=_ms.get(_$0,"<=?"),_$1=_ms.getModule(control_1),opr=_ms.get(_$1,"opr"),_$2=_ms.getModule(Function_2),thunk=_ms.get(_$2,"thunk"),_$3=_ms.getModule(Number_3),Nat=_ms.get(_$3,"Nat"),round_45down=_ms.get(_$3,"round-down"),sign=_ms.get(_$3,"sign"),_$4=_ms.getModule(methods_4),_43=_ms.get(_$4,"+"),_45=_ms.get(_$4,"-"),_42=_ms.get(_$4,"*"),_47=_ms.get(_$4,"/"),_$5=_ms.getModule(Kind_5),kind_33=_ms.get(_$5,"kind!"),self_45kind_33=_ms.get(_$5,"self-kind!"),_$6=_ms.getModule(Method_6),self_45impl_33=_ms.get(_$6,"self-impl!"),_$7=_ms.getModule(Pred_45Type_7),Opt=_ms.get(_$7,"Opt"),_64=_ms.getDefaultExport(_64_8),_$8=_ms.getModule(_64_8),count=_ms.get(_$8,"count"),iterator=_ms.get(_$8,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_9),_$9=_ms.getModule(_64_45Type_9),empty=_ms.get(_$9,"empty"),from_45stream=_ms.get(_$9,"from-stream"),_$10=_ms.getModule(Seq_10),_63nth=_ms.get(_$10,"?nth"),_$11=_ms.lazyGetModule(Seq_11),seq_61_63=_ms.lazyProp(_$11,"seq=?"),take_126=_ms.lazyProp(_$11,"take~");
		const Range=exports.default=(()=>{
			const _=class Range{
				static [_ms.symbol(from_45stream)](_){
					const _this=this;
					return _
				}
				constructor(start,end,step){
					_ms.checkContains(Number,start,"start");
					_ms.checkContains(Number,end,"end");
					_ms.checkContains(_ms.sub(Opt,Number),step,"step");
					_ms.newProperty(this,"start",start);
					_ms.newProperty(this,"end",end);
					_ms.newProperty(this,"step",opr(step,sign(_45(end,start))))
				}
				*[_ms.symbol(iterator)](){
					const _this=this;
					let cur=_this.start;
					for(;;){
						const break_45cond=(yield* function*(){
							if(_60_63(0,_this.step)){
								return _60_61_63(_this.end,cur)
							} else {
								return _60_61_63(cur,_this.end)
							}
						}());
						if(break_45cond){
							break
						};
						(yield cur);
						cur=_43(cur,_this.step)
					}
				}
				[_ms.symbol(_63nth)](n){
					const _this=this;
					_ms.checkContains(Nat,n,"n");
					const it=_43(_this.start,_42(_this.step,n));
					return (_60_63(it,_this.end)?_ms.some((()=>{
						return it
					})()):_ms.None)
				}
				[_ms.symbol(count)](){
					const _this=this;
					return round_45down(_47(length(_this),_this.step))
				}
			};
			self_45kind_33(_,_64_45Type);
			self_45impl_33(empty,_,thunk(new (_)(0,0)));
			kind_33(_,_64);
			return _
		})();
		_ms.newProperty(Range,"test",()=>{
			_ms.assert(_ms.unlazy(seq_61_63),[0,1,2],_ms.unlazy(take_126)(range(0,Number.POSITIVE_INFINITY),3))
		});
		const range=exports.range=function range(start,end,step){
			_ms.checkContains(Number,start,"start");
			_ms.checkContains(Number,end,"end");
			_ms.checkContains(_ms.sub(Opt,Number),step,"step");
			return new (Range)(start,end,step)
		};
		const range_45incl=exports["range-incl"]=(()=>{
			const built={};
			const test=built.test=function test(){};
			return _ms.set((start,end,step)=>{
				_ms.checkContains(Number,start,"start");
				_ms.checkContains(Number,end,"end");
				_ms.checkContains(_ms.sub(Opt,Number),step,"step");
				step=opr(step,sign(_45(end,start)));
				return range(start,_43(end,step),step)
			},built)
		})();
		const length=exports.length=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[range(5,10,2)],5);
				_ms.assoc(built,[range(5,10,3)],5);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Range,_,"_");
				return _45(_.end,_.start)
			},built)
		})();
		const name=exports.name=`Range`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9SYW5nZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWVBLDRCQUNZLEtBR1I7U0FESDtJQU9DLG1CQUFBLGdCQUFhLEVBQ0M7V0F1Q2M7WUFyQzNCO0lBQUE7SUFFUyxZQUFBLE1BQWEsSUFBVyxLQUNnQjt1QkFpRGpCO3VCQUFBOytCQWxETSxJQWtETjtxQkFqRGpDLGFBQVM7cUJBQ1QsV0FBTztxQkFDUCxZQUFRLElBQUksS0FBTSxLQUFNLElBQUUsSUFBSTtJQUFBO0lBRS9CLGFBQUEsWUFDWTtXQTZCaUI7S0EzQjVCLFFBMkI0QjtLQXpCeEIsT0FBQTtNQUFILG1CQUNpQjtPQUFoQixHQUFBLE9BQUcsRUF3QnVCLFlBdkJoQjtlQUFULFVBdUJ5QixVQXZCaEI7T0FBQSxPQUVOO2VBQUgsVUFBSSxJQXFCcUI7OztNQXBCM0IsR0FBSSxhQUNVO09BQWI7TUFBQTthQUVFO1VBQ0ksSUFBRSxJQWdCa0I7OztJQWQ3QixZQUFBLFNBQU0sRUFDSztXQWFrQjt1QkFkckI7S0FPUCxTQUFLLElBT3VCLFlBUGIsSUFPYSxXQVBMO1lBQ3ZCLENBQUcsT0FBRyxHQU1zQix5QkFMZjthQUFaO0tBQUE7O0lBRUYsWUFBQSxTQUNPO1dBRXNCO1lBQTVCLGFBQVksSUFBRyxPQUFhOzs7R0E5QzVCLGVBQVcsRUFBRTtHQUViLGVBQVcsTUFBTSxFQUFHLE1BQU8sS0FBSSxHQUFFLEVBQUU7R0FDbkMsUUFBTSxFQUFFO1VBSlQ7RUFBQTtrQkFtREQsYUFDZSxJQUFBO29DQUFBLENBQUMsRUFBRSxFQUFFLHdCQUFXLE1BQU0sRUFVRiwwQkFWOEI7RUFBQTtFQUdqRSwwQkFBUSxlQUFBLE1BQWEsSUFBVyxLQUNnQjtxQkFNYjtxQkFBQTs2QkFQRSxJQU9GO1VBTmxDLEtBQUksT0FBTSxNQUFNLElBQUk7RUFBQTtFQUVyQix5Q0FDVyxLQUFBOztHQUFWLHNCQUNRLGVBQUE7a0JBRVAsQ0FBQSxNQUFhLElBQVcsT0FDZ0I7c0JBRFA7c0JBQUE7OEJBQUosSUFBSTtTQUV6QixJQUFJLEtBQU0sS0FBTSxJQUFFLElBQUk7V0FDOUIsTUFBTSxNQUFPLElBQUUsSUFBSSxNQUFNO0dBQUE7O0VBRTNCLDRCQUNPLEtBQUE7O0dBQU4sc0JBQ08sZUFBQTs7b0JBQU4sQ0FBRSxNQUFNLEVBQUUsR0FBRyxJQUFPO29CQUNwQixDQUFFLE1BQU0sRUFBRSxHQUFHLElBQU87OztrQkFDcEIsR0FDTztzQkFETDtXQUVGLElBQUUsTUFBTTs7O0VBM0ZWLHdCQUFBIiwiZmlsZSI6ImF0L1JhbmdlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=