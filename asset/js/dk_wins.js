var canvasWidth = 140;
var canvasHeight = 140;

var spritesheetWidth = 2380;
var spritesheetHeight = 560;

var rows = 4;
var cols = 17;

//  var trackRight = 0; 
//  var trackLeft = 1; 
var curRow = 0;
var curCol = 0;

var width = spritesheetWidth / cols;
var height = spritesheetHeight / rows;

var curFrame = 0;
var frameCount = 20;

var x = 0;
var y = 0;

var srcX;
var srcY;

var left = false;
var right = true;

var speed = 0;

var canvas = document.getElementById('dk_win');
canvas.width = canvasWidth;
canvas.height = canvasHeight;

var ctx = canvas.getContext("2d");

var character = new Image();
character.src = "asset/images/map_cleared.png";

var intervalSettings;

function updateFrame() {
  
  curFrame = ++curFrame % frameCount;

  //  if(left && x>0){
  //  srcY = trackLeft * height; 
  //  x-=speed; 
  //  }
  //  if(right && x<canvasWidth-width){
  //  srcY = trackRight * height; 
  //  x+=speed; 
  //  }
  // if (curFrame) {
  //   console.log(curFrame);
  // }
  ;

  if (++curCol == cols) {
    curCol = 0;
    if (++curRow == rows) {
      curRow = 0;
    }
  }
  console.log('col: ' + curCol + ' row: ' + curRow);
  srcX = curCol * width;
  srcY = curRow * height;
  ctx.clearRect(x, y, width, height);
}

function draw() {
  updateFrame();
  ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}


//  function moveLeft(){
//  left = true; 
//  right = false; 
//  }

//  function moveRight(){
//  left = false;
//  right = true; 
//  }
function launchAnim(/*here will come animationName and interval value*/) {
  intervalSettings = setInterval(draw, 50);
} 

function stophAnim(/*here will come animationName*/) {
  clearInterval(intervalSettings);
} 

launchAnim();