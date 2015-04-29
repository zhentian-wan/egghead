/**
 * Created by Answer1215 on 4/29/2015.
 */
var http = require("http");
var server = http.createServer(function(request, response){
    response.writeHead('200', {"Content-Type": "text/plain"});
    response.end("Hello from app2");
});
server.listen(3001);
console.log("Listen on port 3001");