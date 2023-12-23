create table if not exists person
(
	person_id int auto_increment
		primary key,
	full_name varchar(255) not null,
	gender varchar(255) not null,
	date_of_birth date not null,
	cpr varchar(255) not null
);

create table if not exists postal_code
(
	cPostalCode char(4) not null
		primary key,
	cTownName varchar(20) null
)
charset=utf8;

CREATE TABLE IF NOT EXISTS chassis (
    chassis_id INT AUTO_INCREMENT PRIMARY KEY,
    color VARCHAR(255) NOT NULL,
    wheel INT NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE IF NOT EXISTS fuel_stats (
    fuel_stats_id INT AUTO_INCREMENT PRIMARY KEY,
    fuel_tank_size INT CHECK (fuel_tank_size BETWEEN 40 AND 65) NOT NULL,
    fuel_range INT NOT NULL
);

CREATE TABLE IF NOT EXISTS registration (
    registration_id INT AUTO_INCREMENT PRIMARY KEY,
    vin VARCHAR(255) NOT NULL,
    license_number VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS engine (
    engine_id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    horsepower INT NOT NULL,
    torque INT NOT NULL,
    fuel_type VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS gearbox (
    gearbox_id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    gears INT NOT NULL,
    drive_train VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS vehicle (
    vehicle_id INT AUTO_INCREMENT PRIMARY KEY,
    chassis_id INT,
    fuel_stats_id INT,
    registration_id INT,
    engine_id INT,
    gearbox_id INT,
    FOREIGN KEY (chassis_id) REFERENCES chassis(chassis_id),
    FOREIGN KEY (fuel_stats_id) REFERENCES fuel_stats(fuel_stats_id),
    FOREIGN KEY (registration_id) REFERENCES registration(registration_id),
    FOREIGN KEY (engine_id) REFERENCES engine(engine_id),
    FOREIGN KEY (gearbox_id) REFERENCES gearbox(gearbox_id)
);



drop procedure if exists RemoveDuplicates;
create procedure RemoveDuplicates()
BEGIN
	DECLARE vcPostalCode CHAR(4);
	DECLARE vbFinished INTEGER DEFAULT 0;
    DECLARE curPostalCodes CURSOR FOR
    	SELECT cPostalCode
        FROM postal_code
        GROUP BY cPostalCode
        	HAVING COUNT(*) > 1;
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET vbFinished = TRUE;

	OPEN curPostalCodes;

    loop_pc: LOOP
    	FETCH curPostalCodes INTO vcPostalCode;
        IF vbFinished THEN
        	LEAVE loop_pc;
        END IF;
        DELETE FROM postal_code WHERE cPostalCode = vcPostalCode LIMIT 1;
    END LOOP loop_pc;

    CLOSE curPostalCodes;
END;

