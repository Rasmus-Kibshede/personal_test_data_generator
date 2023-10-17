import { resolve } from 'path';
import { getNameGender as repoGetNameGender } from '../Repositories/personRepository';

export const getNameGender = async (id: number) => {

    const t = await repoGetNameGender(id);

    return t ? t : null;
};