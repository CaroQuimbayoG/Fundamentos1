//var x = 0
//var y = 0
//var a = 200
//var b = 160
//var c = 180
//var g = 140


function setup() {
  createCanvas(800, 800);
  strokeWeight(0);

  //Triangulos negros en pareja punta arriba
  for (var x = 160; x < 320; x = x + 20) {
    for (var y = 160; y < 320; y = y + 20) {
      fill(0);
      triangle(x, y, x, y + 20, x + 20, y + 20);
      noFill();

    }
  }

  //linea superior rectángulo blanco linea 1 y 5 + triangulo pareja 
  //punta abajo
  for (var a = 200; a < 320; a = a + 80) {
    for (var b = 160; b < 320; b = b + 80) {
      fill(255)
      rect(a, b, 40, 20);
      noFill();

      fill(0);
      triangle(a, b, a + 20, b, a + 20, b + 20);
      triangle(a + 20, b, a + 40, b, a + 40, b + 20);
      noFill();

    }
  }


  //rectangulos línea 2 y 6 + triangulos punta abajo en pareja 

  for (var c = 180; c < 320; c = c + 80) {
    for (var d = 180; d < 320; d = d + 80) {
      fill(255)
      rect(c, d, 40, 20);
      noFill();

      fill(0);
      triangle(c, d, c + 20, d, c + 20, d + 20);
      triangle(c + 20, d, c + 40, d, c + 40, d + 20);
      noFill();

    }
  }
  //rectangulos linea 3 y 7 + triangulos punta abajo en parejas 
  for (var e = 160; e < 320; e = e + 80) {
    for (var f = 200; f < 320; f = f + 80) {
      fill(255)
      rect(e, f, 40, 20);
      noFill();

      fill(0)
      triangle(e, f, e + 20, f, e + 20, f + 20);
      triangle(e + 20, f, e + 40, f, e + 40, f + 20);
      noFill();


    }
  }

  // Rectángulos linea 4 y 8 + triangulos en pareja punta abajo 
  for (var g = 140; g < 318; g = g + 80) {
    for (var h = 220; h < 318; h = h + 80) {
      fill(255)
      rect(g, h, 40, 20);
      noFill();
      fill(0);
      triangle(g, h, g + 20, h, g + 20, h + 20);
      triangle(g + 20, h, g + 40, h, g + 40, h + 20);
      noFill();
      fill(255)
      rect(140, 220, 20, 20)
      noFill();
      fill(255)
      rect(140, 300, 20, 20);
      noFill();
      fill(255)
      rect(320, 220, 20, 20);
      noFill();
      fill(255)
      rect(320, 300, 20, 20);
      noFill();

    }
  }
}