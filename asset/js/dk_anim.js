

var canvasWidth;
var canvasHeight;
var spritesheetWidth;
var spritesheetHeight;
var rows;
var cols;
var curRow;
var curCol;
var width;
var height;
var curFrame;
var frameCount;
var x;
var y;
var srcX;
var srcY;
var speed;


var canvas
var ctx;
var character;
var intervalSettings;

mapClearedAnim = {
  canvasId: "dk_win",
  canvasWidth: 280,
  canvasHeight: 280,
  spritesheetWidth: 2380,
  spritesheetHeight: 560,
  rows: 4,
  cols: 17,
  curRow: 0,
  curCol: 0,
  curFrame: 0,
  frameCount: 68,
  x: 0,
  y: 0,
  srcX: 0,
  srcY: 0,
  speed: 0,
  spritesheet: "asset/images/map_cleared.png"
}

allMapsClearedAnim = {
  canvasId: "dk_win",
  canvasWidth: 280,
  canvasHeight: 308,
  spritesheetWidth: 2800,
  spritesheetHeight: 154,
  rows: 1,
  cols: 20,
  curRow: 0,
  curCol: 0,
  curFrame: 0,
  frameCount: 20,
  x: 0,
  y: 0,
  srcX: 0,
  srcY: 0,
  speed: 0,
  spritesheet: "asset/images/all_maps_cleared.png"
}

var animMapCleared;
var animAllMapsCleared;









function updateFrame() {

  curFrame = ++curFrame % frameCount;

  // si on veut déplacer le sprite en horizontal
  // x+=speed; 

  // pay attention here !! curCol and curRow are incremented each time the if is read
  if (++curCol == cols) {
    curCol = 0;
    if (++curRow == rows) {
      curRow = 0;
    }
  }
  srcX = curCol * width;
  srcY = curRow * height;
  ctx.clearRect(x, y, width*2, height*2);
}

function draw() {
  updateFrame();
  ctx.drawImage(character, srcX, srcY, width, height, x, y, width*2, height*2);

}



// anim launcher
/* arguments :
    _animName (string): mapCleared or allMapsCleared
    _intervalValue (int in milliseconds): time between two images
*/
function launchAnim(_animName, _intervalValue) {
  character = new Image();

  switch (_animName) {
    case "mapCleared":
      canvasWidth = mapClearedAnim.canvasWidth;
      canvasHeight = mapClearedAnim.canvasHeight;
      spritesheetWidth = mapClearedAnim.spritesheetWidth;
      spritesheetHeight = mapClearedAnim.spritesheetHeight;
      rows = mapClearedAnim.rows;
      cols = mapClearedAnim.cols;
      curRow = mapClearedAnim.curRow;
      curCol = mapClearedAnim.curCol;
      curFrame = mapClearedAnim.curFrame;
      frameCount = mapClearedAnim.frameCount;
      x = mapClearedAnim.x;
      y = mapClearedAnim.y;
      srcX = mapClearedAnim.srcX;
      srcY = mapClearedAnim.srcY;
      speed = mapClearedAnim.speed;
      canvas = document.getElementById(mapClearedAnim.canvasId);

      character.src = mapClearedAnim.spritesheet;
      break;

  case "allMapsCleared":
    canvasWidth = allMapsClearedAnim.canvasWidth;
    canvasHeight = allMapsClearedAnim.canvasHeight;
    spritesheetWidth = allMapsClearedAnim.spritesheetWidth;
    spritesheetHeight = allMapsClearedAnim.spritesheetHeight;
    rows = allMapsClearedAnim.rows;
    cols = allMapsClearedAnim.cols;
    curRow = allMapsClearedAnim.curRow;
    curCol = allMapsClearedAnim.curCol;
    curFrame = allMapsClearedAnim.curFrame;
    frameCount = allMapsClearedAnim.frameCount;
    x = allMapsClearedAnim.x;
    y = allMapsClearedAnim.y;
    srcX = allMapsClearedAnim.srcX;
    srcY = allMapsClearedAnim.srcY;
    speed = allMapsClearedAnim.speed;
    canvas = document.getElementById(allMapsClearedAnim.canvasId);
    character.src = allMapsClearedAnim.spritesheet;
    break;
  }
  ctx = canvas.getContext("2d");
  width = spritesheetWidth / cols;
  console.log("width: " + width);
  height = spritesheetHeight / rows;
  // canvas.width = canvasWidth;
  // canvas.height = canvasHeight; 
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  switch (_animName) {
    case "mapCleared":
      animMapCleared = setInterval(draw, _intervalValue);
      break;
    case "allMapsCleared":
      animAllMapsCleared = setInterval(draw, _intervalValue);
      break;
  }
}


// this function stops the animation
/* argument : the variable name of the animation to stop
                should be animMapCleared or animAllMapsCleared
*/
function stopAnim(_animName) {
  clearInterval(_animName);
}

// launchAnim("mapCleared", 100);
// launchAnim("allMapsCleared", 100);
