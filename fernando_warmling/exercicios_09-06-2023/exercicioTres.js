class Cliente {
    constructor(nome, email, cpf) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }


    relatorio = () => {
        return ` 
 ${"Este é o cadastro de :"} 
    Nome: ${this.nome}
    CPF: ${this.cpf}
    Email: ${this.email}`;
    }
};

const cliente1 = new Cliente("xxx", "xxxx@xxx", "xxx.xxx.xxx.xx");

console.log(cliente1.relatorio());
