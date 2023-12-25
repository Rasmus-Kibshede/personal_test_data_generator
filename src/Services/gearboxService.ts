import { faker } from "@faker-js/faker"
import { Gearbox } from "../Model/Gearbox"

export const generateGearbox = () => {
    const gearbox = new Gearbox(-1, generateType(), generateGear(), generateDriveTrain());
    return gearbox;
}

export const generateType = () => {
const types = ['Automatic', 'Manuel', 'Electric'];
return types[faker.number.int({ min: 0, max: types.length -1 })];
}

export const generateGear = () => {
    return faker.number.int({ min: 4, max: 7 });
}

export const generateDriveTrain = () => {
    const types = ['4WD', 'AWD', 'Front wheel drive', 'Rear wheel drive'];
    return types[faker.number.int({ min: 0, max: types.length -1 })];
}