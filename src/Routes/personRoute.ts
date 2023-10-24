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
personRouter.get('/person/', personController.getRandomNameAndGender)
personRouter.get('/birthday/', personController.getRandomBirthday)
personRouter.get('/cpr/', personController.getRandomCpr)

export default personRouter;
