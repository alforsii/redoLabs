class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
  }

  gameLoop() {
    setInterval(() => {
      this.clear();
      this.ball.drawBall();
      this.paddle.drawPaddle();
      this.paddle.keyListener();
      this.collision();
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  collision() {
    let distance = this.getDistance();
    //Collision with top of paddle and bottom of the ball
    if (
      this.ball.y + this.ball.radius > this.paddle.pos.y && //bottomOfBall > paddleTop
      this.ball.x - this.ball.radius < this.paddle.pos.x + this.paddle.width && //lestSideBall < rightSidePaddle
      this.ball.x + this.ball.radius > this.paddle.pos.x //rightSideBall > leftSidePaddle
    )
      this.ball.vy *= -1;

    if (
      this.ball.x - this.ball.radius <
      this.paddle.pos.x + this.paddle.width
    ) {
      vx *= 1;
      vy *= 3;
    }
    if (this.ball.x + this.ball.radius > this.paddle.pos.x) {
      vx *= -1;
      vy *= 3;
    }
    // need to do 2 sides of paddle with ball
    // if (
    //   this.ball.x - this.ball.radius <
    //     this.paddle.pos.x + this.paddle.pos.width &&
    //   this.ball.y + this.ball.radius > this.paddle.pos.y &&
    //   this.ball.y + this.ball.radius < this.paddle.pos.y + this.paddle.height
    // ) {
    //   this.ball.vy *= -1;
    //   this.ball.vx *= -1;
    // }
    // if (
    //   this.ball.x + this.ball.radius > this.paddle.pos.x &&
    //   this.ball.y + this.ball.radius > this.paddle.pos.y &&
    //   this.ball.y + this.ball.radius < this.paddle.pos.y + this.paddle.height
    // ) {
    //   this.ball.vy *= -1;
    //   this.ball.vx *= -1;
    // }
  }
}
