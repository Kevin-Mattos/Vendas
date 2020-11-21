let db = require('./db').getdb()

function selectAllFromTable(table, req, res,next){
    db.all(`SELECT * FROM ${table}`, function(err, rows){
        res.locals.err = err
        res.locals.response = rows
        next()
    })
}

function insertIntotable(table, obj, req, res,next){
    let keys = Object.keys(obj).map(key => `${key}`).join(',')
    let values = Object.values(obj)
    let placeholders = values.map((value) => '?').join(',');

    db.run(`INSERT INTO ${table}(${keys}) VALUES (${placeholders})`, values, function(err){
        if(err){   
            res.statusCode = 400         
            console.log(err)
            res.locals.err = err         
        }else{
            
            obj.id = this.lastID
            res.locals.response = obj
            console.log(obj)
        }          
        next()
    })
}

function removeFromTable(table, id, req, res, next){

    db.run(`DELETE FROM ${table} where ${table}.id = ${id}` , function(err){
        if(err || this.changes == 0){
            res.statusCode = 404   
            if(!err){
                res.locals.err = {
                    errno : 404,
                    code : `${table} com id: ${id} nao encontrado`
                }
            }
            else{
                console.log(err) 
                res.locals.err = err   
            }
                
        }else{
            obj = {
                code: "Removed with success"
            }
            
            res.locals.response = obj
            console.log(obj)
        }    
        
        next()//res.send({'removido': id})
    })
}


function getById(table, id, req, res, next){

    db.all(`SELECT * FROM ${table} where ${table}.id = ${id}` , function(err, rows){
        if(err || rows.length == 0){
            res.statusCode = 404
            console.log(err)
            if(!err){
                res.locals.err = {
                    errno : 404,
                    code : `${table} com id: ${id} nao encontrado`
                }
            }else{
                res.locals.err = err
            }
            
        }else{
            res.locals.response = rows
        }
        
        next()
    })
}

module.exports = {
    selectAllFromTable,
    insertIntotable,
    removeFromTable,
    getById
}