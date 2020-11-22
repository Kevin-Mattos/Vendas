const sql = require('sqlite3').verbose()

const db = new sql.Database('./dbs/lojadamae.db', sql.OPEN_READWRITE | sql.OPEN_CREATE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the users database.');
})

// db.run('drop table item')
//  db.run('drop table vendedora')
//  db.run('drop table venda')
//  db.run('drop table tipo')

db.run('PRAGMA foreign_keys = ON')

let queryCriaVendedora = `CREATE TABLE IF NOT EXISTS
                vendedora(
                    id integer PRIMARY KEY AUTOINCREMENT,
                    nome text NOT NULL,
                    UNIQUE(nome) ON CONFLICT FAIL          
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
let queryCriaItem = `CREATE TABLE IF NOT EXISTS
                item(
                    id integer PRIMARY KEY AUTOINCREMENT,
                    nome text NOT NULL,
                    valor real NOT NULL,
                    modelo text DEFAULT null,
                    id_vendedora integer DEFAULT -1,
                    id_tipo integer NOT NULL,
                    FOREIGN KEY (id_tipo) REFERENCES tipo(id) ON DELETE CASCADE,
                    FOREIGN KEY (id_vendedora) REFERENCES vendedora(id)  ON DELETE CASCADE          
                )`
//
let queryCriaVenda = `CREATE TABLE IF NOT EXISTS
                venda(id integer PRIMARY KEY AUTOINCREMENT,                
                valor real NOT NULL,
                desconto real NOT NULL,
                data text,
                id_item integer NOT NULL,
                id_vendedora integer NOT NULL,
                FOREIGN KEY (id_item) REFERENCES item(id) ON DELETE CASCADE,
                FOREIGN KEY (id_vendedora) REFERENCES vendedora(id) ON DELETE CASCADE
                )`
//

db.run(queryCriaVendedora)
db.run(queryCriaTipo)
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