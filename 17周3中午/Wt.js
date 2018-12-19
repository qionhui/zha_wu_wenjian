// JavaScript Document
//舞台
var Wt=function(can)
{
	var ca=can; //记录当前正在使用的画布
	var g=ca.getContext("2d");//画布的句柄
	
	var cj=null;//用于记录当前正在使用场景
	var self=this; //记录当前Wt对象
	setInterval(function(){
		self.update(); //调用Wt对象的update
	},1000/60);
	//传入要使用的场景
	this.replace=function(x) //要求用户传一个场景参数
	{
		cj=x;
	}
	//设计一个t用于计数
	var t=0;
	//每秒执行60次
	this.update=function()
	{
		t++;
		if (t>60) t=1;
		if(cj==null) return;
		cj.update(t); 
		this.draw();
	}
	
	//画图的方法
	this.draw=function()
	{
		g.clearRect(0,0,500,500);//清空整个画布
		for (var i=0;i<cj.jj.length;i++)
		{
			g.fillRect(cj.jj[i].x-cj.jj[i].w/2,cj.jj[i].y-cj.jj[i].h/2,cj.jj[i].w,cj.jj[i].h);
		}
	}
}