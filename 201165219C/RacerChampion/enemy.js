function Enemy (x,y,type)
{
	this.x = x;
	this.y = y;
	this.vx = 0.0;
	this.vy = 0.0;
	this.ax = 0.0;
	this.ay = 10;
	this.type = type;
	this.w = 30.0;
	this.h = 30.0;
	this.img = new Image();
	if (type == 1)
		this.img.src = "figs/enemy1.png";		// nicolaspok.deviantart.com
	else if (type == 2)
		this.img.src = "figs/enemy2.png";		// nicolaspok.deviantart.com
	else if (type == 3)
		this.img.src = "figs/enemy3.png";		// nicolaspok.deviantart.com editado no GIMP
	else if (type == 4)
		this.img.src = "figs/enemy4.png";		// nicolaspok.deviantart.com editado no GIMP
	
	this.mover = function (player,dt)
	{
		this.vy += this.ay*dt;
		this.y += this.vy*dt;
		
		// Checa se colidiu com o jogador
		if (this.colidiuCom(player))
		{
			//player.vivo = false;
			player.batidas++;
			return (true);
		}
		// Chegou no fim da tela ?
		if (this.y > 400.0)
			return (true);
		else
			return (false);
	}
	
	this.desenhar = function (ctx)
	{
		ctx.save();
		ctx.translate(this.x, this.y);			// Tranfere a origem do sistema de coordenadas para o meio do sprite
		if (this.type == 1 || this.type == 3)
			ctx.drawImage(this.img,0,0,70,150,0,0,60,100);
		else if (this.type == 2 || this.type == 4)
			ctx.drawImage(this.img,0,0,80,160,0,0,60,100);
		ctx.fillStyle = "black";
		//ctx.fillRect(0,0,60,90);
		//ctx.strokeStyle = "red";
		//ctx.strokeRect(0,0,60,100);
		ctx.restore();
	}
	
	this.colidiuCom = function (alvo)
	{
		if(this.x > alvo.x+alvo.w) return false;
		if(this.x+this.w < alvo.x) return false;
		if(this.y > alvo.y+alvo.h) return false;
		if(this.y+this.h < alvo.y) return false;
		return true;
	};
}
