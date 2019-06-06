const http = require('http');

const port = process.env.port || 8080;

const app = require('./app');

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server is listening on ${port}`);
});
