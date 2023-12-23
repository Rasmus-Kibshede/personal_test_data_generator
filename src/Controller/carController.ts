import { Request, Response } from 'express';
import * as carService from '../Services/carService'
import * as responseController from '../Controller/responseController'

export const generateCar = async (req: Request, res: Response) => {
    const response = await carService.generateCar();
    //res.status(200).send(response);
    return responseController.response(res, response, 200)
}

export const generateCars = (req: Request, res: Response) => {
    const response = carService.generateCars(Number(req.params.id));
    return responseController.response(res, response, 200);
}

export const getCarById = (req: Request, res: Response) => {
    const response = carService.getCarById(Number(req.params.id))
    return res.status(200).send(response);
}
