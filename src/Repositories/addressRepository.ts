import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Address } from '../Model/Address';

export const getRandomAddress = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM postal_code ORDER BY RAND() LIMIT 1')
    const address: Address = {
        postalCode: rows[0].cPostalCode,
        city: rows[0].cTownName,
    };

    return address;
};

export const getAddressByPostalCode = async (postalCode: number) => {
    try {
        const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM postal_code WHERE cPostalCode = ?', [postalCode])
        const address: Address = {
            postalCode: rows[0].cPostalCode,
            city: rows[0].cTownName,
        };
        return address;
    } catch {
        throw new Error("No address found");
    }
};