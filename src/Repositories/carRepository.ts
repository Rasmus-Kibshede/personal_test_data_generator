import { RowDataPacket } from 'mysql2';
import { connection as conn } from './data-source';
import { Car } from '../Model/Vehicle';
import { Manufacturer } from '../Model/Manufacturer';
import { Chassis } from '../Model/Chassis';
import { FuelStats } from '../Model/FuelStats';
import { Registration } from '../Model/Registration';
import { Engine } from '../Model/Engine';
import { Gearbox } from '../Model/Gearbox';

export const saveCar = async (car: Car) => {
    const connection = await conn.getConnection();

    await connection.beginTransaction();

    try {
        const [chassisResult] = await conn.execute<RowDataPacket[]>(
            'INSERT INTO chassis (color, wheel, capacity) VALUES (?, ?, ?);',
            [car.getChassis().getColor(), car.getChassis().getWheel(), car.getChassis().getCapacity()]
        );
        let result = Object.values(JSON.parse(JSON.stringify(chassisResult)));
        const chassisId = result[2];

        const [fuelStatsResult] = await conn.execute<RowDataPacket[]>(
            'INSERT INTO fuel_stats (fuel_tank_size, distance) VALUES (?, ?)',
            [car.getFuel().getFuelTank(), car.getFuel().getRange()]
        );
        result = Object.values(JSON.parse(JSON.stringify(fuelStatsResult)));
        const fuelStatsId = result[2];

        const [registrationResult] = await conn.execute<RowDataPacket[]>('INSERT INTO registration (vin, license_number) VALUES (?, ?);',
            [car.getRegistration().getVIN(), car.getRegistration().getLicenseNumber()]);
        result = Object.values(JSON.parse(JSON.stringify(registrationResult)));
        const registrationId = result[2];

        const [engineResult] = await conn.execute<RowDataPacket[]>('INSERT INTO engine (type, horsepower, torque, fuel_type) VALUES (?, ?, ?, ?);',
            [car.getEngine().getType(), car.getEngine().getHP(), car.getEngine().getTorque(), car.getEngine().getFuelType()]);
        result = Object.values(JSON.parse(JSON.stringify(engineResult)));
        const engineId = result[2];

        const [gearboxResult] = await conn.execute<RowDataPacket[]>('INSERT INTO gearbox (type, gears, drive_train) VALUES (?, ?, ?);',
            [car.getGear().getType(), car.getGear().getGears(), car.getGear().getDriveTrain()]);
        result = Object.values(JSON.parse(JSON.stringify(gearboxResult)));
        const gearboxId = result[2];

        const [vehicleResult] = await conn.execute<RowDataPacket[]>('INSERT INTO vehicle (chassis_id, fuel_stats_id, registration_id, engine_id, gearbox_id) VALUES (?, ?, ?, ?, ?);',
            [chassisId, fuelStatsId, registrationId, engineId, gearboxId])
        result = Object.values(JSON.parse(JSON.stringify(vehicleResult)));
        const vehicleId = result[2];

        const [manufacturerResult] = await conn.execute<RowDataPacket[]>('INSERT INTO manufacturer (make, model, year) VALUES (?, ?, ?);',
            [car.getManufacturer().getMake(), car.getManufacturer().getModel(), car.getManufacturer().getYear()]);
        result = Object.values(JSON.parse(JSON.stringify(manufacturerResult)));
        const manufacturerId = result[2];

        await conn.execute<RowDataPacket[]>('INSERT INTO car (vehicle_id, manufacturer_id, door) VALUES (?, ?, ?);',
            [vehicleId, manufacturerId, car.getDoor()]);

        await connection.commit();
        return { chassisId: chassisId, fuelId: fuelStatsId, registrationId: registrationId, engineId: engineId, gearboxId: gearboxId, vehicleId: vehicleId, manufacturerId: manufacturerId }
    } catch (error) {
        await connection.rollback();
    } finally {
        connection.release();
    }
};


export const getCarById = async (id: number) => {
    const [rows] = await conn.query<RowDataPacket[]>('SELECT vehicle.vehicle_id , chassis.color, chassis.wheel, chassis.capacity, fuel_stats.fuel_tank_size, ' +
        'fuel_stats.distance, registration.vin, registration.license_number, engine.type AS engine_type, engine.horsepower, engine.torque, engine.fuel_type, ' +
        'gearbox.type AS gearbox_type, gearbox.gears, gearbox.drive_train, manufacturer.make, manufacturer.model, manufacturer.year, car.door, ' +
        'engine.engine_id, chassis.chassis_id, fuel_stats.fuel_stats_id, gearbox.gearbox_id, manufacturer.manufacturer_id, registration.registration_id FROM car ' +
        'JOIN vehicle ON car.vehicle_id = vehicle.vehicle_id ' +
        'JOIN chassis ON vehicle.chassis_id = chassis.chassis_id ' +
        'JOIN fuel_stats ON vehicle.fuel_stats_id = fuel_stats.fuel_stats_id ' +
        'JOIN registration ON vehicle.registration_id = registration.registration_id ' +
        'JOIN engine ON vehicle.engine_id = engine.engine_id ' +
        'JOIN gearbox ON vehicle.gearbox_id = gearbox.gearbox_id ' +
        'JOIN manufacturer ON car.manufacturer_id = manufacturer.manufacturer_id ' +
        'WHERE ' +
        'car.vehicle_id = ?;', [id]);
        
    const result = JSON.parse(JSON.stringify(rows[0]))
    const manufacture = new Manufacturer(result.manufacturer_id, result.make, result.model, result.year);
    const chassis = new Chassis(result.chassis_id, result.color, result.wheel, result.capacity);
    const fuel = new FuelStats(result.fuel_stats_id, result.fuel_tank_size, result.distance);
    const registration = new Registration(result.registration_id, result.vin, result.license_number);
    const engine = new Engine(result.engine_id, result.engine_type, result.horsepower, result.torque, result.fuel_type);
    const gearbox = new Gearbox(result.gearbox_id, result.gearbox_type, result.gears, result.drive_train);
    const car = new Car(manufacture, result.door, result.vehicle_id, chassis, fuel, registration, engine, gearbox);

    return car;
};

export const getRandomCar = async () => {
    const [rows] = await conn.query<RowDataPacket[]>('SELECT * FROM car ORDER BY RAND() LIMIT 1', (err: Error, result: any) => {
        return { err, result }
    })
    return convertToCar(rows);
};

const convertToCar = (rows: RowDataPacket[]) => {
    return new Car(rows[0].manufacture, rows[0].door, rows[0].vehicleId, rows[0].chassis, rows[0].fuel, rows[0].registration, rows[0].engine, rows[0].gearbox);
}