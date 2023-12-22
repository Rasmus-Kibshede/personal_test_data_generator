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

