let fs = require("fs");

let data = fs.readFileSync('province.json');

console.log(data.toString());
let test = JSON.parse(data);

let http = require("http");
let server = http.createServer(function(request, response) {

response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
response.write('<!DOCTYPE "html">');
response.write('<html>');
response.write('<head>');
response.write('<title>Vive Node.js</title>');
response.write('</head>');
response.write('<body>');
response.write('<table>');


for (let p in test)  {  

console.log(p);
   
response.write('<tr>');
response.write('<td>');
response.write(p);
response.write('</td>');
response.write('<td>');
response.write(test[p]);
response.write('</td>');
response.write('</tr>');


}


response.write('</table>')
response.write('</body>');
response.write('</html>');

 response.end();
})



// le port 80 est le port standard on peut alors lancer la page avec seulement : localhost
server.listen(3000)