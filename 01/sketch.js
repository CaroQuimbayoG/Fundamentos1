function setup() {

  createCanvas(600, 600);

}

function draw() {
background(245,243,202);
	
	//Cuadrado pequeño arriba
	stroke(0,0,0);
	strokeWeight(3)
	fill(216,196,147)
	rect(332,40,13,13)
	
	//Semicirculoentrelineas 
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(147,82,53,46,84,-84,OPEN)
	
	//LíneaVerticalderecha
	strokeWeight(3);
	line(136,0,138,187);
	
	//LíneaVerticalIzquierda
	stroke(0,0,0);
	strokeWeight(3);
	line(130,0,132,187);
	
	//LíneaHorizontalArribaArriba
	stroke(0,0,0);
	strokeWeight(2);
	line(107,18,160,18);
	
	//LíneaHorizontalArribaAbajo
	stroke(0,0,0);
	strokeWeight(2);
	line(109,21,158,21);
	
	//LíneaHorizontalAbajoArriba
	stroke(0,0,0);
	strokeWeight(2);
	line(113,167,159,167);
	
	//LíneaHorizontalAbajoMedio
	stroke(0,0,0);
	strokeWeight(2);
	line(113,170,159,169);
	
	//LíneaHorizontalAbajoAbajo
	stroke(0,0,0);
	strokeWeight(2);
	line(113,173,159,172);
	
	//CirculoAzulBordeBlanco
	fill(158,141,121)
	ellipse(87,145,50,50)
	
	//SobrecirculoDoradoBordeNegro
	stroke(255,255,255);
	fill(33,69,134);
	ellipse(87,145,35,35)
	
	//GranTrianguloIzquierdoFondo
	noStroke()
	fill(240,238,240)
	beginShape();
  vertex(-252, 877);
  vertex(-10, 23);
  vertex(272, 924);
  endShape(OPEN)
	
	//TrianguloIzquierdoAmarillo
	noStroke()
	fill(235,192,18)
	triangle(36,79,-3,131,67,131);
	
	//GranTrianguloIzquierdoSoloBorde
	stroke(0,0,0)
	strokeWeight(3)
	noFill()
	beginShape();
  vertex(-252, 877);
  vertex(-10, 23);
  vertex(272, 924);
  endShape(OPEN)
	
	//TrianguloAbiertoAtravesado
	stroke(0,0,0)
	noFill()
	beginShape();
  vertex(-153,92);
  vertex(111, 252);
  vertex(-146,151);
  endShape(OPEN)
	
	//CirculoBlancoBordeNegroPoco
	stroke(0,0,0);
	fill(255,255,255);
	ellipse(-12,249,39,37)
	
	//EspadaLateralIzquierdaNegra
	stroke(0,0,0)
	fill(0,0,0)
	beginShape();
  vertex(-15,292);
  vertex(213, 420);
  vertex(-16,301);
  endShape(CLOSE)
	
	//LineaParalelaFueraSuperior
	stroke(0,0,0);
	strokeWeight(2);
	line(-16,317,27,298);
	
	//EspadaLateralIzquierdaVerde
	noStroke()
	fill(98,101,62)
	beginShape();
  vertex(-17,301);
  vertex(221, 425);
  vertex(-15,311);
  endShape(CLOSE)
	
	//LineaParalelaFueraInferior
	stroke(0,0,0);
	strokeWeight(2);
	line(-20,325,31,301);
	
	//BordedeParalelaFueraSuperiorconBorde
	stroke(222,133,103);
	strokeWeight(3);
	line(-18,346,114,282);
	
	//LineaParalelaFueraSuperiorconBorde
	stroke(0,0,0);
	strokeWeight(1);
	line(-15,346,110,284);
	
	//SemicirculoentrelineasPrimeroDerAIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(152,310,43,39,156,-55,OPEN)
	
	//SemicirculoentrelineasPrimeroDerAIzqROJO
	angleMode(DEGREES)
	stroke(180,54,85);
	strokeWeight(4)
	noFill()
	arc(151,308,43,39,158,-53,OPEN)
	
	//SemicirculoentrelineasSegundoDeraIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(109,345,70,74,150,-50,OPEN)
	
	//SemicirculoentrelineasSegundoDeraIzqROJO
	angleMode(DEGREES)
	stroke(180,54,85);
	strokeWeight(4)
	noFill()
	arc(107,343,70,74,150,-50,OPEN)
	
	//SemicirculoentrelineasTerceroDeraIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(3)
	noFill()
	arc(53,387,73,71,143,-43,OPEN)
	
	//SemicirculoentrelineasTerceroDeraIzqROJO
	angleMode(DEGREES)
	stroke(200,61,62);
	strokeWeight(5)
	noFill()
	arc(50,385,73,71,143,-43,OPEN)
	
	//SemicirculoentrelineasCuartoDeraIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(-9,427,78,67,140,-28,OPEN)
	
	//SemicirculoentrelineasCuartoDeraIzqROJO
	angleMode(DEGREES)
	stroke(242,149,143);
	strokeWeight(4)
	noFill()
	arc(-13,424,78,67,140,-28,OPEN)
	
	//LineaParalelaInteriorArriba
	stroke(0,0,0);
	strokeWeight(2);
	line(-6,391,156,261);
	
	//LineaParalelaInteriorAbajo
	stroke(0,0,0);
	strokeWeight(2);
	line(-54,460,170,264);
  
	//LineaNegraGruesaBordeAmarillo
	stroke(0,0,0);
	strokeWeight(3);
	line(34,409,161,321);
	
	//BordeAmarillodeLineaNegraGruesa
	stroke(221,195,81);
	strokeWeight(4);
	line(40,410,162,325);
	
	
	//SemicirculoentrelineasPrimeroDerAIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(152,310,43,39,156,-55,OPEN)
	
	//SemicirculoentrelineasSegundoDeraIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(109,345,70,74,150,-50,OPEN)
	
	//SemicirculoentrelineasTerceroDeraIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(3)
	noFill()
	arc(53,387,73,71,143,-43,OPEN)
	
	//SemicirculoentrelineasCuartoDeraIzq
	angleMode(DEGREES)
	stroke(0,0,0);
	strokeWeight(2)
	noFill()
	arc(-9,427,78,67,140,-28,OPEN)
	
	//TriangulodeDosColoresFondoNaranja
	stroke(1);
	fill(218,130,72);
	triangle(126,394,230,543,-108,543);
  
  //SemicirculoNaranjaSobreYingyang
  stroke(213,97,79)
  strokeWeight(5)
  noFill()
  ellipse(173,466,108,102)  
	
  //SemicirculoamarilloSobreYingyang
  stroke(231,185,74)
  strokeWeight(5)
  fill(226,227,237)
  ellipse(174,465,73,69) 
  
	//FiguraVerdeDentrodeTrianguloNaranja
	stroke(3)
	fill(36,81,56)
	beginShape();
  vertex(126,394);
  vertex(230,543);
  vertex(152,543);
	vertex(109,405)
  endShape(CLOSE)
	
	//CirculoNegroconFormas
	stroke(1)
	fill(0,0,0)
	ellipse(96,469,90,86)
	
	//CirculoGrisDentrodeTrianguloNaranja
	stroke(1)
	fill(223,210,218)
	ellipse(96,469,71,69)
	
	//CirculoNegroDentrodeCirculoGrisDentrodeTrianguloNaranja
	noStroke()
	fill(0,0,0)
	ellipse(102,467,14,14)
	
	//Polígono1dentrodelCirculoNegro
	stroke(1)
	fill(123,155,207)
	rect(132,462,8,18)
	
	//Polígono2dentrodelCirculoNegro
	stroke(2)
	fill(123,155,207)
	beginShape();
  vertex(117,497);
  vertex(122,504);
	vertex(108,511);
	vertex(111,509)
  vertex(95,512);
	vertex(95,504)
  endShape(CLOSE)
	
	//TacodeBaseAmarilla
	noStroke()
	fill(224,184,68)
	beginShape();
  vertex(116,479);
  vertex(245,604);
	vertex(234,618);
  endShape(CLOSE)
	
	//PuntadeTacodeBaseAmarilla
	noStroke()
	fill(162,42,38)
	beginShape();
  vertex(116,479);
  vertex(134,495);
	vertex(130,498);
  endShape(CLOSE)
	
	//ParteBlancadelTacodeBaseAmarilla
	noStroke()
	fill(255,255,255)
	beginShape();
  vertex(134,495);
	vertex(154,516);
	vertex(150,520);
	vertex(130,498);
  endShape(CLOSE)
	
	//ParteNegra1delTacodeBaseAmarilla
	noStroke()
	fill(0,0,0)
	beginShape();
	vertex(155,516);
	vertex(155,517);
	vertex(151,521);
	vertex(150,520);
  endShape(CLOSE)
	
	//ParteNegra1delTacodeBaseAmarilla
	noStroke()
	fill(255,255,225)
	beginShape();
	vertex(155,517);
	vertex(157.8,519);
	vertex(153.6,524);
	vertex(151,521);
  endShape(CLOSE)
	
	//ParteNegra2delTacodeBaseAmarilla
	noStroke()
	fill(0,0,0)
	beginShape();
	vertex(157.8,519);
	vertex(161,521);
	vertex(155.5,526)
	vertex(153.6,524);
  endShape(CLOSE)
	
	//ParteNegra3deTacodeBaseAmarilla
	stroke(0,0,0)
	strokeWeight(3)
	line(162,532,166,528)
	
	//VaraNegrayRojaBase
	noStroke()
	fill(0,0,0)
	beginShape();
	vertex(523,288);
	vertex(530,297);
	vertex(-94,738)
	vertex(-100,728);
  endShape(CLOSE)
	
	//VaraRojadeVaraNegrayRoja
	noStroke()
	fill(192,46,35)
	beginShape();
	vertex(266,469.5);
	vertex(272,479);
	vertex(122,586);
	vertex(116,575);
  endShape(CLOSE)
	
	//YingYangCircle
	stroke(1)
  fill(0,0,0)
	ellipse (174.5,466,31,30)
  
  //YingYangBlanco
  angleMode(DEGREES)
  noStroke(1)
  fill(255,255,255)
  arc(174,466,31,31,54,-119,OPEN)
  
  //CuadradoRellenodeTriquiIzqBlanco
	noStroke(0,0,0);
	fill(222,223,231);
  quad(500,386,538,387,537,421,499,420)
  
  //CuadradoRellenodeTriquiIzqRosa
	noStroke(0,0,0);
	fill(221,182,172);
  quad(499,420,537,421,537,457,499,457)
  
  //CuadradoRellenodeTriquiDerRojo
  noStroke(0,0,0);
	fill(191,76,75);
  quad(538,387,574,387,574,422,537,422)
  
  //CuadradoRellenodeTriquiIzqBlanco
	noStroke(0,0,0);
	fill(208,209,220);
  quad(538,422,574,422,574,459,537,458)
  
  //LíneasdeTriquiVerticalIzq
  stroke(0,0,0);
	strokeWeight(3);
	line(501,338,497,513);
  
  //LíneasdeTriquiVerticalCentro
  stroke(0,0,0);
	strokeWeight(3);
	line(538,338,535,513);
  
  //LíneasdeTriquiVerticalDerecha
  stroke(0,0,0);
	strokeWeight(3);
	line(575,338,574,513);
  
  //LíneasdeTriquiHorizontalArriba
  stroke(0,0,0);
	strokeWeight(3);
	line(437,386,600,389);
  
  //LíneasdeTriquiHorizontalCentro
  stroke(0,0,0);
	strokeWeight(3);
	line(433,419,600,423);
  
  //LíneasdeTriquiHorizontalAbajo
  stroke(0,0,0);
	strokeWeight(3);
	line(435,454,600,460);

  //CuadradoSuperiorColordeFondoBlanco
	noStroke();
	fill(255,255,255)
  quad(285,188,600,31,600,59,303,206)
  
  //CuadradoInferiorColordeFondoBlanco
	noStroke();
	fill(255,255,255)
  quad(303,206,600,59,600,85,323,222)

  //CuadradoLíneaSuperiorVerdeOliva
  noStroke()
	fill(74,83,81)
  quad(259,200,285,188,303,206,273,221)
  
  //CuadradoLíneaSuperiorVerdeOlivaClaro
  noStroke()
	fill(178,180,29)
  quad(235,213,259,201,273,221,248,234)
  
  //CuadradoLíneaInferiorVerdeOliva
  noStroke()
	fill(147,144,105)
  quad(273,221,288,239,259,254,248,234)
  
  //CuadradoAmailloentreolivas
	noStroke()
	fill(214,160,73)
  quad(230.67,243.06,247.67,234.2,258.84,253.16,242.23,262.64);
  
  //CuadradoRojoEsquina
  noStroke()
	fill(203,48,58)
  quad(172.81,243.5,193.34,232.54,207,253.67,186.68,265.38);
  
  //CuadradoNegrodeTextura
  noStroke()
	fill(139,119,110)
  quad(288,239,323,222,342,239,303,259)
  
  //CuadradoNegrodeTextura
  noStroke()
	fill(139,119,110)
  quad(288,239,323,222,342,239,303,259)
  
	//PuntaNaranjaHorizontal1
	noStroke()
	fill(193,119,77)
	beginShape();
	vertex(293,343);
	vertex(305,332);
	vertex(450,586);
  endShape(CLOSE)

	//PuntaNaranjaHorizontal2
	noStroke()
	fill(193,119,77)
	beginShape();
	vertex(284,298);
	vertex(501,189.5);
	vertex(295,314);
  endShape(CLOSE)
  
	//PuntaNaranjaHorizontal3
	noStroke()
	fill(193,119,77)
	beginShape();
	vertex(282,406);
	vertex(293,394);
	vertex(415,597);
  endShape(CLOSE)
    
  //LíneasdeBoomerangGrandeA1
  stroke(0,0,0);
	strokeWeight(3);
	line(600,32,173,244);
  
  //LíneasdeBoomerangGrandeA2
  stroke(0,0,0);
	strokeWeight(3);
	line(600,61,187,264);
  
  //LíneasdeBoomerangGrandeA3
  stroke(0,0,0);
	strokeWeight(3);
	line(600,85,200,284);
  
  //LíneasdeBoomerangGrandeCuadrilatero
	stroke(0,0,0);
  strokeWeight(3);
	noFill()
  quad(437,193,449,210,229,327,213,303)
  
  //LíneasdeBoomerangGrandeA4
  stroke(0,0,0);
	strokeWeight(3);
	line(172,245,432,622);
  
  //LíneasdeBoomerangGrandeA5
  stroke(0,0,0);
	strokeWeight(3);
	line(194,234,432,622); 
  
  //LíneasdeBoomerangGrandeA6
  stroke(0,0,0);
	strokeWeight(3);
	line(217,222,466,610); 
  
  //LíneasdeBoomerangGrandeA7
  stroke(0,0,0);
	strokeWeight(3);
	line(235,213,466,610); 
  
  //LíneasdeBoomerangGrandeA8
  stroke(0,0,0);
	strokeWeight(3);
	line(258,201,303,258); 
  
  //LíneasdeBoomerangGrandeA9
  stroke(0,0,0);
	strokeWeight(3);
	line(284,189,342,239); 

  //LíneasdeBoomerangGrandeA10
  stroke(0,0,0);
	strokeWeight(3);
	line(293,340,416,265); 

  //LíneasdeBoomerangGrandeA11
  stroke(0,0,0);
	strokeWeight(3);
	line(283,297,552,161); 
  
  //LíneasdeBoomerangGrandeA12
  stroke(0,0,0);
	strokeWeight(3);
	line(293,314,552,161); 
  
  //CuadradoconTextura1
	stroke(0,0,0);
  strokeWeight(3);
	fill(118,112,100)
  quad(373,145,401,131,416,150,388,164)

  //CuadradoGrisBoomerangGrande
	stroke(0,0,0);
  strokeWeight(3);
	fill(118,112,100)
  quad(530,67,543,88,514,102,501,81)
  
  //CuadradoRosado
  noStroke()
  fill(221,11,81,70)
  quad(141,222,229,222,229,285,141,285)
  
	//CirculoB/W
	stroke(2)
  fill(255,255,255)
	ellipse(544,206,54,51)

  //CirculoRojoDetrásdelMoradoClaro
	noStroke()
  fill(189,47,55,220)
	ellipse(438.5,265,71,66)
  
  //CirculoAzulOscuro
	noStroke()
  fill(2,67,140,220)
	ellipse(303.5,429,101,95)

  //CirculoAmarilloSobreAzulClaroSuperior
	noStroke()
  fill(219,178,85,220)
	ellipse(435,179,72,68)

  //CuadradoNedroenentreCirculos
	stroke(0,0,0);
  strokeWeight(2);
	fill(0,0,0)
  quad(406,209,436,191,447,210,417,228)
  
  //CirculoAzulClaroSuperior
	noStroke()
  fill(74,141,181,220)
	ellipse(435.5,180,57,56)

  //CuadradoGrisBoomerangGrande
	stroke(0,0,0);
  strokeWeight(3);
	fill(0,0,0)
  quad(415,265,436,299,403,318,380,286)
  
	//CirculoMoradoClaro
	noStroke()
  fill(149,136,159,200)
	ellipse(436.5,263.5,63,59)
  
  //CuadradoNedroenPuntaNaranja
	stroke(0,0,0);
  strokeWeight(3);
	fill(0,0,0)
  quad(473,209,491,198,501,216,482,226)

  //CuadradoNedroendebajodeCuadroNegro
	stroke(0,0,0);
  strokeWeight(3);
	fill(0,0,0)
  quad(487,238,507,225,520,247,499,259)
  
	//GranCírculoconBordeSobreCuadrados
	stroke(3)
  noFill()
	ellipse(249,212,102,96)
  
  //LíneasdeBoomerangPequeño1
  stroke(0,0,0);
	strokeWeight(3);
	line(188,351,356,600);

  //LíneasdeBoomerangPequeño2
  stroke(0,0,0);
	strokeWeight(3);
	line(208,339.83,387.33,600);
  
  //LíneasdeBoomerangPequeño3
  stroke(0,0,0);
	strokeWeight(3);
	line(229,329.17,391.67,600);
  
  //LíneasdeBoomerangPequeño4
  stroke(0,0,0);
	strokeWeight(3);
	line(188.06,351,277,300);
  
  //CuadradoNedroenTerceraCasilla
	stroke(0,0,0);
  strokeWeight(3);
	fill(0,0,0)
  quad(213,388,232,374,246,394,226,408)
  
  //Líneadecuadropequeño
  stroke(0,0,0);
	strokeWeight(2);
	line(200,369,256,336);
  
  //Líneasdentrodecuadropequeño
  stroke(0,0,0);
	strokeWeight(2);
	line(206,343,218,359);
  line(203,344,216,360);
  line(200,345,212,361);
  line(196,347,209,364);
  line(194,348,206,365);
  line(191,351,192,350);
  line(192.62,352,202,367);
  

  
  

  

  

  

  
  
  

  

  
  

  
  
  
  
  
  

  
  
	

	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	

	
	
					 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}