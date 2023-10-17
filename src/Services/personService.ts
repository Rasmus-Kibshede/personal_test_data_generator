import { resolve } from 'path';
import { Person } from '../Model/Person';
import { PersonDTO } from '../Model/PersonDTO'
import { getNameGender as repoGetNameGender } from '../Repositories/personRepository';

/*export const getNameGender = async (id: number) => {
    const response = await personRepo.findOneByID(id);
    //const response = await personRepo.findOneBy({ personId: id });
    console.log(response);

    if (!response) {
        return { err: 'User not found' };
    }
    console.log('THIS IS FROM DATABASE!!!!');

    const dto: PersonDTO = {
        personId: response.personId,
        fullName: response.fullName,
        gender: response.gender,
        cpr: response.cpr,
    };

    return dto;
}*/

export const getNameGender = async (id: number) => {
    return repoGetNameGender(id);
};