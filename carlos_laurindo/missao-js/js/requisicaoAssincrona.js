function simularRequisicaoAssincrona() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Requisição concluída com sucesso!');
      }, 2000);
    });
  }