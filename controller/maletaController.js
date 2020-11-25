

const table = 'maleta'
let dbHanlders = require("../handlers")


function getAll(req, res, next){
    dbHanlders.selectAllFromTable(table, req, res, next)
}

function insert(req, res, next){
    let body = req.body
    let nome = body.nome    
    
    item = {nome}
    dbHanlders.insertIntotable(table, item, req, res, next)
}

function remove(req, res, next){   
    let itemId = req.params.id
    dbHanlders.removeFromTable(table, itemId, req, res, next)
}


function getById(req, res, next){       
    let itemId = req.params.id
    dbHanlders.getById(table, itemId, req, res, next)
}


module.exports = {
    getAll,
    insert,
    remove,
    getById
}