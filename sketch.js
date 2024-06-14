let cor;
let posicaohorizontal; // x
let posicaoVertical; // y
let posicaoHorizontal2; // x
let posicaoVertical2; // y

function setup() {
  createCanvas(400, 400);
   background("black");
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 0;
  posicaoVertical = 200;
}

function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical, 50);
 
  posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);
  
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}
