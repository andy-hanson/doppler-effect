"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../Function","../../math/methods","../../methods","../../String","../../Type/Kind","../../Type/Method","../../Type/Type","../at","../at-Type","../../math/Number","../../to-string","../q","../Range","./Stream","../../compare","../../Try","../q"],(exports,compare_0,Function_1,methods_2,methods_3,String_4,Kind_5,Method_6,Type_7,_64_8,_64_45Type_9,Number_10,to_45string_11,_63_12,Range_13,Stream_14,compare_15,Try_16,_63_17)=>{
	exports._get=_ms.lazy(()=>{
		const _$2=_ms.getModule(compare_0),_61_63=_ms.get(_$2,"=?"),_$3=_ms.getModule(Function_1),Pred=_ms.get(_$3,"Pred"),_$4=_ms.getModule(methods_2),_45=_ms.get(_$4,"-"),_43=_ms.get(_$4,"+"),_$5=_ms.getModule(methods_3),freeze=_ms.get(_$5,"freeze"),sub=_ms.get(_$5,"sub"),_$6=_ms.getModule(String_4),indent=_ms.get(_$6,"indent"),Kind=_ms.getDefaultExport(Kind_5),_$7=_ms.getModule(Kind_5),kind_33=_ms.get(_$7,"kind!"),self_45kind_33=_ms.get(_$7,"self-kind!"),Method=_ms.getDefaultExport(Method_6),_$8=_ms.getModule(Method_6),impl_33=_ms.get(_$8,"impl!"),_$9=_ms.getModule(Type_7),_61_62=_ms.get(_$9,"=>"),type_45of=_ms.get(_$9,"type-of"),_64=_ms.getDefaultExport(_64_8),_$10=_ms.getModule(_64_8),_43_43=_ms.get(_$10,"++"),count=_ms.get(_$10,"count"),empty_63=_ms.get(_$10,"empty?"),iterator=_ms.get(_$10,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_9),_$11=_ms.getModule(_64_45Type_9),empty=_ms.get(_$11,"empty"),from_45stream=_ms.get(_$11,"from-stream"),_$12=_ms.lazyGetModule(Number_10),Nat=_ms.lazyProp(_$12,"Nat"),to_45string=_ms.lazy(()=>_ms.getDefaultExport(to_45string_11)),_$13=_ms.lazyGetModule(_63_12),Opt_45_62_63=_ms.lazyProp(_$13,"Opt->?"),un_45_63=_ms.lazyProp(_$13,"un-?"),Range=_ms.lazy(()=>_ms.getDefaultExport(Range_13)),Stream=_ms.lazy(()=>_ms.getDefaultExport(Stream_14)),_$14=_ms.lazyGetModule(compare_15),_60_63=_ms.lazyProp(_$14,"<?"),_$15=_ms.lazyGetModule(Try_16),fails_63=_ms.lazyProp(_$15,"fails?"),_$16=_ms.lazyGetModule(_63_17),_63some=_ms.lazyProp(_$16,"?some"),_63None=_ms.lazyProp(_$16,"?None");
		const Seq=exports.default=new (Kind)((()=>{
			const built={};
			built[`name`]="Seq";
			return built
		})());
		kind_33(Seq,_64);
		self_45kind_33(Seq,_64_45Type);
		const _60_43_43_126=exports["<++~"]=new (Method)((()=>{
			const built={};
			built[`name`]="<++~";
			const test=built.test=function test(){};
			const args=built.args=2;
			const _default=built.default=function _default(left_45added){
				const _this=this;
				_ms.checkContains(_64,left_45added,"left-added");
				return _61_62(type_45of(_this),_43_43(left_45added,_this))
			};
			return built
		})());
		const first=exports.first=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],1);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return first([])
				});
				return built
			};
			return _ms.set(_=>{
				return _ms.unlazy(un_45_63)(_63first(_),`Can not take first of empty.`)
			},built)
		})();
		const _63first=exports["?first"]=new (Method)((()=>{
			const built={};
			built[`name`]="?first";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],_ms.unlazy(_63some)(1));
				_ms.assoc(built,[[]],_ms.unlazy(_63None));
				return built
			};
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return _63nth(_this,0)
			};
			return built
		})());
		const last=exports.last=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],2);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return last([])
				});
				return built
			};
			const args=built.args=1;
			return _ms.set(_=>{
				return _ms.unlazy(un_45_63)(_63last(_),`Can not take last of empty.`)
			},built)
		})();
		const _63last=exports["?last"]=new (Method)((()=>{
			const built={};
			built[`name`]="?last";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],_ms.unlazy(_63some)(2));
				_ms.assoc(built,[[]],_ms.unlazy(_63None));
				return built
			};
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return (empty_63(_this)?_ms.None:_ms.some((()=>{
					return _ms.sub(_this,_45(count(_this),1))
				})()))
			};
			return built
		})());
		const tail=exports.tail=new (Method)((()=>{
			const built={};
			built[`name`]="tail";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],[2]);
				_ms.assoc(built,[[]],[]);
				return built
			};
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return (empty_63(_this)?_this:drop(_this,1))
			};
			return built
		})());
		const rtail=exports.rtail=new (Method)((()=>{
			const built={};
			built[`name`]="rtail";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],[1]);
				_ms.assoc(built,[[]],[]);
				return built
			};
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return (empty_63(_this)?_this:take(_this,_45(count(_this),1)))
			};
			return built
		})());
		const seq_61_63=exports["seq=?"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const s=new (_ms.unlazy(Stream))(function*(){
					(yield 1)
				});
				_ms.assert(seq_61_63,s,[1]);
				_ms.assertNot(seq_61_63,s,[2])
			};
			return _ms.set((_64a,_64b)=>{
				_ms.checkContains(_64,_64a,"@a");
				_ms.checkContains(_64,_64b,"@b");
				const iter_45a=iterator(_64a);
				const iter_45b=iterator(_64b);
				return (()=>{
					for(;;){
						const next_45a=iter_45a.next();
						const next_45b=iter_45b.next();
						if(next_45a.done){
							return next_45b.done
						} else if(next_45b.done){
							return false
						} else if(_61_63(next_45a.value,next_45b.value)){} else {
							return false
						}
					}
				})()
			},built)
		})();
		const _63nth=exports["?nth"]=new (Method)((()=>{
			const built={};
			built[`name`]="?nth";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,1],1],_ms.unlazy(_63some)(1));
				_ms.assoc(built,[[0,1],2],_ms.unlazy(_63None));
				return built
			};
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`_`);
				_ms.add(built,[`n`,_ms.unlazy(Nat)]);
				return built
			})();
			const _default=built.default=function _default(n){
				const _this=this;
				let i=0;
				return _ms.unlazy(Opt_45_62_63)((()=>{
					for(let elem of _this){
						{
							const _=elem;
							if(_61_63(i,n)){
								return _
							} else {
								i=_43(1,i)
							}
						}
					}
				})())
			};
			return built
		})());
		impl_33(sub,Seq,(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(_61_63,_ms.sub([0,1],1),1);
				_ms.assert(_ms.unlazy(fails_63),()=>{
					return _ms.sub([0,1],2)
				})
			};
			return _ms.set(function(n){
				const _this=this;
				_ms.checkContains(_ms.unlazy(Nat),n,"n");
				return _ms.unlazy(un_45_63)(_63nth(_this,n),_ms.lazy(()=>`No element at index ${n} for
	${indent(_ms.unlazy(to_45string)(_this))}`))
			},built)
		})());
		const slice_45args=(()=>{
			const built=[];
			_ms.add(built,`_`);
			_ms.add(built,[`start`,_ms.unlazy(Nat)]);
			_ms.add(built,[`end`,_ms.unlazy(Nat)]);
			return built
		})();
		const slice=exports.slice=new (Method)((()=>{
			const built={};
			built[`name`]="slice";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,1,2,3],1,3],[1,2]);
				return built
			};
			const args=built.args=slice_45args;
			const _default=built.default=function _default(start,end){
				const _this=this;
				return _61_62(type_45of(_this),slice_126(_this,start,end))
			};
			return built
		})());
		const slice_126=exports["slice~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,1,2,3],1,3],_61_62(_ms.unlazy(Stream),[1,2]));
				return built
			};
			const args=built.args=slice_45args;
			return _ms.set((_,start,end)=>{
				return _ms.checkContains(_64,take_126(drop_126(_,start),_45(end,start)),"res")
			},built)
		})();
		const take=exports.take=new (Method)((()=>{
			const built={};
			built[`name`]="take";
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`_`);
				_ms.add(built,[`count-to-take`,_ms.unlazy(Nat)]);
				return built
			})();
			const _default=built.default=function _default(count_45to_45take){
				const _this=this;
				return _61_62(type_45of(_this),take_126(_this,count_45to_45take))
			};
			return built
		})());
		const take_126=exports["take~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,1,2],2],_61_62(_ms.unlazy(Stream),[0,1]));
				_ms.assoc(built,[[0],2],_61_62(_ms.unlazy(Stream),[0]));
				const _=[0,1,2,3,4];
				_ms.assert(seq_61_63,_,_43_43(take_126(_,2),drop_126(_,2)));
				return built
			};
			return _ms.set((_,count_45to_45take)=>{
				_ms.checkContains(_ms.unlazy(Nat),count_45to_45take,"count-to-take");
				return (()=>{
					if(_61_63(0,count_45to_45take)){
						return empty(_ms.unlazy(Stream))
					} else {
						return new (_ms.unlazy(Stream))(function*(){
							let n=count_45to_45take;
							for(let elem of _){
								(yield elem);
								n=_45(n,1);
								if(_61_63(0,n)){
									break
								}
							}
						})
					}
				})()
			},built)
		})();
		const take_45while_126=exports["take-while~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2,- 1,3],_ms.sub(_ms.unlazy(_60_63),0)],_61_62(_ms.unlazy(Stream),[1,2]));
				return built
			};
			return _ms.set((_,while_63)=>{
				_ms.checkContains(Pred,while_63,"while?");
				return new (_ms.unlazy(Stream))(function*(){
					for(let elem of _){
						if(! while_63(elem)){
							break
						};
						(yield elem)
					}
				})
			},built)
		})();
		const drop=exports.drop=new (Method)((()=>{
			const built={};
			built[`name`]="drop";
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`_`);
				_ms.add(built,[`count-to-drop`,_ms.unlazy(Nat)]);
				return built
			})();
			const _default=built.default=function _default(count_45to_45drop){
				const _this=this;
				return _61_62(type_45of(_this),drop_126(_this,count_45to_45drop))
			};
			return built
		})());
		const drop_126=exports["drop~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,1,2,3],2],_61_62(_ms.unlazy(Stream),[2,3]));
				return built
			};
			return _ms.set((_,count_45to_45drop)=>{
				return new (_ms.unlazy(Stream))(function*(){
					const iter=iterator(_);
					let i=0;
					for(;;){
						if(_61_63(i,count_45to_45drop)){
							break
						};
						if(iter.next().done){
							break
						};
						i=_43(1,i)
					};
					(yield* iter)
				})
			},built)
		})();
		const zip=exports.zip=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2],[10,20],_43],[11,22]);
				return built
			};
			return _ms.set((_64a,_64b,zipper)=>{
				_ms.checkContains(_64,_64a,"@a");
				_ms.checkContains(_64,_64b,"@b");
				_ms.checkContains(_ms.sub(Function,2),zipper,"zipper");
				return _61_62(type_45of(_64a),zip_126(_64a,_64b,zipper))
			},built)
		})();
		const zip_126=exports["zip~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2],[10,20,30],_43],_61_62(_ms.unlazy(Stream),[11,22]));
				return built
			};
			return _ms.set((_64a,_64b,zipper)=>{
				_ms.checkContains(_64,_64a,"@a");
				_ms.checkContains(_64,_64b,"@b");
				_ms.checkContains(_ms.sub(Function,2),zipper,"zipper");
				return new (_ms.unlazy(Stream))(function*(){
					const iter_45a=iterator(_64a);
					const iter_45b=iterator(_64b);
					for(;;){
						const next_45a=iter_45a.next();
						if(next_45a.done){
							break
						};
						const next_45b=iter_45b.next();
						if(next_45b.done){
							break
						};
						(yield zipper(next_45a.value,next_45b.value))
					}
				})
			},built)
		})();
		const groups_45of_126=exports["groups-of~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(seq_61_63,[[1,2],[3,4]],groups_45of_126(2,[1,2,3,4]));
				_ms.assert(seq_61_63,[[1,2,3]],groups_45of_126(3,[1,2,3,4]));
				_ms.assert(seq_61_63,[[],[],[]],take_126(groups_45of_126(0,[1]),3))
			};
			return _ms.set((group_45size,_)=>{
				_ms.checkContains(_ms.unlazy(Nat),group_45size,"group-size");
				return _ms.checkContains(Seq,(()=>{
					if(_61_63(group_45size,0)){
						return new (_ms.unlazy(Stream))(function*(){
							for(;;){
								(yield [])
							}
						})
					} else {
						return new (_ms.unlazy(Stream))(function*(){
							const iter=iterator(_);
							for(;;){
								const next_45group=[];
								for(;;){
									const _$0=iter.next(),value=_$0.value,done=_$0.done;
									if(done){
										break
									};
									_43_43_62_33(next_45group,[value]);
									if(_61_63(group_45size,count(next_45group))){
										break
									}
								};
								if(! _61_63(group_45size,count(next_45group))){
									break
								};
								(yield freeze(next_45group))
							}
						})
					}
				})(),"res")
			},built)
		})();
		const indexes=exports.indexes=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[0,0,0]],new (_ms.unlazy(Range))(0,3));
				return built
			};
			return _ms.set(_=>{
				_ms.checkContains(Seq,_,"_");
				return new (_ms.unlazy(Range))(0,count(_))
			},built)
		})();
		const reverse_126=exports["reverse~"]=new (Method)((()=>{
			const built={};
			built[`name`]="reverse~";
			const test=built.test=function test(){};
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				const arr=_61_62(Array,_this);
				return new (_ms.unlazy(Stream))(function*(){
					for(let _ of reverse(indexes(arr))){
						(yield _ms.sub(arr,_))
					}
				})
			};
			return built
		})());
		const reverse=exports.reverse=new (Method)((()=>{
			const built={};
			built[`name`]="reverse";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,2]],[2,1]);
				return built
			};
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return from_45stream(Array,_this).reverse()
			};
			return built
		})());
		const split_126=exports["split~"]=(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[[1,0,1],_ms.sub(_61_63,0)],_61_62(_ms.unlazy(Stream),[[1],[1]]));
				_ms.assoc(built,[[0],_ms.sub(_61_63,0)],_61_62(_ms.unlazy(Stream),[[],[]]));
				return built
			};
			return _ms.set((_,split_63)=>{
				_ms.checkContains(Pred,split_63,"split?");
				return new (_ms.unlazy(Stream))(function*(){
					const iter=iterator(_);
					let prev_45idx=0;
					let cur_45idx=0;
					for(;;){
						const _$1=iter.next(),value=_$1.value,done=_$1.done;
						const next_45idx=_ms.lazy(()=>_43(1,cur_45idx));
						if(done){
							(yield slice(_,prev_45idx,cur_45idx));
							break
						} else if(split_63(value)){
							(yield slice(_,prev_45idx,cur_45idx));
							prev_45idx=_ms.unlazy(next_45idx);
							cur_45idx=_ms.unlazy(next_45idx)
						} else {
							cur_45idx=_ms.unlazy(next_45idx)
						}
					}
				})
			},built)
		})();
		const _60_43_33=exports["<+!"]=new (Method)((()=>{
			const built={};
			built[`name`]="<+!";
			const args=built.args=[`_`,`added`];
			return built
		})());
		const _60_43_43_33=exports["<++!"]=new (Method)((()=>{
			const built={};
			built[`name`]="<++!";
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`_`);
				_ms.add(built,[`@added`,_64]);
				return built
			})();
			const _default=built.default=function _default(_64added){
				const _this=this;
				for(let _ of reverse_126(_64added)){
					_60_43_33(_this,_)
				}
			};
			return built
		})());
		const _43_62_33=exports["+>!"]=new (Method)((()=>{
			const built={};
			built[`name`]="+>!";
			const args=built.args=[`_`,`added`];
			return built
		})());
		const _43_43_62_33=exports["++>!"]=new (Method)((()=>{
			const built={};
			built[`name`]="++>!";
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`_`);
				_ms.add(built,[`@added`,_64]);
				return built
			})();
			const _default=built.default=function _default(_64added){
				const _this=this;
				for(let _ of _64added){
					_43_62_33(_this,_)
				}
			};
			return built
		})());
		const _63_60pop_33=exports["?<pop!"]=new (Method)((()=>{
			const built={};
			built[`name`]="?<pop!";
			const args=built.args=1;
			return built
		})());
		const _63pop_62_33=exports["?pop>!"]=new (Method)((()=>{
			const built={};
			built[`name`]="?pop>!";
			const args=built.args=1;
			return built
		})());
		const set_45nth_33=exports["set-nth!"]=new (Method)((()=>{
			const built={};
			built[`name`]="set-nth!";
			const args=built.args=(()=>{
				const built=[];
				_ms.add(built,`_`);
				_ms.add(built,[`n`,_ms.unlazy(Nat)]);
				_ms.add(built,`val`);
				return built
			})();
			return built
		})());
		const name=exports.name=`Seq`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXEvU2VxLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBc0JBLDBCQUFLLEtBQUksTUFDSSxLQUFBOztTQUNaLFFBQUE7OztFQUVELFFBQU0sSUFBSTtFQUVWLGVBQVcsSUFBSTtFQUlkLG9DQUFNLEtBQUksUUFDTSxLQUFBOztTQUVmLFFBQUE7R0FDQSxzQkFDUSxlQUFBO0dBRVIsc0JBQU07R0FDTiw2QkFBVyxrQkFBQSxhQUNZO1VBZ1hqQjtzQkFqWGdCO1dBQ3JCLE9BQUksVUFnWEMsT0FoWGMsT0FBRyxhQWdYakI7R0FBQTs7O0VBN1dQLDBCQUNNLEtBQUE7O0dBQ0wsc0JBQ08sZUFBQTs7b0JBQU4sQ0FBQyxDQUFDLEVBQUUsSUFBTztvQ0FFSyxJQUFBO1lBQWYsTUFBTTtJQUFBOzs7a0JBQ1AsR0FDQztnQ0FBSSxTQUFBLEdBQVM7OztFQUVoQixpQ0FBUSxLQUFJLFFBQ00sS0FBQTs7U0FDakIsUUFBQTtHQUNBLHNCQUNPLGVBQUE7O29CQUFOLENBQUMsQ0FBQyxFQUFFLHdCQUFhO29CQUNqQixDQUFDOzs7R0FDRixzQkFBTTtHQUNOLDZCQUNXLG1CQUFBO1VBNFZMO1dBNVZMLE9BNFZLLE1BNVZLO0dBQUE7OztFQUVaLHdCQUNLLEtBQUE7O0dBQ0osc0JBQ08sZUFBQTs7b0JBQU4sQ0FBQyxDQUFDLEVBQUUsSUFBTztvQ0FFSyxJQUFBO1lBQWYsS0FBSztJQUFBOzs7R0FDUCxzQkFBTTtrQkFDTCxHQUNDO2dDQUFJLFFBQUEsR0FBUTs7O0VBRWYsK0JBQU8sS0FBSSxRQUNNLEtBQUE7O1NBQ2hCLFFBQUE7R0FDQSxzQkFDTyxlQUFBOztvQkFBTixDQUFDLENBQUMsRUFBRSx3QkFBYTtvQkFDakIsQ0FBQzs7O0dBQ0Ysc0JBQU07R0FDTiw2QkFDVyxtQkFBQTtVQXdVTDtXQXhVTCxDQUFPLFNBd1VGLDhCQXZVYTtvQkF1VWIsTUF2VUUsSUFBRyxNQXVVTCxPQXZVaUI7SUFBQTtH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