function validarNome(req, res, next){
    const {name} = req.body;

    if(!name || typeof name !== 'string' || name.trim() === ''){
        return res.status(400).json({body: 'Ocorreu um erro: Faltou o nome ou nome inválido.'})
    }

    next();
}

module.exports = validarNome;