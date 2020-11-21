let db = require('../db').getdb()

const table = 'item'

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
    let nome = body.nome
  
    
    db.run(`INSERT INTO ${table}(nome) VALUES (?)`, nome, function(err){
        if(err){
            res.statusCode = 400
            res.send({'erro': err})
            console.log(err)
            return
        }               
        console.log(`${nome} inserido`)
        res.send({"id": this.lastID, nome})
    })
}

function remove(req, res, next){
    let body = req.body
    let item = req.params.id    

    db.run(`DELETE FROM ${table} where ${table}.id = ${item}` , function(err){
        if(err || this.changes == 0){
            res.statusCode = 400

            if(!err)
                res.send({'erro': 'item nao encontrado'})
            else
                res.send(err)
                return
        }      
        
        res.send({'removido': item})
    })
}


function getById(req, res, next){
       
    let item = req.params.id        

    db.all(`SELECT * FROM ${table} where ${table}.id = ${item}` , function(err, rows){
        if(err || !rows){
            res.statusCode = 400

            if(!err)
                res.send({'erro': `${item} nao encontrado`})
            else
                res.send(err)
            return
        }      
        console.log(rows)
        res.send(rows)
    })
}


module.exports = {
    getAll,
    insert,
    remove,
    getById
}