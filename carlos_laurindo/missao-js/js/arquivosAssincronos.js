function lerArquivoAssincronamente(caminhoArquivo) {
    return new Promise((resolve, reject) => {
      // Simulação de leitura de arquivo assíncrona
      setTimeout(() => {
        if (caminhoArquivo === 'arquivo.txt') {
          resolve('Conteúdo do arquivo.txt');
        } else {
          reject('Erro ao ler o arquivo.');
        }
      }, 2000);
    });
  }