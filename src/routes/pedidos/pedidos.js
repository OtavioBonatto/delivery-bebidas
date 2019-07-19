const express = require('express')
const router = express.Router()
const Pedido = require('../../models/pedido')
const authPedidos = require('../../middlewares/authPedidos')

router.get('/pedidos', authPedidos, async (req, res) => {
    
    try {
        const pedidos = await Pedido.find({})
        
        res.render('pedidos/pedidos', { pedidos: pedidos })
        
    } catch(e) {
        console.log(e)
    }    
})

router.get('/pedidos-deletar/:id', async (req, res) => {

    try {
        const pedidoId = req.params.id 
        await Pedido.deleteOne({ _id: pedidoId })
        res.redirect('/pedidos')

    } catch(e) {
        console.log(e)
    }
})

module.exports = router