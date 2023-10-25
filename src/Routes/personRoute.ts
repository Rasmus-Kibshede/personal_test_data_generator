import { Router } from 'express';
import * as personController from '../Controller/personController'

const personRouter = Router();

//Endpoints
personRouter.get('/person/namegender', personController.generateNameAndGender)
personRouter.get('/person/namegenderdob', personController.getNameGenderDob)
personRouter.get('/person/namegendercpr', personController.getNameGenderCPR)
personRouter.get('/person/birthday/', personController.getRandomBirthday)
personRouter.get('/person/cpr/', personController.getRandomCpr)
personRouter.get('/person', personController.getPerson)
personRouter.get('/persons', personController.getPersons)

export default personRouter;