INSERT INTO chassis (color, wheel, capacity) VALUES
('Red', 4, 5),
('Blue', 4, 7),
('Green', 4, 5),
('Silver', 4, 5),
('Black', 4, 7),
('White', 4, 5),
('Gray', 4, 7),
('Yellow', 4, 5),
('Orange', 4, 7),
('Purple', 4, 5);

INSERT INTO fuel_stats (fuel_tank_size, distance) VALUES
(50, 400),
(60, 450),
(45, 350),
(55, 420),
(48, 380),
(65, 500),
(50, 400),
(58, 440),
(42, 330),
(60, 450);

INSERT INTO registration (vin, license_number) VALUES
('ABC123456DEF78901', 'AA 12 345'),
('DEF789012ABC34567', 'LM 14 356'),
('GHI456789JKL01234', 'PQ 32 789'),
('JKL012345MNO67890', 'ST 29 012'),
('MNO678901PQR23456', 'VW 90 345'),
('PQR234567STU89012', 'YZ 87 678'),
('STU890123VWX45678', 'BC 22 901'),
('VWX456789YZA12345', 'EF 56 234'),
('YZA123456BCD78901', 'HI 99 567'),
('BCD789012EFG34567', 'KL 89 678');

INSERT INTO engine (type, horsepower, torque, fuel_type) VALUES
('Petrol', 200, 220, 'Petrol'),
('Diesel', 180, 300, 'Diesel'),
('Hybrid', 250, 280, 'Hybrid'),
('Electric', 180, 200, 'Electric'),
('Petrol', 200, 320, 'Petrol'),
('Electric', 220, 240, 'Electric'),
('Petrol', 190, 200, 'Petrol'),
('Diesel', 170, 280, 'Diesel'),
('Petrol', 210, 230, 'Petrol'),
('Electric', 200, 220, 'Electric');

INSERT INTO gearbox (type, gears, drive_train) VALUES
('Automatic', 8, 'AWD'),
('Manual', 6, 'Front wheel drive'),
('Automatic', 7, 'Rear wheel drive'),
('Manual', 5, '4WD'),
('Automatic', 6, 'Front wheel drive'),
('Manual', 5, 'Rear wheel drive'),
('Automatic', 9, 'AWD'),
('Manual', 6, '4WD'),
('Automatic', 8, 'Front wheel drive'),
('Manual', 7, 'Rear wheel drive');

INSERT INTO vehicle (chassis_id, fuel_stats_id, registration_id, engine_id, gearbox_id) VALUES
(1, 1, 1, 1, 1),
(2, 2, 2, 2, 2),
(3, 3, 3, 3, 3),
(4, 4, 4, 4, 4),
(5, 5, 5, 5, 5),
(6, 6, 6, 6, 6),
(7, 7, 7, 7, 7),
(8, 8, 8, 8, 8),
(9, 9, 9, 9, 9),
(10, 10, 10, 10, 10);

INSERT INTO manufacturer (make, model, year) VALUES
('Toyota', 'Camry', 2022),
('Ford', 'Mustang', 2022),
('Honda', 'Civic', 2022),
('Chevrolet', 'Malibu', 2022),
('Nissan', 'Altima', 2022),
('Hyundai', 'Elantra', 2022),
('Volkswagen', 'Passat', 2022),
('BMW', '3 Series', 2022),
('Mercedes-Benz', 'C-Class', 2022),
('Audi', 'A4', 2022);

INSERT INTO car (vehicle_id, manufacturer_id, door) VALUES
(1, 1, 4),
(2, 2, 2),
(3, 3, 4),
(4, 4, 4),
(5, 5, 4),
(6, 6, 4),
(7, 7, 4),
(8, 8, 4),
(9, 9, 4),
(10, 10, 4);

