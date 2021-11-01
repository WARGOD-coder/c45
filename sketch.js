var player
var block1,block2,block3,moveblock,redblock
var gun,gun1
var powerup
var guard
var bi,playerimg,guardimg,guardshoot,playerforward,playerback,gun1img
var bullet,bulletimg,bulletgroup

function preload(){
bi = loadImage("Images/bi.jpg")
playerimg = loadImage("Images/robot_still.png")
playerforward = loadImage("Images/robot_forward.png")
playerback = loadImage("Images/robot_backward.png")
guardimg = loadImage("Images/guardwithgun.png")
guardshoot = loadImage("Images/guardshooting.png")
gun1img = loadImage("Images/E-5.png")
bulletimg = loadImage("Images/laser.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  edges = createEdgeSprites()
  
  block1=createSprite(300,height-630,width-900,30) 

  block2=createSprite(width-330,height-530,width-900,30)

  moveblock=createSprite(765,380,350,30)

  redblock=createSprite(765,490,400,30)
  redblock.velocityX = 4

  block3=createSprite(50,750,175,30)

  player=createSprite(425,65,20,20)
  player.scale=0.6
  player.addImage("players",playerimg)
  player.addImage("playerf",playerforward)
  player.addImage("playerb",playerback)


  guard=createSprite(1405,700,20,20)
  guard.addImage("guard",guardimg)
  guard.addImage("guardshoot",guardshoot)

  gun=createSprite(40,385,20,20)  

  gun1=createSprite(1500,325,20,20)
  gun1.addImage("gun1",gun1img)
  gun1.scale=0.7

  bulletgroup=createGroup()

  powerup=createSprite(1515,890,20,20)
  redblock.shapeColor="red"
  block3.shapeColor= "lightblue"
  block2.shapeColor= "lightblue"
  block1.shapeColor= "lightblue"
}

function draw() {
  background(bi);  
  fill("white")
  text("X "+mouseX+" Y"+mouseY,mouseX,mouseY)
  redblock.bounceOff(edges)
  
  spawnbullets()

  drawSprites()
}
function spawnbullets(){
  if( frameCount % 100 === 0 ){
   bullet = createSprite(1430,307,10,10)
   bullet.velocityX = -7
   bullet.addImage("bullet",bulletimg)
   bullet.lifetime = 300
   bulletgroup.add(bullet)
  }
}

//sprite.visible= false