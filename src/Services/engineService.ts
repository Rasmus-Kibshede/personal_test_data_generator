import { Engine } from "../Model/Engine";
import { faker } from '@faker-js/faker';

export const generateEngine = () => {
    const enginType = generateType();
    const engine = new Engine(1, enginType, generatePower(), generatePower(), generateFuelType(enginType))
    return engine;
};

const generatePower = () =>  {
return faker.number.int({min: 150, max: 1100})
};

const generateType = () => {
    const types = ['Electric', 'V6', '4cyl', 'V8', 'V10', 'V12']
    const random = types[faker.number.int({min:0, max: types.length -1})]
    return random
};

const generateFuelType = (enginType: string) =>{
    const types = ['Diesel', 'Petrol', 'Hybrid']
    if(enginType === 'Electric'){
        return 'AC'
    } else {
        return types[faker.number.int({min:0, max: types.length -1})]
    }
};


