const http = require('http');


const server = http.createServer((req,res) => {
    console.log('Rakshitha');
    res.end('Welcome to Rakshithas server ');
    //process.exit();
});

server.listen(4000, () => {
    console.log('Server is running on port 4000')
});