import { RowDataPacket } from 'mysql2';
import { PersonResponseDTO } from '../Model/PersonDTO';
import { connection } from './data-source';

export const getPersonById = async (id: number) => {
    const [rows] = await connection.query<RowDataPacket[]>('select * from person where person_id = ?', [id])
    const personDto: PersonResponseDTO = {
        personId: rows[0].person_id,
        fullName: rows[0].full_name ,
        gender: rows[0].gender ,
        dateOfBirth: rows[0].date_of_birth ,
        cpr: rows[0].cpr_number
    }

    return personDto
};