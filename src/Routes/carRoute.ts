import { Router } from 'express';
import * as carController from '../Controller/carController'

const carRouter = Router();

//Endpoints
carRouter.get('/car', carController.generateCar)
//ID er antallet af biler man vil have genereret. 
carRouter.get('/cars/:id', carController.generateCars)
carRouter.get('/car/:id', carController.getCarById)
/*carRouter.get('/car', carController.getRandomBirthday)
carRouter.get('/car', carController.getRandomCPR)
carRouter.get('/car', carController.getPerson)
carRouter.get('/car', carController.getPersons)*/

export default carRouter;