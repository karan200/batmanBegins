var batman,batmanIm;
var drop1,drop2,drop3,drop4;
var drop5,drop6,drop7,drop8;
var dropIm,ground,groundIm;

function preload() {
  batmanIm = loadImage("images.png");
  dropIm = loadImage("drop.jpg");
}

function setup() {
  createCanvas(500,800);
  batman = createSprite(250, 600, 50, 50);
  batman.addImage(batmanIm);

  drop1 = createSprite(100,200,10,10);
  drop1.addImage(dropIm);
  drop1.scale=0.3

  drop2 = createSprite(150,100,10,10);
  drop2.addImage(dropIm);
  drop2.scale=0.3

  drop3 = createSprite(200,120,10,10);
  drop3.addImage(dropIm);
  drop3.scale=0.3

  drop4 = createSprite(250,20,10,10);
  drop4.addImage(dropIm);
  drop4.scale=0.3

  drop5 = createSprite(300,100,10,10);
  drop5.addImage(dropIm);
  drop5.scale=0.3

  drop6 = createSprite(350,150,10,10);
  drop6.addImage(dropIm);
  drop6.scale=0.3

  drop7 = createSprite(400,160,10,10);
  drop7.addImage(dropIm);
  drop7.scale=0.3

  drop8 = createSprite(450,40,10,10);
  drop8.addImage(dropIm);
  drop8.scale=0.3

  ground = createSprite(200,795,600,100);
  ground.shapeColor="brown";

}

function draw() {
  background("green");

  drop1.velocityY=random(5,8);

  if (drop1.isTouching(batman)) {
    drop1.y=200;
  }
  if (drop1.isTouching(ground)) {
    drop1.y=200;
  }
  //end//
  drop2.velocityY=random(5,8);

  if (drop2.isTouching(batman)) {
    drop2.y=200;
  }
  if (drop2.isTouching(ground)) {
    drop2.y=200;
  }
  //end//
  drop3.velocityY=random(5,8);

  if (drop3.isTouching(batman)) {
    drop3.y=200;
  }
  if (drop3.isTouching(ground)) {
    drop3.y=200;
  }
  //end//
  drop4.velocityY=random(5,8);

  if (drop4.isTouching(batman)) {
    drop4.y=200;
  }
  if (drop4.isTouching(ground)) {
    drop4.y=200;
  }
  //end//
  drop5.velocityY=random(5,8);

  if (drop5.isTouching(batman)) {
    drop5.y=200;
  }
  if (drop5.isTouching(ground)) {
    drop5.y=200;
  }
  //end//
  drop6.velocityY=random(5,8);

  if (drop6.isTouching(batman)) {
    drop6.y=200;
  }
  if (drop6.isTouching(ground)) {
    drop6.y=200;
  }
  //end//
  drop7.velocityY=random(5,8);

  if (drop7.isTouching(batman)) {
    drop7.y=200;
  }
  if (drop7.isTouching(ground)) {
    drop7.y=200;
  }
  //end//
  drop8.velocityY=random(5,8);

  if (drop8.isTouching(batman)) {
    drop8.y=200;
  }
  if (drop8.isTouching(ground)) {
    drop8.y=200;
  }
  drawSprites();
}
