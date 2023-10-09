import 'dotenv/config';
import express from 'express';
import "reflect-metadata"
import personRouter from './Routes/personRoute';
import { appDataSource } from './Repositories/data-source';

const app = express();
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
});