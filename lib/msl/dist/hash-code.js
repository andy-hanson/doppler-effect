"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./compare","./js","./math/Number","./Type/Method"],(exports,compare_0,js_1,Number_2,Method_3)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(js_1),id_61_63=_ms.get(_$1,"id=?"),js_42=_ms.get(_$1,"js*"),js_45=_ms.get(_$1,"js-"),js_43=_ms.get(_$1,"js+"),js_45bar=_ms.get(_$1,"js-bar"),js_45sub=_ms.get(_$1,"js-sub"),_$2=_ms.getModule(Number_2),Int=_ms.get(_$2,"Int"),Method=_ms.getDefaultExport(Method_3),_$3=_ms.getModule(Method_3),impl_33=_ms.get(_$3,"impl!");
		const hash_45code=exports.default=new (Method)((()=>{
			const built={};
			built[`name`]="hash-code";
			const test=built.test=function test(){
				const a=(()=>{
					const built={};
					const x=built.x=1;
					const y=built.y=2;
					return built
				})();
				const b=(()=>{
					const built={};
					const x=built.x=1;
					const y=built.y=1;
					return built
				})();
				_ms.assert(_61_63,hash_45code(a),hash_45code(a));
				_ms.assertNot(_61_63,hash_45code(a),hash_45code(b))
			};
			const args=built.args=1;
			const returns=built.returns=Int;
			const allow_45null_63=built["allow-null?"]=true;
			const _default=built.default=function _default(){
				const _this=this;
				return (()=>{
					if(id_61_63(_this,null)){
						return 108
					} else if(id_61_63(_this,void 0)){
						return 109
					} else {
						return (()=>{
							const _=hashes_45cache.get(_this);
							if(id_61_63(_,void 0)){
								hashes_45cache.set(_this,17);
								let hash=17;
								for(let key of Object.keys(_this)){
									const val=js_45sub(_this,key);
									const val_45hash=hash_45code(val);
									hash=js_45bar(js_42(hash,23),0);
									hash=js_45bar(js_43(hash,val_45hash),0)
								};
								hashes_45cache.set(_this,hash);
								return hash
							} else {
								return _
							}
						})()
					}
				})()
			};
			return built
		})());
		const hashes_45cache=new (WeakMap)();
		impl_33(hash_45code,Boolean,function(){
			const _this=this;
			return (_this?1:0)
		});
		impl_33(hash_45code,Function,function(){
			const _this=this;
			return hash_45code((()=>{
				const _=_this.name;
				if(_61_63(0,_.length)){
					return _this.toString()
				} else {
					return _
				}
			})())
		});
		impl_33(hash_45code,String,(()=>{
			const built={};
			const test=built.test=function test(){
				_ms.assert(_61_63,hash_45code(`a`),hash_45code(`a`));
				_ms.assertNot(_61_63,hash_45code(`a`),hash_45code(`b`))
			};
			return _ms.set(function(){
				const _this=this;
				let hash=13;
				let i=_this.length;
				for(;;){
					hash=js_43(hash,_this.charCodeAt(i));
					hash=js_45bar(hash,0);
					hash=js_42(hash,31);
					if(id_61_63(i,0)){
						break
					};
					i=js_45(i,1)
				};
				return hash
			},built)
		})());
		impl_33(hash_45code,Symbol,(()=>{
			const built={};
			const test=built.test=function test(){
				const sym=Symbol(`test`);
				_ms.assert(_61_63,hash_45code(sym),hash_45code(sym))
			};
			return _ms.set(()=>{
				return 42
			},built)
		})());
		impl_33(hash_45code,Number,function(){
			const _this=this;
			return js_45bar(_this,0)
		});
		const name=exports.name=`hash-code`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvaGFzaC1jb2RlLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBT0Esa0NBQVcsS0FBSSxRQUNNLEtBQUE7O1NBRXBCLFFBQUE7R0FDQSxzQkFDUSxlQUFBO0lBQVAsUUFDRyxLQUFBOztLQUFGLGdCQUFHO0tBQ0gsZ0JBQUc7OztJQUNKLFFBQ0csS0FBQTs7S0FBRixnQkFBRztLQUNILGdCQUFHOzs7ZUFDSSxPQUFJLFlBQVUsR0FBSSxZQUFVO2tCQUM1QixPQUFJLFlBQVUsR0FBSSxZQUFVO0dBQUE7R0FFckMsc0JBQU07R0FDTiw0QkFBUztHQUNULDJDQUFhO0dBQ2IsNkJBQ1csbUJBQUE7VUFrRUg7V0FqRUg7S0FBSCxHQUFBLFNBaUVNLE1BakVJLE1BQ0k7YUFBYjtLQUFBLE9BQ0QsR0FBQSxTQStETSxNQS9ESSxRQUNTO2FBQWxCO0tBQUEsT0FFRzthQUFFO09BQUEsUUFBQSxtQkE0REE7T0EzREosR0FBQSxTQUFLLEVBQUUsUUFDUztRQUNmLG1CQXlERyxNQXpEbUI7UUFDdEIsU0FBUztRQUVKLFFBQUEsT0FBTyxZQXNEVCxPQXJEeUI7U0FBM0IsVUFBTSxTQXFESixNQXJEZ0I7U0FDbEIsaUJBQVcsWUFBVTtjQUNiLFNBQVEsTUFBSSxLQUFLLElBQUk7Y0FDckIsU0FBUSxNQUFJLEtBQUssWUFBVTtRQUFBO1FBRXBDLG1CQWdERyxNQWhEbUI7ZUFDdEI7T0FBQSxPQUVHO2VBQUg7T0FBQTtNQUFBO0tBQUE7SUFBQTtHQUFBOzs7RUFFTixxQkFBZSxLQUFJO0VBR2xCLFFBQU0sWUFBVSxRQUNVLFVBQUE7U0F1Q2xCO1VBdkNGLENBdUNFLE1BdkNHLEVBQUU7RUFBQTtFQUViLFFBQU0sWUFBVSxTQUNXLFVBQUE7U0FvQ25CO1VBbkNQLFlBQWU7SUFBQSxRQW1DUjtJQWxDTixHQUFBLE9BQUcsRUFBRSxVQUNzQjtZQWlDckI7V0EvQkY7WUFBSDtJQUFBO0dBQUE7RUFBQTtFQUdILFFBQU0sWUFBVSxPQUNNLEtBQUE7O0dBQXJCLHNCQUNRLGVBQUE7ZUFBQyxPQUFJLFlBQVcsS0FBSyxZQUFXO2tCQUMvQixPQUFJLFlBQVcsS0FBSyxZQUFXOztrQkFFdEMsVUFBQTtVQXVCSztJQXZCTixTQUFTO0lBQ1QsTUFzQk07SUFwQkYsT0FBQTtVQUFLLE1BQUksS0FvQlAsaUJBcEJ5QjtVQUN0QixTQUFPLEtBQUs7VUFDWixNQUFJLEtBQUs7S0FFakIsR0FBSSxTQUFLLEVBQUUsR0FDQztNQUFYO0tBQUE7T0FDSSxNQUFJLEVBQUU7SUFBQTtXQUNaO0dBQUE7O0VBRUYsUUFBTSxZQUVFLE9BRGMsS0FBQTs7R0FBckIsc0JBQ1EsZUFBQTtJQUFQLFVBQU0sT0FBUTtlQUNOLE9BQUksWUFBVSxLQUFNLFlBQVU7R0FBQTtrQkFFdEMsSUFBQTtXQUVBO0dBQUE7O0VBR0YsUUFBTSxZQUFVLE9BQ1MsVUFBQTtTQUFqQjtVQUFQLFNBQU8sTUFBSztFQUFBO0VBM0ZkLHdCQUFBIiwiZmlsZSI6Imhhc2gtY29kZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9