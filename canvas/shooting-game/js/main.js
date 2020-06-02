class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    // this.enemy = new Enemy(this);
    // this.missiles = new Missiles(this);
    this.player = new Player(this);
    this.enemies = [];
    this.missiles = [];
    this.missNum = 15;
    this.score = 0;
    this.life = 3;
    this.image = new Image();
  }

  start() {
    this.clear();
    this.player.keyEvent();
    this.background();
    this.player.draw();
    this.enemies.forEach(enemy => {
      enemy.update(this.enemies);
    });
    this.missiles.forEach((m, mi) => {
      m.updateMiss(this.missiles);
    });
    // if (newGame.score < 5) {
    //   newGame.gameOver();
    // }
  }
  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  background() {
    this.image.src = './img/titanic-galaxies.jpg';
    this.ctx.drawImage(this.image, 0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'white';
    this.ctx.font = '35px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 50, 50);
  }
  generateEnemy() {
    this.enemies = [];
    let numberOfEnemies = Math.floor(Math.random() * 20 + 5);
    for (let i = 0; i < numberOfEnemies; i++) {
      let x = Math.floor(Math.random() * (this.canvas.width - 10) + 10);
      let y = -30;
      // if (i !== 0) {
      //   for (let j = 0; j < this.enemies.length; j++) {
      //     //here we're calling class Enemy method for collision detect
      //     let distance = this.enemies.getDistance(
      //       x,
      //       y,
      //       this.enemies[i].x,
      //       this.enemies[i].y
      //     );
      //     if (
      //       distance - this.enemies[i].height <= 0 ||
      //       distance - this.enemies[i].width <= 0
      //     ) {
      //       x = Math.floor(Math.random() * (this.canvas.width - 10) + 10);
      //       y = -30;
      //       j = 0;
      //     }
      //   }
      // }

      this.enemies.push(new Enemy(this, x, y, 40, 30, 'red'));
    }
  }

  genMissiles() {
    this.missiles = [];
    let missArr = [this.player.x + 9, this.player.x + 23];
    for (let i = 0; i < this.missNum; i++) {
      let x = missArr[Math.floor(Math.random() * missArr.length)];
      let y = this.player.y - 15;
      this.missiles.push(new Missiles(this, x, y, 7, 7, 'green'));
    }
  }
  hitDetect(m, mi) {
    for (let i = 0; i < this.enemies.length; i++) {
      let e = this.enemies[i];
      if (
        m.x + m.width >= e.x &&
        m.x <= e.x + e.width &&
        m.y >= e.y &&
        m.y <= e.y + e.height
      ) {
        // this.missiles.splice(this.missiles[mi], 1);
        this.enemies.splice(i, 1);
        this.score++;
      }
      if (this.enemies.length === 0) {
        this.generateEnemy();
      }
    }
  }

  gameOver() {
    this.clear();
    this.ctx.textAlign = 'center';
    this.ctx.fillStyle = 'black';
    this.ctx.font = '35px Arial';
    this.ctx.fillText(`Score: ${this.score}`, 100, 50);
    this.ctx.fillStyle = 'red';
    this.ctx.font = '75px Arial';
    this.ctx.fillText(
      `Game Over`,
      this.canvas.width / 2,
      this.canvas.height / 2
    );
  }
}
