const sql = require('sqlite3').verbose()

const db = new sql.Database('./dbs/lojadamae2.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the users database.');
})

let triggerOnInsertVenda = `create trigger IF NOT EXISTS atualizaVenda after insert on venda
                begin
                UPDATE item SET vendido = 1 WHERE new.id_item = item.id;
                end`

//

let triggerOndeleteVenda = `create trigger IF NOT EXISTS removeVenda after delete on venda
                begin
                UPDATE item SET vendido = 0 WHERE old.id_item = item.id;
                end`
//

let triggerOndeleteItem = `create trigger IF NOT EXISTS removeItem after delete on item
                begin
                INSERT INTO itemremovido VALUES(old.id, old.nome, old.valor, old.vendido,old.modelo, old.id_vendedora, old.id_tipo);
                end`

let triggerOndeleteVendedora = `create trigger IF NOT EXISTS transfereitem before delete on Vendedora
                begin
                UPDATE Item SET id_vendedora = 1 WHERE old.id = item.id;
                end`
//
//
// db.run('drop table vendedora', function(err){
//     db.run('drop table venda', function(err){
//         db.run('drop table tipo', function(err){
//             db.run('drop table item', function(err){
//                 db.run('drop table maleta', function(err){

//                 })
//             })
//         })
//     })
// })




//db.run("insert into vendedora(nome) Values('Voce')")



db.run('PRAGMA foreign_keys = ON')

let queryCriaVendedora = `CREATE TABLE IF NOT EXISTS
                vendedora(
                    id integer PRIMARY KEY AUTOINCREMENT,
                    nome text NOT NULL,
                    UNIQUE(nome) ON CONFLICT FAIL          
                )`
//

let queryCriaItemRemovido = `CREATE TABLE IF NOT EXISTS
                itemremovido(
                    id integer PRIMARY KEY,
                    nome text NOT NULL,
                    valor real NOT NULL,
                    vendido integer default 0,
                    modelo text DEFAULT null,                    
                    id_vendedora integer DEFAULT 1,
                    id_tipo integer DEFAULT NULL                   
                )`
//

let queryCriaTipo = `CREATE TABLE IF NOT EXISTS
                tipo(
                        id integer PRIMARY KEY AUTOINCREMENT,
                        nome text NOT NULL,                        
                        UNIQUE(nome) ON CONFLICT FAIL  
                    )
                    `
//
let queryCriaMaleta = `CREATE TABLE IF NOT EXISTS
                maleta(
                        id integer PRIMARY KEY AUTOINCREMENT,
                        nome text NOT NULL,                        
                        UNIQUE(nome) ON CONFLICT FAIL  
                    )
                    `
//


let queryCriaItem = `CREATE TABLE IF NOT EXISTS
                item(
                    id integer PRIMARY KEY AUTOINCREMENT,
                    nome text NOT NULL,
                    valor real NOT NULL,
                    vendido integer default 0,
                    modelo text DEFAULT null,      
                    id_maleta integer DEFAULT NULL,              
                    id_vendedora integer DEFAULT 1,
                    id_tipo integer NOT NULL,
                    FOREIGN KEY (id_tipo) REFERENCES tipo(id) ON DELETE CASCADE,
                    FOREIGN KEY (id_vendedora) REFERENCES vendedora(id) ON DELETE SET default,
                    FOREIGN KEY (id_maleta) REFERENCES maleta(id) ON DELETE SET default  

                )`
//
let queryCriaVenda = `CREATE TABLE IF NOT EXISTS
                venda(id integer PRIMARY KEY AUTOINCREMENT,                
                valor real NOT NULL,
                desconto real NOT NULL,
                data text,
                id_item integer NOT NULL,
                id_vendedora integer DEFAULT NULL,
                FOREIGN KEY (id_item) REFERENCES item(id) -- ON DELETE CASCADE,
                FOREIGN KEY (id_vendedora) REFERENCES vendedora(id) -- ON DELETE SET NULL
                )`
//

db.run(queryCriaVendedora, function(err){
    db.run(queryCriaTipo, function(err){
        db.run(queryCriaMaleta, function(err){
            db.run(queryCriaItemRemovido, function(err){
                db.run(queryCriaItem, function(err){
                    db.run(queryCriaVenda, function(err){
                        db.run(triggerOnInsertVenda, function(err){
                            db.run(triggerOndeleteVenda, function(err){
                                db.run(triggerOndeleteItem, function(err){
                                    db.run(triggerOndeleteVendedora, function(err){ 
                    
                                    })
                                })
                            })
                        })
                    })                
                })
            })
        })
    })
})








console.log('criando db')


function getdb(){
    console.log('getting db')
    return db
}

module.exports = {
    getdb
}