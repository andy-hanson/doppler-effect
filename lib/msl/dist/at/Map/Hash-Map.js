"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../hash-code","../../js","../../methods","../../Type/Kind","../at","../at-Type","../q","./Id-Map","./Map","./Map-Type","../../Type/Type","../Seq/Seq","./Map"],(exports,compare_0,hash_45code_1,js_2,methods_3,Kind_4,_64_5,_64_45Type_6,_63_7,Id_45Map_8,Map_9,Map_45Type_10,Type_11,Seq_12,Map_13)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),hash_45code=_ms.getDefaultExport(hash_45code_1),_$1=_ms.getModule(js_2),defined_63=_ms.get(_$1,"defined?"),_$2=_ms.getModule(methods_3),freeze=_ms.get(_$2,"freeze"),_$3=_ms.getModule(Kind_4),kind_33=_ms.get(_$3,"kind!"),self_45kind_33=_ms.get(_$3,"self-kind!"),_$4=_ms.getModule(_64_5),empty_33=_ms.get(_$4,"empty!"),iterator=_ms.get(_$4,"iterator"),map=_ms.get(_$4,"map"),_$5=_ms.getModule(_64_45Type_6),empty=_ms.get(_$5,"empty"),_$6=_ms.getModule(_63_7),_63None=_ms.get(_$6,"?None"),Opt_45_62_63=_ms.get(_$6,"Opt->?"),_63some=_ms.get(_$6,"?some"),Id_45Map=_ms.getDefaultExport(Id_45Map_8),Map=_ms.getDefaultExport(Map_9),_$7=_ms.getModule(Map_9),assoc_33=_ms.get(_$7,"assoc!"),_63get=_ms.get(_$7,"?get"),un_45assoc_33=_ms.get(_$7,"un-assoc!"),Map_45Type=_ms.getDefaultExport(Map_45Type_10),_$8=_ms.lazyGetModule(Type_11),_61_62=_ms.lazyProp(_$8,"=>"),_$9=_ms.lazyGetModule(Seq_12),seq_61_63=_ms.lazyProp(_$9,"seq=?"),_$10=_ms.lazyGetModule(Map_13),keys=_ms.lazyProp(_$10,"keys");
		const Hash_45Map=exports.default=(()=>{
			const _=class Hash_45Map{
				static [_ms.symbol(empty)](){
					const _this=this;
					return new (_this)(new (global.Map)())
				}
				constructor(val){
					_ms.newProperty(this,"val",val);
					_ms.checkContains(Id_45Map,val,"val")
				}
				*[_ms.symbol(iterator)](){
					const _this=this;
					for(let bucket of _this.val.values()){
						let cur=bucket;
						for(;;){
							if(! defined_63(cur)){
								break
							};
							(yield [cur.key,cur["val!"]]);
							cur=cur["next!"]
						}
					}
				}
				[_ms.symbol(_63get)](key){
					const _this=this;
					const bucket=_this.val.get(hash_45code(key));
					const entry=opt_45bucket_45entry(bucket,key);
					return map(Opt_45_62_63(entry),_=>{
						return _["val!"]
					})
				}
				[_ms.symbol(assoc_33)](key,val){
					const _this=this;
					const hash=hash_45code(key);
					const bucket=_this.val.get(hash);
					{
						const _=opt_45bucket_45entry(bucket,key);
						if(defined_63(_)){
							_["val!"]=val
						} else {
							_this.val.set(hash,new (Bucket)(key,val,bucket))
						}
					}
				}
				[_ms.symbol(un_45assoc_33)](key){
					const _this=this;
					const hash=hash_45code(key);
					const bucket=_this.val.get(hash);
					return (()=>{
						const _=bucket;
						if(defined_63(_)){
							return (()=>{
								if(_61_63(_.key,key)){
									{
										const _=bucket["next!"];
										if(defined_63(_)){
											_this.val.set(key,_)
										} else {
											_this.val.delete(hash)
										}
									};
									return _63some(_["val!"])
								} else {
									let cur=bucket;
									return (()=>{
										for(;;){
											const next=cur["next!"];
											if(! defined_63(next)){
												return _63None
											};
											if(_61_63(next.key,key)){
												cur["next!"]=next["next!"];
												return _63some(next["val!"])
											};
											cur=next
										}
									})()
								}
							})()
						} else {
							return _63None
						}
					})()
				}
				[_ms.symbol(freeze)](){
					const _this=this;
					freeze(_this.val);
					Object.freeze(_this)
				}
				[_ms.symbol(empty_33)](){
					const _this=this;
					_this.val.clear()
				}
			};
			self_45kind_33(_,Map_45Type);
			kind_33(_,Map);
			return _
		})();
		_ms.newProperty(Hash_45Map,"test",()=>{
			const _=_ms.unlazy(_61_62)(Hash_45Map,(()=>{
				const built=new (global.Map)();
				_ms.assoc(built,1,2);
				_ms.assoc(built,3,4);
				return built
			})());
			_ms.assert(_61_63,_ms.sub(_,1),2);
			_ms.assert(_61_63,_ms.sub(_,3),4);
			_ms.assert(_ms.unlazy(seq_61_63),_,(()=>{
				const built=[];
				_ms.add(built,[1,2]);
				_ms.add(built,[3,4]);
				return built
			})());
			_ms.assert(_ms.unlazy(seq_61_63),_ms.unlazy(keys)(_),[1,3]);
			_ms.assert(_61_63,_63None,_63get(_,8))
		});
		const Bucket=class Bucket{
			constructor(key,val_33,next_33){
				_ms.newProperty(this,"key",key);
				_ms.newMutableProperty(this,"val!",val_33);
				_ms.newMutableProperty(this,"next!",next_33)
			}
		};
		const opt_45bucket_45entry=function opt_45bucket_45entry(opt_45bucket,key){
			let cur=opt_45bucket;
			return (()=>{
				for(;;){
					if(! defined_63(cur)){
						return void 0
					};
					if(_61_63(cur.key,key)){
						return cur
					};
					cur=cur["next!"]
				}
			})()
		};
		const name=exports.name=`Hash-Map`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvSGFzaC1NYXAubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFxQkEsaUNBQ2UsS0FFWDtTQURIO0lBS0MsbUJBQUEsU0FDTztXQThEUDtZQTlEQyxLQThERCxPQTlEVyxLQUFJOztJQUVMLFlBQUEsSUFDVzs7dUJBRE47O0lBR2hCLGFBQUEsWUFDWTtXQXdEWDtLQXhESyxRQUFBLFVBd0RMLG1CQXZENEI7TUFBM0IsUUFBUTtNQUVKLE9BQUE7T0FBSCxLQUFRLFdBQVMsS0FDRztRQUFuQjtPQUFBO2NBQ0UsQ0FBQyxRQUFRO1dBQ0w7Ozs7SUFFVixZQUFBLFNBQU0sSUFDRztXQStDUjtLQS9DQSxhQStDQSxjQS9DbUIsWUFBVTtLQUM3QixZQUFRLHFCQUFpQixPQUFPO1lBQ2hDLElBQUssYUFBTyxPQUFRLEdBQ0M7YUFBcEI7OztJQUVGLFlBQUEsV0FBUyxJQUFJLElBQ0c7V0F5Q2Y7S0F6Q0EsV0FBTyxZQUFVO0tBQ2pCLGFBd0NBLGNBeENrQjtLQUNaO01BQUEsUUFBQSxxQkFBaUIsT0FBTztNQUM3QixHQUFBLFdBQUEsR0FDUztPQUNSLFVBQVU7TUFBQSxPQUVQO09Ba0NMLGNBakNXLEtBQU0sS0FBSSxRQUFPLElBQUksSUFBSTtNQUFBO0tBQUE7SUFBQTtJQUVyQyxZQUFBLGdCQUFXLElBQ0c7V0E4QmI7S0E5QkEsV0FBTyxZQUFVO0tBQ2pCLGFBNkJBLGNBN0JrQjtZQUNiO01BQUEsUUFBQTtNQUNKLEdBQUEsV0FBQSxHQUNTO2NBQ0o7UUFBSCxHQUFBLE9BQUcsTUFBTSxLQUNHO1NBQUw7VUFBQSxRQUFBO1VBQ0wsR0FBQSxXQUFBLEdBQ1M7V0FzQmQsY0F0QmUsSUFBSTtVQUFBLE9BRVY7V0FvQlQsaUJBcEJrQjtVQUFBO1NBQUE7Z0JBQ2QsUUFBTTtlQUVIO1NBQUgsUUFBUTtnQkFFTDtpQkFBQTtXQUFGLFdBQU87V0FDUCxLQUFRLFdBQVMsTUFDSTtZQUFwQixPQUFNO1dBQUE7V0FDUCxHQUFJLE9BQUcsU0FBUyxLQUNHO1lBQWxCLGFBQWE7WUFDYixPQUFNLFFBQU07O2VBQ047VUFBQTtTQUFBO1FBQUE7T0FBQTtNQUFBLE9BRVA7Y0FBSDtNQUFBO0tBQUE7SUFBQTtJQUVILFlBQUEsVUFDUztXQUlSO0tBSkEsT0FJQTtLQUhBLGNBR0E7SUFBQTtJQURELFlBQUEsWUFDUztXQUFSO0tBQUE7OztHQW5FQSxlQUFXLEVBQUU7R0FDYixRQUFNLEVBQUU7VUFGVDtFQUFBO2tCQXVFRCxrQkFDa0IsSUFBQTtHQUFqQiwyQkFBTyxXQUNRLEtBQUE7O29CQUFkLEVBQUs7b0JBQ0wsRUFBSzs7O2NBQ0UsZUFBRyxFQUFFLEdBQUc7Y0FDUixlQUFHLEVBQUUsR0FBRztvQ0FDRixFQUNDLEtBQUE7O2tCQUFaLENBQUMsRUFBRTtrQkFDSCxDQUFDLEVBQUU7OztxREFDUSxHQUFNLENBQUMsRUFBRTtjQUNmLE9BQUcsUUFBTyxPQUFLLEVBQUU7RUFBQTtFQUd6QixhQUNjO0dBQUYsWUFBQSxJQUFLLE9BQUssUUFDSzs7MkJBQXpCLFlBQVU7MkJBQ1YsYUFBVztHQUFBO0VBQUE7RUFJYiwyQkFBb0IsOEJBQUEsYUFBVyxJQUNHO0dBQWpDLFFBQVE7VUFFTDtXQUFBO0tBQUYsS0FBUSxXQUFTLEtBQ0c7TUFBbkIsT0FBTTs7S0FDUCxHQUFJLE9BQUcsUUFBUSxLQUNHO01BQWpCLE9BQU07S0FBQTtTQUNBOzs7O0VBekhWLHdCQUFBIiwiZmlsZSI6ImF0L01hcC9IYXNoLU1hcC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9