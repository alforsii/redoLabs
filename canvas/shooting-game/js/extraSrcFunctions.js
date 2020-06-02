// // get the four side coordinates of the rectangle
// function bottom() {
//   return this.y + this.height;
// }
// function left() {
//   return this.x;
// }
// function right() {
//   return this.x + this.width;
// }
// function top() {
//   return this.y;
// }

// function rectCollision(otherRect) {
//   if (
//     this.top() > otherRect.y + otherRect.height || //otherBottom
//     this.right() < otherRect.x || //otherLeft
//     this.bottom() < otherRect.y || //otherTop
//     this.left() > otherRect.x + otherRect.width //otherRight
//   ) {
//     return false;
//   }

//   return true;
// }

//=========================== the same code ==============
// bottom() {
//     return this.y + this.height;
//   }
//   left() {
//     return this.x;
//   }
//   right() {
//     return this.x + this.width;
//   }
//   top() {
//     return this.y;
//   }

//   rectCollision(otherRect) {
//     if (
//       this.top() > otherRect.y + otherRect.height || //otherBottom
//       this.right() < otherRect.x || //otherLeft
//       this.bottom() < otherRect.y || //otherTop
//       this.left() > otherRect.x + otherRect.width //otherRight
//     ) {
//       return false;
//     }

//     return true;
//   }
