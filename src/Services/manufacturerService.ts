import { faker } from "@faker-js/faker";
import { Manufacturer } from "../Model/Manufacturer";
import axios from "axios";

export interface Model {
    id: number
    make_id: number
    name: string
    make: Make
}

export interface Make {
    id: number
    name: string
}

const usingApi = process.env.USNGAPI === 'true' || false;

export const generateManufacturer = async () => {

    const manufacturerData = await generateVehicleData();
    // const manufacturer = new Manufacturer(-1, manufacturerData.getMake(), manufacturerData.getModel(), manufacturerData.getYear())

    return manufacturerData;
}

export const generateVehicleData = async () => {
    const year = generateRandomNumber(2000, 2024);
    const models = usingApi ? await fetchVehicleData(year) : fakeFetchManufacturer();

    if (!models)
        throw new Error('No vehicle data found');

    const model = models[generateRandomNumber(0, models.length)];

    return new Manufacturer(-1, model.make.name, model.name, year);
}

const fetchVehicleData = async (year?: number) => {

    const options = {
        method: 'GET',
        url: 'https://car-api2.p.rapidapi.com/api/makes',
        params: {
            direction: 'asc',
            sort: 'id'
        },
        headers: {
            'X-RapidAPI-Key': process.env.CAR_API_KEY,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const result = await response.data.data as Make[];

        const randomMake = result[generateRandomNumber(0, result.length)];

        return await fetchVehicleModels(randomMake, year);
    } catch (error: any) {
        console.error(error.message);
    }
};

const fetchVehicleModels = async (make: Make, year?: number, sort: string = 'id', sortDirection: string = 'asc') => {

    const options = {
        method: 'GET',
        url: 'https://car-api2.p.rapidapi.com/api/models',
        params: {
            make: make.name,
            sort: sort,
            direction: sortDirection,
            year: year ? year : '',
            verbose: 'yes'
        },
        headers: {
            'X-RapidAPI-Key': process.env.CAR_API_KEY,
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const result = await response.data.data as Model[];

        if (result.length === 0)
            result.push({
                id: -1,
                make_id: make.id,
                name: 'No models found for this make and year',
                make: {
                    id: make.id,
                    name: make.name

                }
            });

        return result;
    } catch (error: any) {
        console.error(error.message);
    }
};

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
    return faker.number.int({ min: min, max: max - 1 });
}

// api: https://rapidapi.com/carapi/api/car-api2/