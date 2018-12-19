// JavaScript Document
//玩家类  继承精灵类的功能
var Wj=function(_x,_y,_w,_h)
{
	this.type="Wj";
	this.x=_x;
	this.y=_y;
	this.w=_w;
	this.h=_h;
	this.isLeft=false; //是否向左
	this.isRight=false; //是否向左
	this.isTop=false; //是否向左
	this.isDown=false; //是否向左
	
	this.moveLeft=function()
	{this.isLeft=true;}
	this.moveRight=function()
	{this.isRight=true;}
	this.moveTop=function()
	{this.isUp=true;}
	this.moveDown=function()
	{this.isDown=true;}
	
	this.stopMoveLeft=function()
	{this.isLeft=false;}
	this.stopMoveRight=function()
	{this.isRight=false;}
	this.stopMoveTop=function()
	{this.isUp=false;}
	this.stopMoveDown=function()
	{this.isDown=false;}
	
	this.fire=function()
	{this.isFire=true;}
	this.stopFire=function()
    {this.isFire=false;}
	//每秒执行60次
	this.update=function(t)
	{
		if (this.isLeft) this.x-=this.s;
		if (this.isRight) this.x+=this.s;
		if (this.isUp) this.y-=this.s;
		if (this.isDown) this.y+=this.s;
		if (this.isFire)
		{
		   if (t%5==0)
		   {
			   var zd=new WjZd(this.x,this.y,3);
			   this.parent.add(zd);
		   }
		}
	}
}
Wj.prototype = new Jl();//继承