import { Request, Response } from 'express';
import * as carService from '../Services/carService'
import * as responseController from '../Controller/responseController'

export const generateCar = (req: Request, res: Response) => {
    const response = carService.generateCar();
    //res.status(200).send(response);
    return responseController.response(res, response, 200)
}

export const generateCars = (req: Request, res: Response) => {
    const response = carService.generateCars(Number(req.params.id));
    return responseController.response(res, response, 200);
}
