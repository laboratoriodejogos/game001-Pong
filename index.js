let y = 220
let y2 = 220
let ballX = 205
let ballY = 225
let direction = [1, 2 ,-1,-2]
let xzin = 0
let yzin = 0
let speedb =0
let speed1 = 7
let speed2 = 7
let ponto1 = 0
let ponto2 = 0
let effect = [0,1,2]
var efeito
var mode = 0;
var game
var pl

var audio1 = new Audio('pong1.ogg')
var audio2 = new Audio('pong2.wav')
var audio3 = new Audio('pong3.wav')
var audio4 = new Audio('pong4.ogg')
var rand = [0,1,2,3]


var som = new Audio('somdefundo.mp3')
som.volume = 0.3
var explosao = new Audio('somexplosao.mp3')
explosao.volume = 0.2


function sons()

{
pl = random(rand);

switch(pl)      
      {
      case 0:
        audio1.play();
        break;
      case 1:
        audio2.play();
        break;
      case 2:
        audio3.play();
        break;
      case 3:
        audio4.play();
      }
pl = random(rand); 
}
function angle()                //angulação da bola ao nascer ser aleatória
{
  xzin = random(direction);
  yzin = random(direction);
  SpeedSign();
}  

function ReAngle()
{
  xzin = random(direction);
  yzin = random(direction);
  SpeedSign();
}
function SpeedSign()
{
  if (xzin*yzin==4||xzin*yzin==-4)
  {
    speedb=speedb/4;
  }
  else if (xzin*yzin==2||xzin*yzin==-2)
  {
    speedb=speedb/1.5;
  }

}

function special()           //modo especial do pong
{
   efeito= random (effect);
  
}

function setup() 
{
  createCanvas(960, 540);
  background(100);
  var normal = createButton("Normal");
  normal.position(419, 570);
  normal.mousePressed(normalMode);
  
  
  function normalMode()
  {
    mode = 1;
    ballX = 475;
    ballY = 265;
    speedb = 3;
    angle();
    ponto1 = 0;
    ponto2 = 0;
    som.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
som.play();
  }
  
  var special = createButton("Special");
  special.position(478,570);
  special.mousePressed(specialMode);
  
  function specialMode()
  {
    mode =2;
    ballX = 475;
    ballY = 265;
    speedb = 3;
    angle();
    ponto1 = 0;
    ponto2 = 0;
    som.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
som.play();
  }
}  
function draw() 
{
 
  
  if (mode == 0)
  {
  textSize(50);
  fill ("white");  
  text("PONG", 420, 200);  
    
  textSize(30);
  fill ("white");
  text("Escolha 1 modo para jogar", 320, 400);
  }  
    
  if(mode==1 || mode==2)
  {  
  special() ;
  background(100);
  frameRate(60);   
  fill (255, 204, 100);
  textSize(32);
  text(ponto2, 530, 30);
  rect (940,y2,10,100);
    
  fill (110,220,50);
  textSize(32);
  text(ponto1, 420, 30);
  rect (10, y, 10,100);
  
  fill (240, 110, 100);
  rect(ballX,ballY,10,10);
  
  rect(480,0,0.5,800)
  
   if (ballX <= 0)        //pontuação do player 2 e colocar a bola ao centro do jogo com a velocidade                               inicial e angulação aleatória    
  {
    angle();
    ponto2 = ponto2 +1;
    ballX = 475;
    ballY = 265;
    speedb = 3;
    explosao.play();
  }
  
  if (ballX >= 980)     //pontuação do player 1 e colocar a bola ao centro do jogo com a velocidade                               inicial e angulação aleatória
  {
    angle();
    ponto1 = ponto1 +1;   
    ballX=475;
    ballY=265;
    speedb = 3;
    explosao.play();
  } 
  
  if (ponto1 == 5 || ponto2 == 5)     //reiniciar a pontuação caso algum player tenha 5 pontos
  {
    ponto1 = 0;
    ponto2 = 0; 
  } 
  
  if (ballY <= 0 || ballY >= 530)    //fazer com que a bola quique no teto e no chão
  {
    
    yzin = yzin * -1;
    if (mode==2)
    {
    switch(efeito)      //3 casos que podem ocorrer com a bolinha para o modo especial do pong
      {
      case 0:
        speedb += 1;
        break;
      case 1:
        xzin = xzin * -1;
        break;
      case 2:
          ballX = 475;
          ballY = 265;
      } 
    }
  }
  
  if(ballX <= 20 && ballY >=y && ballY <= y + 100)      //fazer com que a bola rebata na raquete 1                                                                 aumentando a velocidade a cada rebatida
  {
    
    ReAngle();
    sons();
    
    if (xzin<=0)
    {
      xzin = xzin * -1;
    }
    speedb = speedb + 2
  }
  
   if(ballX >= 930 && ballY >=y2 && ballY <= y2 + 100)  //fazer con que a bola rebata na raquete 2                                                                 aumentando a velocidade a cada rebatida
  {
    ReAngle();
    sons();
    if (xzin>=0)
    {
      xzin = xzin * -1;
    }
    speedb = speedb + 2
  } 
  
  ballX += speedb * xzin;
  ballY += speedb * yzin;

  if (keyIsDown(87))         //mapeamento da tecla W fazendo com que a raquete 1 se mova para cima
  {    
               y -= speed1;  
  }
  
  if (keyIsDown(83))        //mapeamento da tecla S fazendo com que a raquete 1 se mova para baixo
  {
               y += speed1; 
  }
  
  if (y <= 0)              //faz a raquete 1 ter um limite na parte superior
  {
               speed1 = 0; 
               y = 1;
  }
  
  
  if (y >= 439)           //faz a raquete 1 ter um limite na parte inferior
  {
               speed1 = 0; 
               y = 439;
  }
    
  if (keyIsDown(UP_ARROW))    //mapeamento da tecla seta para cima fazendo com que a raquete 2 se mova                                   para cima
  {  
               y2 -= speed2;   
  }
  
  if (keyIsDown(DOWN_ARROW))  //mapemaneto da tecla seta para baixo fazendo com que a raquete 2 se mova                                 para baixo
  {
               y2 += speed2; 
  }
  
  if (y2 <= 0)                //faz a raquete 2 ter um limite na parte superior
  {
               speed2 = 0; 
               y2 = 1;
  }
  
  if (y2 >= 439)            //faz a raquete 2 ter um limite na parte inferior
  {            
               speed2 = 0; 
               y2 = 439;
  }
  
  speed1 = 10
  speed2 = 10
}
}

