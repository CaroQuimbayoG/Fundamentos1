var miFotico;
var miCancionsita;
var mifotobaile1;
var mifotobaile2;
var mifotobaile3;
var mifotobaile4;
var mifotobaile5;
var mifotobaile6;
var mifotobaile7;
var mitrompeta1;
var mitrompeta2;
var mitrompeta3;
var misnotas;
var miFuenteBold;


var miAmplitud;
var miMicrofono;

var R = 82
var G = 4
var B = 183

function preload() {
  miFotico = loadImage('assets/fondo.jpg');
  mifotobaile1 = loadImage('assets/bailem1.png')
  mifotobaile2 = loadImage('assets/bailem2.png')
  mifotobaile3 = loadImage('assets/bailem3.png')
  mifotobaile4 = loadImage('assets/bailem4.png')
  mifotobaile5 = loadImage('assets/bailem5.png')
  mifotobaile6 = loadImage('assets/bailem6.png')
mitrompeta1=loadImage('assets/vientos1.png')
  mitrompeta2 = loadImage('assets/vientos2.png')
  //mitrompeta3=loadImage('assets/vientos-3.png')
misnotas=loadImage('assets/notasfondo.png')
  miCancionsita = loadSound('assets/jamiecullum.mp3');
  miFuenteBold = loadFont('assets/Oswald-SemiBold.ttf')
}

function setup() {
  createCanvas(864, 600);


  miAmplitud = new p5.Amplitude();
  miAmplitud.setInput(miCancionsita);
}

function mouseClicked() {
  miCancionsita.play();
}

