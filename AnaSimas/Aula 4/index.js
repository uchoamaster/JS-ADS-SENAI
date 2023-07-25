const opcoesLinguagens = ["JavaScript", "Python", "TypeScript", "PHP"];
const botaoTraduzir = document.getElementById('botaoTraduzir');
const linguagemInput = document.getElementById('ling_input');
const linguagemOutput = document.getElementById('ling_output');
const loadIcon = document.getElementById('loader');

//Cria o select com as linguagens do array de opções
for (let i = 0; i < opcoesLinguagens.length; i++) {
    linguagemInput.innerHTML += `<option value="${opcoesLinguagens[i]}">${opcoesLinguagens[i]}</option>`;
    linguagemOutput.innerHTML += `<option value="${opcoesLinguagens[i]}">${opcoesLinguagens[i]}</option>`;
}

botaoTraduzir.addEventListener("click", () => {
    //Busca a chave API
    const APIKey = document.getElementById('APIkey').value;
    //Escolha da linguagem de entrada
    let linguagemEscolhidaInput = linguagemInput.value;
    //Escolha da linguagem de tradução
    let linguagemEscolhidaOutput = linguagemOutput.value;
    //Código a ser traduzido
    const codigo = document.getElementById('input').value;

    if (!APIKey) {
        swal("Insira a chave API", "Insira a chave da API para continuar, caso não tenha uma, entre em contato com o dev", "warning");
    }

    if (!codigo) {
        swal("Insira o código", "Insira um código para traduzir!", "warning");
    }

    if (linguagemEscolhidaInput === linguagemEscolhidaOutput) {
        swal("Escolha linguagens diferentes", "Traduza o código de diferentes linguagens", "warning");
    }

    //String do prompt de comando enviado para o servidor da OpenAI
    let promptComando = `Traduza o código ${linguagemEscolhidaInput} para ${linguagemEscolhidaOutput}: ${codigo}`;

    //chamada do método de tradução
    traduzir(APIKey, promptComando);
});

//Chamada da API
async function traduzir(APIKey, promptComando) {
    //troca o botão de traduzir pelo ícone de carregamento
    loadIcon.style.display = 'block';
    loadIcon.setAttribute("disabled", "true");
    botaoTraduzir.style.display = 'none';

    const output = document.getElementById('output');
    let dados;

    //console log para acompanhar qual o prompt formado
    console.log(promptComando)

    //faz a chamada para o servidor da OpenAI
    await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${APIKey}`,
        },
        body: JSON.stringify({
            //Informações da documentação da OpenAI para fazer a requisição
            model: "text-davinci-003",
            prompt: promptComando,
            max_tokens: 2048,
            temperature: 0
        })
    })
        .then((resposta) => resposta.json())
        .then((dadoRetornado) => {
            //Para buscar apenas o texto de resposta da IA
            dados = dadoRetornado.choices[0].text.trim();
        })
        .catch((erro) => {
            console.log(erro);
            swal("Ops!", "Ocorreu algum problema para obter a resposta! Tente novamente", "warning");
        })

    //console log para acompanhar qual resposta de acordo com o prompt
    console.log(dados)
    output.innerHTML = dados

    //troca o ícone de carregamento pelo botão novamente
    loadIcon.style.display = 'none';
    botaoTraduzir.style.display = 'block';
}

//Método que permite copiar a resposta pelo botão
const botaoCopiar = document.getElementById('botaoCopiar');
botaoCopiar.addEventListener("click", () =>{
    navigator.clipboard.writeText(output.value);
    swal("Uhu!", "Código copiado para a área de transferência" ,"success");
});