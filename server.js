let express = require('express')
let app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const itemController = require('./controller/itemController')
const vendaController = require('./controller/vendaController')
const vendedoraController = require('./controller/vendedoraController')
const tipoController = require('./controller/tipoController')
const maletaController = require('./controller/maletaController')


app.get('/', (req, res, next) => {
    console.log('hello')
    // res.sendStatus(200)
    res.genResp = {"ea": "eae"}
    next()
}, function t(req, res, next){
        res.send(res.genResp)
})

const vendedoras = 'vendedora'
const vendas = 'venda'
const item = 'item'
const tipo = 'tipo'
const maleta = 'maleta'

app.route(`/${vendedoras}`)
    .get(vendedoraController.getAll)
    .post(vendedoraController.insert)

app.route(`/${vendedoras}/:id`)
    .delete(vendedoraController.remove)
    .get(vendedoraController.getById)

app.route(`/${vendas}`)
    .get(vendaController.getAll)
    .post(vendaController.insert)

app.route(`/${vendas}/:id`)
    .delete(vendaController.remove)
    .get(vendaController.getById)
    .put(vendaController.update)

app.route(`/${item}`)
    .get(itemController.getAll)
    .post(itemController.insert)

app.route(`/${item}/:id`)
    .delete(itemController.remove)
    .get(itemController.getById)
    .put(itemController.update)

app.route(`/${tipo}`)
    .get(tipoController.getAll)
    .post(tipoController.insert)

app.route(`/${tipo}/:id`)
    .delete(tipoController.remove)
    .get(tipoController.getById)



app.route(`/${maleta}`)
    .get(maletaController.getAll)
    .post(maletaController.insert)

app.route(`/${maleta}/:id`)
    .delete(maletaController.remove)
    .get(maletaController.getById)



app.use((req, res, next) => {
    //res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(`call made ${req.url}  ${req.method} at ${Date(Date.now())}`)
    let args = res.locals

    if(args.response || args.err){
        let response = {}
      if(args.err){
        response.erro = args.err
        response.success = false
               
      }else{
        response.success = true
        response.dado = args.response
      }
      res.send(response)
    }
    else
        next()
})



app.listen(3000)