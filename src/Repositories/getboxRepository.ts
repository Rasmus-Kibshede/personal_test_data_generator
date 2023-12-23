import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Gearbox } from '../Model/Gearbox';

export const getRandomGearbox = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM gearbox ORDER BY RAND() LIMIT 1')
    const gearbox = new Gearbox(rows[0].gearboxId, rows[0].type, rows[0].gears, rows[0].driveTrain)

    return gearbox;
};