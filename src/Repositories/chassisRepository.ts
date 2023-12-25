import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Chassis } from '../Model/Chassis';

export const getRandomChassis = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM chassis ORDER BY RAND() LIMIT 1')
    const chassis = new Chassis(rows[0].chassisId, rows[0].color, rows[0].wheel, rows[0].capacity);

    return chassis;
};