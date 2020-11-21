
const table = 'vendedora'
let dbHanlders = require("../handlers")


function getAll(req, res, next){
    dbHanlders.selectAllFromTable(table, req, res, next)
}

function insert(req, res, next){
    let body = req.body
    let vendedora = {"nome": body.nome}
    console.log(body)

    dbHanlders.insertIntotable(table, vendedora, req, res, next)
   
}

function remove(req, res, next){
    let vendedoraId = req.params.id 
    dbHanlders.removeFromTable(table, vendedoraId, req, res, next)
}

function getById(req, res, next){       
    let vendedoraId = req.params.id      
    dbHanlders.getById(table, vendedoraId, req, res, next)   
}


module.exports = {
    getAll,
    insert,
    remove,
    getById
}