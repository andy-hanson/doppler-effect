"use strict";
define(["msl/private/boot","exports","./draw","./math","msl/math/methods","msl/math/Number"],(_boot,exports,draw_0,math_1,methods_2,Number_3)=>{
	_ms.getModule(_boot);
	const _$0=_ms.getModule(draw_0),circle=_ms.get(_$0,"circle"),color_45image=_ms.get(_$0,"color-image"),rgb_45_62style=_ms.get(_$0,"rgb->style"),_$1=_ms.getModule(math_1),wrap_45to_45range=_ms.get(_$1,"wrap-to-range"),_$2=_ms.getModule(methods_2),_43=_ms.get(_$2,"+"),_47=_ms.get(_$2,"/"),_42=_ms.get(_$2,"*"),_45=_ms.get(_$2,"-"),_$3=_ms.getModule(Number_3),neg=_ms.get(_$3,"neg");
	const Eye_45Size=50;
	const FPS=30;
	const Meters_45Per_45Pixel=200000;
	const StarDisplay=exports.default=class StarDisplay{
		constructor(){
			_ms.newProperty(this,"canvas",document.getElementById(`starCanvas`));
			_ms.newProperty(this,"context",this.canvas.getContext(`2d`));
			_ms.newProperty(this,"width",this.canvas.width);
			_ms.newProperty(this,"height",this.canvas.height);
			_ms.newProperty(this,"star-img",(_=>{
				_.src=`image/star.png`;
				_.onload=()=>{
					_ms.newProperty(this,"image-loaded",true);
					this["-color-image!"]();
					this["-clock!"]()
				};
				return _
			})(new (Image)()));
			_ms.newMutableProperty(this,"star-x",0)
		}
		"set-velocity-and-color!"(vel,rgb){
			const _this=this;
			_this.vel=vel;
			_this.color=rgb;
			if(_this["image-loaded"]){
				_this["-color-image!"]()
			}
		}
		"-clock!"(){
			const _this=this;
			_this["star-x"]=(()=>{
				const x=_43(_this["star-x"],_47(_this.vel,_42(Meters_45Per_45Pixel,FPS)));
				const max_45x=_45(_this.width,_47(_this["star-img"].width,2));
				return wrap_45to_45range(x,Eye_45Size,max_45x)
			})();
			_this["-draw!"]();
			const c=function c(){
				_this["-clock!"]()
			};
			setTimeout(c,_47(1000,FPS))
		}
		"-draw!"(){
			const _this=this;
			_this.context.save();
			_this.context.clearRect(0,0,_this.width,_this.height);
			_this.context.translate(0,_47(_this.height,2));
			draw_45eye_33(_this.context,50,_this.color);
			const star_45y=neg(_47(_this["star-img"].height,4));
			_this.context.putImageData(_this["star-image-data"],_this["star-x"],star_45y);
			_this.context.restore()
		}
		"-color-image!"(){
			const _this=this;
			_this["star-image-data"]=color_45image(_this["star-img"],_this.color)
		}
	};
	const draw_45eye_33=function draw_45eye_33(ctx,rad,iris_45color){
		ctx.save();
		circle(ctx,0,0,rad);
		ctx.clip();
		circle(ctx,rad,0,_42(rad,_47(2,3)));
		ctx.fillStyle=rgb_45_62style(iris_45color);
		ctx.fill();
		circle(ctx,rad,0,_47(rad,3));
		ctx.fillStyle=`black`;
		ctx.fill();
		ctx.restore();
		circle(ctx,0,0,rad);
		ctx.strokeStyle=`black`;
		ctx.lineWidth=2;
		ctx.stroke()
	};
	const name=exports.name=`StarDisplay`;
	return exports
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC9TdGFyRGlzcGxheS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0NBS0EsaUJBQVc7Q0FDWCxVQUFNO0NBQ04sMkJBQW1CO0NBRW5CLGtDQUNrQjtFQUNQLGFBQUE7bUJBQVQsY0FBVSx3QkFBeUI7bUJBQ25DLGVBQVcsdUJBQW9CO21CQUMvQixhQUFTO21CQUNULGNBQVU7bUJBQ1YsZ0JBQWlCLElBQ1M7SUFBekIsTUFBVTtJQUNWLFNBQ2MsSUFBQTtxQkFBYixvQkFBZ0I7S0FDaEI7S0FDQTs7O01BTGUsS0FBSTswQkFNckIsY0FBWTtFQUFBOzRCQUVlLElBQUksSUFDRztTQTBCUTtHQUFBLFVBMUJsQztHQTBCa0MsWUF6QmhDO0dBRVYsR0F1QjBDLHNCQXRCekI7SUFzQnlCOzs7YUFuQi9CO1NBbUIrQjtHQUFBLGdCQWxCaEMsS0FBQTtJQUFULFFBQUksSUFrQnFDLGdCQVl6QixJQVp5QixVQVF6QixJQTFCUyxxQkFBaUI7SUFDMUMsY0FBUSxJQWlCaUMsWUFZekIsSUFaeUIsd0JBakJMO1dBQ3BDLGtCQUFjLEVBQUUsV0FBUztHQUFBO0dBZ0JnQjtHQWQxQyxRQUNNLFlBQUE7SUFhb0M7O0dBWjFDLFdBQVcsRUF3Qk0sSUF4QkQsS0FBSztFQUFBO1lBR1g7U0FTZ0M7R0FBQTtHQUFBLHdCQVJ2QixFQUFFLEVBUXFCO0dBQUEsd0JBUHZCLEVBbUJGLElBWnlCLGFBUFY7R0FDaEMsY0FNMEMsY0FOdkIsR0FNdUI7R0FMMUMsZUFBUyxJQWlCUSxJQVp5Qix5QkFMVDtHQUtTLG9FQUpLO0dBSUw7O21CQUF6QjtTQUF5QjtHQUFBLHlCQUF0QixjQUFzQjs7O0NBRTVDLG9CQUFjLHVCQUFBLElBQUksSUFBSSxhQUNVO0VBQS9CO0VBRUEsT0FBTyxJQUFJLEVBQUUsRUFBRTtFQUNmO0VBRUEsT0FBTyxJQUFJLElBQUksRUFBRyxJQUFFLElBSUYsSUFKUyxFQUFFO0VBQzdCLGNBQWlCLGVBQVc7RUFDNUI7RUFFQSxPQUFPLElBQUksSUFBSSxFQUFHLElBQUUsSUFBSTtFQUN4QixjQUFrQjtFQUNsQjtFQUNBO0VBRUEsT0FBTyxJQUFJLEVBQUUsRUFBRTtFQUNmLGdCQUFvQjtFQUNwQixjQUFpQjtFQUNqQjs7Q0F0RUQsd0JBQUEiLCJmaWxlIjoiLi9TdGFyRGlzcGxheS5qcyJ9