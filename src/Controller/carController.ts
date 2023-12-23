import { Request, Response } from 'express';
import * as carService from '../Services/carService'
import * as responseController from '../Controller/responseController'

export const generateCar = (res: Response, req: Request) => {
    const response = carService.generateCar();
    return responseController.response(res, response, 200)
}
