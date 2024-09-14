import express from 'express'
import routes from './route/index'

const app = express()
app.use(express.json)
routes(app)

export default app