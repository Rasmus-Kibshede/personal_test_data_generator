import { faker } from "@faker-js/faker";
import { Manufacturer } from "../Model/Manufacturer";

export const generateManufacturer = () => {
    const manufacturerData = generateVehicleData();
    const manufacturer = new Manufacturer(-1, manufacturerData.getMake(), manufacturerData.getModel(), manufacturerData.getYear())

    return manufacturer;
}

export const generateVehicleData = () => {
    const data = [
        new Manufacturer(-1, 'Toyota', 'Camry', 2022),
        new Manufacturer(-1, 'Honda', 'Accord', 2021),
        new Manufacturer(-1, 'Ford', 'Mustang', 2023),
        new Manufacturer(-1, 'Chevrolet', 'Malibu', 2022),
        new Manufacturer(-1, 'Tesla', 'Model 3', 2021),
        new Manufacturer(-1, 'BMW', 'X5', 2023),
        new Manufacturer(-1, 'Mercedes-Benz', 'C-Class', 2022),
        new Manufacturer(-1, 'Audi', 'A4', 2023),
        new Manufacturer(-1, 'Nissan', 'Altima', 2022),
        new Manufacturer(-1, 'Hyundai', 'Elantra', 2021),
    ];
    return data[faker.number.int({ min: 0, max: data.length - 1 })]
}