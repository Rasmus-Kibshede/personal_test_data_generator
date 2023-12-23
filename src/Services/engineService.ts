import { Engine } from "../Model/Engine";
import { faker } from '@faker-js/faker';

export const generateEngine = () => {
    const enginType = generateType();
    const engine = new Engine(1, generateType(), generatePower(), generatePower(), generateFuelType(enginType))
    return engine;
};

const generatePower = () =>  {
return faker.number.int({min: 150, max: 1100})
};

const generateType = () => {
    const types = ['Electric', 'V6', '4cyl', 'V8', 'V10', 'V12']
    return types[faker.number.int({min:0, max: types.length -1})]
};

const generateFuelType = (enginType: string) =>{
    const types = ['Diesel', 'Petrol']
    if(enginType === 'Electric'){
        return 'AC'
    } 
    return types[faker.number.int({min:0, max: types.length -1})]
};



