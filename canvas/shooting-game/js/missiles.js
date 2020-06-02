class Missiles extends Enemy {
  constructor(game, x, y, w, h, color) {
    super(game, x, y, w, h, color);
    this.vy = -1;
  }

  updateMiss(missile) {
    this.draw();
    for (let i = 0; i < missile.length; i++) {
      //   this.vy = -Math.random() * 0.5 + 0.1;
      missile[i].y += this.vy;
      // if missile[i] is going off the left of the screen
      if (missile[i].y < 0) {
        // missile[i].y = -this.height;
        this.game.genMissiles();
      }
      this.game.hitDetect(missile[i], i);
      //   if (missile[i].y <= 0) {
      //     missile.splice(i, 1);
      //   }
    }
  }
}
