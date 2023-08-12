class Cliente {
  constructor(nome, email, cpf) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }

  relatorio = () => {
    console.log(`Nome: ${this.nome}\nCPF: ${this.cpf}\nEmail: ${this.email}`);
  };
}

const cliente1 = new Cliente('Fulano', 'fulano@gmail.com', '123.456.789-00');

cliente1.relatorio();
