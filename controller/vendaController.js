
const table = 'venda'
let dbHanlders = require("../handlers")


function getAll(req, res, next){
    dbHanlders.selectAllFromTable(table, req, res, next)
}
function getFormattedDate(){
    let timeElapsed = Date.now()
    let date = new Date(timeElapsed)
    let format = "yy-mm-dd"
    return format.replace('mm', date.getMonth() + 1)
    .replace('yy', date.getFullYear())
	.replace('dd', date.getDate());
    
}

function insert(req, res, next){
    let body = req.body
    
    let valor = body.valor
    let desconto = body.desconto
    let data = getFormattedDate()
    let id_item = body.id_item
    let id_vendedora = body.id_vendedora

    let venda = {valor, desconto, data, id_item, id_vendedora}
    dbHanlders.insertIntotable(table, venda, req, res, next)
   
}

function remove(req, res, next){
    let body = req.body
    let vendaId = req.params.id    

    dbHanlders.removeFromTable(table, vendaId, req, res, next)
}


function getById(req, res, next){
       
    let vendaId = req.params.id        
    dbHanlders.getById(table, vendaId, req, res, next)
}


module.exports = {
    getAll,
    insert,
    remove,
    getById
}