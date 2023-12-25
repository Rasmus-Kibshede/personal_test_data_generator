import { Router } from 'express';
import * as carController from '../Controller/carController'

const carRouter = Router();

//Endpoints
carRouter.get('/car', carController.generateCar)
//ID er antallet af biler man vil have genereret. 
carRouter.get('/cars/:count', carController.generateCars)
carRouter.get('/car/:id', carController.getCarById)

export default carRouter;