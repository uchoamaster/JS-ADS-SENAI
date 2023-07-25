// exercício 01
function atividade1() {
    let opcao = document.querySelector('input[name="opcao"]:checked').value;
    let quantidade = document.querySelector('input[name="qtd"]').value;

    if (quantidade > 0) {
        switch (opcao) {
            case 'refrigerante':
                break;
            case 'sorvete':
                break;
            case 'suco':
                break;
            default:
                alert("Estamos sem a opção "+opcao);
        }
    } else {
        alert("Preencha corretamente o campo quantidade");
    }
}

//exercício 02

let botaoCalcularSubtracao = document.getElementById('botaoCalcularSubtracao');

botaoCalcularSubtracao.addEventListener("click", () =>{
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let resultado = (valor1 - valor2);
    let elementoResultadoSub = document.getElementById('resultadoSub');

    elementoResultadoSub.innerHTML = `Resultado: ${resultado}`;
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
});

//exercício 02

let botaoCalcularDivisao = document.getElementById('botaoCalcularDivisao');

botaoCalcularDivisao.addEventListener("click", () =>{
    let valor1div = document.getElementById('valor1div').value;
    let valor2div = document.getElementById('valor2div').value;
    let elementoResultadoDiv = document.getElementById('resultadoDiv');
    let resultado = 0;

    if(valor2div == 0){
        alert('Número inválido, insira um nº diferente de 0');
    } else {
        resultado = (valor1div / valor2div);
        elementoResultadoDiv.innerHTML = `Resultado: ${resultado}`;
        document.getElementById('valor1').value = '';
        document.getElementById('valor2').value = '';
    }
});

// exercício 03

let botaoRepetir = document.getElementById('submitRepeticao');

botaoRepetir.addEventListener("click", () =>{
    let valorRepeticao = document.getElementById('valorRepeticao').value;
    for(i = 0; i < valorRepeticao; i++){
        console.log('Surpresa!');
    }
    document.getElementById('valorRepeticao').value = '';
});

let botaoUsuario = document.getElementById('usuario');

botaoUsuario.addEventListener("click", () => {
    let usuario = {
        cidade: 'Joinville',
        estado: 'SC',
        rua: 'Rua dos Pinheiros',
        bairro: 'Centro',
        numero: '123'
    };

    let printConsole = `O usuário mora em ${usuario.cidade}/${usuario.estado}, no bairro ${usuario.bairro}, na rua ${usuario.rua}, com nº ${usuario.numero}`

    console.log(printConsole);
});

let botaoNota = document.getElementById('enviarNota');

botaoNota.addEventListener("click", () => {
    let nota = document.getElementById('nota').value;

    if(nota > 10){
        alert('Nota inválida');
    }else if(nota >= 7){
        alert('Aluno aprovado');
    }else if(nota == 5){
        alert('Aluno em recuperação');
    }else{
        alert('Aluno reprovado');
    }
});

