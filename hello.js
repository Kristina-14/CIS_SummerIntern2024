var http = require('http')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    console.log("Hello World!");
    res.end('The text that we want to respond back to the client from the server!!');    
<<<<<<< HEAD
}).listen(8000)
=======
}).listen(8000)
>>>>>>> 5dc579cb7b428524b21c1229641538238dfee9ab
