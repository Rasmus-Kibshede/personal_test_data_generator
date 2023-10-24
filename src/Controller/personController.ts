import { Request, Response } from 'express';
import * as personService from '../Services/personService';
import { PersonDTO2 } from '../Model/PersonDTO';

export const getRandomNameAndGender = async (req: Request, res: Response) => {
	const response = await personService.getRandomNameAndGender();

	if (!response) {
		res.status(404).send({ err: response });
	} else {
		personResponse(response ? response : { err: response }, res, 200);
	}
};

export const getRandomBirthday = async (req: Request, res: Response) => {
	const response = await personService.setRandomBirthday();

	if (!response) {
		res.status(404).send({ err: response });
	} else {
		// personResponse(response ? response : { err: response }, res, 200);
		res.status(200).send({ data: response });
	}
};

export const getRandomCpr = async (req: Request, res: Response) => {
    const response = await personService.setRandomCpr();

	if (!response) {
		res.status(404).send({ err: response });
	} else {
		// personResponse(response ? response : { err: response }, res, 200);
		res.status(200).send({ data: response });
	}
};

const personResponse = (response: PersonDTO2 | { err: string }, res: Response, statusCode: number) => {
	if (!response) {
		res.status(404).send({ err: response });
	} else {
		res.status(statusCode).send(response);
	}
};