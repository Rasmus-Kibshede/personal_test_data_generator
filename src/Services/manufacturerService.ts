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
        { id: 3, make_id: 2, name: 'A5', make: { id: 2, name: 'Audi' } },
        { id: 6, make_id: 2, name: 'Q3', make: { id: 2, name: 'Audi' } },
        { id: 7, make_id: 2, name: 'Q5', make: { id: 2, name: 'Audi' } },
        { id: 8, make_id: 2, name: 'Q8', make: { id: 2, name: 'Audi' } },
        { id: 103, make_id: 2, name: 'A3', make: { id: 2, name: 'Audi' } },
        { id: 104, make_id: 2, name: 'A4', make: { id: 2, name: 'Audi' } },
        { id: 105, make_id: 2, name: 'A4 allroad', make: { id: 2, name: 'Audi' } },
        { id: 106, make_id: 2, name: 'A6', make: { id: 2, name: 'Audi' } },
        { id: 107, make_id: 2, name: 'A6 allroad', make: { id: 2, name: 'Audi' } },
        { id: 108, make_id: 2, name: 'A7', make: { id: 2, name: 'Audi' } },
        { id: 109, make_id: 2, name: 'A8', make: { id: 2, name: 'Audi' } },
        { id: 111, make_id: 2, name: 'e-tron Sportback', make: { id: 2, name: 'Audi' } },
        { id: 116, make_id: 2, name: 'Q7', make: { id: 2, name: 'Audi' } },
        { id: 117, make_id: 2, name: 'R8', make: { id: 2, name: 'Audi' } },
        { id: 118, make_id: 2, name: 'RS 3', make: { id: 2, name: 'Audi' } },
        { id: 123, make_id: 2, name: 'RS Q8', make: { id: 2, name: 'Audi' } },
        { id: 124, make_id: 2, name: 'S3', make: { id: 2, name: 'Audi' } },
        { id: 125, make_id: 2, name: 'S4', make: { id: 2, name: 'Audi' } },
        { id: 126, make_id: 2, name: 'S5', make: { id: 2, name: 'Audi' } },
        { id: 127, make_id: 2, name: 'S6', make: { id: 2, name: 'Audi' } },
        { id: 128, make_id: 2, name: 'S7', make: { id: 2, name: 'Audi' } },
        { id: 129, make_id: 2, name: 'S8', make: { id: 2, name: 'Audi' } },
        { id: 130, make_id: 2, name: 'SQ5', make: { id: 2, name: 'Audi' } },
        { id: 132, make_id: 2, name: 'SQ7', make: { id: 2, name: 'Audi' } },
        { id: 133, make_id: 2, name: 'SQ8', make: { id: 2, name: 'Audi' } },
        { id: 134, make_id: 2, name: 'TT', make: { id: 2, name: 'Audi' } },
        { id: 135, make_id: 2, name: 'TT RS', make: { id: 2, name: 'Audi' } },
        { id: 136, make_id: 2, name: 'TTS', make: { id: 2, name: 'Audi' } }
    ]
}

const generateRandomNumber = (min: number, max: number) => {
    return faker.number.int({ min: min, max: max });
}

// api: https://rapidapi.com/carapi/api/car-api2/