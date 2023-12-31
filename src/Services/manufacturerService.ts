import { Manufacturer } from "../Model/Manufacturer";
import axios from "axios";
import { failed } from "../util/errorHandler";
import { generateRandomNumber } from "../util/generateNumber";
import { manufacturers } from '../../src/util/testDataProvider';

export const generateManufacturer = async () => {
    const usingApi = process.env.USNGAPI === 'true' || false;

    const manufacturer = usingApi ? await fetchManufacturer() : fakeFetchManufacturer();

    if (!manufacturer)
        throw new Error('Failed to generate manufacturer.');

    return manufacturer;
};

export const fetchManufacturer = async () => {
    const options = {
        method: 'GET',
        url: 'https://car-api2.p.rapidapi.com/api/bodies',
        params: {
            sort: 'id',
            make_model_id: generateRandomNumber(1, 100),
            verbose: 'yes',
            direction: 'asc',
            year: generateRandomNumber(2015, 2020),
            limit: '1'
        },
        headers: {
            'X-RapidAPI-Key': process.env.CAR_API_KEY,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);

        return validateManufacturer(response.data.data);
    } catch (error) {
        failed(error);
    }
};

export const validateManufacturer = async (results: any[]) => {
    if (results.length === 0)
        return fakeFetchManufacturer();

    const vehicle = results[0];

    return new Manufacturer(-1, vehicle.make_model_trim.make_model.make.name, vehicle.make_model_trim.make_model.name, vehicle.make_model_trim.year);
};

export const fakeFetchManufacturer = () => {
    return manufacturers[generateRandomNumber(0, manufacturers.length - 1)];
};
