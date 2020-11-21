let express = require('express')
let app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());



const itemController = require('./controller/itemController')
const vendaController = require('./controller/vendaController')
const vendedoraController = require('./controller/vendedoraController')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(`call made ${req.url}  ${req.method}`)
    next()
})

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

app.route(`/${item}`)
    .get(itemController.getAll)
    .post(itemController.insert)

app.route(`/${item}/:id`)
    .delete(itemController.remove)
    .get(itemController.getById)


app.listen(3000)