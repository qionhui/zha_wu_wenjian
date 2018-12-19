// JavaScript Document
//子弹类
var WjZd=function(_x,_y,_s)
{
	this.type="WjZd";
	this.isHit=true;//参与碰撞
	this.x=_x;
	this.y=_y;
	this.w=5;
	this.h=5;
	this.s=_s;
	//每秒执行60次
	this.update=function(t)
	{
		this.x+=this.s;
	}
	//碰撞到了
	this.hit=function(obj)
	{
		if (obj.type=="Wj") return; //打到如果是玩家，就跳出不处理
		if (obj.type=="WjZd") return; //打到如果是玩家子弹，就跳出不处理
		document.title+="@";
	}
}
WjZd.prototype=new Jl();