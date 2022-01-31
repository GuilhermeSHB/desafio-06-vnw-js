//1 - Crie um objeto que receba ao menos três propriedades sobre você.
let sobreMim = {
    nome = "Guilherme",
    idade = 26,
    signo = "Aquario"
  }
  
  //2 - Adicione uma nova propriedade sem alterar seu objeto inicial.
  
  sobreMim.comidaFavorita = "Strogonoff";
  
  //3 - Remova uma propriedade desse objeto.
  
  delete sobreMim.signo;
  
  //4 - Mostre no console todas as propriedades desse objeto.
  
  console.log(sobreMim)
  
  //5 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
  //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
  //Na propriedade amigos, adicione ao menos 4 itens.
  
  let cadastro = [
    {
      nome: "Guilherme",
      idade: 26 ,
      telefone: 999999999,
      amigos: ["Rennan","Digao","Juliana","Karinne"]
    },
    {
      nome: "Renan",
      idade: 32 ,
      telefone: 999998888,
      amigos: ["Rangel","Luis", "Jorge","Lucas"]
    },
     {
      nome: "Ivana",
      idade: 54 ,
      telefone: 999997777,
      amigos: ["Lucas","Marcelo","Barbara","Davi"] 
    },
     {
      nome: "Rodrigo",
      idade: 25 ,
      telefone: 999996666,
      amigos: ["Guido","Charles","Vinicius","Thiago"]   
    },
     {
      nome: "João",
      idade:  24,
      telefone: 999995555,
      amigos: ["Rennan","Giovana","Marcele","Léo"]
    }
  ]
  
  
  
  
  //6 - Mostre no console o nome de um amigo de cada lista.
  
  for(let cont = 0; cont<=5;cont++){
    i = 1;
    console.log(cadastro[cont].amigos[i]);
  }