import http from 'http'
import fs from 'fs'

const PORT = 8050
const html = fs.readFileSync('index.html')

const server = http.createServer((req,res)=>{
    let log =  `Request Method ${req.method} and url ${req.url} - ${new Date()} \n`
    console.log(log)
    fs.appendFileSync('logs.txt',log)
    if(req.method != 'GET'){
        // res.writeHead(405)
        res.end('Method Not Allowed')
        return  
    }

    switch(req.url){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(html)
            res.end()
            break
        case '/products':
            res.write('Here are the products up for Sale in BarterX')
            res.end()
            break
        case '/login':
            res.write('Login to the BarterX')
            res.end()
            break
        case '/signup':
            res.write('Sign up to the BarterX')
            res.end()
            break
        case '/profile':
            res.write('Trader Profile')
            res.end()
            break
        case '/cart':
            res.write('Your Shopping Cart is here')
            res.end()
            break
        case '/checkout':
            res.write("Lets' start shipping")
            res.end()
            break
        case '/orders':
            res.write('Your Orders are here')
            res.end()
            break
        case '/categories':
            res.write('Browse Categories')
            res.end()
            break
        case '/chat':
            res.write('Your Chat with fellow Traders')
            res.end()
            break
        case '/contact':
            res.write('Contact Us at')
            res.end()
            break
        case '/about':
            let about =  fs.readFileSync('about.html')
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(about)
            res.end()
            break
        case '/api/products':
            let api = [
                { "id": 1, "name": "Used Laptop", "price": 300 },
                { "id": 2, "name": "Second-hand Bicycle", "price": 50 }
            ]
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.write(JSON.stringify(api))
            res.end()
            break
        default:
            let error_json = {
                "error": "Page not found",
                "statusCode": 404
            }
            res.writeHead(404,{'content-type':'application/json'})
            res.write(JSON.stringify(error_json))
            res.end()
            break
    }
})

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})