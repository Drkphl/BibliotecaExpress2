let nextId = 1;

const model = (body, id = nextId++) => {
    const ano = body.ano;
    let soNumeros = true;

    ano.split("").forEach((el) => {
        if (isNaN(Number(el))) {
            soNumeros = false;
        }
    });

    if (
        body.titulo != undefined &&
        body.autor != undefined &&
        body.genero != undefined &&
        body.titulo != "" &&
        body.autor != "" &&
        body.genero != "" &&
        body.ano != "" &&
        soNumeros == true
    ) {
        return {
            id,
            nome: body.nome,
            autor: body.autor,
            genero: body.genero,
            ano: body.ano,
        };
    }
};

module.exports = model;
