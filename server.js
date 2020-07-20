const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const redirects = [
  { from: '/workshops', to: '/evolve' },
]

app.prepare()
.then(() => {
  const server = express()

  server.get('/location/:location', (req, res) => {
    const actualPage = '/location'
    const queryParams = { location: req.params.location }
    app.render(req, res, actualPage, queryParams)
  })

  redirects.forEach(({ from, to, type = 301, method = 'get' }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to)
    })
  })

  server.get('/schedule/:location', (req, res) => {
    const actualPage = '/schedule'
    const queryParams = { location: req.params.location }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/location/:id', (req, res) => {
    const actualPage = '/location'
    const queryParams = { location: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/team/:handle/embed', (req, res) => {
    const actualPage = '/team_frame'
    const queryParams = { handle: req.params.handle }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/team/:handle/:id', (req, res) => {
    const actualPage = '/team_show'
    const queryParams = { handle: req.params.handle, id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/evolve/:id/:handle', (req, res) => {
    const actualPage = '/evolve_show'
    const queryParams = { id: req.params.id, handle: req.params.handle }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/journals/:handle', (req, res) => {
    const actualPage = '/journals_show'
    const queryParams = { handle: req.params.handle }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/class_styles/:handle', (req, res) => {
    const actualPage = '/class_styles_show'
    const queryParams = { handle: req.params.handle }
    app.render(req, res, actualPage, queryParams)
  })


  server.get('/online/:handle', (req, res) => {
    const actualPage = '/online_show'
    const queryParams = { handle: req.params.handle }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})