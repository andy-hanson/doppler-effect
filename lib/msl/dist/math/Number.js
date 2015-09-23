"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../compare","../control","../js","../Type/Method","../Type/Pred-Type","./methods","../Function","../Try"],(exports,compare_0,control_1,js_2,Method_3,Pred_45Type_4,methods_5,Function_6,Try_7)=>{
	exports._get=_ms.lazy(()=>{
		const compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_60_63=_ms.get(_$0,"<?"),_60_61_63=_ms.get(_$0,"<=?"),_62_63=_ms.get(_$0,">?"),_62_61_63=_ms.get(_$0,">=?"),_$1=_ms.getModule(control_1),opr=_ms.get(_$1,"opr"),_$2=_ms.getModule(js_2),id_61_63=_ms.get(_$2,"id=?"),js_45bar=_ms.get(_$2,"js-bar"),js_60=_ms.get(_$2,"js<"),js_60_61=_ms.get(_$2,"js<="),js_62=_ms.get(_$2,"js>"),js_62_61=_ms.get(_$2,"js>="),js_43=_ms.get(_$2,"js+"),js_45=_ms.get(_$2,"js-"),js_42=_ms.get(_$2,"js*"),js_47=_ms.get(_$2,"js/"),js_45mod=_ms.get(_$2,"js-mod"),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_4),_$4=_ms.getModule(Pred_45Type_4),Opt=_ms.get(_$4,"Opt"),_$5=_ms.getModule(methods_5),_43=_ms.get(_$5,"+"),_45=_ms.get(_$5,"-"),_42=_ms.get(_$5,"*"),_47=_ms.get(_$5,"/"),_$6=_ms.lazyGetModule(Function_6),spread_33=_ms.lazyProp(_$6,"spread!"),_$7=_ms.lazyGetModule(Try_7),fails_63=_ms.lazyProp(_$7,"fails?");
		const Int=exports.Int=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Int";
			const test=built.test=function test(){
				const assert_45int_33=function assert_45int_33(_){
					_ms.assert(_ms.contains,Int,_)
				};
				const forbid_45int_33=function forbid_45int_33(_){
					_ms.assertNot(_ms.contains,Int,_)
				};
				_ms.unlazy(spread_33)(assert_45int_33,(()=>{
					const built=[];
					_ms.add(built,1);
					_ms.add(built,Number.MIN_SAFE_INTEGER);
					_ms.add(built,Number.MAX_SAFE_INTEGER);
					return built
				})());
				_ms.unlazy(spread_33)(forbid_45int_33,(()=>{
					const built=[];
					_ms.add(built,1.1);
					_ms.add(built,_45(Number.MIN_SAFE_INTEGER,1));
					_ms.add(built,_43(Number.MAX_SAFE_INTEGER,1));
					return built
				})())
			};
			const predicate=built.predicate=Number.isSafeInteger;
			return built
		})());
		const Nat=exports.Nat=new (Pred_45Type)((()=>{
			const built={};
			built[`name`]="Nat";
			const test=built.test=function test(){
				_ms.assert(_ms.contains,Nat,0);
				_ms.assertNot(_ms.contains,Nat,- 1)
			};
			const predicate=built.predicate=function predicate(_){
				return (_ms.contains(Int,_)&&_60_61_63(0,_))
			};
			return built
		})());
		impl_33(compare,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return _45(_this,other)
		});
		impl_33(_61_63,Number,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[Number.NaN,Number.NaN],true);
				return built
			};
			return _ms.set(function(other){
				const _this=this;
				return id_61_63(_this,other)
			},built)
		})());
		impl_33(_60_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_60(_this,other)
		});
		impl_33(_60_61_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_60_61(_this,other)
		});
		impl_33(_62_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_62(_this,other)
		});
		impl_33(_62_61_63,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_62_61(_this,other)
		});
		impl_33(_43,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_43(_this,other)
		});
		impl_33(_45,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_45(_this,other)
		});
		impl_33(_42,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_42(_this,other)
		});
		impl_33(_47,Number,function(other){
			const _this=this;
			_ms.checkContains(Number,other,"other");
			return js_47(_this,other)
		});
		const sign=exports.sign=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 8],- 1);
				_ms.assoc(built,[0],0);
				_ms.assoc(built,[8],1);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return (()=>{
					if(_60_63(0,_)){
						return 1
					} else if(_60_63(_,0)){
						return - 1
					} else {
						return 0
					}
				})()
			},built)
		})();
		const remainder=exports.remainder=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[2,3],2);
				_ms.assoc(built,[2,- 3],2);
				_ms.assoc(built,[- 2,3],- 2);
				_ms.assoc(built,[- 2,- 3],- 2);
				return built
			};
			return _ms.set((numerator,denominator)=>{
				_ms.checkContains(Number,numerator,"numerator");
				_ms.checkContains(Number,denominator,"denominator");
				return js_45mod(numerator,denominator)
			},built)
		})();
		const int_47=exports["int/"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[3,2],1);
				_ms.assoc(built,[- 3,2],- 2);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return round_45down(_47(a,b))
			},built)
		})();
		const modulo=exports.modulo=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[2,3],2);
				_ms.assoc(built,[2,- 3],2);
				_ms.assoc(built,[- 2,3],1);
				_ms.assoc(built,[- 2,- 3],1);
				return built
			};
			return _ms.set((numerator,denominator)=>{
				_ms.checkContains(Number,numerator,"numerator");
				_ms.checkContains(Number,denominator,"denominator");
				const res=(()=>{
					if(_60_63(numerator,0)){
						return _43(abs(denominator),remainder(numerator,denominator))
					} else {
						return remainder(numerator,denominator)
					}
				})();
				divisible_63(_45(numerator,res),denominator);
				return res
			},built)
		})();
		const divisible_63=exports["divisible?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(divisible_63,4,2);
				_ms.assert(divisible_63,4,- 2);
				_ms.assertNot(divisible_63,3,2)
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return _61_63(0,remainder(a,b))
			},built)
		})();
		const log_45e=exports["log-e"]=function log_45e(_){
			_ms.checkContains(Number,_,"_");
			return Math.log(_)
		};
		const log=exports.log=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assert(near_63,log(10,0.01),- 2);
				_ms.assoc(built,[2,8],3);
				return built
			};
			return _ms.set((base,n)=>{
				_ms.checkContains(Number,base,"base");
				_ms.checkContains(Number,n,"n");
				return _47(log_45e(n),log_45e(base))
			},built)
		})();
		const abs=exports.abs=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1],1);
				_ms.assoc(built,[- 1],1);
				return built
			};
			return _ms.set(a=>{
				_ms.checkContains(Number,a,"a");
				return Math.abs(a)
			},built)
		})();
		const pow=exports.pow=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[2,3],8);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return Math.pow(a,b)
			},built)
		})();
		const square=exports.square=function square(_){
			_ms.checkContains(Number,_,"_");
			return _42(_,_)
		};
		const square_45root=exports["square-root"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[4],2);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					square_45root(- 1)
				});
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				if(! _60_61_63(0,_))throw new (Error)(`Can't take square root of negative number ${_}.`);
				return Math.sqrt(_)
			},built)
		})();
		const round=exports.round=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],- 0);
				_ms.assoc(built,[0.5],1);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return Math.round(_)
			},built)
		})();
		const round_45down=exports["round-down"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],- 1);
				_ms.assoc(built,[0.5],0);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return Math.floor(_)
			},built)
		})();
		const round_45up=exports["round-up"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],- 0);
				_ms.assoc(built,[0.5],1);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return Math.ceil(_)
			},built)
		})();
		const round_45towards_450=exports["round-towards-0"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[- 0.5],0);
				_ms.assoc(built,[0.5],0);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return js_45bar(_,0)
			},built)
		})();
		const near_63=exports["near?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1000.9,1000,3],true);
				_ms.assoc(built,[1000.9,1000,4],false);
				_ms.assoc(built,[0.001001,0.001,3],true);
				_ms.assoc(built,[0.001001,0.001,4],false);
				_ms.assoc(built,[0.001,- 0.001,1],false);
				_ms.assoc(built,[0.00999,0,2],true);
				_ms.assoc(built,[0,0.00999,2],true);
				return built
			};
			return _ms.set((a,b,sig_45figs)=>{
				_ms.checkContains(Number,b,"b");
				_ms.checkContains(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
				sig_45figs=opr(sig_45figs,6);
				return (()=>{
					if(_61_63(a,0)){
						return near_450_63(b,sig_45figs)
					} else if(_61_63(b,0)){
						return near_450_63(a,sig_45figs)
					} else {
						const avg_45mag=_47(_43(abs(a),abs(b)),2);
						const n_45digits_45avg_45mag=round_45down(log(10,avg_45mag));
						const scale=pow(10,_42(- 1,n_45digits_45avg_45mag));
						const scaled_45diff=_45(_42(a,scale),_42(b,scale));
						const epsilon=pow(10,_42(- 1,sig_45figs));
						return _60_63(abs(scaled_45diff),epsilon)
					}
				})()
			},built)
		})();
		const near_450_63=exports["near-0?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[0.00999,2],true);
				_ms.assoc(built,[0.01,2],false);
				return built
			};
			return _ms.set((_,sig_45figs)=>{
				_ms.checkContains(_ms.sub(Opt,Nat),sig_45figs,"sig-figs");
				sig_45figs=opr(sig_45figs,6);
				const max=pow(10,_42(- 1,sig_45figs));
				return _60_63(abs(_),max)
			},built)
		})();
		const neg=exports.neg=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[1],- 1);
				_ms.assoc(built,[0],- 0);
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Number,_,"_");
				return _42(- 1,_)
			},built)
		})();
		const mid=exports.mid=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[0,1],0.5);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Number,a,"a");
				_ms.checkContains(Number,b,"b");
				return _47(_43(a,b),2)
			},built)
		})();
		const name=exports.name=`Number`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWF0aC9OdW1iZXIubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFXQSxzQkFBSyxLQUFJLGFBQ1MsS0FBQTs7U0FHakIsUUFBQTtHQUNBLHNCQUNRLGVBQUE7SUFBUCxzQkFBZ0IseUJBQUEsRUFDQzs2QkFBTixJQUFGO0lBQUE7SUFDVCxzQkFBZ0IseUJBQUEsRUFDQztnQ0FBTixJQUFGO0lBQUE7MEJBQ0QsZ0JBQ1csS0FBQTs7bUJBQWhCO21CQTRPUzttQkFBQTs7OzBCQXpPSixnQkFDVyxLQUFBOzttQkFBaEI7bUJBQ0EsSUF1T1Msd0JBdk9pQjttQkFDMUIsSUFzT1Msd0JBdE9pQjs7OztHQUM5QixnQ0FxT2E7OztFQW5PZCxzQkFBSyxLQUFJLGFBQ1MsS0FBQTs7U0FDakIsUUFBQTtHQUNBLHNCQUNRLGVBQUE7NEJBQUcsSUFBRjsrQkFDRyxJQUFIOztHQUNULGdDQUFZLG1CQUFBLEVBQ0M7V0FBWixjQUFLLElBQUQsSUFBTSxVQUFJLEVBQUU7R0FBQTs7O0VBSWpCLFFBQU0sUUF3Tk8sT0F4TlUsU0FBQSxNQUNZO1NBcUI5QjtxQkFrTVE7VUF2TlosSUFxQkksTUFyQkc7RUFBQTtFQUNSLFFBQU0sT0FzTk8sT0FyTkUsS0FBQTs7R0FBZCxzQkFDTyxlQUFBOztvQkFBTixDQW9OVyx1QkFwTmdCOzs7a0JBQzFCLFNBQUEsTUFDSztVQWdCSDtXQWhCSCxTQWdCRyxNQWhCTztHQUFBOztFQUNaLFFBQU0sT0FpTk8sT0FqTkssU0FBQSxNQUNZO1NBY3pCO3FCQWtNUTtVQWhOWixNQWNJLE1BZEs7RUFBQTtFQUNWLFFBQU0sVUErTU8sT0EvTU0sU0FBQSxNQUNZO1NBWTFCO3FCQWtNUTtVQTlNWixTQVlJLE1BWk07RUFBQTtFQUNYLFFBQU0sT0E2TU8sT0E3TUssU0FBQSxNQUNZO1NBVXpCO3FCQWtNUTtVQTVNWixNQVVJLE1BVks7RUFBQTtFQUNWLFFBQU0sVUEyTU8sT0EzTU0sU0FBQSxN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