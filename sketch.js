// tela 1
var tela = 1;
var fundo1; // tela menu
var informacao; // tela de informações
var creditos; // tela creditos
var comojogar; // tela de como jogar
var play; // tela de play-menu
var linport1; // questão 1
var linport2; // questão 2
var linport3; // questão 3
var linport4; // questão 4
var linport5; // questão 5
var mat1; // questão 1
var mat2; // questão 2
var mat3; // questão 3
var mat4; // questão 4
var mat5; // questão 5
var cien1; // questão 1
var cien2; // questão 2
var cien3; // questão 3
var cien4; // questão 4
var cien5; // questão 5
var hist1; // questão 1
var hist2; // questão 2
var hist3; // questão 3
var hist4; // questão 4
var hist5; // questão 5
var geo1; // questão 1
var geo2; // questão 2
var geo3; // questão 3
var geo4; // questão 4
var geo5; // questão 5
var faseconcluida; // concluido
var erro; // botão errado
var campeao; // campeão pipo gamer
var musica; // musica do jogo

var largura = 110;
var altura = 30;

var xMenu = 85;
var xMenu2 = 262;
var Y = 140; // botoes menu
var y2 = 205;
var y3 = 143;
var y4 = 203;

var largura2 = 79;
var altura2 = 28;
var xVoltar = 312; // botao voltar
var yVoltar = 259;

var altura3 = 30;
var largura3 = 144;
var xl = 128;
var xm = 51;
var xc = 226;
var xh = 51;
var xg = 226; // botoes para as telas do jogo
var yLP1 = 57;
var ymat = 110;
var ycien = 110;
var yhist = 189;
var ygeo = 189;

var largura4 = 144;
var altura4 = 27;
var xcerto = 63;
var ycerto = 224;

var xerrado = 210;
var yerrado = 224;

function preload() {
  fundo1 = loadImage("tela1.png");
  informacao = loadImage("informações.png");
  creditos = loadImage("creditos.png");
  comojogar = loadImage("comojogar.png");
  play = loadImage("Play.png");
  linport1 = loadImage("lp1.png");
  linport2 = loadImage("lp2.png");
  linport3 = loadImage("lp3.png");
  linport4 = loadImage("lp4.png");
  linport5 = loadImage("lp5.png");
  telaconcluida = loadImage("faseconcluida27.png");
  erro = loadImage("telaerro26.png");

  mat1 = loadImage("mat1.png");
  mat2 = loadImage("mat2.png");
  mat3 = loadImage("mat3.png");
  mat4 = loadImage("mat4.png");
  mat5 = loadImage("mat5.png");

  cien1 = loadImage("cien1.png");
  cien2 = loadImage("cien2.png");
  cien3 = loadImage("cien3.png");
  cien4 = loadImage("cien4.png");
  cien5 = loadImage("cien5.png");

  hist1 = loadImage("hist1.png");
  hist2 = loadImage("hist2.png");
  hist3 = loadImage("hist3.png");
  hist4 = loadImage("hist4.png");
  hist5 = loadImage("hist5.png");

  geo1 = loadImage("geo1.png");
  geo2 = loadImage("geo2.png");
  geo3 = loadImage("geo3.png");
  geo4 = loadImage("geo4.png");
  geo5 = loadImage("geo5.png");
  campeao = loadImage("campe.png");

  soundFormats("mp3");
  musica = loadSound("musica.mp3");
}

function setup() {
  createCanvas(400, 300);
  musica.play();
}

function draw() {
  // menu
  if (tela == 1) {
    background(fundo1);
  }
  // tela play
  if (tela == 2) {
    background(play);
  }
  // tela Infromações
  if (tela == 3) {
    background(informacao);
  }
  // tela creditos
  if (tela == 4) {
    background(creditos);
  }
  // tela como jogar
  if (tela == 5) {
    background(comojogar);
  }

  // telas play  - tela LP
  if (tela == 6) {
    background(linport1); // questao 1
  }
  if (tela == 11) {
    background(linport2); // questao 2
  }
  if (tela == 12) {
    background(linport3); // questao 3
  }
  if (tela == 13) {
    background(linport4); // questao 4
  }
  if (tela == 14) {
    background(linport5); // questao 5
  }

  // tela de fase cocluida
  if (tela == 15) {
    background(telaconcluida);
  }

  // tela de erro
  if (tela == 16) {
    background(erro);
  }

  // telas play - matematica
  if (tela == 7) {
    background(mat1);
  }
  if (tela == 17) {
    background(mat2); // questao 2
  }
  if (tela == 18) {
    background(mat3); // questao 3
  }
  if (tela == 19) {
    background(mat4); // questao 4
  }
  if (tela == 20) {
    background(mat5); // questao 5
  }

  //tela ciencias
  if (tela == 8) {
    background(cien1);
  }
  if (tela == 21) {
    background(cien2);
  }
  if (tela == 22) {
    background(cien3);
  }
  if (tela == 23) {
    background(cien4);
  }
  if (tela == 24) {
    background(cien5);
  }

  // tela historia
  if (tela == 9) {
    background(hist1);
  }
  if (tela == 25) {
    background(hist2);
  }
  if (tela == 26) {
    background(hist3);
  }
  if (tela == 27) {
    background(hist4);
  }
  if (tela == 28) {
    background(hist5);
  }

  // tela geografia
  if (tela == 10) {
    background(geo1);
  }
  if (tela == 29) {
    background(geo2);
  }
  if (tela == 30) {
    background(geo3);
  }
  if (tela == 31) {
    background(geo4);
  }
  if (tela == 32) {
    background(geo5);
  }
  // tela concluida - campeão
  if (tela == 33) {
    background(campeao);
  }
}

