var jack,jackandando;
var solo,soloimage;
var leftinvisible,rightinvisible;

function preload(){
  //imagens pré-carregadas
  jackandando = loadAnimation("runner-1.png","runner-2.png");
  soloimage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  solo = createSprite(200,200);
  solo.addImage(soloimage);
  
  jack = createSprite(200,340,30,30);
  jack.addAnimation("andando",jackandando);
  jack.scale = 0.05
  rightinvisible = createSprite(35,200,50,400)
  leftinvisible = createSprite(365,200,50,400)
  rightinvisible.visible = false;
  leftinvisible.visible = false;

}

function draw() {
  background(0);
  jack.x = World.mouseX;
  solo.velocityY = 4;
  edges = createEdgeSprites();
  jack.collide(rightinvisible);
  jack.collide(leftinvisible);
  if (solo.y > 400){  
    solo.y = height/2           

  }
  drawSprites();
}
