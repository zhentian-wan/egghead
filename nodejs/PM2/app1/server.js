var http = require("http");
var server = http.createServer(function(request, response){
    response.writeHead('200', {"Content-Type": "text/plain"});
    response.end("Hello from app1");
});
server.listen(3000);
console.log("Listen on port 3000");