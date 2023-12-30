import { faker } from "@faker-js/faker";
import { Manufacturer } from "../Model/Manufacturer";
import axios from "axios";

const usingApi = process.env.USNGAPI === 'true' || false;

export const generateManufacturer = async () => {
    const manufacturer = await fetchManufacturer();

    if (!manufacturer)
        throw new Error('Failed to generate manufacturer.');

    return manufacturer;
}

export const fetchManufacturer = async () => {
    const options = {
        method: 'GET',
        url: 'https://car-api2.p.rapidapi.com/api/bodies',
        params: {
            sort: 'id',
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

        const result = response.data.data[0];

        return new Manufacturer(-1, result.make_model_trim.make_model.make.name, result.make_model_trim.make_model.name, result.make_model_trim.year);
    } catch (error) {
        console.error(error);
    }
}

const fakeFetchManufacturer = () => {
    return [
        new Manufacturer(3, 'Audi', 'A5', 2000),
        new Manufacturer(6, 'Audi', 'Q3', 2000),
        new Manufacturer(7, 'Audi', 'Q5', 2000),
        new Manufacturer(8, 'Audi', 'Q8', 2000),
        new Manufacturer(103, 'Audi', 'A3', 2000),
        new Manufacturer(104, 'Audi', 'A4', 2000),
        new Manufacturer(105, 'Audi', 'A4 allroad', 2000),
        new Manufacturer(106, 'Audi', 'A6', 2000),
        new Manufacturer(107, 'Audi', 'A6 allroad', 2000),
        new Manufacturer(108, 'Audi', 'A7', 2000),
        new Manufacturer(109, 'Audi', 'A8', 2000),
        new Manufacturer(111, 'Audi', 'e-tron Sportback', 2000),
        new Manufacturer(116, 'Audi', 'Q7', 2000),
        new Manufacturer(117, 'Audi', 'R8', 2000),
        new Manufacturer(118, 'Audi', 'RS 3', 2000),
        new Manufacturer(123, 'Audi', 'RS Q8', 2000),
        new Manufacturer(124, 'Audi', 'S3', 2000),
        new Manufacturer(125, 'Audi', 'S4', 2000),
        new Manufacturer(126, 'Audi', 'S5', 2000),
        new Manufacturer(127, 'Audi', 'S6', 2000),
        new Manufacturer(128, 'Audi', 'S7', 2000),
        new Manufacturer(129, 'Audi', 'S8', 2000),
        new Manufacturer(130, 'Audi', 'SQ5', 2000),
        new Manufacturer(132, 'Audi', 'SQ7', 2000),
        new Manufacturer(133, 'Audi', 'SQ8', 2000),
        new Manufacturer(134, 'Audi', 'TT', 2000),
        new Manufacturer(135, 'Audi', 'TT RS', 2000),
        new Manufacturer(136, 'Audi', 'TTS', 2000),
    ];
    
}

const generateRandomNumber = (min: number, max: number) => {
    return faker.number.int({ min: min, max: max });
}

// api: https://rapidapi.com/carapi/api/car-api2/