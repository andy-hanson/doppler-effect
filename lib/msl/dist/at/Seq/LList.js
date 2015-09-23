"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../js","../../Type/Kind","../at","../at-Type","./Seq"],(exports,js_0,Kind_1,_64_2,_64_45Type_3,Seq_4)=>{
	exports._get=_ms.lazy(()=>{
		const _$1=_ms.getModule(js_0),id_61_63=_ms.get(_$1,"id=?"),_$2=_ms.getModule(Kind_1),kind_33=_ms.get(_$2,"kind!"),self_45kind_33=_ms.get(_$2,"self-kind!"),_64=_ms.getDefaultExport(_64_2),_$3=_ms.getModule(_64_2),_43_43=_ms.get(_$3,"++"),empty_63=_ms.get(_$3,"empty?"),iterator=_ms.get(_$3,"iterator"),_64_45Type=_ms.getDefaultExport(_64_45Type_3),_$4=_ms.getModule(_64_45Type_3),empty=_ms.get(_$4,"empty"),from_45stream=_ms.get(_$4,"from-stream"),Seq=_ms.getDefaultExport(Seq_4),_$5=_ms.getModule(Seq_4),_60_43_43_126=_ms.get(_$5,"<++~"),tail=_ms.get(_$5,"tail");
		const LList=exports.default=(()=>{
			const _=class LList{
				static [_ms.symbol(empty)](){
					const _this=this;
					return empty_45LList
				}
				static [_ms.symbol(from_45stream)](_){
					const _this=this;
					return _60_43_43_126(empty_45LList,_)
				}
				constructor(head,tail){
					_ms.newProperty(this,"head",head);
					_ms.newProperty(this,"tail",tail)
				}
				*[_ms.symbol(iterator)](){
					const _this=this;
					let cur=_this;
					for(;;){
						if(empty_63(cur)){
							break
						};
						(yield cur.head);
						cur=cur.tail
					}
				}
				[_ms.symbol(empty_63)](){
					const _this=this;
					return id_61_63(_this,empty_45LList)
				}
				[_ms.symbol(tail)](){
					const _this=this;
					return _this.tail
				}
				[_ms.symbol(_60_43_43_126)](left_45added){
					const _this=this;
					_ms.checkContains(_64,left_45added,"left-added");
					const iter=iterator(left_45added);
					const f=function f(){
						const _$0=iter.next(),value=_$0.value,done=_$0.done;
						return (done?_this:new (LList)(value,f()))
					};
					return f()
				}
				[_ms.symbol(_43_43)](other){
					const _this=this;
					return (()=>{
						const _=other;
						if(_ms.contains(LList,_)){
							return _60_43_43_126(other,_this)
						} else {
							return _43_43.default.call(_this,other)
						}
					})()
				}
			};
			self_45kind_33(_,_64_45Type);
			kind_33(_,Seq);
			return _
		})();
		const empty_45LList=new (LList)(void 0,void 0);
		Object.defineProperty(empty_45LList,`tail`,(()=>{
			const built={};
			const value=built.value=empty_45LList;
			return built
		})());
		const name=exports.name=`LList`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9TZXEvTExpc3QubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFPQSw0QkFDWSxLQUdSO1NBREg7SUFJQyxtQkFBQSxTQUNPO1dBZ0NNO1lBaENaO0lBQUE7SUFDRCxtQkFBQSxnQkFBYSxFQUNDO1dBOEJEO1lBOUJaLGNBQUssY0FBWTtJQUFBO0lBRVIsWUFBQSxLQUFNLEtBQ0s7Ozs7SUFFdEIsYUFBQSxZQUNZO1dBd0JFO0tBeEJiLFFBd0JhO0tBdEJULE9BQUE7TUFBSCxHQUFJLFNBQU8sS0FDRztPQUFiO01BQUE7YUFDRTtVQUNJOzs7SUFFVCxZQUFBLFlBQ1E7V0FnQk07WUFoQmIsU0FnQmEsTUFoQkg7SUFBQTtJQUVYLFlBQUEsUUFDTTtXQWFRO1lBQUE7O0lBWGQsWUFBQSxnQkFBTSxhQUNZO1dBVUo7dUJBWEc7S0FDaEIsV0FBTyxTQUFTO0tBQ2hCLFFBQ0ssWUFBQTtNQUFKLFVBQWE7YUFDUixDQUFBLEtBT08sTUFQRyxLQUFJLE9BQU0sTUFBTTtLQUFBO1lBQ2hDO0lBQUE7SUFFRCxZQUFBLFNBQUksTUFDSztXQUdLO1lBRlI7TUFBQSxRQUFBO01BQ0osZ0JBQUMsTUFBRCxHQUNNO2NBQUwsY0FBSyxNQUFNO01BQUEsT0FFUjtjQUFILG9CQUZXLE1BRVU7TUFBQTtLQUFBO0lBQUE7R0FBQTtHQXRDdkIsZUFBVyxFQUFFO0dBQ2IsUUFBTSxFQUFFO1VBRlQ7RUFBQTtFQXlDRCxvQkFBYyxLQUFJLE9BQU0sT0FBVTtFQUNsQyxzQkFBc0IsY0FBYSxPQUNLLEtBQUE7O0dBQXZDLHdCQUFPOzs7RUFyRFIsd0JBQUEiLCJmaWxlIjoiYXQvU2VxL0xMaXN0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=