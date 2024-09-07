const http = require('http')

http.createServer((req, res) => { //({})   콜백.
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server</p>');
})
.listen(8080, () => {
    console.log('8080')
});