window.addEventListener('load', () => {
  start();
  moleImg.onclick = () => {
    //onclick
    //remove the mole
    moleImg.remove();
    //show explosion
    randomBox.appendChild(explosionImg);
    //add score
    newScore += 5;
    //update score
    updateScore();
    //switch status
    ifMoleWhacked = true;
  };
});
