const sql = require('sqlite3').verbose()

const db = new sql.Database('./dbs/lojadamae.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the users database.');
})

//db.run('drop table item')
//db.run('drop table vendedora')
//db.run('drop table venda')

let queryCriaVendedora = `CREATE TABLE IF NOT EXISTS
                vendedora(
                    id integer PRIMARY KEY AUTOINCREMENT,
                    nome text NOT NULL,
                    UNIQUE(nome) ON CONFLICT FAIL          
                )`
//
let queryCriaItem = `CREATE TABLE IF NOT EXISTS
                item(
                    id integer PRIMARY KEY AUTOINCREMENT,
                    nome text NOT NULL                        
                )`
//
let queryCriaVenda = `CREATE TABLE IF NOT EXISTS
                venda(id integer PRIMARY KEY AUTOINCREMENT,                
                valor real NOT NULL,
                desconto real NOT NULL,
                data text,
                id_item integer NOT NULL,
                id_vendedora int NOT NULL,
                FOREIGN KEY (id_item) REFERENCES item(id),
                FOREIGN KEY (id_vendedora) REFERENCES vendedora(id)
                )`
//

db.run(queryCriaVendedora)
db.run(queryCriaItem)
db.run(queryCriaVenda)

console.log('criando db')


function getdb(){
    console.log('getting db')
    return db
}

module.exports = {
    getdb
}