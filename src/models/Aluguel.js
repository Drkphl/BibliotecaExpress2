const Estudante_controller = require("../controllers/Estudante.js");
const Livro_controller = require("../controllers/Livro.js");

let nextId = 1;

const validarLivros = (Livros) => Livros.every((Livro) => Livro_controller.show(Livro.Livro_id));

const model = (body, id = nextId++) => {
    if (body.data_inicio != undefined && Estudante_controller.show(body.Estudante_id) && Array.isArray(body.Livros) && validarLivros(body.Livros)) {
        return {
            id,
            data_inicio: body.data_inicio,
            Estudante_id: body.Estudante_id,
            Livros: body.Livros,
            data_fim: body.data_fim,
        };
    }
};

module.exports = model;
