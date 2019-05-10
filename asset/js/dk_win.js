var canvasWidth = 154; 
 var canvasHeight = 154;
 
 var spriteWidth = 2800; 
 var spriteHeight = 154; 
 
 var rows = 1; 
 var cols = 20; 
 
 var trackRight = 0; 
 var trackLeft = 1; 
 
 var width = spriteWidth/cols; 
 var height = spriteHeight/rows; 
 
 var curFrame = 0; 
 var frameCount = 20; 
 
 var x=0;
 var y=0; 
 
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
 character.src = "asset/images/all_maps_cleared.png";
 
 function updateFrame(){
 curFrame = ++curFrame % frameCount; 
 srcX = curFrame * width; 
 ctx.clearRect(x,y,width,height);	
 
 if(left && x>0){
 srcY = trackLeft * height; 
 x-=speed; 
 }
 if(right && x<canvasWidth-width){
 srcY = trackRight * height; 
 x+=speed; 
 }
 }
 
 function draw(){
 updateFrame();
 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
 }
 
 
 function moveLeft(){
 left = true; 
 right = false; 
 }
 
 function moveRight(){
 left = false;
 right = true; 
 }
 
 setInterval(draw,100);