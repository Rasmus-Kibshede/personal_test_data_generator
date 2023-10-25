import { Request, Response } from 'express';
import * as personService from '../Services/personService';

export const generateNameAndGender = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPerson();
		const data = {
			fullname: response.fullname,
			gender: response.gender
		}
		res.status(200).send(data);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getNameGenderDob = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPerson();
		const data = {
			fullname: response.fullname,
			gender: response.gender,
			dateOfBirth: response.dateOfBirth
		}
		res.status(200).send(data);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getNameGenderCPR = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPerson();
		const data = {
			fullname: response.fullname,
			gender: response.gender,
			cpr: response.cpr
		}
		res.status(200).send(data);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getRandomBirthday = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPerson();
		const data = {
			dateOfBirth: response.dateOfBirth
		}
		res.status(200).send(data);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}

};

export const getRandomCpr = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPerson();
		const data = {
			cpr: response.cpr
		}
		res.status(200).send(data);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getPerson = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPerson();
		res.status(200).send(response);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};

export const getPersons = async (req: Request, res: Response) => {
	try {
		const response = await personService.getPersons();
		const data = {
			'person count': response.length,
			'persons': response
		}
		res.status(200).send(data);
	} catch (err) {
		res.status(404).send({ err: (err as Error).message });
	}
};