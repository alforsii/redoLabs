class Player {
  constructor(game) {
    this.game = game;
    this.width = 40;
    this.height = 40;
    this.x = canvas.width / 2;
    this.y = canvas.height - this.height - 3;
    this.color = 'blue';
    this.vx = 0;
    this.vy = 0;
    this.controller = {
      left: false,
      right: false,
    };
  }

  keyEvent() {
    document.addEventListener('keydown', event => {
      //   console.log(event.keyCode);

      let keyState = event.type === 'keydown' ? true : false;
      //   console.log('Output for: Player -> keyEvent -> keyState', keyState);
      switch (event.keyCode) {
        case 37:
          this.controller.left = keyState;
          break;
        case 39:
          this.controller.right = keyState;
          break;
      }
    });
    document.addEventListener('keyup', event => {
      let keyState = event.type === 'keyup' ? false : true;
      //   console.log('Output for: Player -> keyEvent -> keyState', keyState);
      switch (event.keyCode) {
        case 37:
          this.controller.left = keyState;
          console.log(
            'Output for: Player -> keyEvent -> this.controller.left',
            this.controller.left
          );
          break;
        case 39:
          this.controller.right = keyState;
          break;
      }
    });
  }

  draw() {
    if (this.controller.left) {
      this.vx -= 1;
    }
    if (this.controller.right) {
      this.vx += 1;
    }

    this.x += this.vx;
    this.vx *= 0.9;

    if (this.x < -this.width) {
      this.x = this.game.canvas.width;
    } else if (this.x > this.game.canvas.width) {
      this.x = -this.width;
    }
    //this is my player
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.game.ctx.fill();
    this.game.ctx.strokeStyle = this.color;
    this.game.ctx.lineWidth = 10;
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.x + 12, this.y);
    this.game.ctx.lineTo(this.x + 12, this.y - 15);
    this.game.ctx.stroke();
    this.game.ctx.beginPath();
    this.game.ctx.moveTo(this.x + 27, this.y);
    this.game.ctx.lineTo(this.x + 27, this.y - 15);
    this.game.ctx.stroke();
  }
}
