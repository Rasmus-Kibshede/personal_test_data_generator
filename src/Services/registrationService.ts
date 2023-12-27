import { faker } from "@faker-js/faker";
import { Registration } from "../Model/Registration";

export const generateRegistration = () => {
    const registration = new Registration(-1, generateVIN(), generateLicenseNumber());
    return registration;
}

export const generateLicenseNumber = () => {
    const plates = [
        'AB 34 567', 'CD 56 789', 'EF 78 901', 'GH 90 123', 'IJ 12 345', 'KL 23 456', 'MN 45 678',
        'OP 67 890', 'QR 89 012', 'ST 01 234', 'UV 12 345', 'WX 34 567', 'YZ 56 789', 'AA 78 901',
        'BB 90 123', 'CC 12 345', 'DD 23 456', 'EE 45 678', 'FF 67 890', 'GG 89 012'
    ];
    return plates[faker.number.int({ min: 0, max: plates.length - 1 })]
}

export const generateVIN = () => {
    const vinNumbers = [
        '1GNEK13ZX3R298984', '2HNYD28678H532126', '3FAKP0JA2AR245875', '4T1BG22KX2U545767', '5NPD84LF4LH563295',
        '6YV1A22B575218475', '7FARW2H51KE029243', '8G1ND52J636100920', '9BWDE61J334015650', 'JS1GN7EA862101994',
        'KNMAT2MV5KP509788', 'LFGTCKPMXBP008810', 'MHFSA03J0KN009465', 'NMTKHMBX9JR044186', '5UXKR2C58G0R70603',
        'WAUBFAFL7BA003901', 'XWBEN10EX9VS74136', 'YV1RS592672591003', 'ZFA25000001692412',
    ];
    return vinNumbers[faker.number.int({ min: 0, max: vinNumbers.length - 1 })]
}