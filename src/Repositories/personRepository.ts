//import { appDataSource } from './data-source';
import { RowDataPacket } from 'mysql2';
import { PersonDTO } from '../Model/PersonDTO';
import { connection } from './data-source';

export const getNameGender = async (id: number) => {
    console.log('IN REPO!!!!');
    const [rows] = await connection.query<RowDataPacket[]>('select * from person where person_id = ?', [id])
    const personDto: PersonDTO = {
        personId: rows[0].person_id,
        fullName: rows[0].full_name ,
        gender: rows[0].gender ,
        cpr: rows[0].cpr_number
    }
    console.log(rows[0]);
    
    console.log(rows[0].person_id);
    console.log(personDto);
    

    return personDto
};

/*export const personRepo = appDataSource.getRepository(Person).extend({
    findOneByID(id: number) {
         return personRepo.findOne({
            relations: {},
            where: {
                personId: id
            },
        });
    }
});*/