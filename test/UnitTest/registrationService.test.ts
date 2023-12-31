import * as registrationService from '../../src/Services/registrationService';

let plate: string;
let vin: string;

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
 
/* ---------------------------------------- generateLicenseNumber ---------------------------------------- */
describe('generateLicenseNumber', () => {

  beforeEach(() => {
    plate = registrationService.generateLicenseNumber();
  });

    test('String validation', () => {
      expect(typeof plate).toBe('string');
    });

    test('Validating string is not empty', () => {
      expect(plate).not.toBe('');
    });

    test('License has correct length', () => {
      expect(plate.length).toBe(9);
    });

    test('License not 10 upper', () => {
      expect(plate.length).not.toBe(10);
    });

    test('License less then 10 upper', () => {
      expect(plate.length).toBeLessThan(10);
    });

    test('License not 8 lower', () => {
      expect(plate.length).not.toBe(8);
    });

    test('License has greater then 8 lower', () => {
      expect(plate.length).toBeGreaterThan(8);
    });

    test('License format AA 12 345', () => {
      const pattern = /^[A-Z]{2} \d{2} \d{3}$/;
      expect(plate).toMatch(pattern);
    });

    test('License number invalid characters', () => {
      expect(plate).not.toMatch(/[^A-Z\d\s]/);
    });

    test('License number within expected list', () => {
      expect(plates).toContain(plate);
    });

    test('License number correct number of spaces', () => {
      const spaceCount = plate.split(' ').length - 1;
      expect(spaceCount).toBe(2);
    });

    test('License number has uppercase letters', () => {
      const uppercaseLetters = plate.match(/[A-Z]/g);
      expect(uppercaseLetters).not.toBeNull();
    });

    test('License number has digits', () => {
      const digits = plate.match(/\d/g);
      expect(digits).not.toBeNull();
    });

    test('License train is not undefined', () => {
      expect(plate).not.toBeUndefined();
    });
  
    test('License train is not null', () => {
      expect(plate).not.toBeNull();
    });

    test('License number has valid spacing', () => {
      const validSpacing = plate.match(/[A-Z]{2} \d{2} \d{3}/);
      expect(validSpacing).not.toBeNull();
    });

    test('License is a string with no leading or trailing whitespaces', () => {
      expect(plate.trim()).toEqual(plate);
    });

    test('License contains only alphanumeric characters', () => {
      expect(plate).toMatch(/^[a-zA-Z0-9\s]+$/);
    });
  });

/* ---------------------------------------- generateVIN ---------------------------------------- */
describe('generateVIN', () => {

  beforeEach(() => {
    vin = registrationService.generateVIN();
  });

  test('String validation', () => {
    expect(typeof vin).toBe('string');
  });

  test('Validating string is not empty', async () => {
    expect(vin).not.toBe('');
  });

  test('VIN is not undefined', () => {
    expect(vin).toBeDefined();
  });

  test('VIN is not undefined', () => {
    expect(vin).not.toBeNull();
  });

  test('VIN contains only alphanumeric characters', () => {
    expect(vin).toMatch(/^[a-zA-Z0-9]+$/);
  });

  test('VIN not invalid format', () => {
    expect(vin).not.toMatch(/^[\W_]+$/);
  });

  test('VIN correct format', () => {
    const vinPattern = /^[A-HJ-NPR-Z0-9]{17}$/;
    expect(vin).toMatch(vinPattern);
  });

  test('VIN within expected range', () => {
    expect(vinNumbers).toContain(vin);
  });

  test('VIN has correct length', () => {
    expect(vin.length).toBe(17);
  });

  test('VIN has correct length', () => {
    expect(vin.length).not.toBe(16);
  });

  test('VIN has correct length', () => {
    expect(vin.length).toBeGreaterThan(16);
  });

  test('VIN has correct length', () => {
    expect(vin.length).not.toBe(18);
  });

  test('VIN has correct length', () => {
    expect(vin.length).toBeLessThan(18);
  });

  test('VIN has correct format', () => {
    expect(vin).toMatch(/^\w{17}$/);
  });

  test('VIN is a string with no leading or trailing whitespaces', () => {
    expect(vin.trim()).toEqual(vin);
  });
});