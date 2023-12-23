import { Router } from 'express';
import * as carController from '../Controller/carController'

const carRouter = Router();

//Endpoints
carRouter.get('/car', carController.generateCar)
/*carRouter.get('/car/cars', carController.getNameGenderDOB)
carRouter.get('/car', carController.getNameGenderCPR)
carRouter.get('/car', carController.getRandomBirthday)
carRouter.get('/car', carController.getRandomCPR)
carRouter.get('/car', carController.getPerson)
carRouter.get('/car', carController.getPersons)*/

export default carRouter;