const authPedidos = (req, res, next) => {
    var usuario = (req.user === undefined) ? usuario : req.user.password;

    if(usuario == 'banana123') {
        return next()
    }

    req.flash('error', 'Você precisa estar logado')
    res.redirect('/users/login')
}

module.exports = authPedidos