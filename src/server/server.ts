import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

// Middleware

app.use(async (ctx, next) => {
  console.log('Url: ', ctx.url)
  next()
})

router.get('/*', async (ctx) => {
  ctx.body = 'Hello World!'
})

app.use(router.routes())

app.listen(3000)

console.log('App listening on port 3000...')
