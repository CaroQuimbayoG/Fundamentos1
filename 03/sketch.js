var R = 7
var G = 158
var B = 61
var x = 0
var y = 80
var dir = 1
//La velocidad debe ser un número impar siempre
var vel = 9
var xc = 0
var yc = 74
var velc = 34.1

function setup() {
  createCanvas(850, 550);
  frameRate(3)
  background(220);

}

function draw() {
  background(255)
  //

  R = 7
  G = 158
  B = 61

  for (var x1 = 0; x1 <= height; x1 = x1 + 10) {

    //fondo verde degradado
    noStroke();
    fill(255,255,255)
    rect(0, x1, width, 10);
    R = R + 3.1
    G = G + 1.2
    B = B + 2.4

  }

  // Niveles cafés
  noStroke();
  fill(0);
  //Divir el canvas en tres partes - tres tercios y restarle el tamaño para que el ultimo no quede fuera 
  // del canvas
  rect(0, (height / 3) - 35, width, 35);

  noStroke();
  fill(0);
  //Divir el canvas en tres partes y multiplicarlo por dos 
  rect(0, (height / 3 * 2) - 35, width, 35);

  noStroke();
  fill(0);
  //Divir el canvas en tres partes y multiplicarlo por tres para la tercera linea con la misma distancia
  rect(0, (height / 3 * 3) - 35, width, 35);


  // recuadro que camina 
  stroke (2)
  fill(255, 255, 255);
  rect(x, y, 38, 40);

  if (x % 2) {
    //pies del reacuadro que camina
    stroke(0)
    strokeWeight(8);
    //punto superior izquierda del cuadrado
    //point(x + 2, y + 40);
    //punto superior derecho del cuadrado
    //point(x + 36, y + 40);
    //Punto inferior derecho del cuadrado
    //point(x + 36, y + 68);
    // punto inferior izquierda del cuadrado
    //point(x + 2, y + 68);

    strokeWeight(2);
    noFill();
    beginShape();
    vertex(x + 2, y + 40);
    bezierVertex(x + 36, y + 40, x + 36, y + 68, x + 2, y + 68);
    endShape();
    
    // de lo contrario
  } else {
    
       //pies del reacuadro que camina
    stroke(0)
    strokeWeight(8);
    //punto superior derecho del cuadrado
    //point(x + 36, y + 40);
    //punto superior izquierda del cuadrado
    //point(x + 2, y + 40);
    // punto inferior izquierda del cuadrado
    //point(x + 2, y + 68);
    //Punto inferior derecho del cuadrado
    //point(x + 36, y + 68);

    strokeWeight(2);
    noFill();
    beginShape();
    vertex(x + 36, y + 40);
    bezierVertex(x + 2, y + 40, x + 2, y + 68, x + 36, y + 68);
    endShape();
  
  }
  
// indicación para subir (saltar)
  x = x + dir * vel;
  if (x > 258 && x < 286) {
    y = y - 40
    
  }
  if (x > 258 && x < 315) {
    stroke (0,0,0)
    strokeWeight (2)
    line (x + 10, y - 5, x + 20, y - 25) 
    line (x - 5, y - 5, x - 5, y - 25) 
    line (x - 15, y - 5, x -30, y - 25) 
    
  }
  
  
// indicación para bajar (caer)
   if (x > 287 && x < 315) {
    y = y + 40
  
   }
  
//indicación para aumentar velocidad por persecusión
   if (x >= 210){
 vel = 29
   }
  
  if (x > width) {
    x = 0;
    y = y + 183;
    // Intento para modificar el espacio del cuadro en la tercera línea 
    //if (y > 195) {
    //x = x+1;
    //y = y + 140; 
  }

if(frameCount > 30 && frameCount < 1500){
  
  fill (255, 255, 255)
 ellipse (xc,yc,148,148);
}
  
  if (frameCount > 30 && frameCount < 1500) {
    xc = xc + dir * velc;
}
   if (xc > width) {
    xc = 0
    yc = yc + 183;
   }
  
if (frameCount <= 105){
 saveCanvas("miFlipbooksoide" + frameCount, 'jpg');
}
}