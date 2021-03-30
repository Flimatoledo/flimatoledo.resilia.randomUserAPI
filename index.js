const express = require("express");
const app = express();
const port = 3000;

const faker = require("faker");
faker.locale = "pt_BR";

const people = [];
let id = 1;
const randomPerson = Math.floor(Math.random() * 100);

for (let i = 0; i < 100; i++) {
  const person = {
    
      id: id++,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: faker.name.gender(),
      birthDay: new Intl.DateTimeFormat("pt-br", {}).format(
        new Date(faker.date.past())
      ),
      email: faker.internet.email(),
      password: faker.internet.password(),
    
  };
  people.push(person);
}

app.get("/users", (req, res) => {
  res.send(people);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

console.log(people[randomPerson]);