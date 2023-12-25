import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Manufacturer } from '../Model/Manufacturer';

export const getRandomManufacturer = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM manufacturer ORDER BY RAND() LIMIT 1')
    const manufacturer = new Manufacturer(rows[0].manufacturerId, rows[0].make, rows[0].model, rows[0].year)

    return manufacturer;
};