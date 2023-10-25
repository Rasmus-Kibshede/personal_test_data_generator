import { NextFunction, Router, Request, Response } from 'express';
import * as personController from '../Controller/personController'

const personRouter = Router();

//Middleware
const validateId = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!id) {
        res.status(400).send({ err: 'Invalid ID' });
    } else if (isNaN(Number(id))) {
        res.status(406).send({ err: 'Not Acceptable' });
    }

    next();
};

//Endpoints
personRouter.get('/person/namegender', personController.generateNameAndGender)
personRouter.get('/person/namegenderdob', personController.getNameGenderDob)
personRouter.get('/person/namegendercpr', personController.getNameGenderCPR)
personRouter.get('/person/birthday/', personController.getRandomBirthday)
personRouter.get('/person/cpr/', personController.getRandomCpr)
personRouter.get('/person', personController.getPerson)
personRouter.get('/persons', personController.getPersons)


export default personRouter;
