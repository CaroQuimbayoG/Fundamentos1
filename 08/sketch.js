var Fondoazul;
var Fondoplantas;
var PlantaCrece = []
var PecesNaranja = []
var PecesVerdes = []
var Calamar = []
var PecesAzules = []
var PecesAmarillos = []

function preload() {
  Fondoazul = loadImage('assets/fondodecolor.png');
  Fondoplantas = loadImage('assets/Fondoplantas.png')
  Planta = loadImage('assets/Planta1.png')
  Especie1 = loadImage('assets/especie1.png')
  Especie2 = loadImage('assets/especie2.png')
  Especie3 = loadImage('assets/especie3.png')
  Especie4 = loadImage('assets/Especie4.png')
  Especie5 = loadImage('assets/especie5.png')
}



function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);

  image(Fondoazul, 0, 0, 1000, 1000);
  image(Fondoplantas, 0, 0, 1000, 1000);

  if (frameCount % 50 == 0) {
    PecesNaranja[PecesNaranja.length] = new PecesNaranja1(random(0, 200),
      random(300, 500));
  }


  for (var i = 0; i < PecesNaranja.length; i = i + 1) {
    PecesNaranja[i].dibujarse();
    PecesNaranja[i].moverse();

    if (PecesNaranja[i].edad > 800) {
      PecesNaranja[i].morirse();
    }
  }

  if (frameCount % 80 == 0) {
    PecesVerdes[PecesVerdes.length] = new PecesVerdes1(random(800, 1000),
      random(300, 500));
  }


  for (var t = 0; t < PecesVerdes.length; t = t + 1) {
    PecesVerdes[t].dibujarse();
    PecesVerdes[t].moverse();

    if (PecesVerdes[t].edad > 800) {
      PecesVerdes[t].morirse();
    }
  }
  
    if (frameCount % 500 == 0) {
    Calamar[Calamar.length] = new Calamar1(random(-100, 50),
      random(-100, 80));
  }


  for (var e = 0; e < Calamar.length; e = e + 1) {
    Calamar[e].dibujarse();
    Calamar[e].moverse();

    if (Calamar[e].edad > 1000) {
      Calamar[e].morirse();
    }
  }
  
    if (frameCount % 50 == 0) {
    PecesAzules[PecesAzules.length] = new PecesAzules1(random(-100, 50),
      random(700, 800));
  }

  for (var v = 0; v < PecesAzules.length; v = v + 5) {
    PecesAzules[v].dibujarse();
    PecesAzules[v].moverse();

    if (PecesAzules[v].edad > 1200) {
      PecesAzules[v].morirse();
    }
  }
  
      if (frameCount % 50 == 0) {
    PecesAmarillos[PecesAmarillos.length] = new PecesAmarillos1(random(1100, 1150),
      random(500, 600));
  }

  for (var p = 0; p < PecesAmarillos.length; p = p + 5) {
    PecesAmarillos[p].dibujarse();
    PecesAmarillos[p].moverse();

    if (PecesAmarillos[p].edad > 1200) {
      PecesAmarillos[p].morirse();
    }
  }
} //Cierre del draw

function PecesNaranja1(miX, miY) {

  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(Especie1, this.x, this.y, 60, 60);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(+1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };
} //Cierre de función Peces Naranja

function PecesVerdes1(miX, miY) {

  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(Especie2, this.x, this.y, 100, 100);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(-1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };
} // Cierre de función peces verdes

function Calamar1(miX, miY) {

  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(Especie3, this.x, this.y, 350, 350);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(+1);
    this.y = this.y + random(+1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };
} // Cierre de función calamar

function PecesAzules1(miX, miY) {

  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(Especie4, this.x, this.y, 120, 120);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(+1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };
} // Cierre de función peces azules

function PecesAmarillos1(miX, miY) {

  // Caracteristicas
  this.x = miX;
  this.y = miY;
  this.tam = 1;
  this.edad = 0;
  this.estaViva = true;

  // Habilidades
  this.dibujarse = function() {
    if (this.estaViva == true) {
      image(Especie5, this.x, this.y, 120, 120);
    }
  };

  this.moverse = function() {
    this.x = this.x + random(-1);
    this.edad = this.edad + 1;
  };

  this.morirse = function() {
    this.estaViva = false;
  };
} // Cierre de función peces amarillos