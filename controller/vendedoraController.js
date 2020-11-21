let db = require('../db').getdb()
const table = 'vendedora'

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

function insert(req, res, next){
    let body = req.body
    let vendedora = body.nome
    console.log(body)
    db.run(`INSERT INTO ${table}(nome) VALUES (?)`, vendedora, function(err){
        if(err){
            res.statusCode = 400
            res.send({'erro': err})
            return
        }       
        
        console.log(`${this.lastID} inserida`)
        res.send({'id': this.lastID,'nome' :vendedora})
    })
}

function remove(req, res, next){

    let vendedoraId = req.params.id    
    console.log('i am here')
    db.run(`DELETE FROM ${table} where ${table}.id = ${vendedoraId}` , function(err){
        if(err || this.changes == 0){
            res.statusCode = 400

            if(!err)
                res.send({'erro': `${table} nao encontrada`})
            else
                res.send(err)
                return
        }      
        
        res.send({'removido': vendedoraId})
    })
}

function getById(req, res, next){
       
    let vendedoraId = req.params.id        

    db.all(`SELECT * FROM ${table} where ${table}.id = ${vendedoraId}` , function(err, rows){
        if(err || !rows){
            res.statusCode = 400

            if(!err)
                res.send({'erro': `${vendedoraId} nao encontrada`})
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