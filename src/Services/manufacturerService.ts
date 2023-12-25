import { faker } from "@faker-js/faker";
import { Manufacturer } from "../Model/Manufacturer";

export const generateManufacturer = () => {
    const manufacturerData = generateVehicleData();
    const manufacturer = new Manufacturer(-1, manufacturerData.make, manufacturerData.model, manufacturerData.year)

    return manufacturer;
}

export const generateVehicleData = () => {
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
    return data[faker.number.int({ min: 0, max: data.length -1})]
}