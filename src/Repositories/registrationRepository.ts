import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Registration } from '../Model/Registration';

export const getRandomRegistration = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM registration ORDER BY RAND() LIMIT 1')
    const registration = new Registration(rows[0].registrationId, rows[0].VIN, rows[0].licenseNumber)

    return registration;
};