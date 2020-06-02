var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');
var rss = document.getElementById('rss');
var rssCTX = rss.getContext('2d');
// There are three functions that draw rectangles on the canvas:

// fillRect(x, y, width, height); //Draws a filled rectangle.
// strokeRect(x, y, width, height); //Draws a rectangular outline.
// clearRect(x, y, width, height); //Clears the specified rectangular area, making it fully transparent.

// //1.
// draw rectangle:
// ****************************

ctx.fillStyle = 'purple';
ctx.fillRect(260, 260, 30, 30);
rssCTX.fillStyle = 'orange';
rssCTX.fillRect(25, 25, 250, 250);

// beginPath()    // Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up.
// closePath()    // Closes the path so that future drawing commands are once again directed to the context.
// stroke()       // Draws the shape by stroking its outline.
// fill()         // Draws a solid shape by filling the path's content area.
// moveTo(x, y)  // Moves the pen to the coordinates specified by x and y.
// lineTo(x, y)    // Draws a line from the current drawing position to the position specified by x and y.

// //2.
// draw path
// ****************************

// start the path
ctx.beginPath();
// starting position is x=50, y=50
ctx.moveTo(50, 50);
// draw the line that has final coordinates x=250, y=50
ctx.lineTo(250, 50);

// .stroke() executes the drawing
ctx.stroke();

// start a new line from these coordinates: x=250, y=50
ctx.moveTo(250, 50);
// draw the line that has final coordinates x=250, y=100
ctx.lineTo(250, 200);
// .stroke() executes the drawing
ctx.stroke();

// close the path
ctx.closePath();

// //3.
// draw path
// *
function draw() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);

  ctx.lineTo(100, 25);
  // ctx.stroke();
  // ctx.close();
  ctx.fill();
}

// When you call fill(), any open shapes are closed automatically, so you don’t have to call closePath().
//  This is not the case when you call stroke().
draw();

// // 4. Arcs
// arc(x, y, radius, startAngle, endAngle, anticlockwise)
// // Draws an arc which is centered at (x, y) position with
// // radius starting at startAngle and ending at endAngle going
// // in the given direction indicated by anticlockwise (defaulting to clockwise).
// arcTo(x1, y1, x2, y2, radius)
// Draws an arc with the given control points and radius,
// connected to the previous point by a straight line.

// Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression:

// radians = (Math.PI/180)*degrees.

// draw circle
// ****************************

ctx.beginPath();
// ctx.arc(x, y, radius, startAngle, endAngle)
ctx.arc(150, 170, 75, 0, Math.PI * 2);
ctx.lineWidth = 20;
ctx.strokeStyle = 'green'; // !

ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = 'red'; // !
// fills the inner circle with red color
ctx.fill();
ctx.closePath();

// fillStyle = color; <== Sets the style used when filling shapes
// strokeStyle = color; <== Sets the style for shapes’ outlines
rssCTX.beginPath();
rssCTX.arc(100, 200, 25, 0, Math.PI * 2);
rssCTX.fillStyle = 'white';
rssCTX.fill();

rssCTX.closePath();

rssCTX.beginPath();
// rssCTX.arc(x, y, radius, startAngle, endAngle)
rssCTX.arc(70, 230, 100, 0, 4.7, true);

rssCTX.lineWidth = 30;
rssCTX.strokeStyle = 'white'; // !

rssCTX.stroke();

rssCTX.closePath();
rssCTX.beginPath();
// rssCTX.arc(x, y, radius, startAngle, endAngle)
rssCTX.arc(70, 230, 150, 0, 4.7, true);

rssCTX.lineWidth = 30;
rssCTX.strokeStyle = 'white'; // !

rssCTX.stroke();

rssCTX.closePath();
rssCTX.beginPath();
// rssCTX.arc(x, y, radius, startAngle, endAngle)
rssCTX.arc(250, 50, 5, 0, 1, true);

rssCTX.lineWidth = 10;
rssCTX.strokeStyle = 'white'; // !

rssCTX.stroke();

rssCTX.closePath();
