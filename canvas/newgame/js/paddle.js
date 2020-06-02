class Paddle {
  constructor(game) {
    this.game = game;
    this.width = 150;
    this.height = 30;
    this.pos = {
      x: this.game.width / 2 - this.width / 2,
      y: this.game.height - this.height - 5,
    };
    this.vx = 0;
    this.controller = { left: false, right: false };
  }

  drawPaddle() {
    //this is our controller command to increase/decrease the x velocity
    if (this.controller.left) this.vx -= 2;
    if (this.controller.right) this.vx += 2;
    //here is the move on x axes
    this.pos.x += this.vx;
    this.vx *= 0.9; //this is our friction to make our paddle move smoothly
    //to keep the paddle within the our canvas, so it won't go out of the border
    if (this.pos.x <= 0) this.pos.x = 0;
    if (this.pos.x >= this.game.width - this.width)
      this.pos.x = this.game.width - this.width;
    //our paddle shape/image
    this.game.ctx.fillStyle = '#0f0';
    this.game.ctx.beginPath();
    this.game.ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    this.game.ctx.closePath();
    this.game.ctx.fill();
  }

  //key listeners to keep track of our paddle status
  keyListener() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      const keyStatus = event.type === 'keydown' ? true : false;
      event.preventDefault();
      if (key === 37) {
        this.controller.left = keyStatus;
      }
      if (key === 39) {
        this.controller.right = keyStatus;
      }
    });
    document.addEventListener('keyup', event => {
      const key = event.keyCode;
      const keyStatus = event.type === 'keyup' ? false : true;
      event.preventDefault();
      if (key === 37) {
        this.controller.left = keyStatus;
      }
      if (key === 39) {
        this.controller.right = keyStatus;
      }
    });
  }
}
