import { appDataSource } from './data-source';
import { Person } from '../Model/Person';

export const personRepo = appDataSource.getRepository(Person).extend({
    findOneByID(id: number) {
         return personRepo.findOne({
            relations: {},
            where: {
                personId: id
            },
        });
    }
});