import { Request, Response } from 'express';
import * as carService from '../Services/carService'
import * as responseController from '../Controller/responseController'

export const generateCar = async (req: Request, res: Response) => {
    const response = await carService.generateCar();
    return responseController.response(res, response, 200)
}

export const generateCars = async (req: Request, res: Response) => {
    const response = carService.generateCars(Number(req.params.count));
    return responseController.response(res, await response, 200);
}

export const getCarById = async (req: Request, res: Response) => {
    const response = await carService.getCarById(Number(req.params.id))
    return responseController.response(res, response, 200);
}
