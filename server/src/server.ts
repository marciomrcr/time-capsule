import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoute } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: ['http://localhost:3000'],
})

app.register(memoriesRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀HTTP server running in http://localhost:3333')
  })