// botões
function mouseClicked() {
  if (tela == 1) {
    // botoes
    // play
    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > Y &&
      mouseY < Y + altura
    ) {
      stroke(300);
      noFill();
      rect(xMenu, Y, largura, altura, 30);
      tela = 2;
    }
    // infromações

    if (
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura &&
      mouseY > y3 &&
      mouseY < y3 + altura
    ) {
      stroke(300);
      noFill();
      rect(xMenu2, y3, largura, altura, 30);
      tela = 3;
    }
    // creditos

    if (
      mouseX > xMenu &&
      mouseX < xMenu + largura &&
      mouseY > y2 &&
      mouseY < y2 + altura
    ) {
      stroke(300);
      noFill();
      rect(xMenu, y2, largura, altura, 30);
      tela = 4;
    }
    // como jogar
    if (
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura &&
      mouseY > y4 &&
      mouseY < y4 + altura
    ) {
      stroke(300);
      noFill();
      rect(xMenu2, y4, largura, altura, 30);
      tela = 5;
    }
  }

  // lingua portuguesa
  if (tela == 2) {
    if (
      mouseX > xl &&
      mouseX < xl + largura3 &&
      mouseY > yLP1 &&
      mouseY < yLP1 + altura3
    ) {
      noFill();
      rect(xl, yLP1, largura3, altura3, 30);
      tela = 6;
    }
  }
  // certo ou errado
  if (tela == 6) {
    if (
      mouseX > xerrado &&
      mouseX < xerrado + largura4 &&
      mouseY > yerrado &&
      mouseY < yerrado + altura4
    ) {
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 11;
    } else {
      if (
        mouseX > xcerto &&
        mouseX < xcerto + largura4 &&
        mouseY > ycerto &&
        mouseY < ycerto + altura4
      ) {
        stroke(300);
        noFill();
        rect(xcerto, ycerto, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 11) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 12;
    } else {
      mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4;
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 16;
    }
  } else if (tela == 12) {
    if (
      mouseX > xerrado &&
      mouseX < xerrado + largura4 &&
      mouseY > yerrado &&
      mouseY < yerrado + altura4
    ) {
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 13;
    } else {
      if (
        mouseX > xcerto &&
        mouseX < xcerto + largura4 &&
        mouseY > ycerto &&
        mouseY < ycerto + altura4
      ) {
        stroke(300);
        noFill();
        rect(xcerto, ycerto, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 13) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 14;
    } else {
      mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4;

      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 16;
    }
  } else if (tela == 14) {
    if (
      mouseX > xerrado &&
      mouseX < xerrado + largura4 &&
      mouseY > yerrado &&
      mouseY < yerrado + altura4
    ) {
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);
      tela = 15;
    } else {
      if (
        mouseX > xcerto &&
        mouseX < xcerto + largura4 &&
        mouseY > ycerto &&
        mouseY < ycerto + altura4
      ) {
        stroke(300);
        noFill();
        rect(xcerto, ycerto, largura4, altura4, 30);

        tela = 16;
      }
    }
  }

  // matematica
  if (tela == 2) {
    if (
      mouseX > xm &&
      mouseX < xm + largura3 &&
      mouseY > ymat &&
      mouseY < ymat + altura3
    ) {
      noFill();
      rect(xm, ymat, largura3, altura3, 30);
      tela = 7;
    }
  }

  // certo ou errado - m

  if (tela == 7) {
    if (
      mouseX > xerrado &&
      mouseX < xerrado + largura4 &&
      mouseY > yerrado &&
      mouseY < yerrado + altura4
    ) {
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 17;
    } else {
      if (
        mouseX > xcerto &&
        mouseX < xcerto + largura4 &&
        mouseY > ycerto &&
        mouseY < ycerto + altura4
      ) {
        stroke(300);
        noFill();
        rect(xcerto, ycerto, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 17) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 18;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 18) {
    if (
      mouseX > xerrado &&
      mouseX < xerrado + largura4 &&
      mouseY > yerrado &&
      mouseY < yerrado + altura4
    ) {
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 19;
    } else {
      if (
        mouseX > xcerto &&
        mouseX < xcerto + largura4 &&
        mouseY > ycerto &&
        mouseY < ycerto + altura4
      ) {
        stroke(300);
        noFill();
        rect(xcerto, ycerto, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 19) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 20;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 20) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 15;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  }
  // ciencias
  if (tela == 2) {
    if (
      mouseX > xc &&
      mouseX < xc + largura3 &&
      mouseY > ycien &&
      mouseY < ycien + altura3
    ) {
      noFill();
      rect(xc, ycien, largura3, altura3, 30);
      tela = 8;
    }
  }

  // certo ou errado - c
  if (tela == 8) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 21;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 21) {
    if (
      mouseX > xerrado &&
      mouseX < xerrado + largura4 &&
      mouseY > yerrado &&
      mouseY < yerrado + altura4
    ) {
      stroke(300);
      noFill();
      rect(xerrado, yerrado, largura4, altura4, 30);

      tela = 22;
    } else {
      if (
        mouseX > xcerto &&
        mouseX < xcerto + largura4 &&
        mouseY > ycerto &&
        mouseY < ycerto + altura4
      ) {
        stroke(300);
        noFill();
        rect(xcerto, ycerto, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 22) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 16;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 23;
      }
    }
  } else if (tela == 23) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 24;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 24) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 15;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  }

  // historia
  if (tela == 2) {
    if (
      mouseX > xh &&
      mouseX < xh + largura3 &&
      mouseY > yhist &&
      mouseY < yhist + altura3
    ) {
      noFill();
      rect(xh, yhist, largura3, altura3, 30);
      tela = 9;
    }
  }
  // certo ou errado - h
  else if (tela == 9) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 16;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 25;
      }
    }
  } else if (tela == 25) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 26;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 26) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 27;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 27) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 16;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 28;
      }
    }
  } else if (tela == 28) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 15;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  }
  // geografia
  if (tela == 2) {
    if (
      mouseX > xg &&
      mouseX < xg + largura3 &&
      mouseY > ygeo &&
      mouseY < ygeo + altura3
    ) {
      noFill();
      rect(xg, ygeo, largura3, altura3, 30);
      tela = 10;
    }
  }
  // certo ou errado - G
  else if (tela == 10) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 29;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 29) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 30;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 30) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 31;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 31) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 32;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 16;
      }
    }
  } else if (tela == 32) {
    if (
      mouseX > xcerto &&
      mouseX < xcerto + largura4 &&
      mouseY > ycerto &&
      mouseY < ycerto + altura4
    ) {
      stroke(300);
      noFill();
      rect(xcerto, ycerto, largura4, altura4, 30);

      tela = 16;
    } else {
      if (
        mouseX > xerrado &&
        mouseX < xerrado + largura4 &&
        mouseY > yerrado &&
        mouseY < yerrado + altura4
      ) {
        stroke(300);
        noFill();
        rect(xerrado, yerrado, largura4, altura4, 30);

        tela = 33;
      }
    }
  }
  // Voltar - Botão

  if ((tela >= 2 && tela <= 5) || tela == 33) {
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + largura2 &&
      mouseY > yVoltar &&
      mouseY < yVoltar + altura2
    ) {
      noFill();
      rect(xVoltar, yVoltar, largura2, altura2, 30);

      tela = 1;
    }
  } else if (tela == 15 || tela == 16) {
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + largura2 &&
      mouseY > yVoltar &&
      mouseY < yVoltar + altura2
    ) {
      stroke(0);
      noFill();
      rect(xVoltar, yVoltar, largura2, altura2, 30);
      tela = 2;
    }
  } else if (
    tela >= 6 ||
    tela <= 10 ||
    (tela >= 11 && tela <= 14) ||
    tela == 7 ||
    tela >= 17 ||
    tela <= 32
  ) {
    if (
      mouseX > xVoltar &&
      mouseX < xVoltar + largura2 &&
      mouseY > yVoltar &&
      mouseY < yVoltar + altura2
    ) {
      stroke(0);
      noFill();
      rect(xVoltar, yVoltar, largura2, altura2, 30);
      tela = 2;
    }
  }
}