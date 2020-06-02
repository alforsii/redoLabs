class Ball {
  constructor(game) {
    this.game = game;
    this.x = 20;
    this.y = this.game.height - 100;
    this.radius = 20;
    this.vx = 5;
    this.vy = 3;
  }

  drawBall() {
    if (
      this.y > this.game.canvas.height - this.radius ||
      this.y - this.radius < 0
    ) {
      this.vy *= -1;
    }
    if (
      this.x > this.game.canvas.width - this.radius ||
      this.x - this.radius < 0
    ) {
      this.vx *= -1;
    }
    this.x += this.vx;
    this.y -= this.vy;
    // if (this.x + this.radius <= 0) this.x = this.x + this.radius;
    // if (this.x >= this.game.width - this.radius)
    //   this.x = this.game.width - this.radius;
    // if (this.y + this.radius < 0) this.y = this.y + this.radius;
    // if (this.y + this.radius > this.game.height - this.radius)
    //   this.y = this.game.height - this.radius;

    //draw ball
    this.game.ctx.fillStyle = 'orange';
    this.game.ctx.beginPath();
    this.game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.game.ctx.closePath();
    this.game.ctx.fill();
  }
}
