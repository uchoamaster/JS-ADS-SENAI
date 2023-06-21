class Cliente {
    constructor(nome, email, cpf) {
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
    }
  
    documentosPessoa = () => {
      return `Nome: ${this.nome}\nCPF: ${this.cpf}\nEmail: ${this.email}`;
    }
  }