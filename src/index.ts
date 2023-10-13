import 'dotenv/config';
import "reflect-metadata";
import personRouter from './Routes/personRoute';
import express from 'express'; // Import the express in typescript file
import cors from 'cors' // Import the cors
//import { appDataSource } from './Repositories/data-source';

const app = express(); // Initialize the express engine

app.use(express.json()); // Use the express json parser

app.use(cors()); // Use the cors

  

// Handling '/' Request

app.get('/', (req, res) => {

     res.send('TypeScript With Express');

});

app.use(personRouter);

const PORT = process.env.PORT || 3000;

// Listen to the port

app.listen(PORT, () => {

     // eslint-disable-next-line no-console

console.log(`App: http://localhost:${PORT}/`);

});



/*const app = express();
app.use(express.json());

appDataSource.initialize().then(() => {
console.log('Database connection established');
	// Handling '/' Request
	app.get('/', (req, res) => {
		res.send('TypeScript With Express');
	});

	app.use(personRouter);

	// Take a port 8080 for running server.
	const PORT = process.env.PORT || 3000;

	// Server setup
	app.listen(PORT, () => {
		console.log(`App: http://localhost:${PORT}/`);
	});

}).catch((error) => {
	console.log(error);
});*/