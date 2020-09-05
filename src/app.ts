import * as express from 'express'
import { Application, Request, Response } from 'express'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as cors from 'cors'

require('dotenv').config()

import middlewares from './middlewares'
import api from './api'

const app: Application = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.json({
		message: 'Hello World',
	})
})

app.use('/api/v1', api)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app
