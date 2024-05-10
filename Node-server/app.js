const http = require('http');


const server = http.createServer((req,res) => {
    console.log('Rakshitha');
    res.end('Welcome to Rakshithas server ');
});

server.listen(4000, () => {
    console.log('Serevr is running on port 4000')
});