function eventoOnload() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log('Evento onload disparado');      
}

function mudarCorBotao() {
    var botao = document.getElementById('botaoColorido');
    
    var corAleatoria = gerarCorAleatoria();
    botao.style.backgroundColor = corAleatoria;
  }
  
  function gerarCorAleatoria() {
    var letrasHex = '0123456789ABCDEF';
    var cor = '#';
  
    for (var i = 0; i < 6; i++) {
      cor += letrasHex[Math.floor(Math.random() * 16)];
    }
  
    return cor;
  }
  
  
function setRandomFont() {
    var fonts = [
      "Arial",
      "Verdana",
      "Helvetica",
      "Times New Roman",
      "Courier New",
      "Georgia",
      "Comic Sans MS",
      "Tahoma",
      "Palatino",
      "Impact",
      "Lucida Sans Unicode",
      "Garamond",
      "Trebuchet MS",
      "Bookman",
      "Copperplate",
      "Brush Script MT",
      "Consolas",
      "Courier",
      "Monaco",
      "Century Gothic"
    ];
  
    var randomFontIndex = Math.floor(Math.random() * fonts.length);
    var randomFont = fonts[randomFontIndex];
    document.body.style.fontFamily = randomFont;
}  

function executaOnload() {  
    eventoOnload();
    setRandomFont();
    mudarCorBotao();
} 


var missaoJs = 'Missão JS em execução!!!';
  
function eventoOnclick() {    
    alert('Missão JS realizada com sucesso!!!');
    console.log('Missão JS realizada com sucesso!!!');    
    location.reload();
}
  