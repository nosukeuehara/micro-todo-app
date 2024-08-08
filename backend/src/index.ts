import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { css } from 'hono/css'

const app = new Hono()
app.use('/*', cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
