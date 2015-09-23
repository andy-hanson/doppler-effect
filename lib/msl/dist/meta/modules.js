"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../cash","../private/bootstrap","../RegExp"],(exports,$_0,bootstrap_1,RegExp_2)=>{
	exports._get=_ms.lazy(()=>{
		const $=_ms.getDefaultExport($_0),_$0=_ms.getModule($_0),$after=_ms.get(_$0,"$after"),$map=_ms.get(_$0,"$map"),_$1=_ms.getModule(bootstrap_1),msCall=_ms.get(_$1,"msCall"),_$2=_ms.getModule(RegExp_2),rgx=_ms.get(_$2,"rgx");
		const $require=function $require(_45require_45,path){
			return new ($)((resolve,reject)=>{
				return _45require_45([path],resolve,reject)
			})
		};
		const dirname=function dirname(path){
			return path.replace(rgx`/[^/]*$`,"")
		};
		const $get_45module=exports["$get-module"]=(()=>{
			return (_45require_45,module_45path)=>{
				_ms.checkContains(Function,_45require_45,"-require-");
				_ms.checkContains(String,module_45path,"module-path");
				return $after($require(_45require_45,module_45path),_ms.sub(msCall,`getModule`))
			}
		})();
		const $_64all_45modules=exports["$@all-modules"]=(()=>{
			return (_45require_45,module_45list_45path)=>{
				_ms.checkContains(Function,_45require_45,"-require-");
				_ms.checkContains(String,module_45list_45path,"module-list-path");
				const modules_45list_45dir=dirname(module_45list_45path);
				return $after($get_45module(_45require_45,module_45list_45path),mp=>{
					const module_45paths=msCall(`getDefaultExport`,mp);
					return $map(module_45paths,module_45path=>{
						const full_45path=`${modules_45list_45dir}/${module_45path}`;
						return $get_45module(_45require_45,full_45path)
					})
				})
			}
		})();
		const name=exports.name=`modules`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9tb2R1bGVzLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBS0EsZUFBWSxrQkFBQSxjQUFVLEtBQ0k7VUFBekIsS0FBSSxHQUFHLENBQUEsUUFBUSxTQUNNO1dBQXBCLGNBQVUsQ0FBQyxNQUFNLFFBQVE7R0FBQTtFQUFBO0VBRTNCLGNBQVcsaUJBQUEsS0FDSTtVQUFkLGFBQWEsR0FBSSxVQUFVO0VBQUE7RUFFNUIsMkNBQ1ksS0FBQTtVQUtWLENBQUEsY0FBbUIsZ0JBQ2tCO3NCQU0zQjtzQkFBMEI7V0FOcEMsT0FBUSxTQUFTLGNBQVUsdUJBQWEsT0FBUTs7O0VBRWxELGlEQUNjLEtBQUE7VUFHWixDQUFBLGNBQW1CLHVCQUN1QjtzQkFEaEM7c0JBQTBCO0lBQ3BDLDJCQUFtQixRQUFRO1dBQzNCLE9BQVEsY0FBWSxjQUFVLHNCQUFtQixJQUNFO0tBQWxELHFCQUFlLE9BQVEsbUJBQWtCO1lBQ3pDLEtBQUssZUFBYyxlQUNXO01BQTdCLGtCQUFhLEdBQUMsd0JBQW1CO2FBRWpDLGNBQVksY0FBVTtLQUFBO0lBQUE7R0FBQTtFQUFBO0VBaEMxQix3QkFBQSIsImZpbGUiOiJtZXRhL21vZHVsZXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==