function draw() {

  background(240)

  //Para empezar haciendo clic
  if (miCancionsita.isPlaying() == false) {
    textFont(miFuenteBold)
    fill(102, 0, 102)
    textSize(70);
    text("Clic para iniciar", 200, height / 2)
  }

  //Inicio

  var miTamano = map(miAmplitud.getLevel(), 0, 1, 0, 600);
  if (miTamano > 100 && miCancionsita.currentTime() < 11) {
    for (var i = 0; i < 200; i = i + 1) {
      var tam1 = random(-width / 2, width / 2);
      var tam2 = random(-height / 2, height / 2);
      noFill();
      strokeWeight(2);
      stroke(102, 0, 102)
      ellipse(width / 2, height / 2, tam1, tam2)
      ellipse(width / 2, height / 2, miTamano, miTamano);
    }

  }

  //Siluetas automáticas

  if (miCancionsita.currentTime() > 11 && miCancionsita.currentTime() < 11.5) {
    tint(102, 0, 102)
    image(mifotobaile3, -100, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 11.5 && miCancionsita.currentTime() < 12) {
    image(mifotobaile2, -50, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 12 && miCancionsita.currentTime() < 12.5) {
    image(mifotobaile1, 0, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 12.5 && miCancionsita.currentTime() < 13) {
    image(mifotobaile4, 60, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 13 && miCancionsita.currentTime() < 13.5) {
    image(mifotobaile5, 80, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 13.5 && miCancionsita.currentTime() < 14) {
    image(mifotobaile6, 100, 0, 500, height)
  }


  if (miCancionsita.currentTime() > 11.5 && miCancionsita.currentTime() < 12) {
    image(mifotobaile6, 130, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 12 && miCancionsita.currentTime() < 12.5) {
    image(mifotobaile5, 160, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 12.5 && miCancionsita.currentTime() < 13) {
    image(mifotobaile4, 190, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 13 && miCancionsita.currentTime() < 13.5) {
    image(mifotobaile3, 210, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 13.5 && miCancionsita.currentTime() < 14) {
    image(mifotobaile2, 240, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 14 && miCancionsita.currentTime() < 14.5) {
    image(mifotobaile1, 270, 0, 500, height)

  }

  if (miCancionsita.currentTime() > 14.5 && miCancionsita.currentTime() < 15) {
    image(mifotobaile4, 280, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 11 && miCancionsita.currentTime() < 11.5) {
    tint(102, 0, 102)
    image(mifotobaile3, -100, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 11.5 && miCancionsita.currentTime() < 12) {
    image(mifotobaile2, -50, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 12 && miCancionsita.currentTime() < 12.5) {
    image(mifotobaile1, 0, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 12.5 && miCancionsita.currentTime() < 13) {
    image(mifotobaile4, 60, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 13 && miCancionsita.currentTime() < 13.5) {
    image(mifotobaile5, 80, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 13.5 && miCancionsita.currentTime() < 14) {
    image(mifotobaile6, 100, 0, 500, height)
  }


  if (miCancionsita.currentTime() > 14 && miCancionsita.currentTime() < 14.5) {
    image(mifotobaile6, 130, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 14.5 && miCancionsita.currentTime() < 15) {
    image(mifotobaile5, 160, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 15 && miCancionsita.currentTime() < 15.5) {
    image(mifotobaile4, 190, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 15.5 && miCancionsita.currentTime() < 16) {
    image(mifotobaile3, 210, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 16 && miCancionsita.currentTime() < 16.5) {
    image(mifotobaile2, 240, 0, 500, height)
  }

  if (miCancionsita.currentTime() > 16.5 && miCancionsita.currentTime() < 17) {
    image(mifotobaile1, 270, 0, 500, height)

  }

  if (miCancionsita.currentTime() > 17 && miCancionsita.currentTime() < 17.5) {
    image(mifotobaile4, 280, 0, 500, height)
  }


  //Instrucciones de siluetas con mousex 

  if (miCancionsita.currentTime() > 18 && miCancionsita.currentTime() < 21) {
    textFont(miFuenteBold)
    fill(102, 0, 102)
    textSize(70);
    text("¡Tu turno!", 300, 300)
    text("Usa el mouse", 270, 370)

  }


  //Siluetas con mousex

  if (mouseX > 0 && mouseX < 100 && miCancionsita.currentTime() > 21 && miCancionsita.currentTime() < 50) {
    image(mifotobaile1, 0, 0, 500, height)
    image(mifotobaile6, 130, 0, 500, height)
  }


  if (mouseX > 100 && mouseX < 200 && miCancionsita.currentTime() > 21 && miCancionsita.currentTime() < 50) {
    image(mifotobaile2, 130, 0, 500, height)
    image(mifotobaile5, 300, 0, 500, height)

  }

  if (mouseX > 200 && mouseX < 300 && miCancionsita.currentTime() > 21 && miCancionsita.currentTime() < 50) {
    image(mifotobaile3, 0, 0, 500, height)
    image(mifotobaile1, 160, 0, 500, height)
  }

  if (mouseX > 300 && mouseX < 400 && miCancionsita.currentTime() > 21 && miCancionsita.currentTime() < 50) {
    image(mifotobaile4, 60, 0, 500, height)
    image(mifotobaile3, 200, 0, 500, height)

  }

  if (mouseX > 400 && mouseX < 500 && miCancionsita.currentTime() > 21 && miCancionsita.currentTime() < 50) {
    image(mifotobaile5, 80, 0, 500, height)
    image(mifotobaile3, 200, 0, 500, height)

  }

  if (mouseX > 500 && mouseX < 854 && miCancionsita.currentTime() > 21 && miCancionsita.currentTime() < 50) {
    image(mifotobaile2, 240, 0, 500, height)
    image(mifotobaile4, 280, 0, 500, height)

  }



  if (miCancionsita.currentTime() > 50 && miCancionsita.currentTime() < 53) {
    textFont(miFuenteBold)
    fill(102, 0, 102)
    textSize(70);
    text("¡Toca el círculo!", 200, 300)

  }

  if (miCancionsita.currentTime() > 50 && miCancionsita.currentTime() < 78) {
    for (var t = 0; t < 200; t = t + 1) {
      var miVol = map(mouseY, height, 0, 0, 1);
      miCancionsita.setVolume(miVol);
      noFill();
      strokeWeight(2);
      stroke(102, 0, 102)
      ellipse(mouseY, mouseX, miTamano, miTamano);
      var miPan = map(mouseX, 0, width, -1, 1);
      miCancionsita.pan(miPan);


    }

    if (miCancionsita.currentTime() > 67 && miCancionsita.currentTime() < 78) {
      var miTamanot = map(miAmplitud.getLevel(), 0, 1, 0, 600);
      imageMode(CORNERS);
      image(mitrompeta2, 864, 600, miTamanot, miTamanot);

      imageMode(CORNER);

    }
    if (miCancionsita.currentTime() > 67 && miCancionsita.currentTime() < 78) {
      var miTamanon = map(miAmplitud.getLevel(), 0, 1, 0, 600);
      image(mitrompeta1, 864, 600, miTamanon, miTamanon);
      image(misnotas, 864, 600, miTamanon, miTamanon);
  }
  }
}
