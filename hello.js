var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    console.log("Hello World!");
    res.end('The text that we want to respond back to the client from the server!!');    
}).listen(8000)
