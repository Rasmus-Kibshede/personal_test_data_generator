import { faker } from "@faker-js/faker";
import { Manufacturer } from "../Model/Manufacturer";
import axios from "axios";

export const generateManufacturer = async () => {
    const manufacturerData = await generateVehicleData();
    // const manufacturer = new Manufacturer(-1, manufacturerData.getMake(), manufacturerData.getModel(), manufacturerData.getYear())

    return manufacturerData;
}

export const generateVehicleData = async () => {

    const makers = await fetchVehicleData();

    // const data = [
    //     new Manufacturer(-1, 'Toyota', 'Camry', 2022),
    //     new Manufacturer(-1, 'Honda', 'Accord', 2021),
    //     new Manufacturer(-1, 'Ford', 'Mustang', 2023),
    //     new Manufacturer(-1, 'Chevrolet', 'Malibu', 2022),
    //     new Manufacturer(-1, 'Tesla', 'Model 3', 2021),
    //     new Manufacturer(-1, 'BMW', 'X5', 2023),
    //     new Manufacturer(-1, 'Mercedes-Benz', 'C-Class', 2022),
    //     new Manufacturer(-1, 'Audi', 'A4', 2023),
    //     new Manufacturer(-1, 'Nissan', 'Altima', 2022),
    //     new Manufacturer(-1, 'Hyundai', 'Elantra', 2021),
    // ];

    if (!makers)
        throw new Error('No vehicle data found');

    const make = makers[faker.number.int({ min: 0, max: makers.length - 1 })];

    return new Manufacturer(-1, make.name, make.make.name, 2022);
}

const fetchVehicleData = async () => {

    const options = {
        method: 'GET',
        url: 'https://car-api2.p.rapidapi.com/api/makes',
        params: {
            direction: 'asc',
            sort: 'id'
        },
        headers: {
            'X-RapidAPI-Key': '3849cedd96msh7958cea1aafa68ap1fb11ajsna78ba7f4a06e',
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
    };

    try {
        // const response = await axios.request(options);
        const data = [
            { id: 1, name: 'Acura' },
            { id: 2, name: 'Audi' },
            { id: 3, name: 'BMW' },
            { id: 4, name: 'Buick' },
            { id: 5, name: 'Cadillac' },
            { id: 6, name: 'Chevrolet' },
            { id: 7, name: 'Genesis' },
            { id: 8, name: 'GMC' },
            { id: 9, name: 'Honda' },
            { id: 10, name: 'Hyundai' },
            { id: 11, name: 'INFINITI' },
            { id: 12, name: 'Jaguar' },
            { id: 13, name: 'Kia' },
            { id: 14, name: 'Land Rover' },
            { id: 15, name: 'Lincoln' },
            { id: 16, name: 'Mazda' },
            { id: 17, name: 'MINI' },
            { id: 18, name: 'Mitsubishi' },
            { id: 19, name: 'Nissan' },
            { id: 20, name: 'Polestar' },
            { id: 21, name: 'Subaru' },
            { id: 22, name: 'Toyota' },
            { id: 23, name: 'Volvo' },
            { id: 24, name: 'Alfa Romeo' },
            { id: 25, name: 'Bentley' },
            { id: 26, name: 'Chrysler' },
            { id: 27, name: 'Dodge' },
            { id: 28, name: 'FIAT' },
            { id: 29, name: 'Ford' },
            { id: 30, name: 'Jeep' },
            { id: 31, name: 'Karma' },
            { id: 32, name: 'Lamborghini' },
            { id: 33, name: 'Lexus' },
            { id: 34, name: 'Lucid' },
            { id: 35, name: 'Maserati' },
            { id: 36, name: 'McLaren' },
            { id: 37, name: 'Mercedes-Benz' },
            { id: 38, name: 'Porsche' },
            { id: 39, name: 'Ram' },
            { id: 40, name: 'Rivian' },
            { id: 41, name: 'Rolls-Royce' },
            { id: 42, name: 'Tesla' },
            { id: 43, name: 'Volkswagen' },
            { id: 44, name: 'Aston Martin' },
            { id: 45, name: 'Lotus' },
            { id: 46, name: 'Ferrari' },
            { id: 47, name: 'smart' },
            { id: 48, name: 'Scion' },
            { id: 49, name: 'Suzuki' },
            { id: 50, name: 'Fisker' },
            { id: 51, name: 'Maybach' },
            { id: 52, name: 'Saab' },
            { id: 53, name: 'Mercury' },
            { id: 54, name: 'HUMMER' },
            { id: 55, name: 'Pontiac' },
            { id: 56, name: 'Bugatti' },
            { id: 57, name: 'Saturn' },
            { id: 58, name: 'Spyker' },
            { id: 59, name: 'Isuzu' },
            { id: 60, name: 'Panoz' },
            { id: 61, name: 'Oldsmobile' },
            { id: 62, name: 'Daewoo' },
            { id: 63, name: 'Plymouth' },
            { id: 64, name: 'AM General' },
            { id: 65, name: 'Eagle' },
            { id: 66, name: 'Geo' },
            { id: 67, name: 'VinFast' },
            { id: 68, name: 'mo' }
        ]

        const models = await fetchVehicleModels(data[1].name, 2020);
        // return response.data;

        return models;
    } catch (error: any) {
        console.error(error.message);
    }
};

const fetchVehicleModels = async (make: string, year: number, sort: string = 'id', sortDirection: string = 'asc') => {

    const options = {
        method: 'GET',
        url: 'https://car-api2.p.rapidapi.com/api/models',
        params: {
            make: make,
            sort: sort,
            direction: sortDirection,
            year: year,
            verbose: 'yes'
        },
        headers: {
            'X-RapidAPI-Key': '3849cedd96msh7958cea1aafa68ap1fb11ajsna78ba7f4a06e',
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
    };

    try {
        // const response = await axios.request(options);
        // console.log(response.data);

        const data = [
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


        // return response.data;
        return data;
    } catch (error) {
        console.error(error);
    }
};

// api: https://rapidapi.com/carapi/api/car-api2/