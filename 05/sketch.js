//Gota de agua vertices 
var gotav0x = 300
var gotav0y = 20
var gotav1x = 250
var gotav1y = 100
var gotav2x = 350
var gotav2y = 90
var gotav3x = 300
var gotav3y = 20

//Ondas de agua vertice inicial y primer vertice 
var ver0x = 0
var ver0y = 500
var ver1x1 = 25
var ver1y1 = 580
var ver1x2 = 100
var ver1y2 = 580
var ver1x3 = 150
var ver1y3 = 500

//Ondas de agua segundo vertice 

var ver2x1 = 150
var ver2y1 = 500
var ver2x2 = 200
var ver2y2 = 640
var ver2x3 = 280
var ver2y3 = 500

//Ondas de agua tercer vertice (300, 580, 380, 580, 420, 500)

var ver3x1 = 300
var ver3y1 = 580
var ver3x2 = 380
var ver3y2 = 580
var ver3x3 = 420
var ver3y3 = 500

//Ondas de agua cuarto vertice (420, 500, 470, 640, 560, 500)

var ver4x1 = 420
var ver4y1 = 500
var ver4x2 = 470
var ver4y2 = 640
var ver4x3 = 560
var ver4y3 = 500

//Ondas de agua cuarto vertice (560, 500, 610, 580, 690, 500)

var ver5x1 = 560
var ver5y1 = 500
var ver5x2 = 610
var ver5y2 = 580
var ver5x3 = 690
var ver5y3 = 500

var dir = 1
var vel = 2



var miHora;
var misMinutos;
var miSegundo;
var miDia;
var miMes;
var miAno;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  miHora = hour();
  //segundo y minuto son variables que están entre 0 y 59
  misMinutos = minute();
  miSegundo = second();

  //variación de color de fondo según día o noche
  if (miHora > 6 && miHora < 18) {
    fill(252, 243, 207)
    rect(-10, 0, 700, 700)
    noFill();
  } else {
    fill(52, 73, 94)
  }
  rect(-10, 0, 700, 700)
  noFill();


  //Nubes  
  noStroke();
  fill(174, 214, 241)
  ellipse(50, 0, 130, 40)
  noFill();

  noStroke();
  fill(214, 234, 248)
  ellipse(150, 13, 100, 80)
  noFill();

  noStroke();
  fill(214, 234, 248)
  ellipse(100, 13, 90, 40)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(200, 0, 100, 70)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(200, 10, 100, 90)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(250, 10, 100, 40)
  noFill();

  noStroke();
  fill(214, 234, 248)
  ellipse(300, 10, 120, 80)
  noFill();

  noStroke();
  fill(214, 234, 248)
  ellipse(350, 0, 100, 30)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(350, 0, 100, 30)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(400, 10, 100, 90)
  noFill();

  noStroke();
  fill(214, 234, 248)
  ellipse(450, 0, 100, 70)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(510, 13, 90, 60)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(550, 0, 100, 90)
  noFill();

  noStroke();
  fill(174, 214, 241)
  ellipse(500, 13, 100, 40)
  noFill();


  var miNuevoSeg = map(miSegundo, 0, 60, 0, height)

  noStroke();
  fill(52, 152, 219);
  beginShape();
  vertex(gotav0x, gotav0y + miNuevoSeg);
  bezierVertex(gotav1x, gotav1y + miNuevoSeg, gotav2x, gotav2y + miNuevoSeg, gotav3x, gotav3y + miNuevoSeg);
  endShape();
  noFill();


  var miNuevoMinuto = map(misMinutos, 0, 60, 0, 500)

  //Ondas de agua  
  stroke(52, 152, 219);
  strokeWeight(7);
  beginShape();
  vertex(ver0x, ver0y);
  bezierVertex(ver1x1, ver1y1 - misMinutos, ver1x2, ver1y2 - misMinutos, ver1x3, ver1y3 - misMinutos)
  bezierVertex(ver2x1, ver2y1 - misMinutos, ver2x2, ver2y2 - misMinutos, ver2x3, ver2y3 - misMinutos)
  bezierVertex(ver3x1, ver3y1 - misMinutos, ver3x2, ver3y2 - misMinutos, ver3x3, ver3y3 - misMinutos)
  bezierVertex(ver4x1, ver4y1 - misMinutos, ver4x2, ver4y2 - misMinutos, ver4x3, ver4y3 - misMinutos)
  bezierVertex(ver5x1, ver5y1 - misMinutos, ver5x2, ver5y2 - misMinutos, ver5x3, ver5y3 - misMinutos)
  endShape();

  stroke(174, 214, 241);
  strokeWeight(3);
  beginShape();
  vertex(ver0x - 50, ver0y);
  bezierVertex(ver1x1 - 50, ver1y1 - misMinutos, ver1x2 - 50, ver1y2 - misMinutos, ver1x3 - 50, ver1y3 - misMinutos)
  bezierVertex(ver2x1 - 50, ver2y1 - misMinutos, ver2x2 - 50, ver2y2 - misMinutos, ver2x3 - 50, ver2y3 - misMinutos)
  bezierVertex(ver3x1 - 50, ver3y1 - misMinutos, ver3x2 - 50, ver3y2 - misMinutos, ver3x3 - 50, ver3y3 - misMinutos)
  bezierVertex(ver4x1 - 50, ver4y1 - misMinutos, ver4x2 - 50, ver4y2 - misMinutos, ver4x3 - 50, ver4y3 - misMinutos)
  bezierVertex(ver5x1 - 50, ver5y1 - misMinutos, ver5x2 - 50, ver5y2 - misMinutos, ver5x3 - 50, ver5y3 - misMinutos)
  endShape();





}