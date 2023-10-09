import { Request, Response } from 'express';
import * as personService from '../Services/personService'; 	
import { Person } from '../Model/Person';

export const getNameGender = async (req: Request, res: Response) => {

    const response = await personService.getNameGender(Number(req.params.id));
    userRespone(response ? response : { err: response }, res, 200);
}

const userRespone = (response: Person | { err: string }, res: Response, statusCode: number) => {
	if (!response) {
		res.status(404).send({ err: response });
	} else {
		res.status(statusCode).send(response);
	}
};