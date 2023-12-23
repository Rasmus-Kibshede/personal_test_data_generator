import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Car } from '../Model/Vehicle';
import { Result, failed, success } from '../util/errorHandler';

export const getRandomCar = async () => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM car ORDER BY RAND() LIMIT 1' , (err: Error, result: any) =>{
        return {err, result}
    } )
    //Execute er prepared statements. 
    //const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM car ORDER BY RAND() LIMIT 1')
    return convertToCar(rows);
};

export const saveCar =async (car: Car) => {
    try {
        const [rows] = await connection.query<RowDataPacket[]>('');
        if(!rows){
            failed(new Error('lav en custom error message'))
        }
    return success(convertToCar(rows));
    //Errors skal smides her, skal laves en ny Error(gør en ORM som standard)
    } catch (error) {
        return failed(error)
    }   
} 

const convertToCar = (rows: RowDataPacket[]) => {
    return new Car(rows[0].manufacture, rows[0].door, rows[0].vehicleId, rows[0].chassis, rows[0].fuel, rows[0].registration, rows[0].engine, rows[0].gearbox);
}