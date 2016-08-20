function Snake()
{
	this.width=20;
	this.height=20;
	this.position='absolute';
	this.direction='right';
	this.body=[[3,2,'#600',null],[2,2,'#66F',null],[1,2,'#66f',null]];

	this.show=function()
	{
		for(var i=0;i<this.body.length;i++)
		{
			if(this.body[i][3]==null)
			{
				this.body[i][3]=document.createElement('div');
				this.body[i][3].style.width=this.width+'px';
				this.body[i][3].style.height=this.height+'px';				
				this.body[i][3].style.backgroundColor=this.body[i][2];
				this.body[i][3].style.position=this.position;
				document.getElementById('map').appendChild(this.body[i][3]);
			}

				this.body[i][3].style.left=this.body[i][0]*20+'px';
				this.body[i][3].style.top=this.body[i][1]*20+'px';
			
		}
	}

	//通过按键来控制蛇的移动方向
	this.setDirective=function(code)
	{
					if(code==37&&this.direction!='right')
					{
							this.direction='left';
					}
					if(code==39&&this.direction!='left')
					{
							this.direction='right';
					}
					if(code==38&&this.direction!='down')
					{
							this.direction='up';
					}

					if(code==40&&this.direction!='up')
					{
							this.direction='down';
					}



	}

	//让蛇动
	this.move=function()
	{

		//蛇碰到食物以后会将食物吞掉，并且自己的身体变长

		if(this.body[0][0]==food.x&&this.body[0][1]==food.y)
		{
			//alert('吃到了');
			this.body.push([10,10,'#66F',null]);
			food.show();

		}

		//当蛇走出地图的时候说明游戏已经结束
		if(this.body[0][0]==39||this.body[0][0]==0||this.body[0][1]==19||this.body[0][1]==0)
		{
			//alert('游戏结束');
			clearInterval(timer);

			//加入游戏结束的画面

			var over=document.getElementById('over');
			over.style.display='block';
			over.innerHTML="Game Over ! <font size='3'>(Press space to restart)</font> ";
			//document.getElementById('map').appendChild(over);


		}


		//尾部先往前移动
		for(var i=this.body.length-1;i>0;i--)
		{
			this.body[i][0]=this.body[i-1][0];
			this.body[i][1]=this.body[i-1][1];
		}


		if(this.direction=='right')
		{
			this.body[0][0]++;
		}else if(this.direction=='left')
		{
			this.body[0][0]--;
		}else if(this.direction=='up'){
			this.body[0][1]--;
		}else if(this.direction=='down'){
			this.body[0][1]++;
		}

		this.show();
	}
}