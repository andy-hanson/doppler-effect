"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","../js","../private/bootstrap","./Method","../at/at","./Impl-Type","../methods","../Try","./Method","./Impl-Type"],(exports,compare_0,js_1,bootstrap_2,Method_3,_64_4,Impl_45Type_5,methods_6,Try_7,Method_8,Impl_45Type_9)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),js_61_61=_ms.get(_$1,"js=="),js_45sub=_ms.get(_$1,"js-sub"),_$2=_ms.getModule(bootstrap_2),implContains=_ms.get(_$2,"implContains"),pAdd=_ms.get(_$2,"pAdd"),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),propagate_45method_45down_33=_ms.get(_$3,"propagate-method-down!"),self_45impl_33=_ms.get(_$3,"self-impl!"),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_4)),_$4=_ms.lazyGetModule(Impl_45Type_5),Self_45Type=_ms.lazyProp(_$4,"Self-Type"),_$5=_ms.lazyGetModule(methods_6),freeze=_ms.lazyProp(_$5,"freeze"),frozen_63=_ms.lazyProp(_$5,"frozen?"),_$6=_ms.lazyGetModule(Try_7),fails_45with_63=_ms.lazyProp(_$6,"fails-with?"),Method=_ms.lazy(()=>_ms.getDefaultExport(Method_8)),Impl_45Type=_ms.lazy(()=>_ms.getDefaultExport(Impl_45Type_9));
		const Kind=exports.default=(()=>{
			const _=class Kind{
				constructor(params){
					_ms.assert(_ms.contains,String,params.name);
					Object.defineProperty(this,`name`,(()=>{
						const built={};
						const value=built.value=params.name;
						return built
					})());
					_ms.newProperty(this,"super-kinds",(()=>{
						const _=params["super-kinds"];
						if(defined_63(_)){
							return _
						} else {
							return []
						}
					})());
					_ms.newProperty(this,"implementors",(()=>{
						const _=params.implementors;
						if(defined_63(_)){
							return _ms.unlazy(freeze)(_)
						} else {
							return []
						}
					})());
					_ms.newProperty(this,"symbol-for-isa",(()=>{
						const _=params["symbol-for-isa"];
						if(defined_63(_)){
							return _
						} else {
							return Symbol(`isa-${this.name}`)
						}
					})());
					_ms.newProperty(this,"prototype",(()=>{
						const _=params.prototype;
						if(defined_63(_)){
							return _
						} else {
							return Object.create(null)
						}
					})());
					pAdd(this.prototype,this["symbol-for-isa"],true);
					for(let _ of this.implementors){
						on_45implementor_33(_,this)
					}
				}
			};
			implContains(_,function(_){
				const _this=this;
				return Boolean((! js_61_61(_,null)&&js_45sub(_,_this["symbol-for-isa"])))
			});
			return _
		})();
		_ms.newProperty(Kind,"test",()=>{
			const A=new (Kind)((()=>{
				const built={};
				built[`name`]="A";
				return built
			})());
			const B=new (Kind)((()=>{
				const built={};
				built[`name`]="B";
				return built
			})());
			const C=class C{
				dummy(){
					const _this=this;
					return _this
				}
			};
			kind_33(B,A);
			kind_33(C,B);
			const c=new (C)();
			_ms.assert(_ms.contains,A,c);
			const X=new (Kind)((()=>{
				const built={};
				built[`name`]="X";
				return built
			})());
			const Y=new (Kind)((()=>{
				const built={};
				built[`name`]="Y";
				return built
			})());
			const Z=class Z{
				dummy(){
					const _this=this;
					return _this
				}
			};
			kind_33(Z,Y);
			kind_33(Y,X);
			const z=new (Z)();
			_ms.assert(_ms.contains,X,z);
			const asdf=new (_ms.unlazy(Method))((()=>{
				const built={};
				built[`name`]="asdf";
				return built
			})());
			impl_33(asdf,X,()=>{
				return 1
			});
			_ms.assert(_61_63,asdf(z),1);
			_ms.assert(_ms.contains,X,z);
			const Closed=new (Kind)((()=>{
				const built={};
				built[`name`]="Closed";
				const implementors=built.implementors=[C,Z];
				return built
			})());
			_ms.assert(_ms.unlazy(fails_45with_63),`Closed is not open to new subtypes.`,()=>{
				kind_33(X,Closed)
			})
		});
		const can_45subtype_63=exports["can-subtype?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(Impl_45Type)],true);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Kind,_,"_");
				return ! _ms.unlazy(frozen_63)(_.implementors)
			},built)
		})();
		const unchecked_45kind_33=exports["unchecked-kind!"]=(()=>{
			return (implementor,kind)=>{
				kind.implementors.push(implementor);
				on_45implementor_33(implementor,kind)
			}
		})();
		const concrete_45implementors=exports["concrete-implementors"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				const X=new (Kind)((()=>{
					const built={};
					built[`name`]="X";
					return built
				})());
				const Y=new (Kind)((()=>{
					const built={};
					built[`name`]="Y";
					return built
				})());
				const Z=class Z{
					dummy(){
						const _this=this;
						return _this
					}
				};
				const W=class W{
					dummy(){
						const _this=this;
						return _this
					}
				};
				kind_33(Y,X);
				kind_33(Z,X);
				kind_33(W,Y);
				_ms.assoc(built,[X],[W,Z]);
				return built
			};
			return _ms.set(kind=>{
				_ms.checkContains(Kind,kind,"kind");
				return _ms.checkContains(_ms.unlazy(_64),(()=>{
					const built=[];
					for(let _ of kind.implementors){
						if(_ms.contains(Kind,_)){
							_ms.addMany(built,concrete_45implementors(_))
						} else {
							_ms.add(built,_)
						}
					};
					return built
				})(),"res")
			},built)
		})();
		const kind_33=exports["kind!"]=(()=>{
			const built={};
			const test=built.test=`See Impl-Type.test.`;
			return _ms.set((implementor,kind,method_45impls)=>{
				_ms.checkContains(Kind,kind,"kind");
				if(! can_45subtype_63(kind))throw new (Error)(`${kind} is not open to new subtypes.`);
				_ms.assertNot(kind_63,implementor,kind);
				unchecked_45kind_33(implementor,kind);
				if(defined_63(method_45impls)){
					for(let _ of method_45impls){
						impl_33(js_45sub(_,0),implementor,js_45sub(_,1))
					}
				}
			},built)
		})();
		const self_45kind_33=exports["self-kind!"]=(()=>{
			const built={};
			const test=built.test=function test(){};
			return _ms.set((implementor,kind,method_45impls)=>{
				_ms.checkContains(Object,implementor,"implementor");
				_ms.checkContains(Kind,kind,"kind");
				kind_33(new (_ms.unlazy(Self_45Type))(implementor),kind);
				if(defined_63(method_45impls)){
					for(let _ of method_45impls){
						self_45impl_33(js_45sub(_,0),implementor,js_45sub(_,1))
					}
				}
			},built)
		})();
		const kind_63=exports["kind?"]=(()=>{
			const built={};
			const test=built.test=`See Impl-Type.test.`;
			return _ms.set((implementor,kind)=>{
				_ms.checkContains(Kind,kind,"kind");
				return (()=>{
					const _=implementor;
					if(_ms.contains(Kind,_)){
						return _["super-kinds"].some(super_45kind=>{
							return (_61_63(super_45kind,kind)||kind_63(super_45kind,kind))
						})
					} else {
						const _=implementor.prototype;
						return _ms.contains(kind,_)
					}
				})()
			},built)
		})();
		const _64p_45all=function _64p_45all(_){
			return Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_))
		};
		const on_45implementor_33=function on_45implementor_33(_,kind){
			if(_ms.contains(Kind,_)){
				_["super-kinds"].push(kind)
			};
			inherit_45methods_33(_,kind)
		};
		const inherit_45methods_33=function inherit_45methods_33(implementor,kind){
			const rec_33=function rec_33(kind){
				for(let property of _64p_45all(kind.prototype)){
					propagate_45method_45down_33(implementor,property,js_45sub(kind.prototype,property))
				};
				for(let _ of kind["super-kinds"]){
					rec_33(_)
				}
			};
			rec_33(kind)
		};
		const name=exports.name=`Kind`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvVHlwZS9LaW5kLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBZUEsMkJBQ1csS0FVUDtTQURIO0lBS1csWUFBQSxPQUNNOzZCQUFJLE9BQVo7S0E0SzJCLHNCQTFLYixLQUFNLE9BQ0ssS0FBQTs7TUFBaEMsd0JBQU87OztxQkFFUixtQkFBb0I7TUFBQSxRQUFBO01BQ25CLEdBQUEsV0FBQSxHQUNTO2NBQ1I7TUFBQSxPQUVHO2NBQUg7TUFBQTtLQUFBO3FCQUVGLG9CQUFxQjtNQUFBLFFBQUE7TUFDcEIsR0FBQSxXQUFBLEdBQ1M7aUNBQ1I7TUFBQSxPQUVHO2NBQUg7TUFBQTtLQUFBO3FCQUVGLHNCQUF1QjtNQUFBLFFBQUE7TUFDdEIsR0FBQSxXQUFBLEdBQ1M7Y0FDUjtNQUFBLE9BRUc7Y0FBSCxPQUFRLE9BQUs7OztxQkFFZixpQkFBa0I7TUFBQSxRQUFBO01BQ2pCLEdBQUEsV0FBQSxHQUNTO2NBQ1I7TUFBQSxPQUVHO2NBNkk4QixjQTdJbkI7TUFBQTtLQUFBO0tBRWhCLEtBQUssZUFBVyx1QkFBZ0I7S0FDM0IsUUFBQSxLQUFBLGtCQUNhO01BQWpCLG9CQUFnQixFQUFFO0tBQUE7SUFBQTtHQUFBO0dBeENuQixhQUFhLEVBQUksU0FBQSxFQUNDO1VBc0hoQjtXQXJIRCxRQUFRLENBQUssRUFBSSxTQUFLLEVBQUUsT0FBTyxTQUFPLEVBcUhyQzs7VUF4SEg7RUFBQTtrQkE2Q0QsWUFDYyxJQUFBO0dBQ1osUUFBSSxLQUFJLE1BQ0ksS0FBQTs7VUFBWCxRQUFBOzs7R0FDRCxRQUFJLEtBQUksTUFDSSxLQUFBOztVQUFYLFFBQUE7OztHQUNELFFBQ1M7V0FFQztXQWtFUjtZQUFBO0lBQUE7R0FBQTtHQWpFRixRQUFNLEVBQUU7R0FDUixRQUFNLEVBQUU7R0FDUixRQUFJLEtBQUk7MkJBQ0UsRUFBRjtHQUdSLFFBQUksS0FBSSxNQUNJLEtBQUE7O1VBQVgsUUFBQTs7O0dBQ0QsUUFBSSxL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