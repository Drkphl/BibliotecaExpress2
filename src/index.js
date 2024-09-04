const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());
// app.use(cep_endereco) // Middleware de uso global

app.listen(port, () => {
    console.log(`Server running in ${port} port`);
});

const Estudante_router = require("./routes/Estudante.js");
const Livro_router = require("./routes/Livro.js");
const Aluguel_router = require("./routes/Aluguel.js");

app.use("/Livro", Livro_router);
app.use("/Estudante", Estudante_router);
app.use("/Aluguel", Aluguel_router);
