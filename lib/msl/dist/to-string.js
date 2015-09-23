"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./js","./private/bootstrap","./Type/Method"],(exports,js_0,bootstrap_1,Method_2)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(js_0),id_61_63=_ms.get(_$0,"id=?"),_$1=_ms.getModule(bootstrap_1),msDef=_ms.get(_$1,"msDef"),Method=_ms.getDefaultExport(Method_2);
		const to_45string=exports.default=new (Method)((()=>{
			const built={};
			built[`name`]="to-string";
			const test=built.test=function test(){
				const built=new (global.Map)();
				_ms.assoc(built,[null],`null`);
				_ms.assoc(built,[void 0],`undefined`);
				_ms.assoc(built,[Object.create(null)],`<object with no prototype>`);
				return built
			};
			const allow_45null_63=built["allow-null?"]=true;
			const impl_45symbol=built["impl-symbol"]=`toString`;
			const _default=built.default=function _default(){
				const _this=this;
				return (()=>{
					const _=_this;
					if(id_61_63(_,null)){
						return `null`
					} else if(id_61_63(_,void 0)){
						return `undefined`
					} else {
						return inspect_45object(_this)
					}
				})()
			};
			return built
		})());
		const inspect_45seen=new (Set)();
		const inspect=exports.inspect=new (Method)((()=>{
			const built={};
			built[`name`]="inspect";
			const allow_45null_63=built["allow-null?"]=true;
			const wrap=built.wrap=function wrap(impl,arg,opts){
				return (()=>{
					if(inspect_45seen.has(arg)){
						return `<recursive>`
					} else {
						inspect_45seen.add(arg);
						return (_=>{
							inspect_45seen.delete(arg);
							return _
						})(impl.call(arg,opts))
					}
				})()
			};
			const _default=built.default=to_45string.default;
			return built
		})());
		const inspect_45object=function inspect_45object(){
			return `<object with no prototype>`
		};
		msDef(`inspect`,inspect);
		const name=exports.name=`to-string`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvdG8tc3RyaW5nLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBTUEsa0NBQVcsS0FBSSxRQUNNLEtBQUE7O1NBQXBCLFFBQUE7R0FDQSxzQkFDTyxlQUFBOztvQkFBTixDQUFDLE1BQVU7b0JBQ1gsQ0FBQyxRQUFlO29CQUNoQixDQUFFLGNBQWMsT0FBVzs7O0dBQzVCLDJDQUFhO0dBQ2IseUNBQWM7R0FDZCw2QkFDVyxtQkFBQTtVQUFMO1dBQUE7S0FBQSxRQUFBO0tBQ0osR0FBQSxTQUFLLEVBQUUsTUFDSTthQUFUO1lBQ0YsR0FBQSxTQUFLLEVBQUUsUUFDUzthQUFkO1lBRUU7YUFBSCxpQkFORztLQUFBO0lBQUE7R0FBQTs7O0VBUVAscUJBQWUsS0FBSTtFQUVuQiw4QkFBUyxLQUFJLFFBQ00sS0FBQTs7U0FBbEIsUUFBQTtHQUNBLDJDQUFhO0dBQ2Isc0JBQU8sY0FBQSxLQUFLLElBQUksS0FDSTtXQUNmO0tBQUgsR0FBQSxtQkFBaUIsS0FDRzthQUFsQjtZQUVFO01BQUgsbUJBQWlCO2FBQ1osSUFDa0I7T0FBdEIsc0JBQW9COztTQURoQixVQUFVLElBQUk7S0FBQTtJQUFBO0dBQUE7R0FFdEIsNkJBQVM7OztFQUdWLHVCQUNrQiwyQkFBQTtVQUFoQjs7RUFFRixNQUFPLFVBQVM7RUExQ2hCLHdCQUFBIiwiZmlsZSI6InRvLXN0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9