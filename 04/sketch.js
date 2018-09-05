var posXbot1 = 10;
var posYbot1 = 10;
var tambot1 = 30;

var posXbot2 = 60;
var posYbot2 = 10;
var tambot2 = 30;


var posXbot3 = 110;
var posYbot3 = 10;
var tambot3 = 30;

//Botón 4 variables - Aun no las uso
var nposXbot4 = 160;
var nposYbot4 = 10;
var ntambot4 = 30;

//Botón 5 variables - Aun no las uso
var nposXbot5 = 210;
var nposYbot5 = 10;
var ntambot5 = 30;

//Botón 6 variables - Aun no las uso
var nposXbot6 = 260;
var nposYbot6 = 10;
var ntambot6 = 30;

//Botón 7 variables - Aun no las uso
var nposXbot7 = 310;
var nposYbot7 = 10;
var ntambot7 = 30;

//Botón 8 variables - Aun no las uso
var nposXbot8 = 360;
var nposYbot8 = 10;
var ntambot8 = 30;

//Botón 9 variables - Aun no las uso
var nposXbot9 = 410;
var nposYbot9 = 10;
var ntambot9 = 30;

//Botón 10 variables - Aun no las uso
var nposXbot10 = 460;
var nposYbot10 = 10;
var ntambot10 = 30;

//Botón 11 variables - Aun no las uso
var nposXbot11 = 510;
var nposYbot11 = 10;
var ntambot11 = 30;

//Botones de color 

var posXbot4 = 10;
var posYbot4 = 60;
var tambot4 = 30;

var posXbot5 = 10;
var posYbot5 = 110;
var tambot5 = 30;

//Botón de color - Aún no lo uso
var posXbot6 = 10;
var posYbot6 = 160;
var tambot6 = 30;

//Botón de color - Aún no lo uso
var posXbot7 = 10;
var posYbot7 = 210;
var tambot7 = 30;

//Botón de color - Aún no lo uso
var posXbot8 = 10;
var posYbot8 = 260;
var tambot8 = 30;

//Botón de color - Aún no lo uso
var posXbot9 = 10;
var posYbot9 = 310;
var tambot9 = 30;

//Botón de color - Aún no lo uso
var posXbot10 = 10;
var posYbot10 = 360;
var tambot10 = 30;

//Botón de color - Aún no lo uso
var posXbot11 = 10;
var posYbot11 = 410;
var tambot11 = 30;

//Botón de color - Aún no lo uso
var posXbot12 = 10;
var posYbot12 = 460;
var tambot12 = 30;

//Botón de color - Aún no lo uso
var posXbot13 = 10;
var posYbot13 = 510;
var tambot13 = 30;

var herramienta = 1
var hcolor = 1
var frame = 1



function setup() {
  createCanvas(600, 600);
  background(249, 244, 244);
}

