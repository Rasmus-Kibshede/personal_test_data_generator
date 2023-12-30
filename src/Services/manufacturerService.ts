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
        new Manufacturer(3, 'Audi', 'A5', 2002),
        new Manufacturer(6, 'BMW', 'X3', 2010),
        new Manufacturer(7, 'Mercedes-Benz', 'C-Class', 2015),
        new Manufacturer(8, 'Toyota', 'Camry', 2005),
        new Manufacturer(103, 'Ford', 'Fusion', 2018),
        new Manufacturer(104, 'Chevrolet', 'Malibu', 2012),
        new Manufacturer(105, 'Tesla', 'Model S', 2020),
        new Manufacturer(106, 'Nissan', 'Altima', 2016),
        new Manufacturer(107, 'Hyundai', 'Elantra', 2014),
        new Manufacturer(108, 'Honda', 'Civic', 2003),
        new Manufacturer(109, 'Volkswagen', 'Passat', 2008),
        new Manufacturer(110, 'Subaru', 'Impreza', 2019),
        new Manufacturer(111, 'Lexus', 'ES', 2022),
        new Manufacturer(112, 'Kia', 'Optima', 2013),
        new Manufacturer(113, 'Mazda', 'Mazda3', 2011),
        new Manufacturer(114, 'Jeep', 'Cherokee', 2017),
        new Manufacturer(115, 'Ram', '1500', 2021),
        new Manufacturer(116, 'Audi', 'Q7', 2010),
        new Manufacturer(117, 'BMW', 'X5', 2015),
        new Manufacturer(118, 'Mercedes-Benz', 'E-Class', 2016),
        new Manufacturer(119, 'Toyota', 'Corolla', 2007),
        new Manufacturer(120, 'Ford', 'Escape', 2014),
        new Manufacturer(121, 'Chevrolet', 'Equinox', 2018),
        new Manufacturer(122, 'Tesla', 'Model Y', 2022),
        new Manufacturer(123, 'Nissan', 'Rogue', 2019),
        new Manufacturer(124, 'Hyundai', 'Tucson', 2009),
        new Manufacturer(125, 'Honda', 'Pilot', 2017),
        new Manufacturer(126, 'Volkswagen', 'Tiguan', 2013),
        new Manufacturer(127, 'Subaru', 'Outback', 2016),
        new Manufacturer(128, 'Lexus', 'RX', 2021),
        new Manufacturer(129, 'Kia', 'Sorento', 2012),
        new Manufacturer(130, 'Mazda', 'CX-5', 2014),
        new Manufacturer(131, 'Jeep', 'Grand Cherokee', 2011),
        new Manufacturer(132, 'Ram', '2500', 2020),
        new Manufacturer(133, 'Audi', 'Q5', 2018),
        new Manufacturer(134, 'BMW', 'X1', 2019),
        new Manufacturer(135, 'Mercedes-Benz', 'GLC', 2017),
        new Manufacturer(136, 'Toyota', 'Highlander', 2006),
    ];
    
    
}

const generateRandomNumber = (min: number, max: number) => {
    return faker.number.int({ min: min, max: max });
}

// api: https://rapidapi.com/carapi/api/car-api2/