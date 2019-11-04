//importy http package provided by node
const http = require('http'); // require = import. import http package and store in variable

//import the constant app
const app = require('./backend/app');

const port = 3000;

//set configuration to express
app.set('port', port);

//pass the app to create server
const server = http.createServer(app);

//http server object listen to port and execute function
server.listen(port);
