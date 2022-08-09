var gif_loadImg, gif_createImg;
let tamanho;
let tamanhoJogador;
let dir;
let vel;
let player;
let inimigos = [];

// Tiroteio foda
let velTiro;
let tirosDireita = [];
let tirosDireitay = [];
let tiros = [];
let tirosCont = [];

class Jogador {
  constructor() {
    this.x = 10;
    this.y = 200;
    this.vida = 4;
    this.pontos = 0;
  }
}

class Tiro {
  constructor() {
    this.posx = player.x + 50 + velTiro;
    this.posy = player.y + 50;
    this.tamx = 50;
    this.tamy = 50;
  }

  display() {
    //rect(this.posx, this.posy, this.tamx, this.tamy);
    image(gif_loadfogo, this.posx, this.posy, this.tamx,this.tamy);
  }

  move() {
    this.posx += velTiro;
  }
}

class Inimigo {
  constructor() {
    this.inix = width + 50;
    this.iniy = random(50, height - 50);
    this.tamix = 30;
    this.veli = 2 + random(0, 4);
    this.tamd = 100
  }
  display() {
    image(gif_loaddrag, this.inix-70, this.iniy-40, 150, 90);
  }

  move() {
    this.inix -= this.veli;
  }
}

function preload() {
  
  img_loadfund = loadImage("fund.jpg");
  gif_loadmag = loadImage("magi.gif");
  gif_createmag = createImg("magi.gif");
  gif_loadfogo = loadImage("fire.gif");
  gif_createfogo = createImg("fire.gif");
  gif_loaddrag = loadImage("drag.gif");
  gif_createdrag = createImg("drag.gif");
}

function setup() {
  player = new Jogador();
  createCanvas(700, 500);
  tamanho = 150;
  tamanhoJogador = 10;
  rectMode(CENTER);
  vel = 5;
  velTiro = 20;
  dir = "direita";
  tirosCont = [0, 0, 0, 0];
}

function draw() {
  background(img_loadfund,220);
  line(width / 4, 0, width / 4, height);
  fill(200,100,255,130)
  rect(width/4,0,30,height*2)
  
  if (frameCount % 70 == 0) {
    criaInimigo();
  }

  if (keyIsDown(87)) {
    movimento("cima");
  } else if (keyIsDown(83)) {
    movimento("baixo");
  }

  for (let inimigo of inimigos) {
    inimigo.display();
    inimigo.move();
  }

  for (let tiro of tiros) {
    tiro.display();
    tiro.move();
    if (tiro.posx > width + tiro.tamx) {
      tiro.posx += 3000;
    }

    if (inimigos !== undefined && inimigos.length != 0) {
      for (let inimigo of inimigos) {
        if (
          tiro.posx - inimigo.inix <= 25 &&
          tiro.posx - inimigo.inix >= -25 &&
          tiro.posy - inimigo.iniy <= 5 &&
          tiro.posy - inimigo.iniy >= -50
        ) {
          tiro.posx += 3000;
          inimigo.inix += 5000;
          player.pontos++;
        }
      }
    }
  }

  for (let i = 0; inimigos !== undefined && i < inimigos.length; i++) {
    if (inimigos[i].inix < width / 4) {
      inimigos[i].inix += 5000;
      player.vida--;
    }
    if (inimigos[i].inix > 1000) {
      inimigos.splice(i, 1);
    }
  }
  for (let i = 0; tiros !== undefined && i < tiros.length; i++) {
    if (tiros[i].posx > 1000) {
      tiros.splice(i, 1);
    }
  }
  image(gif_loadmag, tamanhoJogador, player.y, tamanho, tamanho);
  textSize(20);
  textAlign(LEFT, CENTER);
  fill(255,100,0)
  text("pontos: " + player.pontos + "\nvida: " + player.vida, 10, 50);

  if (player.vida == 0) {
    textSize(60);
    textAlign(CENTER, CENTER);
    text("Você Perdeu", width / 2, height / 2);
    noLoop();
  }
}

function movimento(dir) {
  if (dir == "cima") {
    player.y -= vel;
    if (player.y <= -110 + tamanho / 2) {
      player.y += vel;
    }
  } else if (dir == "baixo") {
    player.y += vel;
    if (player.y >= height - tamanho / 2) {
      player.y -= vel;
    }
  }
}

function criaTiro() {
  tiros.push(new Tiro());
}

function criaInimigo() {
  inimigos.push(new Inimigo());
}

function keyPressed() {
  if (keyCode == 32) {
    criaTiro();
  }
}

function atiraDireita(i = 0) {
  tirosDireita[tirosCont[3]] = player.x + tamanho;
  tirosCont[3]++;
}
