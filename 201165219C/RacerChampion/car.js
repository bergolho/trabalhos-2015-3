function Car ()
{
	this.x = 300.0;
	this.y = 360.0;
	this.vx = 0.0;
	this.vy = 0.0;
	this.ax = 0.0;
	this.atx = 0.0;
	this.ay = 0.0;
	this.w = 65.0;
	this.h = 100.0;
	this.vivo = true;
	this.vitoria = false;
	this.batidas = 0;
	this.turn = 0;	
	this.img;
	this.p;						
	this.f;
	this.direita;
	this.esquerda;					

	this.mover = function (ctx,dt)
	{
		// Checa se passou do numero maximo de batidas permitidas
		if (this.batidas > 9)
			this.vivo = false;
		// Checar limites da tela
		if (this.x < 210.0)
		{
			this.batidas++;
			this.vx = -this.vx*2;
			if (Math.abs(this.vx) > 1000.0)
				this.vx = 1000.0;
		}
		if (this.x > 510.0)
		{
			this.batidas++;
			this.vx = -this.vx*2;
			if (Math.abs(this.vx) > 1000.0)
				this.vx = -1000.0;
		}
		// Movimento do teclado
		if (this.direita)
		{
			this.ax = -200.0;
			this.turn = 1;
		}
		else if (this.esquerda)
		{
			this.ax = 200.0;
			this.turn = -1;
		}
		else
		{
			this.ax = 0.0;
			this.turn = 0;
		}
		
		// Atualiza a posicao do carro
		this.vx += this.ax*dt;
		this.x += this.vx*dt;
	};

	this.desenhar = function (ctx)
	{
		ctx.save();
		ctx.translate(this.x+this.w/2, this.y+this.h/2);			// Tranfere a origem do sistema de coordenadas para o meio do sprite
		if (this.turn == 1)
			ctx.rotate(-Math.PI/60.0);
		else if (this.turn == -1)
			ctx.rotate(Math.PI/60.0);
		ctx.drawImage(this.img,10,200,60,60,0,0,100,100);
		ctx.fillStyle = "black";
		//ctx.fillRect(0,0,100,100);
		//ctx.strokeStyle = "red";
		//ctx.strokeRect(5,0,70,100);
		ctx.restore();
		
	};

	this.colidiuCom = function (alvo)
	{
		if (this.x > alvo.x+alvo.w) return false;
		if (this.x+this.w < alvo.x) return false;
		if (this.y > alvo.y+alvo.h) return false;
		if (this.y+this.h < alvo.y) return false;
		return true;
	};
}
