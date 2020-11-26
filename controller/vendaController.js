
const table = 'venda'
let dbHanlders = require("../handlers")


async function getAll(req, res, next){
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

async function insert(req, res, next){
    let body = req.body
    
    let valor = body.valor
    let desconto = body.desconto
    let data = getFormattedDate()
    console.log(data)
    let id_item = body.id_item
    let id_vendedora = body.id_vendedora

    let venda = {valor, desconto, data, id_item, id_vendedora}
    dbHanlders.insertIntotable(table, venda,req, res, next)

   
}

async function remove(req, res, next){
    let body = req.body
    let vendaId = req.params.id    

    dbHanlders.removeFromTable(table, vendaId, req, res, next)
}


async function getById(req, res, next){
       
    let vendaId = req.params.id        
    dbHanlders.getById(table, vendaId, req, res, next)
}

async function update(req, res, next){
    let body = req.body
    

    dbHanlders.update(table, body, req, res, next)

}

module.exports = {
    getAll,
    insert,
    remove,
    getById,
    update
}