"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./Type/Method","./at/at","./at/at-Type","./at/q","./at/Seq/Seq","./control","./Function","./Object","./Type/Pred-Type","./at/at","./at/q","./Try"],(exports,js_0,Method_1,_64_2,_64_45Type_3,_63_4,Seq_5,control_6,Function_7,Object_8,Pred_45Type_9,_64_10,_63_11,Try_12)=>{
	exports._get=_ms.lazy(()=>{
		const _$2=_ms.getModule(js_0),id_61_63=_ms.get(_$2,"id=?"),Method=_ms.getDefaultExport(Method_1),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_2)),_$3=_ms.lazyGetModule(_64_2),all_63=_ms.lazyProp(_$3,"all?"),empty_63=_ms.lazyProp(_$3,"empty?"),iterator=_ms.lazyProp(_$3,"iterator"),_$4=_ms.lazyGetModule(_64_45Type_3),from_45stream=_ms.lazyProp(_$4,"from-stream"),_$5=_ms.lazyGetModule(_63_4),un_45_63=_ms.lazyProp(_$5,"un-?"),Seq=_ms.lazy(()=>_ms.getDefaultExport(Seq_5)),_$6=_ms.lazyGetModule(Seq_5),first=_ms.lazyProp(_$6,"first"),tail=_ms.lazyProp(_$6,"tail"),_$7=_ms.lazyGetModule(control_6),opr=_ms.lazyProp(_$7,"opr"),_$8=_ms.lazyGetModule(Function_7),identity=_ms.lazyProp(_$8,"identity"),_$9=_ms.lazyGetModule(Object_8),object_61_63=_ms.lazyProp(_$9,"object=?"),_$10=_ms.lazyGetModule(Pred_45Type_9),Opt=_ms.lazyProp(_$10,"Opt"),_$11=_ms.lazyGetModule(_64_10),count=_ms.lazyProp(_$11,"count"),_$12=_ms.lazyGetModule(_63_11),_63None=_ms.lazyProp(_$12,"?None"),_63some=_ms.lazyProp(_$12,"?some"),_$13=_ms.lazyGetModule(Try_12),fails_63=_ms.lazyProp(_$13,"fails?");
		const compare=exports.default=new (Method)((()=>{
			const built={};
			built[`name`]="compare";
			const args=built.args=2;
			return built
		})());
		const _61_63=exports["=?"]=new (Method)((()=>{
			const built={};
			built[`name`]="=?";
			const args=built.args=2;
			const allow_45null_63=built["allow-null?"]=true;
			const _default=built.default=function _default(other){
				const _this=this;
				return (id_61_63(_this,other)||_ms.unlazy(object_61_63)(_this,other))
			};
			return built
		})());
		const _60_63=exports["<?"]=new (Method)((()=>{
			const built={};
			built[`name`]="<?";
			const args=built.args=2;
			const _default=built.default=function _default(other){
				const _this=this;
				return _60_63(compare(_this,other),0)
			};
			return built
		})());
		const _60_61_63=exports["<=?"]=new (Method)((()=>{
			const built={};
			built[`name`]="<=?";
			const args=built.args=2;
			const _default=built.default=function _default(other){
				const _this=this;
				return _60_61_63(compare(_this,other),0)
			};
			return built
		})());
		const _62_63=exports[">?"]=new (Method)((()=>{
			const built={};
			built[`name`]=">?";
			const args=built.args=2;
			const _default=built.default=function _default(other){
				const _this=this;
				return _62_63(compare(_this,other),0)
			};
			return built
		})());
		const _62_61_63=exports[">=?"]=new (Method)((()=>{
			const built={};
			built[`name`]=">=?";
			const args=built.args=2;
			const _default=built.default=function _default(other){
				const _this=this;
				return _62_61_63(compare(_this,other),0)
			};
			return built
		})());
		const same_63=exports["same?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[_ms.unlazy(count),[1],[2]],true);
				_ms.assoc(built,[_ms.unlazy(count),[],[1]],false);
				return built
			};
			return _ms.set((f,a,b)=>{
				_ms.checkContains(Function,f,"f");
				return _61_63(f(a),f(b))
			},built)
		})();
		const min=exports.min=function min(_){
			_ms.checkContains(_ms.unlazy(_64),_,"_");
			return min_45by(_,_ms.unlazy(identity))
		};
		const _63min=exports["?min"]=function _63min(_){
			_ms.checkContains(_ms.unlazy(_64),_,"_");
			return _63min_45by(_,_ms.unlazy(identity))
		};
		const min_45by=exports["min-by"]=function min_45by(_,by){
			_ms.checkContains(_ms.unlazy(_64),_,"_");
			_ms.checkContains(Function,by,"by");
			return _ms.unlazy(un_45_63)(_63min_45by(_,by),`Can not take min of empty.`)
		};
		const _63min_45by=exports["?min-by"]=function _63min_45by(_,by){
			_ms.checkContains(_ms.unlazy(_64),_,"_");
			_ms.checkContains(Function,by,"by");
			return (_ms.unlazy(empty_63)(_)?_ms.None:_ms.some((()=>{
				const iter=_ms.unlazy(iterator)(_);
				const value=iter.next().value;
				let cur_45min=value;
				let cur_45min_45by=by(value);
				return (()=>{
					for(;;){
						const _$0=iter.next(),value=_$0.value,done=_$0.done;
						if(done){
							return cur_45min
						};
						const value_45by=by(value);
						if(_62_63(cur_45min_45by,value_45by)){
							cur_45min=value;
							cur_45min_45by=value_45by
						}
					}
				})()
			})()))
		};
		const max=exports.max=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,3,2]],3);
				_ms.assoc(built,[[2,1,2]],2);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return max([])
				});
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(_ms.unlazy(_64),_,"_");
				return max_45by(_,_ms.unlazy(identity))
			},built)
		})();
		const _63max=exports["?max"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1]],_ms.unlazy(_63some)(1));
				_ms.assoc(built,[[]],_ms.unlazy(_63None));
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(_ms.unlazy(_64),_,"_");
				return _63max_45by(_,_ms.unlazy(identity))
			},built)
		})();
		const max_45by=exports["max-by"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[`five`,`six`,`seven`],_ms.unlazy(count)],`seven`);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return max_45by([],_ms.unlazy(identity))
				});
				return built
			};
			return _ms.set((_,by)=>{
				_ms.checkContains(_ms.unlazy(_64),_,"_");
				_ms.checkContains(Function,by,"by");
				return _ms.unlazy(un_45_63)(_63max_45by(_,by),`Can not take max of empty.`)
			},built)
		})();
		const _63max_45by=exports["?max-by"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1],_ms.unlazy(identity)],_ms.unlazy(_63some)(1));
				_ms.assoc(built,[[],_ms.unlazy(identity)],_ms.unlazy(_63None));
				return built
			};
			return _ms.set((_,by)=>{
				_ms.checkContains(_ms.unlazy(_64),_,"_");
				_ms.checkContains(Function,by,"by");
				return (_ms.unlazy(empty_63)(_)?_ms.None:_ms.some((()=>{
					const iter=_ms.unlazy(iterator)(_);
					const value=iter.next().value;
					let cur_45max=value;
					let cur_45max_45by=by(value);
					return (()=>{
						for(;;){
							const _$1=iter.next(),value=_$1.value,done=_$1.done;
							if(done){
								return cur_45max
							};
							const value_45by=by(value);
							if(_60_63(cur_45max_45by,value_45by)){
								cur_45max=value;
								cur_45max_45by=value_45by
							}
						}
					})()
				})()))
			},built)
		})();
		const sorted_63=exports["sorted?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[]],true);
				_ms.assoc(built,[[1,2,3]],true);
				_ms.assoc(built,[[3,2,1]],false);
				_ms.assoc(built,[[`six`,`five`,`seven`],_ms.unlazy(count)],true);
				return built
			};
			return _ms.set((seq,sort_45by)=>{
				_ms.checkContains(_ms.unlazy(Seq),seq,"seq");
				_ms.checkContains(_ms.sub(_ms.unlazy(Opt),Function),sort_45by,"sort-by");
				sort_45by=_ms.unlazy(opr)(sort_45by,_ms.unlazy(identity));
				return (()=>{
					const _=seq;
					if(_ms.unlazy(empty_63)(_)){
						return true
					} else {
						let sb_45prev=sort_45by(_ms.unlazy(first)(_));
						return _ms.unlazy(all_63)(_ms.unlazy(tail)(_),em=>{
							const sb_45cur=sort_45by(em);
							return (_=>{
								sb_45prev=sb_45cur;
								return _
							})(_60_63(sb_45prev,sb_45cur))
						})
					}
				})()
			},built)
		})();
		const sort=exports.sort=new (Method)((()=>{
			const built={};
			built[`name`]="sort";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[3,2,1]],[1,2,3]);
				_ms.assoc(built,[[`five`,`six`,`seven`],_ms.unlazy(count)],[`six`,`five`,`seven`]);
				_ms.assoc(built,[`bac`],`abc`);
				return built
			};
			const args=built.args=(()=>{
				return 2
			})();
			const _default=built.default=function _default(sort_45by){
				const _this=this;
				sort_45by=_ms.unlazy(opr)(sort_45by,_ms.unlazy(identity));
				const sorted=_ms.unlazy(from_45stream)(Array,_this);
				sorted.sort((a,b)=>{
					return compare(sort_45by(a),sort_45by(b))
				});
				return sorted
			};
			return built
		})());
		const name=exports.name=`compare`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvY29tcGFyZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQWlCQSw4QkFBUyxLQUFJLFFBQ00sS0FBQTs7U0FjbEIsUUFBQTtHQUNBLHNCQUFNOzs7RUFFUCwyQkFBSSxLQUFJLFFBQ00sS0FBQTs7U0FTYixRQUFBO0dBQ0Esc0JBQU07R0FDTiwyQ0FBYTtHQUNiLDZCQUFXLGtCQUFBLE1BQ0s7VUF1SmE7V0F2SjVCLENBQUksU0F1SndCLE1BdkpkLGlDQXVKYyxNQXZKUTtHQUFBOzs7RUFFdEMsMkJBQUksS0FBSSxRQUNNLEtBQUE7O1NBRWIsUUFBQTtHQUNBLHNCQUFNO0dBQ04sNkJBQVcsa0JBQUEsTUFDSztVQStJYTtXQS9JNUIsT0FBSSxRQStJd0IsTUEvSVgsT0FBTztHQUFBOzs7RUFFMUIsK0JBQUssS0FBSSxRQUNNLEtBQUE7O1NBQ2QsUUFBQTtHQUNBLHNCQUFNO0dBQ04sNkJBQVcsa0JBQUEsTUFDSztVQXdJYTtXQXhJNUIsVUFBSyxRQXdJdUIsTUF4SVYsT0FBTztHQUFBOzs7RUFFM0IsMkJBQUksS0FBSSxRQUNNLEtBQUE7O1NBQ2IsUUFBQTtHQUNBLHNCQUFNO0dBQ04sNkJBQVcsa0JBQUEsTUFDSztVQWlJYTtXQWpJNUIsT0FBSSxRQWlJd0IsTUFqSVgsT0FBTztHQUFBOzs7RUFFMUIsK0JBQUssS0FBSSxRQUNNLEtBQUE7O1NBQ2QsUUFBQTtHQUNBLHNCQUFNO0dBQ04sNkJBQVcsa0JBQUEsTUFDSztVQTBIYTtXQTFINUIsVUFBSyxRQTBIdUIsTUExSFYsT0FBTztHQUFBOzs7RUFHMUIsK0JBQ00sS0FBQTs7R0FDTCxzQkFDTyxlQUFBOztvQkFBTixtQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFPO29CQUNuQixtQkFBTyxHQUFHLENBQUMsSUFBTzs7O2tCQUNsQixDQUFBLEVBQVcsRUFBRSxJQUNDO3NCQXFGTTtXQXJGcEIsT0FBSSxFQUFFLEdBQUksRUFBRTtHQUFBOztFQUlk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