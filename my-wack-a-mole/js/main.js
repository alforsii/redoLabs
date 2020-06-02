//get reference to the box
const box = document.getElementsByClassName('col');
//center Tag where we need to insert score Tag as firstChild
const centerTag = document.querySelector('center');
//Create score tag
let score = document.createElement('h2');
score.innerHTML = 'Score: 20';
//Insert score tag into center Tag:
//1.insert by reference
// centerTag.insertBefore(score, centerTag.firstChild);
//2.or inserts using direct id name without reference.
centerTag.insertBefore(score, gameBoard);
//set status for score update.
let ifMoleWhacked = false;
//Make random box global to be able to remove and insert explosion to the same box.
let randomBox;
//Starting score.
let newScore = 20;

function start() {
  if (!ifMoleWhacked) {
    //decrease score if mole survived.
    newScore -= 1;
  }
  updateScore();
  //remove the mole to make disappear for a while
  moleImg.remove();
  let randomTime = Math.floor(Math.random() * 3000);
  if (randomTime > 2500 || randomTime < 250) {
    setTimeout(start, randomTime);
    return;
  }
  let index = Math.floor(Math.random() * box.length);
  randomBox = box[index];
  //switch the status for next cycle
  ifMoleWhacked = false;
  //remove explosion after it's being explode before next mole appearance
  explosionImg.remove();
  //Create the mole in random box all the time.
  randomBox.appendChild(moleImg);
  //set timeOut to callback start() after some time.
  setTimeout(start, randomTime);
}

//update score
function updateScore() {
  score.innerHTML = `Score: ${newScore}`;
}
// // background added through CSS.
// function background() {
//   for (let i = 0; i <= box.length; i++) {
//     let bgImage = new Image();
//     bgImage.src = './img/mole-dom2.gif';
//     bgImage.style.width = '330px';
//     bgImage.style.height = '200px';
//     box[i].appendChild(bgImage);
//   }
// }
