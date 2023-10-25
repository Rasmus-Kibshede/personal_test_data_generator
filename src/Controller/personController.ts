import { Request, Response } from 'express';
import * as personService from '../Services/personService';

export const getRandomNameAndGender = async (req: Request, res: Response) => {
	try {
		const response = await personService.getRandomNameAndGender();
		// personResponse(response ? response : { err: response }, res, 200);
		res.status(200).send({ data: response });
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getNameGenderDob = async (req: Request, res: Response) => {
	try {
		const response = await personService.getNameGenderDob();
		personResponse(response ? response : { err: response }, res, 200);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getNameGenderCPR = async (req: Request, res: Response) => {
	try {
		const response = await personService.getNameGenderCPR();
		personResponse(response ? response : { err: response }, res, 200);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
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
	res.status(200).send({ cpr: response.cpr });
};

const personResponse = (response: any | { err: string }, res: Response, statusCode: number) => {
	if (!response) {
		res.status(404).send({ err: response });
	} else {
		res.status(statusCode).send(response);
	}
};