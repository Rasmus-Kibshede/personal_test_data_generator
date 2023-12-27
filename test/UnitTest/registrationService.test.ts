import { faker } from '@faker-js/faker';
import { Registration } from '../../src/Model/Registration';
import * as registrationService from '../../src/Services/registrationService';
const plates = [
  'AB 34 567', 'CD 56 789', 'EF 78 901', 'GH 90 123', 'IJ 12 345', 'KL 23 456', 'MN 45 678',
  'OP 67 890', 'QR 89 012', 'ST 01 234', 'UV 12 345', 'WX 34 567', 'YZ 56 789', 'AA 78 901',
  'BB 90 123', 'CC 12 345', 'DD 23 456', 'EE 45 678', 'FF 67 890', 'GG 89 012',
];
const vinNumbers = [
  '1GNEK13ZX3R298984', '2HNYD28678H532126', '3FAKP0JA2AR245875', '4T1BG22KX2U545767', '5NPD84LF4LH563295',
  '6YV1A22B575218475', '7FARW2H51KE029243', '8G1ND52J636100920', '9BWDE61J334015650', 'JS1GN7EA862101994',
  'KNMAT2MV5KP509788', 'LFGTCKPMXBP008810', 'MHFSA03J0KN009465', 'NMTKHMBX9JR044186', '5UXKR2C58G0R70603',
  'WAUBFAFL7BA003901', 'XWBEN10EX9VS74136', 'YV1RS592672591003', 'ZFA25000001692412',
];

const dataProvider = plates.map((plate, index) => ({
  plate,
  vin: vinNumbers[vinNumbers.length > index ? index : faker.number.int({ min: 0, max: vinNumbers.length - 1})],
}));

let registration: Registration;

/* ---------------------------------------- generateLicenseNumber ---------------------------------------- */
describe('generateLicenseNumber', () => {

  describe('Testing valid data in generateLicenseNumber', () => {

    test.each(dataProvider)('String validation', ({plate}) => {
      expect(typeof plate).toBe('string');
    });

    test.each(dataProvider)('Validating string is not empty', ({plate}) => {
      expect(plate).not.toBe('');
    });

    test.each(dataProvider)('License has correct length', ({plate}) => {
      expect(plate.length).toBe(9);
    });

    test.each(dataProvider)('Testing License format AA 12 345', ({plate}) => {
      const pattern = /^[A-Z]{2} \d{2} \d{3}$/;
      expect(plate).toMatch(pattern);
    });

    test.each(dataProvider)('License number invalid characters', ({plate}) => {
      expect(plate).not.toMatch(/[^A-Z\d\s]/);
    });

    test.each(dataProvider)('License number within expected range', ({plate}) => {
      expect(plates).toContain(plate);
    });

    test.each(dataProvider)('License number correct number of spaces', ({plate}) => {
      const spaceCount = plate.split(' ').length - 1;
      expect(spaceCount).toBe(2);
    });

    test.each(dataProvider)('License number has uppercase letters', ({plate}) => {
      const uppercaseLetters = plate.match(/[A-Z]/g);
      expect(uppercaseLetters).not.toBeNull();
    });

    test.each(dataProvider)('License number has digits', ({plate}) => {
      const digits = plate.match(/\d/g);
      expect(digits).not.toBeNull();
    });

    test.each(dataProvider)('License number has valid spacing', ({plate}) => {
      const validSpacing = plate.match(/[A-Z]{2} \d{2} \d{3}/);
      expect(validSpacing).not.toBeNull();
    });

    test.each(dataProvider)('License is a string with no leading or trailing whitespaces', ({plate}) => {
      expect(plate.trim()).toEqual(plate);
    });

    test.each(dataProvider)('License contains only alphanumeric characters', ({plate}) => {
      expect(plate).toMatch(/^[a-zA-Z0-9\s]+$/);
    });
  });
});

/* ---------------------------------------- generateVIN ---------------------------------------- */
describe('generateVIN', () => {
  test.each(dataProvider)('String validation', ({vin}) => {
    expect(typeof vin).toBe('string');
  });

  test.each(dataProvider)('Validating string is not empty', async ({vin}) => {
    expect(vin).not.toBe('');
  });

  test.each(dataProvider)('VIN is not null or undefined', ({vin}) => {
    expect(vin).toBeDefined();
  });

  test.each(dataProvider)('VIN contains only alphanumeric characters', ({vin}) => {
    expect(vin).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test.each(dataProvider)('VIN not invalid format', ({vin}) => {
    expect(vin).not.toMatch(/^[\W_]+$/);
  });

  test.each(dataProvider)('VIN correct format', ({vin}) => {
    const vinPattern = /^[A-HJ-NPR-Z0-9]{17}$/;
    expect(vin).toMatch(vinPattern);
  });

  test.each(dataProvider)('VIN within expected range', ({vin}) => {
    expect(vinNumbers).toContain(vin);
  });

  test.each(dataProvider)('VIN has correct length', ({vin}) => {
    expect(vin.length).toBe(17);
  });

  test.each(dataProvider)('VIN has correct format', ({vin}) => {
    expect(vin).toMatch(/^\w{17}$/);
  });

  test.each(dataProvider)('VIN is a string with no leading or trailing whitespaces', ({vin}) => {
    expect(vin.trim()).toEqual(vin);
  });
});


//INTEGRATION TEST!
/* ---------------------------------------- generateRegistration ---------------------------------------- */
describe('generateRegistration', () => {
  //Ville ikke Mocke Registraition eller generateRegistration her? 

  beforeEach(() => {
    registration = registrationService.generateRegistration();
  });

  test('Registration instanceOf Registration', () => {
    expect(registration).toBeInstanceOf(Registration);
  });

  test('Registration correct licensNumber', () => {
    expect(plates).toContain(registration.getLicenseNumber())
  });

  test('Registration correct VIN', () => {
    expect(vinNumbers).toContain(registration.getVIN());
  });

  test('Registration has id', () => {
    expect(registration.getRegistrationId()).toBeDefined();
  });

  test('RegistrationId equal -1', () => {
    expect(registration.getRegistrationId()).toBe(-1);
  });
});