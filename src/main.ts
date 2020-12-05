import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
//import * as fetch from 'node-fetch'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
  
  // setInterval(() => {
  //   let url = 'http://192.168.0.114:5000'
  //   let myBody = {
  //     "nome": "Dominique",
  //     "valor": 360.6,
  //     "quantidade": 26
  // }
  //   fetch(url, { method: 'POST', body: JSON.stringify(myBody), headers: { 'Content-Type': 'application/json' },
  //   })
  //   .then(ans => ans.text())
  //   .then(txt => console.log(txt))
  // }, 1000*5*60)

}
bootstrap()
