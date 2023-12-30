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
        new Manufacturer(-1, 'Audi', 'A5', 2002),
        new Manufacturer(-1, 'BMW', 'X3', 2010),
        new Manufacturer(-1, 'Mercedes-Benz', 'C-Class', 2015),
        new Manufacturer(-1, 'Toyota', 'Camry', 2005),
        new Manufacturer(-1, 'Ford', 'Fusion', 2018),
        new Manufacturer(-1, 'Chevrolet', 'Malibu', 2012),
        new Manufacturer(-1, 'Tesla', 'Model S', 2020),
        new Manufacturer(-1, 'Nissan', 'Altima', 2016),
        new Manufacturer(-1, 'Hyundai', 'Elantra', 2014),
        new Manufacturer(-1, 'Honda', 'Civic', 2003),
        new Manufacturer(-1, 'Volkswagen', 'Passat', 2008),
        new Manufacturer(-1, 'Subaru', 'Impreza', 2019),
        new Manufacturer(-1, 'Lexus', 'ES', 2022),
        new Manufacturer(-1, 'Kia', 'Optima', 2013),
        new Manufacturer(-1, 'Mazda', 'Mazda3', 2011),
        new Manufacturer(-1, 'Jeep', 'Cherokee', 2017),
        new Manufacturer(-1, 'Ram', '1500', 2021),
        new Manufacturer(-1, 'Audi', 'Q7', 2010),
        new Manufacturer(-1, 'BMW', 'X5', 2015),
        new Manufacturer(-1, 'Mercedes-Benz', 'E-Class', 2016),
        new Manufacturer(-1, 'Toyota', 'Corolla', 2007),
        new Manufacturer(-1, 'Ford', 'Escape', 2014),
        new Manufacturer(-1, 'Chevrolet', 'Equinox', 2018),
        new Manufacturer(-1, 'Tesla', 'Model Y', 2022),
        new Manufacturer(-1, 'Nissan', 'Rogue', 2019),
        new Manufacturer(-1, 'Hyundai', 'Tucson', 2009),
        new Manufacturer(-1, 'Honda', 'Pilot', 2017),
        new Manufacturer(-1, 'Volkswagen', 'Tiguan', 2013),
        new Manufacturer(-1, 'Subaru', 'Outback', 2016),
        new Manufacturer(-1, 'Lexus', 'RX', 2021),
        new Manufacturer(-1, 'Kia', 'Sorento', 2012),
        new Manufacturer(-1, 'Mazda', 'CX-5', 2014),
        new Manufacturer(-1, 'Jeep', 'Grand Cherokee', 2011),
        new Manufacturer(-1, 'Ram', '2500', 2020),
        new Manufacturer(-1, 'Audi', 'Q5', 2018),
        new Manufacturer(-1, 'BMW', 'X1', 2019),
        new Manufacturer(-1, 'Mercedes-Benz', 'GLC', 2017),
        new Manufacturer(-1, 'Toyota', 'Highlander', 2006),
    ];
    
    
    
}

const generateRandomNumber = (min: number, max: number) => {
    return faker.number.int({ min: min, max: max });
}

// api: https://rapidapi.com/carapi/api/car-api2/