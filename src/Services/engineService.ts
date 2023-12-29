import { Engine } from "../Model/Engine";
import { faker } from '@faker-js/faker';

export const generateEngine = () => {
    const engineType = generateType();
    const engine = new Engine(-1, engineType, generatePower(), generatePower(), generateFuelType(engineType));
    return engine;
};

export const generatePower = () =>  {
return faker.number.int({min: 150, max: 1100});
};

export const generateType = () => {
    const types = ['Electric', 'V6', '4cyl', 'V8', 'V10', 'V12'];
    const random = types[faker.number.int({min:0, max: types.length -1})];
    return random;
};

export const generateFuelType = (engineType: string) =>{
    const types = ['Diesel', 'Petrol', 'Hybrid'];
    if(engineType === 'Electric'){
        return 'AC';
    } else {
        return types[faker.number.int({min:0, max: types.length -1})];
    }
};



