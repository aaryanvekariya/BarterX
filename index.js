import http from 'http'
import fs from 'fs'
import path from 'path'

const PORT = 8050
const indexPath = path.join(__dirname, 'index.html')
const aboutPath = path.join(__dirname, 'about.html')

const server = http.createServer((req, res) => {
  let log = `Request Method ${req.method} and url ${req.url} - ${new Date()} \n`
  console.log(log)
  fs.appendFileSync('logs.txt', log)
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain' })
    res.end('Method Not Allowed')
    return
  }

  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      fs.createReadStream(indexPath).pipe(res)
      break
    case '/products':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Here are the products up for Sale in BarterX')
      break
    case '/login':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Login to the BarterX')
      break
    case '/signup':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Sign up to the BarterX')
      break
    case '/profile':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Trader Profile')
      break
    case '/cart':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Your Shopping Cart is here')
      break
    case '/checkout':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end("Lets' start shipping")
      break
    case '/orders':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Your Orders are here')
      break
    case '/categories':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Browse Categories')
      break
    case '/chat':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Your Chat with fellow Traders')
      break
    case '/contact':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Contact Us at')
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html' })
      fs.createReadStream(aboutPath).pipe(res)
      break
    case '/api/products':
      const api = [
        { "id": 1, "name": "Used Laptop", "price": 300 },
        { "id": 2, "name": "Second-hand Bicycle", "price": 50 }
      ]
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(api))
      break
    default:
      const errorJson = {
        "error": "Page not found",
        "statusCode": 404
      }
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(errorJson))
      break
  }
})

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})