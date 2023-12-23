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
('ABC123456DEF78901', 'XYZ123'),
('DEF789012ABC34567', 'LMN456'),
('GHI456789JKL01234', 'PQR789'),
('JKL012345MNO67890', 'STU012'),
('MNO678901PQR23456', 'VWX345'),
('PQR234567STU89012', 'YZA678'),
('STU890123VWX45678', 'BCD901'),
('VWX456789YZA12345', 'EFG234'),
('YZA123456BCD78901', 'HIJ567'),
('BCD789012EFG34567', 'KLM678');

INSERT INTO engine (type, horsepower, torque, fuel_type) VALUES
('Petrol', 200, 220, 'Gasoline'),
('Diesel', 180, 300, 'Diesel'),
('Petrol', 250, 280, 'Gasoline'),
('AC', 180, 200, 'Electric'),
('Diesel', 200, 320, 'Diesel'),
('AC', 220, 240, 'Electric'),
('Petrol', 190, 200, 'Gasoline'),
('Diesel', 170, 280, 'Diesel'),
('Petrol', 210, 230, 'Gasoline'),
('AC', 200, 220, 'Electric');

INSERT INTO gearbox (type, gears, drive_train) VALUES
('Automatic', 8, 'AWD'),
('Manual', 6, 'FrontWD'),
('Automatic', 7, 'RearWD'),
('Manual', 5, '4WD'),
('Automatic', 6, 'FrontWD'),
('Manual', 5, 'RearWD'),
('Automatic', 9, 'AWD'),
('Manual', 6, '4WD'),
('Automatic', 8, 'FrontWD'),
('Manual', 7, 'RearWD');

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