function draw() {


  //BOTONES PARA HERRAMIENTAS
  stroke(0)
  fill(255, 255, 255)
  rect(posXbot1, posYbot1, tambot1, tambot1)
  noFill()

  fill(255, 255, 255)
  rect(posXbot2, posYbot2, tambot2, tambot2)
  triangle(posXbot2 + 3, posYbot2 + 10, posXbot2 + 13, posYbot2 + 20, posXbot2 + 3, posYbot2 + 20);
  triangle(posXbot2 + 17, posYbot2 + 20, posXbot2 + 27, posYbot2 + 10, posXbot2 + 27, posYbot2 + 20);
  triangle(posXbot2 + 15, posYbot2 + 18, posXbot2 + 4, posYbot2 + 8, posXbot2 + 25, posYbot2 + 8, )
  noFill()


  fill(255, 255, 255)
  rect(posXbot3, posYbot3, tambot3, tambot3)
  strokeWeight(2)
  point(posXbot3 + 4, posYbot3 + 4);
  point(posXbot3 + 4, posYbot3 + 10);
  point(posXbot3 + 4, posYbot3 + 2);
  point(posXbot3 + 2, posYbot3 + 13);
  point(posXbot3 + 8, posYbot3 + 5);
  point(posXbot3 + 5, posYbot3 + 16);
  point(posXbot3 + 12, posYbot3 + 8);
  point(posXbot3 + 8, posYbot3 + 19);
  point(posXbot3 + 16, posYbot3 + 3);
  point(posXbot3 + 3, posYbot3 + 22);
  point(posXbot3 + 20, posYbot3 + 7);
  point(posXbot3 + 7, posYbot3 + 25);
  point(posXbot3 + 24, posYbot3 + 6);
  point(posXbot3 + 6, posYbot3 + 28);
  point(posXbot3 + 28, posYbot3 + 9);
  point(posXbot3 + 9, posYbot3 + 29);
  point(posXbot3 + 8, posYbot3 + 8);
  point(posXbot3 + 11, posYbot3 + 11);
  point(posXbot3 + 12, posYbot3 + 12);
  strokeWeight(1)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot4, nposYbot4, ntambot4, ntambot4)
  noFill()
  ellipse(nposXbot4 + 16, nposYbot4 + 15, ntambot4 - 15, ntambot4 - 15)
  ellipse(nposXbot4 + 11, nposYbot4 + 20, ntambot4 - 15, ntambot4 - 15)
  ellipse(nposXbot4 + 21, nposYbot4 + 20, ntambot4 - 15, ntambot4 - 15)


  fill(255, 255, 255)
  rect(nposXbot5, nposYbot5, ntambot5, ntambot5)
  ellipse(nposXbot5 + 15, nposYbot5 + 15, 25, 25)
  ellipse(nposXbot5 + 15, nposYbot5 + 15, 20, 20)
  ellipse(nposXbot5 + 15, nposYbot5 + 15, 15, 15)
  ellipse(nposXbot5 + 15, nposYbot5 + 15, 10, 10)
  ellipse(nposXbot5 + 15, nposYbot5 + 15, 5, 5)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot6, nposYbot6, ntambot6, ntambot6)
  rect(nposXbot6 + 11, nposYbot6 + 1.5, 8, 8)
  rect(nposXbot6 + 1.5, nposYbot6 + 11, 8, 8)
  rect(nposXbot6 + 20.5, nposYbot6 + 11, 8, 8)
  rect(nposXbot6 + 11, nposYbot6 + 20.5, 8, 8)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot7, nposYbot7, ntambot7, ntambot7)
  line(nposXbot7 + 30, nposYbot7, nposXbot7 + 15, nposYbot7 + 10)
  line(nposXbot7, nposYbot7 + 30, nposXbot7 + 15, nposYbot7 + 10)
  line(nposXbot7 + 30, nposYbot7, nposXbot7 + 15, nposYbot7 + 5)
  line(nposXbot7, nposYbot7 + 30, nposXbot7 + 15, nposYbot7 + 5)
  line(nposXbot7 + 30, nposYbot7, nposXbot7 + 15, nposYbot7 + 15)
  line(nposXbot7, nposYbot7 + 30, nposXbot7 + 15, nposYbot7 + 15)
  line(nposXbot7 + 30, nposYbot7, nposXbot7 + 15, nposYbot7 + 20)
  line(nposXbot7, nposYbot7 + 30, nposXbot7 + 15, nposYbot7 + 20)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot8, nposYbot8, ntambot8, ntambot8)
  strokeWeight(2)
  stroke(189, 249, 198)
  arc(nposXbot8 + 15, nposYbot8 + 20, 26, 26, PI, TWO_PI);
  stroke(249, 203, 189)
  arc(nposXbot8 + 15, nposYbot8 + 24, 22, 22, PI, TWO_PI);
  stroke(249, 189, 217)
  arc(nposXbot8 + 15, nposYbot8 + 28, 20, 20, PI, TWO_PI);
  strokeWeight(1)
  stroke(0)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot9, nposYbot9, ntambot9, ntambot9)
  noStroke()
  fill(67, 124, 249)
  beginShape();
  vertex(nposXbot9 + 5, nposYbot9 + 2);
  bezierVertex(nposXbot9 + 30, nposYbot9, nposXbot9 + 30, nposYbot9 + 30, nposXbot9 + 5, nposYbot9 + 29);
  endShape(CLOSE);
  stroke(0)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot10, nposYbot10, ntambot10, ntambot10)
  ellipse(nposXbot10 + 7, nposYbot10 + 10, 10, 10);
  fill(0)
  ellipse(nposXbot10 + 7, nposYbot10 + 10, 3, 3);
  noFill()
  ellipse(nposXbot10 + 22, nposYbot10 + 10, 10, 10);
  fill(0)
  ellipse(nposXbot10 + 22, nposYbot10 + 10, 3, 3);
  noFill()
  arc(nposXbot10 + 15, nposYbot10 + 18, 17, 17, TWO_PI, PI)
  noFill()

  fill(255, 255, 255)
  rect(nposXbot11, nposYbot11, ntambot11, ntambot11)
  rect(nposXbot11+ 7, nposYbot11 + 8, 15, 15, 6, 2, 6, 2)
  line(nposXbot11+ 22, nposYbot11 +15, nposXbot11 + 28, nposYbot11+21)
  ellipse(nposXbot11 + 28, nposYbot11+21, 3, 3)
  line(nposXbot11+ 7, nposYbot11 +15, nposXbot11+2, nposYbot11+21)
  ellipse(nposXbot11+2, nposYbot11+21,3,3)
  noFill()

  line(50, 50, 550, 50)
  line(50, 50, 50, 550)

  //BOTONES PARA COLORES

  fill(249, 189, 217)
  rect(posXbot4, posYbot4, tambot4, tambot4)
  noFill()

  fill(230, 189, 249)
  rect(posXbot5, posYbot5, tambot5, tambot5)
  noFill()

  fill(189, 189, 249)
  rect(posXbot6, posYbot6, tambot6, tambot6)
  noFill()

  fill(189, 235, 249)
  rect(posXbot7, posYbot7, tambot7, tambot7)
  noFill()

  fill(189, 249, 249)
  rect(posXbot8, posYbot8, tambot8, tambot8)
  noFill()

  fill(189, 249, 198)
  rect(posXbot9, posYbot9, tambot9, tambot9)
  noFill()

  fill(234, 249, 189)
  rect(posXbot10, posYbot10, tambot10, tambot10)
  noFill()

  fill(249, 232, 189)
  rect(posXbot11, posYbot11, tambot11, tambot11)
  noFill()

  fill(249, 203, 189)
  rect(posXbot12, posYbot12, tambot12, tambot12)
  noFill()

  fill(249, 175, 175)
  rect(posXbot13, posYbot13, tambot13, tambot13)
  noFill()



  //INTRUCCIONES DE USO POR PRESIÓN DEL MOUSE - COLORES - 
  if (mouseIsPressed == true) {

    if (hcolor == 1) {
      stroke(249, 189, 217)

    }


    if (hcolor == 2) {
      stroke(230, 189, 249)

    }

    if (hcolor == 3) {
      stroke(189, 189, 249)

    }

    if (hcolor == 4) {
      stroke(189, 235, 249)

    }

    if (hcolor == 5) {
      stroke(189, 249, 249)

    }

    if (hcolor == 6) {
      stroke(189, 249, 198)

    }

    if (hcolor == 7) {
      stroke(234, 249, 189)

    }

    if (hcolor == 8) {
      stroke(249, 232, 189)

    }

    if (hcolor == 9) {
      stroke(249, 203, 189)

    }

    if (hcolor == 10) {
      stroke(249, 175, 175)

    }


    //INTRUCCIONES DE USO POR PRESIÓN DEL MOUSE - HERRAMIENTAS - 


    if (herramienta == 1) {
      triangle(pmouseX, pmouseY, pmouseX, pmouseY + 20, pmouseX + 20, pmouseY + 20)
      triangle(pmouseX + 20, pmouseY + 20, pmouseX + 40, pmouseY, pmouseX + 40, pmouseY + 20)
      triangle(pmouseX + 3, pmouseY - 1, pmouseX + 36, pmouseY - 1, pmouseX + 20, pmouseY + 16)

      triangle(pmouseX + 42, pmouseY, pmouseX + 62, pmouseY + 20, pmouseX + 42, pmouseY + 20)
      triangle(pmouseX + 62, pmouseY + 20, pmouseX + 82, pmouseY, pmouseX + 82, pmouseY + 20)
      triangle(pmouseX + 46, pmouseY, pmouseX + 62, pmouseY + 16, pmouseX + 78, pmouseY)

    }


    if (herramienta == 2) {
      strokeWeight(2)
      point(pmouseX + 4, pmouseY + 4);
      point(pmouseX + 4, pmouseY + 10);
      point(pmouseX + 4, pmouseY + 2);
      point(pmouseX + 2, pmouseY + 13);
      point(pmouseX + 8, pmouseY + 5);
      point(pmouseX + 5, pmouseY + 16);
      point(pmouseX + 12, pmouseY + 8);
      point(pmouseX + 8, pmouseY + 19);
      point(pmouseX + 16, pmouseY + 3);
      point(pmouseX + 3, pmouseY + 22);
      point(pmouseX + 20, pmouseY + 7);
      point(pmouseX + 7, pmouseY + 25);
      point(pmouseX + 24, pmouseY + 6);
      point(pmouseX + 6, pmouseY + 28);
      point(pmouseX + 28, pmouseY + 9);
      point(pmouseX + 9, pmouseY + 29);
      point(pmouseX + 8, pmouseY + 8);
      point(pmouseX + 11, pmouseY + 11);
      point(pmouseX + 12, pmouseY + 12);
      strokeWeight(1)



    }

    if (herramienta == 3) {
      ellipse(pmouseX + 25, pmouseY - 25, 20, 20)
      ellipse(pmouseX + 50, pmouseY, 20, 20)
      ellipse(pmouseX, pmouseY, 20, 20)



    }

    if (herramienta == 4) {
      ellipse(pmouseX + 25, pmouseY - 25, pmouseX - 20, pmouseY - 20)
      ellipse(pmouseX + 50, pmouseY, pmouseX - 20, pmouseY - 20)
      ellipse(pmouseX, pmouseY, pmouseX - 20, pmouseY - 20)


    }

    if (herramienta == 5) {
      ellipse(pmouseX, pmouseY, 50, 50)
      ellipse(pmouseX, pmouseY, 40, 40)
      ellipse(pmouseX, pmouseY, 30, 30)
      ellipse(pmouseX, pmouseY, 20, 20)
      ellipse(pmouseX, pmouseY, 10, 10)



    }

    if (herramienta == 6) {
      rect(pmouseX + 25, pmouseY - 25, 20, 20)
      rect(pmouseX + 50, pmouseY, 20, 20)
      rect(pmouseX, pmouseY, 20, 20)
      rect(pmouseX + 25, pmouseY + 25, 20, 20)


    }

    if (herramienta == 7) {
      line(550, 50, pmouseX, pmouseY)
      line(50, 550, pmouseX, pmouseY)


    }

    if (herramienta == 8) {
      strokeWeight(3)
      arc(pmouseX, pmouseY, 180, 180, PI, TWO_PI);
      arc(pmouseX, pmouseY, 220, 220, PI, TWO_PI);
      arc(pmouseX, pmouseY, 260, 260, PI, TWO_PI);
      strokeWeight(0)




    }

    if (herramienta == 9) {
      beginShape();
      vertex(width / 2, height / 2);
      bezierVertex(pmouseX + 80, pmouseY + 80, pmouseX + 80, pmouseY + 80, height, width);
      endShape();

    }

    if (herramienta == 10) {
      ellipse(pmouseX, pmouseY, 20, 20);
      fill(0)
      ellipse(pmouseX, pmouseY, 5, 5);
      noFill()
      ellipse(pmouseX + 25, pmouseY, 20, 20);
      fill(0)
      ellipse(pmouseX + 25, pmouseY, 5, 5);
      noFill()
      arc(pmouseX + 13, pmouseY + 20, 20, 20, TWO_PI, PI)



    }

    if (herramienta == 11) {
      rect(pmouseX, pmouseY, 55, 55, 20, 15, 10, 5)
      line(pmouseX + 55, pmouseY + 25, pmouseX + 75, pmouseY + 32)
      ellipse(pmouseX + 75, pmouseY + 32, 10, 10)
      line(pmouseX, pmouseY + 25, pmouseX - 20, pmouseY + 32)
      ellipse(pmouseX - 20, pmouseY + 32, 10, 10)



    }




    //INDICACIÓN PARA FUNCIONAMIENTO DE BOTONES PARA HERRAMIENTAS 

    if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
      mouseY > posYbot1 && mouseY < posYbot1 + tambot1) {
      background(249, 244, 244)

    }


    //Instrucción para usar herramienta de  
    if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 &&
      mouseY > posYbot2 && mouseY < posYbot2 + tambot2) {
      herramienta = 1;

    }


    //Instrucción para usar herramienta de 
    if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 &&
      mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
      herramienta = 2;

    }

    if (mouseX > nposXbot4 && mouseX < nposXbot4 + ntambot4 &&
      mouseY > nposYbot4 && mouseY < nposYbot4 + ntambot4) {
      herramienta = 3;

    }

    if (mouseX > nposXbot4 && mouseX < nposXbot4 + ntambot4 &&
      mouseY > nposYbot4 && mouseY < nposYbot4 + ntambot4) {
      herramienta = 4;

    }

    if (mouseX > nposXbot5 && mouseX < nposXbot5 + ntambot5 &&
      mouseY > nposYbot5 && mouseY < nposYbot5 + ntambot5) {
      herramienta = 5;

    }

    if (mouseX > nposXbot6 && mouseX < nposXbot6 + ntambot6 &&
      mouseY > nposYbot6 && mouseY < nposYbot6 + ntambot6) {
      herramienta = 6;

    }

    if (mouseX > nposXbot7 && mouseX < nposXbot7 + ntambot7 &&
      mouseY > nposYbot7 && mouseY < nposYbot7 + ntambot7) {
      herramienta = 7;

    }

    if (mouseX > nposXbot8 && mouseX < nposXbot8 + ntambot8 &&
      mouseY > nposYbot8 && mouseY < nposYbot8 + ntambot8) {
      herramienta = 8;

    }

    if (mouseX > nposXbot9 && mouseX < nposXbot9 + ntambot9 &&
      mouseY > nposYbot9 && mouseY < nposYbot9 + ntambot9) {
      herramienta = 9;

    }

    if (mouseX > nposXbot10 && mouseX < nposXbot10 + ntambot10 &&
      mouseY > nposYbot10 && mouseY < nposYbot10 + ntambot10) {
      herramienta = 10;

    }

    if (mouseX > nposXbot11 && mouseX < nposXbot11 + ntambot11 &&
      mouseY > nposYbot11 && mouseY < nposYbot11 + ntambot11) {
      herramienta = 11;

    }

    //INDICACIÓN PARA FUNCIONAMIENTO DE BOTONES PARA COLORES 


    if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 &&
      mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
      hcolor = 1;

    }


    if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 &&
      mouseY > posYbot5 && mouseY < posYbot5 + tambot5) {
      hcolor = 2;

    }

    if (mouseX > posXbot6 && mouseX < posXbot6 + tambot6 &&
      mouseY > posYbot6 && mouseY < posYbot6 + tambot6) {
      hcolor = 3;

    }

    if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 &&
      mouseY > posYbot7 && mouseY < posYbot7 + tambot7) {
      hcolor = 4;

    }

    if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 &&
      mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {
      hcolor = 5;

    }

    if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 &&
      mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {
      hcolor = 6;

    }

    if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 &&
      mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {
      hcolor = 7;

    }

    if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 &&
      mouseY > posYbot11 && mouseY < posYbot11 + tambot11) {
      hcolor = 8;

    }

    if (mouseX > posXbot12 && mouseX < posXbot12 + tambot12 &&
      mouseY > posYbot12 && mouseY < posYbot12 + tambot12) {
      hcolor = 9;

    }

    if (mouseX > posXbot13 && mouseX < posXbot13 + tambot13 &&
      mouseY > posYbot13 && mouseY < posYbot13 + tambot13) {
      hcolor = 10;

    }
  }
}