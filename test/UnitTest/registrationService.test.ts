import * as registrationService from '../../src/Services/registrationService';

/* ---------------------------------------- generateLicenseNumber ---------------------------------------- */


describe('generateLicenseNumber', () => {

    describe('Testing valid data in generateLicenseNumber', () => {

        test('String validation', () => {
            const result = registrationService.generateLicenseNumber();
            expect(typeof result).toBe('string');
        });

        test('Validating string is not empty', async () => {
            const result = registrationService.generateLicenseNumber();
            expect(result).not.toBe('');
          });

          test('License has correct length', () => {
            const result = registrationService.generateLicenseNumber();
            expect(result.length).toBe(9);
          });

        test('Testing License format AA 12 345', () => {
            const licenseNumber = registrationService.generateLicenseNumber();
            const pattern = /^[A-Z]{2} \d{2} \d{3}$/;
            expect(licenseNumber).toMatch(pattern);
        });

        test('License number invalid characters', () => {
            const result = registrationService.generateLicenseNumber();
            expect(result).not.toMatch(/[^A-Z\d\s]/);
          });

        test('License number within expected range', () => {
            const plates = ['AB 34 567', 'CD 56 789', 'EF 78 901', 'GH 90 123', 'IJ 12 345', 'KL 23 456', 'MN 45 678',
                'OP 67 890', 'QR 89 012', 'ST 01 234', 'UV 12 345', 'WX 34 567', 'YZ 56 789', 'AA 78 901', 'BB 90 123',
                'CC 12 345', 'DD 23 456', 'EE 45 678', 'FF 67 890', 'GG 89 012',];
            const licenseNumber = registrationService.generateLicenseNumber();
            expect(plates).toContain(licenseNumber);
        });

        test('License number correct number of spaces', () => {
            const result = registrationService.generateLicenseNumber();
            const spaceCount = result.split(' ').length - 1;
            expect(spaceCount).toBe(2);
          });

          test('License number has uppercase letters', () => {
            const result = registrationService.generateLicenseNumber();
            const uppercaseLetters = result.match(/[A-Z]/g);
            expect(uppercaseLetters).not.toBeNull();
          });

          test('License number has digits', () => {
            const result = registrationService.generateLicenseNumber();
            const digits = result.match(/\d/g);
            expect(digits).not.toBeNull();
          });
        
          test('License number has valid spacing', () => {
            const result = registrationService.generateLicenseNumber();
            const validSpacing = result.match(/[A-Z]{2} \d{2} \d{3}/);
            expect(validSpacing).not.toBeNull();
          });
    });
});

/* ---------------------------------------- generateVIN ---------------------------------------- */
describe('generateVIN', () => {

    test('String validation', () => {
        const result = registrationService.generateVIN();
        expect(typeof result).toBe('string');
    });

    test('Validating string is not empty', async () => {
        const result = registrationService.generateVIN();
        expect(result).not.toBe("");
      });

      test('VIN is not null or undefined', () => {
        const result = registrationService.generateVIN();
        expect(result).toBeDefined();
      });

      test('GVIN contains only alphanumeric characters', () => {
        const result = registrationService.generateVIN();
        expect(result).toMatch(/^[a-zA-Z0-9]+$/);
      });

      test('VIN not invalid format', () => {
        const result = registrationService.generateVIN();
        expect(result).not.toMatch(/^[\W_]+$/);
      });

    test('VIN correct format', () => {
        const vinPattern = /^[A-HJ-NPR-Z0-9]{17}$/;
        const vin = registrationService.generateVIN();
        expect(vin).toMatch(vinPattern);
    });

    test('VIN within expected range', () => {
        const vinNumbers = [
            '1GNEK13ZX3R298984', '2HNYD28678H532126', '3FAKP0JA2AR245875', '4T1BG22KX2U545767', '5NPD84LF4LH563295',
            '6YV1A22B575218475', '7FARW2H51KE029243', '8G1ND52J636100920', '9BWDE61J334015650', 'JS1GN7EA862101994',
            'KNMAT2MV5KP509788', 'LFGTCKPMXBP008810', 'MHFSA03J0KN009465', 'NMTKHMBX9JR044186', '5UXKR2C58G0R70603',
            'WAUBFAFL7BA003901', 'XWBEN10EX9VS74136', 'YV1RS592672591003', 'ZFA25000001692412',
        ];
        const vin = registrationService.generateVIN();
        expect(vinNumbers).toContain(vin);
    });

    test('VIN has correct length', () => {
        const result = registrationService.generateVIN();
        expect(result.length).toBe(17);
      });
    
      test('VIN has correct format', () => {
        const result = registrationService.generateVIN();
        expect(result).toMatch(/^\w{17}$/);
      });
});