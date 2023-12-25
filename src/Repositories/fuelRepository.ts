import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { FuelStats } from '../Model/FuelStats';

export const getRandomFuel = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM fuel_stats ORDER BY RAND() LIMIT 1')
    const fuel = new FuelStats(rows[0].fuelStatsId,rows[0].fuelTank, rows[0].range);

    return fuel;
};