function eventoOnload(){
    var texto = "Evento onload disparado."
    var missaoJs = " Missão JS em execução!!!"
    alert(texto + missaoJs);
    return console.log(texto, missaoJs);
}

botaoSair.onclick = eventoOnclick;
function eventoOnclick(){
    var texto = "Missão JS realizada com sucesso!!!"
    alert(texto);
    return console.log(texto);
}