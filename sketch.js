
let y = 100
let y2 = 100
let ballX = 35
let ballY = 35
let xzin = 1
let yzin = -1
speed1 = 5
speed2 = 5


function setup() {
  createCanvas(480, 270);
  
  
}

function draw() {
  background(220);
  frameRate(60);   
  rect (450,y2,10,100);
  fill (255, 204, 100);
  
    
 

  if (keyIsDown(87)){
               y -= 5; 
    
  }
  
  if (keyIsDown(83)){
               y += 5; 
    
  }
  
  



  rect (20, y, 10,100);
  fill (110,220,50);
  
  
  if (keyIsDown(UP_ARROW)){
               y2 -= 5; 
    
  }
  
  if (keyIsDown(DOWN_ARROW)){
               y2 += 5; 
              
  }
  
}