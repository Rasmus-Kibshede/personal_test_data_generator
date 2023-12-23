import { RowDataPacket } from 'mysql2';
import { connection } from './data-source';
import { Car } from '../Model/Vehicle';
import { Result, failed, success } from '../util/errorHandler';

export const getCarById =async (id:number) => {
    const [rows] = await connection.query<RowDataPacket[]>('SELECT vehicle.vehicle_id, chassis.color, chassis.wheel, chassis.capacity, fuel_stats.fuel_tank_size, ' +
    'fuel_stats.distance, registration.vin, registration.license_number, engine.type AS engine_type, engine.horsepower, engine.torque, engine.fuel_type, ' +
    'gearbox.type AS gearbox_type, gearbox.gears, gearbox.drive_train, manufacturer.make, manufacturer.model, manufacturer.year, car.door FROM car ' +
'JOIN vehicle ON car.vehicle_id = vehicle.vehicle_id ' +
'JOIN chassis ON vehicle.chassis_id = chassis.chassis_id ' +
'JOIN fuel_stats ON vehicle.fuel_stats_id = fuel_stats.fuel_stats_id ' +
'JOIN registration ON vehicle.registration_id = registration.registration_id ' +
'JOIN engine ON vehicle.engine_id = engine.engine_id ' +
'JOIN gearbox ON vehicle.gearbox_id = gearbox.gearbox_id ' +
'JOIN manufacturer ON car.manufacturer_id = manufacturer.manufacturer_id ' +
'WHERE ' +
    'car.vehicle_id = ?;', [id]);
    console.log(rows);
    
    return rows
}

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