const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const fileName = url.searchParams.get('file');
    
    if (!fileName) {
        res.writeHead(400, {'Content-Type': 'text/plain'});
        res.end('Missing file parameter');
        return;
    }

    const filePath = path.join(__dirname, fileName);

    if (url.pathname === '/create') {
        fs.writeFile(filePath, 'This is a new file', (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error creating file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File created');
            }
        });
    } else if (url.pathname === '/read') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('File not found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end(data);
            }
        });
    } else if (url.pathname === '/delete') {
        fs.unlink(filePath, (err) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('File not found or error deleting file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File deleted');
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Invalid endpoint');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
