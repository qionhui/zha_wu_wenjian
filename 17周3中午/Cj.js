// JavaScript Document
//场景类
var Cj=function()
{
	this.jj=[];//用于记录当前场景所有的精灵
	//可以添加精灵到场景中
	this.add=function(x)
	{
		x.parent=this;
		this.jj[this.jj.length]=x; 
	}	
	//每秒执行60次
	this.update=function(t)
	{
		//根据当前精灵数，判断它们有没有碰在一起
		for (var i=0;i<this.jj.length-1;i++)
		{
			for (var j=i+1;j<this.jj.length;j++)
			{
				var x1=this.jj[i].x;
				var y1=this.jj[i].y;
				var w1=this.jj[i].w;
				var h1=this.jj[i].h;
				var x2=this.jj[j].x;
				var y2=this.jj[j].y;
				var w2=this.jj[j].w;
				var h2=this.jj[j].h;
				//如果两个精灵都有参与碰撞，而且碰到一起
				if ( this.jj[i].isHit && this.jj[j].isHit && (Math.abs(x2-x1)<=w1/2+w2/2)&&(Math.abs(y2-y1)<=h1/2+h2/2) )
				{
					this.jj[i].hit(this.jj[j]);
					this.jj[j].hit(this.jj[i]);
				}
				   	
			}
		}
		
		//根据当前有多少个精灵，统统调用一次
		for (var i=0;i<this.jj.length;i++) 
		    this.jj[i].update(t);
	}
}