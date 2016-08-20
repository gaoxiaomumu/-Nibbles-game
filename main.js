
var snake;
var code;
var food;
var timer;
var count=0;

function init()
{
	

	food=new Food();
	snake=new Snake();
	food.show();
	snake.show();
	snake.move();
	timer=setInterval('snake.move()',200);
}
window.onload=function()
{
	init();

	document.onkeydown=function(event)
	{
		if(window.event)
			code=window.event.keyCode;
		else{
			code=event.keyCode;
		}
		snake.setDirective(code);
		

		if(code==80){
			//这个游戏需要暂停
			//再按一下游戏继续
			count++;
			if(count%2!=0)
			{
				
				clearInterval(timer);

				document.getElementById('over').style.display='block';
				document.getElementById('over').innerHTML='Pause';
			}else{
				timer=setInterval('snake.move()',200);
				document.getElementById('over').style.display='none';
			}
		}

		
	}

	

	document.getElementById('over').onclick=function()
	{
		this.style.display='none';
		//蛇应该是从一开始的地方开始动了
		//init();
				remove();

				init();
		
		
	}

}

function remove()
	{
		var map=document.getElementById('map');
		var childs=map.childNodes;
			//map.removeChild(childs[1]);
			//map.removeChild(childs[2]);
			//map.removeChild(childs[3]);
			//map.removeChild(childs[4]);
			for(var i = childs.length - 1; i >= 0; i--) { 
  
				  map.removeChild(childs[i]); 
				} 
	}
