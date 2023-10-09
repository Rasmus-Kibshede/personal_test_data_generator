import { personRepo } from '../Repositories/personRepository';

export const getNameGender =async (id: number) => {
    //const response = await personRepo.findOneByID(id);
    const response2 = await personRepo.findOneBy({personId: id});

    if (!response2) {
        return { err: 'User not found' };
    }

    return response2;
}