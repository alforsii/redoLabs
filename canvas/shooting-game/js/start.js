window.addEventListener('load', () => {
  const newGame = new Game();

  function animate() {
    requestAnimationFrame(animate);
    newGame.start();
  }

  newGame.genMissiles();
  newGame.generateEnemy();
  // console.log('Output for: newGame.enemies', newGame.enemies);
  // console.log('Output for: newGame.missiles', newGame.missiles);
  animate();
});
