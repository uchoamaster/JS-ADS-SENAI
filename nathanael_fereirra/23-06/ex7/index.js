function lerArquivoTexto(nomeArquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = function (evento) {
            const conteudo = evento.target.result;
            resolve(conteudo);
        };

        leitor.onerror = function (evento) {
            reject(evento.target.error)
        };

        const arquivo = document.querySelector('input[type="file"]').file[0];
        leitor.readAsText(arquivo)
    })
}

function handleArquivoSelecionado(evento) {
    const nomeArquivo = evento.target.files[0].name;
    lerArquivoTexto(nomeArquivo)
        .then(conteudo => {
            console.log(conteudo);
            console.log("Sucesso")
        })
        .catch(erro => {
            console.error('Erro ao ler o arquivo:', erro);
            console.log("Deu Erro")
        });
}




