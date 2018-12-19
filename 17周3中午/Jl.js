// JavaScript Document
//精灵类
var Jl=function(_x,_y,_w,_h)
{
	this.type="Jl"; //记录当前是什么类型的对象
	this.isHit=true; //是否要检测碰撞
	this.parent=null; //记录它爸
	this.x=_x;
	this.y=_y;
	this.w=_w;
	this.h=_h;
	this.s=1;
	//每秒执行60次
	this.update=function(t)
	{
		
	}
	//碰撞到了
	this.hit=function(obj)
	{
		
	}
}