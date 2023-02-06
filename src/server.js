import express from 'express'
import {env} from '*/config/environment'
import { connectDB } from '*/config/mongodb.js'

const app = express()


connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.end('<h1>hello</h1>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log('hello')
})