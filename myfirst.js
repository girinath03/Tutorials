var http = require('http');
http.createServer(function(req,response)
{
    response.write('Content-Type','text/html');
    console.log('Guggan')
    response.end("hai hello");
}).listen(8090);