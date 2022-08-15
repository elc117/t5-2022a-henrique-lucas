# Trabalho Personalizado

  Este trabalho buscou desenvolver os conceitos de orientação a objetos utilizando a ferramenta p5js para implementar um jogo que executa diretamente no navegador.

# p5js

  O p5js é uma biblioteca para JavaScript, que busca interpretar os conceitos de Processing* de modo a facilitar e instigar seus usuários a desenvolverem códigos web de forma simplificada.
Permitindo desenhar de forma simples, diretamente no navegador web, incluindo objetos HTML5 como: textos, vídeos, sons, etc...

*um tipo flexível de software sketchbook e uma linguagem que busca promover a alfabetização de softwares nas artes visuais e a alfabetização visual na tecnologia.

# Execução do Jogo

Para executar este jogo basta clicar no link: [Jogo](https://editor.p5js.org/henriquefochesatto/full/vP6g8Jmpe)

O objetivo deste jogo é evitar que os dragões colidam com a barra em frente ao personagem. Para isto o personagem pode se deslocar verticalmente e atirar contra os dragões.

Comandos (Teclas):

w - Movimenta o personagem para cima.

s - Movimenta o personagem para baixo.

enter - Dispara contra os dragões.


# Código

No [link](https://editor.p5js.org/henriquefochesatto/sketches/vP6g8Jmpe) esta disponível o código do jogo.

# Orientação a Objetos

Visando contemplar os conceitos de orientação a objetos, o presente trabalho visou delegar atributos e métodos específicos para o funcionamento deste jogo à suas respectivas classes. Como exemplo disto é possível verificar que o jogo é composto por 3 elementos que desempenham funções especificas no jogo, sendo eles: Inimigo, Jogador e Tiro.
Cada um destes elementos foram referenciados nas seguintes classes:

Class Jogado(): Esta classe tem em seu construtor implementado a posição do personagem na tela e o atributo vida e pontos.

```
class Jogador {
  constructor() {
    this.x = 10;
    this.y = 200;
    this.vida = 4;
    this.pontos = 0;
  }
}
```

Class Tiro: Esta classe implementa em seu método a funcionalidade tiro que utiliza a posição do personagem no momento em que foi pressionado a tecla para executar esta ação e um fator de velocidade para o deslocamento horizontal do tiro.

```
class Tiro {
  constructor() {
    this.posx = player.x + 50 + velTiro;
    this.posy = player.y + 50;
    this.tamx = 50;
    this.tamy = 50;
  }
```

Class Inimigo(): Esta classe apresenta como atributos a posição e tamanho do inimigo a ser desenhado na tela. E como método a variação de forma aleatória da posição vertical onde o inimigo será inicializado e a velocidade com que o inimigo irá se deslocar na tela.

```
class Inimigo {
  constructor() {
    this.inix = width + 50;
    this.iniy = random(50, height - 50);
    this.tamix = 30;
    this.veli = 2 + random(0, 4);
    this.tamd = 100
  }
```


# Execução local

Também é possível executar o jogo localmente. Para isso no link referente ao código do jogo, basta ir em File>Download e baixar o arquivo .zip que contém todos os elementos web necessários para executar o jogo.

Em seguida, tendo o interpretador python instalado no computador, basta abrir o terminal na pasta do jogo e executar o comando:

```
 python -m http.server 8000
```

Por fim, abra o navegador web e acesse: localhost:8000

O jogo será executado diretamente no navegador de forma offline.



