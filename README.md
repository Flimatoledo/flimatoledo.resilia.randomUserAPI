# flimatoledo.resilia.randomUserAPI

RandomUserAPI é uma API que retorna um usuário de forma aleatória.

Nessa API foi utilizado a biblioteca FAKER.js e o Express. 

Para uliliza-lá é preciso seguir alguns passos:

1- no terminal do seu VSCode executar o código --> npm init -y 

2- instalar o Express com o codigo --> npm install express

3- instalar o Faker.js com o --> npm install faker

E agora todas você já tem tudo o que precisa pra RandomUserAPI funcionar. 

para rodar o programa, no console, execute o:

4- node index.js 


Será retornado no console um usuário com a seguinte extrutura: 

{
    
      id: id++,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.name.gender(),
      birthDay: new Intl.DateTimeFormat("pt-br", {}).format(
        new Date(faker.date.past())
      ),
      email: faker.internet.email(),
      password: faker.internet.password(),
    
  }
  
  
  Sé for visualizado, é porque tudo está funcionando!
