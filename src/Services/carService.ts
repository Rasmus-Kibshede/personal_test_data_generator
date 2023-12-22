import { faker } from "@faker-js/faker";
import { Car } from "../Model/Vehicle";
import { generateEngine } from "./engineService";

export const generateVehicle = () => {
    const carData = generateVehicleData();
    const car = new Car(carData.make, carData.model, carData.year, 4, 'Red', 5, 'AA 12 123', 450, generateEngine(), 1, 0, 'AA12BB1991C821DD', 4)

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

      return data[faker.number.int({min: 0, max: data.length})]
}