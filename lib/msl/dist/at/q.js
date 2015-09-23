"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../control","../js","../private/bootstrap","../to-string","../Type/Kind","../Type/Method","../Type/Pred-Type","../Type/Type","./at","./at-Type","./Seq/Seq","../compare","../Try"],(exports,control_0,js_1,bootstrap_2,to_45string_3,Kind_4,Method_5,Pred_45Type_6,Type_7,_64_8,_64_45Type_9,Seq_10,compare_11,Try_12)=>{
	exports._get=_ms.lazy(()=>{
		const _$1=_ms.getModule(control_0),opr=_ms.get(_$1,"opr"),_$2=_ms.getModule(js_1),defined_63=_ms.get(_$2,"defined?"),id_61_63=_ms.get(_$2,"id=?"),_$3=_ms.getModule(bootstrap_2),msDef=_ms.get(_$3,"msDef"),to_45string=_ms.getDefaultExport(to_45string_3),_$4=_ms.getModule(Kind_4),kind_33=_ms.get(_$4,"kind!"),self_45kind_33=_ms.get(_$4,"self-kind!"),_$5=_ms.getModule(Method_5),self_45impl_33=_ms.get(_$5,"self-impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_6),_$6=_ms.getModule(Type_7),extract=_ms.get(_$6,"extract"),_$7=_ms.getModule(_64_8),empty_63=_ms.get(_$7,"empty?"),iterator=_ms.get(_$7,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_9),_$8=_ms.getModule(_64_45Type_9),empty=_ms.get(_$8,"empty"),from_45stream=_ms.get(_$8,"from-stream"),Seq=_ms.getDefaultExport(Seq_10),_$9=_ms.lazyGetModule(compare_11),_61_63=_ms.lazyProp(_$9,"=?"),_$10=_ms.lazyGetModule(Try_12),fails_63=_ms.lazyProp(_$10,"fails?");
		const _63=exports.default=(()=>{
			const _=class _63{
				static [_ms.symbol(empty)](){
					const _this=this;
					return _63None
				}
				static [_ms.symbol(from_45stream)](_){
					const _this=this;
					const iter=iterator(_);
					const _$0=iter.next(),value=_$0.value,done=_$0.done;
					return (done?_63None:_63some(value))
				}
				constructor(val){
					_ms.newProperty(this,"val",val)
				}
				[_ms.symbol(empty_63)](){
					const _this=this;
					return id_61_63(_this,_63None)
				}
				*[_ms.symbol(iterator)](){
					const _this=this;
					if(! empty_63(_this)){
						(yield _this.val)
					}
				}
				[_ms.symbol(to_45string)](){
					const _this=this;
					return (()=>{
						if(empty_63(_this)){
							return `None`
						} else {
							return `?some ${_this.val}`
						}
					})()
				}
			};
			self_45kind_33(_,_64_45Type);
			kind_33(_,Seq);
			return _
		})();
		const empty_45marker=(()=>{
			return new (Object)()
		})();
		const _63None=exports["?None"]=new (_63)(empty_45marker);
		const _63some=exports["?some"]=function _63some(_){
			return new (_63)(_)
		};
		msDef(`some`,_63some);
		msDef(`None`,_63None);
		const Opt_45_62_63=exports["Opt->?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[0],_63some(0));
				_ms.assoc(built,[null],_63some(null));
				_ms.assoc(built,[void 0],_63None);
				return built
			};
			return _ms.set(_=>{
				return (defined_63(_)?_ms.some((()=>{
					return _
				})()):_ms.None)
			},built)
		})();
		const _63_45_62Opt=exports["?->Opt"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_63some(0)],0);
				_ms.assertNot(defined_63,_63_45_62Opt(_63None));
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(_63,_,"_");
				return (()=>{
					if(empty_63(_)){
						return void 0
					} else {
						return _.val
					}
				})()
			},built)
		})();
		const un_45_63=exports["un-?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_63some(1)],1);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return un_45_63(_63None)
				});
				return built
			};
			return _ms.set((_,fail_45message)=>{
				_ms.checkContains(_63,_,"_");
				if(empty_63(_))throw opr(_ms.unlazy(fail_45message),`Tried to force empty \`?\`.`);
				return _.val
			},built)
		})();
		const _63_45or=exports["?-or"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_63None,1],1);
				_ms.assoc(built,[_63some(1),2],1);
				return built
			};
			return _ms.set((_,or_45else)=>{
				_ms.checkContains(_63,_,"_");
				return (()=>{
					if(empty_63(_)){
						return _ms.unlazy(or_45else)
					} else {
						return _.val
					}
				})()
			},built)
		})();
		const Some=exports.Some=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Some";
			const predicate=built.predicate=function predicate(_){
				return (_ms.contains(_63,_)&&! empty_63(_))
			};
			const test=built.test=function test(){
				{
					const _=_63some(1);
					{
						const _$=_ms.extract(Some,_);
						if((_$!==null)){
							const val=_$[0];
							_ms.assert(_ms.unlazy(_61_63),val,1)
						} else throw new (Error)("No branch of `case` matches.")
					}
				}
			};
			return built
		})());
		self_45impl_33(extract,Some,_=>{
			return (()=>{
				if(_ms.contains(Some,_)){
					return [_.val]
				} else {
					return null
				}
			})()
		});
		const name=exports.name=`?`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC8/Lm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBZ0JBLDBCQUNRLEtBSUo7U0FESDtJQUtDLG1CQUFBLFNBQ087V0FtQkM7WUFuQlA7SUFBQTtJQUVELG1CQUFBLGdCQUFhLEVBQ0M7V0FnQk47S0FoQlAsV0FBTyxTQUFBO0tBQ1AsVUFBYTtZQUNSLENBQUEsS0FBSyxRQUFPLFFBQU07SUFBQTtJQUVkLFlBQUEsSUFDSTs7O0lBRWYsWUFBQSxZQUNRO1dBUUM7WUFSUixTQVFRLE1BUkU7SUFBQTtJQUVYLGFBQUEsWUFDWTtXQUtIO0tBTFIsS0FBUSxTQUtBLE9BSlc7YUFJWDs7O0lBRlQsWUFBQSxlQUNXO1dBQ0Y7WUFBSjtNQUFILEdBQUEsU0FBTyxPQUNJO2NBQVQ7YUFFRTtjQUFGLFNBSEs7Ozs7O0dBeEJSLGVBQVcsRUFBRTtHQUNiLFFBQU0sRUFBRTtVQUZUO0VBQUE7RUE4QkQscUJBQ2MsS0FBQTtVQUNiLEtBQUk7RUFBQTtFQUVMLCtCQUFPLEtBQUksS0FBRTtFQUNiLCtCQUFRLGlCQUFBLEVBQ0M7VUFBUixLQUFJLEtBQUU7RUFBQTtFQUVQLE1BQU8sT0FBTTtFQUNiLE1BQU8sT0FBTTtFQUdaLHFDQUNPLEtBQUE7O0dBQ04sc0JBQ08sZUFBQTs7b0JBQU4sQ0FBQyxHQUFNLFFBQU07b0JBQ2IsQ0FBQyxNQUFTLFFBQU07b0JBQ2hCLENBQUMsUUFBYzs7O2tCQUNmLEdBQ0M7V0FDRCxDQUFHLFdBQUEsaUJBQ1M7WUFBWDtJQUFBOzs7RUFFSCxxQ0FDTyxLQUFBOztHQUNOLHNCQUNPLGVBQUE7O29CQUFOLENBQUUsUUFBTSxJQUFPO2tCQUNQLFdBQVUsYUFBTzs7O2tCQUN6QixHQUNHO3NCQUREO1dBRUU7S0FBSCxHQUFBLFNBQUEsR0FDTzthQUFOO1lBRUc7YUFBSDs7Ozs7RUFHSiwrQkFDSyxLQUFBOztHQUNKLHNCQUNPLGVBQUE7O29CQUFOLENBQUUsUUFBTSxJQUFPO29DQUVDLElBQUE7WUFBZixTQUFLO0lBQUE7OztrQkFDTixDQUFBLEVBQUksaUJBQ2E7c0JBRGY7SUFDTSxHQUFBLFNBQUEsU0FBZSwrQkFBa0I7V0FDekM7OztFQUVGLCtCQUNLLEtBQUE7O0dBQ0osc0JBQ08sZUFBQTs7b0JBQU4sQ0FBQyxRQUFNLEdBQU07b0JBQ2IsQ0FBRSxRQUFNLEdBQUcsR0FBTTs7O2tCQUNqQixDQUFBLEVBQUksWUFDUTtzQkFEVjtXQUVFO0tBQUgsR0FBQSxTQUFBLEdBQ087O1lBRUg7YUFBSDs7Ozs7RUFFTCx3QkFBTSxLQUFJLGFBQ1MsS0FBQTs7U0FDbEIsUUFBQTtHQUNBLGdDQUFZLG1CQUFBLEVBQ0M7V0FBWixjQUFLLElBQUQsSUFBRyxFQUFJLFNBQUE7R0FBQTtHQUVaLHNCQUNRLGVBQUE7SUFBRDtLQUFBLFFBQUEsUUFBTTtLQUNYOzJCQUFDLEtBQUQ7cUJBQ1M7O3FDQUFHLElBQUk7TUFBQTs7Ozs7O0VBRW5CLGVBQVcsUUFBUSxLQUFNLEdBQUE7VUFDSTtJQUE1QixnQkFBQyxLQUFELEdBQ0s7WUFBSixDQUFDO1dBRUU7WUFBSDtJQUFBO0dBQUE7RUFBQTtFQTNIRix3QkFBQSIsImZpbGUiOiJhdC9xLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=