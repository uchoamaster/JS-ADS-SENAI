let jsMissao = "Missão JS realizada com sucesso!";


document.getElementById("jsButton").addEventListener
    ("click",  ()=> {console.log(jsMissao)});

window.addEventListener("load", ()=> {
    console.log("Evento onload disparado!");
});

