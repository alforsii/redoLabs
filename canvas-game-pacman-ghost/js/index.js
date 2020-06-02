window.addEventListener('load', () => {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.font = '18px serif';

  var ghost = {
    x: 0,
    y: 0,
    moveUp: function() {
      this.y -= 25;
    },
    moveDown: function() {
      this.y += 25;
    },
    moveLeft: function() {
      this.x -= 25;
    },
    moveRight: function() {
      this.x += 25;
    },
  };

  function draw(ghost) {
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, ghost.x, ghost.y, 50, 50);
    };
    img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif';
  }

  document.onkeydown = function(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 38:
        if (ghost.y >= 25) ghost.moveUp(); //y > 0 + ghost.y(== 25)
        console.log('up', ghost);
        break;
      case 40:
        if (ghost.y <= 425) ghost.moveDown(); //canvas.height(500) - ghost.y(25) - ghost.height(50)
        console.log('down', ghost);
        break;
      case 37:
        if (ghost.x >= 25) ghost.moveLeft(); // x > 0 + ghost.x(==25)
        console.log('left', ghost);
        break;
      case 39:
        if (ghost.x <= 625) ghost.moveRight(); // x < canvas.width(700) - ghost.x(==25) - ghost.width(50).
        console.log('right', ghost);
        break;
      case 32:
        (ghost.x = 150), (ghost.y = 150);
        break;
    }
    updateCanvas();
  };

  function updateCanvas() {
    ctx.clearRect(0, 0, 1500, 1700);
    ctx.fillText('Ghost_x: ' + ghost.x, 580, 40);
    ctx.fillText('Ghost_y: ' + ghost.y, 580, 60);
    draw(ghost);
  }

  updateCanvas();
});
