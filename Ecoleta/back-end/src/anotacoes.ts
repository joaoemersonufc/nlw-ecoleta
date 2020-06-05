import express from "express";

const app = express();

app.use(express.json());

// Rota: endereço completo da requisição
// Recurso: qual entendidade estamos acessando no sistema

// GET: buscar uma ou mais informações do back-end
// POST: criar uma nova informação no back-end
// PUT: atualizar uma informação existente no back-end
// DELETE: remover uma informação no back-end

// POST http://localhost:3333/users = cria um usuario
// GET http://localhost:3333/users = listar usuarios
// GET http://localhost:3333/users/1 = lista usuario por id

// Request params = parametros que vem na propria rota para identificar um recurso
// Query param = parametros geralmente opcionais (?parametro)
// Request body: parametros para criação/atualização de informações

// SELECT * FROM users WHERE name = "Joao"
// knex('users').where('name', 'Joao').select('*')
const users = [
  "Joao", //0
  "Cleiton", //1
  "Robson", //2
];

app.get("/users", (req, res) => {
  console.log("Listagem de usuarios");

  const search = String(req.query.search);

  const filteredUsers = search
    ? users.filter((user) => user.includes(search))
    : users;

  return res.json(filteredUsers);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users[id];

  return res.json(user);
});

app.post("/users", (req, res) => {
  const data = req.body;

  const user = {
    name: data.name,
    email: data.email,
  };

  return res.json(user);
});

app.listen(3333);
