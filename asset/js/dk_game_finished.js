
 //Width and height for our canvas
 var canvasWidth = 200; 
 var canvasHeight = 840;
 
 //the with and height of our spritesheet
 var spriteWidth = 2380; 
 var spriteHeight = 840; 
 
 //we are having two rows and 8 cols in the current sprite sheet
 var rows = 1; 
 var cols = 17; 
 
 //The 0th (first) row is for the mapCleared movement
 var firstRowMapCleared = 0; 
 
 //4st (fifth) row for the allMapsCleared movement (counting the index from 0)
 var firstRowAllMapsCleared = 4; 
 
 //To get the width of a single sprite we divided the width of sprite with the number of cols
 //because all the sprites are of equal width and height 
 var width = spriteWidth/cols; 
 
 //Same for the height we divided the height with number of rows 
 var height = spriteHeight/rows; 
 
 //Each row contains 17 frame and at start we will display the first frame (assuming the index from 0)
 var curFrame = 0; 
 
 //The total number of frames is 68 
 //assuming we're playing map cleared animation by default 
 var frameCount = 17; 
 
 //x and y coordinates to render the sprite 
 var x=0;
 var y=0; 
 
 //x and y coordinates of the canvas to get the single frame 
 var srcX=0; 
 var srcY=0; 
 
 //which movement are we playing ?
 var playingAllMapsCleared = false;
 
                  //Assuming that at start the character will play gameCleared animation
 var playingMapCleared = true;
 
 //Speed of the movement 
 var speed = 12; 
 
 //Getting the canvas 
 var canvas = document.getElementById('dkGameFinished');
 
 //setting width and height of the canvas 
 canvas.width = canvasWidth;
 canvas.height = canvasHeight; 
 
 //Establishing a context to the canvas 
 var ctx = canvas.getContext("2d");
 
 //Creating an Image object for our character 
 var character = new Image(); 
 
 //Setting the source to the image file 
 character.src = "asset/images/dk_end_game.png";
 
  function updateFrame(){
    //Updating the frame index 
    curFrame = ++curFrame % frameCount; 
    //Calculating the x coordinate for spritesheet 
    srcX = curFrame * width; 
    // clear the already drawn sprite before rendering the new sprite
    ctx.clearRect(x,y,width,height);	
  
    if(playingAllMapsCleared){
      srcY = firstRowAllMapsCleared * height; 
      var frameCount = 20; 
      // we can move to the left with this ;)
      //  x-=speed; 
    }
    if(playingMapCleared){
      srcY = firstRowMapCleared * height; 
      var frameCount = 68; 
      // we can move to the right with this
       x+=speed; 
    }
  }
 
  function draw(){
    //Update the frame 
    updateFrame();
    //Draw the image 
    ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
  }
  
 
  function allMapsCleared(){
    playingAllMapsCleared = true; 
    playingMapCleared = false; 
  }
 
  function mapCleared(){
    playingAllMapsCleared = false;
    playingMapCleared = true; 
  }
 
  //  call the draw function repeatedly to continue rendering the sprites on the canvas
  setInterval(draw,100);
  