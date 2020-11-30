

const table = 'item'
let dbHanlders = require("../handlers")


function getAll(req, res, next){
    dbHanlders.selectAllFromTable(table, req, res, next)
}

function insert(req, res, next){
    let body = req.body
    let nome = body.nome  
    let id_tipo = body.id_tipo
    let id_vendedora = body.id_vendedora
    let valor = body.valor
    let id_maleta = body.id_maleta
    

    item = {nome, id_tipo, id_vendedora, valor, id_maleta}
    dbHanlders.insertIntotable(table, item, req, res, next)
}

function remove(req, res, next){
    let body = req.body
    let itemId = req.params.id
    dbHanlders.removeFromTable(table, itemId, req, res, next)
}


function getById(req, res, next){       
    let itemId = req.params.id
    dbHanlders.getById(table, itemId, req, res, next)
}

function update(req, res, next){
    
    if(!req.body.id_maleta)
        req.body.id_maleta = null

    dbHanlders.update(table, req.body, req, res, next)
}

module.exports = {
    getAll,
    insert,
    remove,
    getById,
    update
}