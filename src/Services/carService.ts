import { faker } from "@faker-js/faker";
import { Car } from "../Model/Vehicle";
import { generateEngine } from "./engineService";

export const generateVehicle = () => {
    const carData = generateVehicleData();
    const door = generateDoor();
    const car = new Car(carData.make, carData.model, carData.year, door, generateColor(), generateCapacity(door),
        generateLicenseNumber(), generateRange(), generateEngine(), generateFuelTank(), generateGear(), generateVIN(), generateWheel())
    return car
}

const generateVehicleData = () => {
    const data = [
        { make: 'Toyota', model: 'Camry', year: 2022 },
        { make: 'Honda', model: 'Accord', year: 2021 },
        { make: 'Ford', model: 'Mustang', year: 2023 },
        { make: 'Chevrolet', model: 'Malibu', year: 2022 },
        { make: 'Tesla', model: 'Model 3', year: 2021 },
        { make: 'BMW', model: 'X5', year: 2023 },
        { make: 'Mercedes-Benz', model: 'C-Class', year: 2022 },
        { make: 'Audi', model: 'A4', year: 2023 },
        { make: 'Nissan', model: 'Altima', year: 2022 },
        { make: 'Hyundai', model: 'Elantra', year: 2021 },
    ];

    return data[faker.number.int({ min: 0, max: data.length })]
}

const generateDoor = () => {
    const doors = [3, 5]
    return doors[faker.number.int({ min: 0, max: 1 })]
}

const generateColor = () => {
    const colors = [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Purple',
        'Orange',
        'Pink',
        'Brown',
        'Gray',
        'Teal',
        'Black',
        'White'
    ];

    return colors[faker.number.int({ min: 0, max: colors.length })]
}

const generateCapacity = (door: number) => {
    if (door === 3) {
        return 2
    } else {
        return 5
    }
};

const generateLicenseNumber = () => {
    const plates = [
        'AB 34 567',
        'CD 56 789',
        'EF 78 901',
        'GH 90 123',
        'IJ 12 345',
        'KL 23 456',
        'MN 45 678',
        'OP 67 890',
        'QR 89 012',
        'ST 01 234',
        'UV 12 345',
        'WX 34 567',
        'YZ 56 789',
        'AA 78 901',
        'BB 90 123',
        'CC 12 345',
        'DD 23 456',
        'EE 45 678',
        'FF 67 890',
        'GG 89 012',
    ];

    return plates[faker.number.int({ min: 0, max: plates.length })]
}

const generateRange = () => {
    return faker.number.int({ min: 350, max: 900 })
}

const generateFuelTank = () => {
    return faker.number.int({ min: 45, max: 65 })
}

const generateGear = () => {
    return faker.number.int({ min: 4, max: 7 })
}

const generateVIN = () => {
    const vinNumbers = [
        '1GNEK13ZX3R298984',
        '2HNYD28678H532126',
        '3FAKP0JA2AR245875',
        '4T1BG22KX2U545767',
        '5NPD84LF4LH563295',
        '6YV1A22B575218475',
        '7FARW2H51KE029243',
        '8G1ND52J636100920',
        '9BWDE61J334015650',
        'JS1GN7EA862101994',
        'KNMAT2MV5KP509788',
        'LFGTCKPMXBP008810',
        'MHFSA03J0KN009465',
        'NMTKHMBX9JR044186',
        '5UXKR2C58G0R70603',
        'WAUBFAFL7BA003901',
        'XWBEN10EX9VS74136',
        'YV1RS592672591003',
        'ZFA25000001692412',
    ];
    return vinNumbers[faker.number.int({ min: 0, max: vinNumbers.length })]
}

const generateWheel = () => {
    return 4;
}