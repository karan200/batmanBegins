var batman,batmanIm;
var drop1,drop2,drop3,drop4;
var drop5,drop6,drop7,drop8;
var dropIm;

function preload() {
  batmanIm = loadImage("images.png")
  dropIm = loadImage("drop.jpg")
}

function setup() {
  createCanvas(500,800);
  batman = createSprite(250, 600, 50, 50);
  batman.addImage(batmanIm);

  drop1 = createSprite(200,200,10,10);
  drop1.addImage(dropIm);
  drop1.scale=0.3;

}

function draw() {
  background("green");
  drawSprites();
}
