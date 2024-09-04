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
        body.nome != undefined &&
        body.matricula != undefined &&
        body.curso != undefined &&
        body.nome != "" &&
        body.matricula != "" &&
        body.curso != "" &&
        body.ano != "" &&
        soNumeros == true
    ) {
        return {
            id,
            nome: body.nome,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano,
        };
    }
};

module.exports = model;
