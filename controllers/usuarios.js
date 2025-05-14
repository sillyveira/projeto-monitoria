// router.post('/adicionar-usuario', validarNome, (req,res) => {
//     const {name} = req.body;
//     usuarios.push({id: 0, nome: name});
//     res.status(200).json({body: "O usuário foi criado com sucesso."});
// })

function adicionarUsuario(nome, lista) {
    lista.push({id: 0, nome: nome});
    return true;
}