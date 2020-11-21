let db = require('../db').getdb()
const table = 'venda'

function getAll(req, res, next){
    db.all(`SELECT * FROM ${table}`,function(err, rows){
             
        if(err){
            console.log(err)
            res.send(err)
            return
        }
        
        res.send(rows)

    })
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

    let values = [valor, desconto, data, id_item, id_vendedora]
    db.run(`INSERT INTO ${table}(valor, desconto, data, id_item, id_vendedora) VALUES (?, ?, ?, ?, ?)`, values, function(err){
        if(err){
            res.statusCode = 400
            res.send({'erro': err})
            console.log(err)
            return
        }               
        
        res.send({"id": this.lastID,valor, desconto, data, id_item, id_vendedora})
    })
}

function remove(req, res, next){
    let body = req.body
    let vendaId = req.params.id    

    db.run(`DELETE FROM ${table} where ${table}.id = ${vendaId}` , function(err){
        if(err || this.changes == 0){
            res.statusCode = 400

            if(!err)
                res.send({'erro': 'venda nao encontrada'})
            else
                res.send(err)
                return
        }      
        
        res.send({'removido': vendaId})
    })
}


function getById(req, res, next){
       
    let vendaId = req.params.id        

    db.all(`SELECT * FROM ${table} where ${table}.id = ${vendaId}` , function(err, rows){
        if(err || !rows){
            res.statusCode = 400

            if(!err)
                res.send({'erro': `${vendaId} nao encontrada`})
            else
                res.send(err)
            return
        }      
        
        res.send(rows)
    })
}


module.exports = {
    getAll,
    insert,
    remove,
    getById
}