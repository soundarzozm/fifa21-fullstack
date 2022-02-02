const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    res.write('Hello World!')
    res.end()
})

const port = 8282
server.listen(port, 'localhost')
console.log(`The server is fired up on ${port}`)
