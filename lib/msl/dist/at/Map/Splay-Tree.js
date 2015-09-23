"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../js","../../Type/Kind","../at","../at-Type","./Map","./Sorted-Map"],(exports,compare_0,js_1,Kind_2,_64_3,_64_45Type_4,Map_5,Sorted_45Map_6)=>{
	exports._get=_ms.lazy(()=>{
		const compare=_ms.getDefaultExport(compare_0),_$0=_ms.getModule(compare_0),_60_63=_ms.get(_$0,"<?"),_$1=_ms.getModule(js_1),defined_63=_ms.get(_$1,"defined?"),_$2=_ms.getModule(Kind_2),kind_33=_ms.get(_$2,"kind!"),_$3=_ms.getModule(_64_3),empty_33=_ms.get(_$3,"empty!"),empty_63=_ms.get(_$3,"empty?"),iterator=_ms.get(_$3,"iterator"),_$4=_ms.getModule(_64_45Type_4),empty=_ms.get(_$4,"empty"),_$5=_ms.getModule(Map_5),assoc_33=_ms.get(_$5,"assoc!"),_63get=_ms.get(_$5,"?get"),un_45assoc_33=_ms.get(_$5,"un-assoc!"),Sorted_45Map=_ms.getDefaultExport(Sorted_45Map_6);
		const Splay_45Tree=exports.default=(()=>{
			const _=class Splay_45Tree{
				static [_ms.symbol(empty)](){
					const _this=this;
					return new (_this)()
				}
				constructor(root){
					_ms.newProperty(this,"root",root);
					_ms.checkContains(Splay_45Node,root,"root")
				}
				[_ms.symbol(iterator)](){
					const _this=this;
					const node_45iter=function* node_45iter(_){
						if(defined_63(_)){
							(yield* node_45iter(_["left!"]));
							(yield [_.key,_["val!"]]);
							(yield* node_45iter(_["right!"]))
						}
					};
					return node_45iter(_this.root)
				}
				[_ms.symbol(empty_63)](){
					const _this=this;
					return ! defined_63(_this.root)
				}
				[_ms.symbol(empty_33)](){
					const _this=this;
					_this.root=void 0
				}
				[_ms.symbol(_63get)](key){
					const _this=this;
					return ((! empty_63(_this)&&splay_33_63(_this,key))?_ms.some((()=>{
						return _this.root["val!"]
					})()):_ms.None)
				}
				[_ms.symbol(assoc_33)](key,val){
					const _this=this;
					if(empty_63(_this)){
						_this.root=new (Splay_45Node)(key,val,void 0,void 0)
					} else if(splay_33_63(_this,key)){
						_this.root["val!"]=val
					} else {
						const old_45root=_this.val;
						_ms.assertNot(empty_63,_this);
						_this.root=(()=>{
							if(_60_63(old_45root.key,key)){
								const old_45right=old_45root["right!"];
								old_45root["right!"]=void 0;
								return new (Splay_45Node)(key,val,old_45root,old_45right)
							} else {
								const old_45left=old_45root["left!"];
								old_45root["left!"]=void 0;
								return new (Splay_45Node)(key,val,old_45left,old_45root)
							}
						})()
					}
				}
				[_ms.symbol(un_45assoc_33)](key){
					const _this=this;
					return ((! empty_63(_this)&&splay_33_63(_this,key))?_ms.some((()=>{
						const removed=_this.root;
						_this.root=(()=>{
							if(has_45left_63(removed)){
								const right=removed.right;
								const new_45root=removed.left;
								splay_33_63(_this,key);
								new_45root["right!"]=right;
								return new_45root
							} else {
								return removed.right
							}
						})();
						return removed["val!"]
					})()):_ms.None)
				}
			};
			kind_33(_,Sorted_45Map);
			return _
		})();
		const Splay_45Node=class Splay_45Node{
			constructor(key,val_33,left_33,right_33){
				_ms.newProperty(this,"key",key);
				_ms.newMutableProperty(this,"val!",val_33);
				_ms.newMutableProperty(this,"left!",left_33);
				_ms.newMutableProperty(this,"right!",right_33)
			}
		};
		const splay_33_63=function splay_33_63(_,key){
			const dummy=new (Splay_45Node)(void 0,void 0,void 0,void 0);
			let left=dummy;
			let right=dummy;
			let cur=_.root;
			let found=null;
			for(;;){
				{
					const _=compare(key,cur.key);
					if(_60_63(_,0)){
						if(! has_45left_63(cur)){
							found=false;
							break
						};
						const link_45right_33=function link_45right_33(new_45right){
							right["left!"]=new_45right;
							cur=new_45right["left!"];
							right=new_45right
						};
						if(_60_63(key,cur["left!"].key)){
							const old_45left=cur["left!"];
							cur["left!"]=old_45left["right!"];
							old_45left["right!"]=cur;
							if(! has_45left_63(old_45left)){
								cur=old_45left;
								found=false;
								break
							};
							cur=old_45left;
							link_45right_33(old_45left)
						} else {
							link_45right_33(cur)
						}
					} else if(_60_63(0,_)){
						if(! has_45right_63(cur)){
							found=false;
							break
						};
						const link_45left_33=function link_45left_33(new_45left){
							left["right!"]=new_45left;
							cur=new_45left["right!"];
							left=new_45left
						};
						if(_60_63(cur["right!"].key,key)){
							const tmp=cur["right!"];
							cur["right!"]=tmp["left!"];
							tmp["left!"]=cur;
							if(! has_45right_63(tmp)){
								cur=tmp;
								found=false;
								break
							};
							link_45left_33(tmp)
						} else {
							link_45left_33(cur)
						}
					} else {
						found=true;
						break
					}
				}
			};
			left["right!"]=cur["left!"];
			right["left!"]=cur["right!"];
			cur["left!"]=dummy["right!"];
			cur["right!"]=dummy["left!"];
			_.root=cur;
			return found
		};
		const has_45left_63=function has_45left_63(node){
			return defined_63(node["left!"])
		};
		const has_45right_63=function has_45right_63(node){
			return defined_63(node["right!"])
		};
		const name=exports.name=`Splay-Tree`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvU3BsYXktVHJlZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLG1DQUNpQixLQUliO1NBREg7SUFJQyxtQkFBQSxTQUNPO1dBcURJO1lBckRWLEtBcURVO0lBQUE7SUFuREQsWUFBQSxLQUNnQjs7dUJBRFY7O0lBR2pCLFlBQUEsWUFDVTtXQStDRTtLQS9DWCxrQkFBZSxzQkFBQSxFQUNDO01BQWYsR0FBSSxXQUFBLEdBQ1M7ZUFBUixZQUFVO2NBQ1gsQ0FBQyxNQUFNO2VBQ04sWUFBVTs7O1lBQ2hCLFlBMENXOztJQXhDWixZQUFBLFlBQ1E7V0F1Q0k7WUF2Q1gsRUFBSSxXQXVDTzs7SUFyQ1osWUFBQSxZQUNTO1dBb0NHO0tBQUEsV0FwQ0Y7O0lBRVYsWUFBQSxTQUFNLElBQ0c7V0FpQ0c7WUFqQ1gsQ0FBRyxDQUFLLEVBQUksU0FpQ0QsUUFqQ2UsWUFpQ2YsTUFqQzRCLG9CQUNJO2FBZ0NoQzs7O0lBN0JaLFlBQUEsV0FBUyxJQUFJLElBQ0c7V0E0Qko7S0EzQk4sR0FBSixTQTJCVSxPQTFCQztNQTBCRCxXQTFCQSxLQUFJLGNBQVcsSUFBSSxJQUFJLE9BQVU7WUFDM0MsR0FBQSxZQXlCVSxNQXpCRyxLQUNHO01Bd0JOLG1CQXhCSztLQUFBLE9BRVg7TUFBSCxpQkFzQlM7b0JBckJLLFNBcUJMO01BQUEsV0FuQkk7T0FBWixHQUFBLE9BQUcsZUFBYSxLQUNHO1FBQWxCLGtCQUFZO1FBQ1oscUJBQW1CO2VBQ25CLEtBQUksY0FBVyxJQUFJLElBQUksV0FBUztPQUFBLE9BRTdCO1FBQUgsaUJBQVc7UUFDWCxvQkFBa0I7ZUFDbEIsS0FBSSxjQUFXLElBQUksSUFBSSxXQUFTO09BQUE7TUFBQTtLQUFBO0lBQUE7SUFHckMsWUFBQSxnQkFBVyxJQUNHO1dBUUY7WUFSWCxDQUFHLENBQUssRUFBSSxTQVFELFFBUmUsWUFRZixNQVI0QixvQkFDSTtNQUExQyxjQU9VO01BQUEsV0FKRztPQUFaLEdBQUEsY0FBVSxTQUNPO1FBQWhCLFlBQVE7UUFDUixpQkFBVztRQUVYLFlBQVEsTUFBSztRQUNiLHFCQUFtQjtlQUNuQjtPQUFBLE9BRUc7ZUFDSDs7O2FBRUY7Ozs7R0FoRUQsUUFBTSxFQUFFO1VBRFQ7RUFBQTtFQW9FQSxtQkFDa0I7R0FBTixZQUFBLElBQUssT0FBSyxRQUFNLFNBQ007OzJCQUFoQyxZQUFVOzJCQUNWLGFBQVc7MkJBQ1gsY0FBWTtHQUFBO0VBQUE7RUFJZCxrQkFBVyxxQkFBQSxFQUFFLElBQ0c7R0FBZixZQUFRLEtBQUksY0FBVyxPQUFVLE9BQVUsT0FBVTtHQUNyRCxTQUFTO0dBQ1QsVUFBVTtHQUNWLFFBQVE7R0FFUixVQUFVO0dBRU4sT0FBQTtJQUFHO0tBQUEsUUFBQSxRQUFRLElBQUk7S0FDakIsR0FBQSxPQUFHLEVBQUUsR0FDQztNQUFMLEtBQVEsY0FBVSxLQUNHO2FBQVg7T0FDVDtNQUFBO01BQ0Qsc0JBQWdCLHlCQUFBLFlBQ1M7T0FBeEIsZUFBZTtXQUNSO2FBQ0U7TUFBQTtNQUVMLEdBQUosT0FBRyxJQUFJLGtCQUNhO09BQ25CLGlCQUFXO09BQ1gsYUFBYTtPQUNiLHFCQUFtQjtPQUNuQixLQUFRLGNBQVUsWUFDUTtZQUFsQjtjQUNFO1FBQ1Q7T0FBQTtXQUNNO09BQ1AsZ0JBQVk7TUFBQSxPQUVUO09BQUgsZ0JBQVk7TUFBQTtLQUFBLE9BQ2YsR0FBQSxPQUFHLEVBQUUsR0FDQztNQUFMLEtBQVEsZUFBVyxLQUNHO2FBQVo7T0FDVDtNQUFBO01BQ0QscUJBQWUsd0JBQUEsV0FDUTtPQUF0QixlQUFlO1dBQ1I7WUFDQztNQUFBO01BRUosR0FBSixPQUFHLGtCQUFlLEtBQ0c7T0FDcEIsVUFBTTtPQUNOLGNBQWM7T0FDZCxhQUFhO09BQ2IsS0FBUSxlQUFXLEtBQ0c7WUFBZDtjQUNFO1FBQ1Q7T0FBQTtPQUNELGVBQVc7TUFBQSxPQUVSO09BQUgsZUFBVztNQUFBO0tBQUEsT0FFVjtZQUFNO01BQ1Q7S0FBQTtJQUFBO0dBQUE7R0FFSCxlQUFlO0dBQ2YsZUFBZTtHQUNmLGFBQWE7R0FDYixjQUFjO0dBQ2QsT0FBVTtVQUNWO0VBQUE7RUFFRCxvQkFBYSx1QkFBQSxLQUNJO1VBQWhCLFdBQVM7O0VBRVYscUJBQWMsd0JBQUEsS0FDSTtVQUFqQixXQUFTOztFQTVKWCx3QkFBQSIsImZpbGUiOiJhdC9NYXAvU3BsYXktVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9