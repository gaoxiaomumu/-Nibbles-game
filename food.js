function Food()
{
	this.width=20;
	this.height=20;
	this.x=0;
	this.y=0;
	this.position='absolute';
	this.color='#0F0';
	this._food=null;

	this.show=function()
	{
		if(this._food==null)
		{
			this._food=document.createElement('div');
			this._food.style.width=this.height+'px';
			this._food.style.height=this.height+'px';
			this._food.style.backgroundColor=this.color;
			this._food.style.position=this.position;
			
			document.getElementById('map').appendChild(this._food);
		}

			this.x=Math.floor(Math.random()*40);
			this.y=Math.floor(Math.random()*20);
			this._food.style.left=this.x*20+'px';
			this._food.style.top=this.y*20+'px';
	}
}

