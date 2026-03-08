'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'))
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data, null, 2))
  } else if (req.url === '/card') {
    try {
      const output = fs.readFileSync(path.join(__dirname, 'bin/output'), 'utf8')
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(output)
    } catch (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Card not built yet. Run "npm run build" first.')
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
  }
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
  console.log(`  GET /     - returns card data as JSON`)
  console.log(`  GET /card - returns the rendered card`)
})
