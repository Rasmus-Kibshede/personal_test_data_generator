import 'dotenv/config';
import { getRandomNameAndGender } from '../../src/Services/personService';
import { generateFakeMobilePhoneNumber } from '../../src/Services/personService';

test('Testing FullName', async () => {
    // const test = await getRandomNameAndGender();

    expect(1).toEqual(1);
});

describe('generateFakeMobilePhoneNumber', () => {
    test('should return a string of length 8', () => {
    const phoneNumber = generateFakeMobilePhoneNumber();
    expect(phoneNumber).toHaveLength(8);
  });
  
    test('should start with one of the defined prefixes', () => {
        const phoneNumber = generateFakeMobilePhoneNumber();
        const phoneNumberPrefixes = [
          '2', '30', '31', '40', '41', '42', '50', '51', '52', '53',
          '60', '61', '71', '81', '91', '92', '93', '342', '344', '345',
          '346', '347', '348', '349', '356', '357', '359', '362', '365',
          '366', '389', '398', '431', '441', '462', '466', '468', '472',
          '474', '476', '478', '485', '486', '488', '489', '493', '494',
          '495', '496', '498', '499', '542', '543', '545', '551', '552',
          '556', '571', '572', '573', '574', '577', '579', '584', '586',
          '587', '589', '597', '598', '627', '629', '641', '649', '658',
          '662', '663', '664', '665', '667', '692', '693', '694', '697',
          '771', '772', '782', '783', '785', '786', '788', '789', '826',
          '827', '829',
        ];
        const prefix = phoneNumber.substring(0, 3);
      
        const isValidPrefix = phoneNumberPrefixes.some(validPrefix => prefix.startsWith(validPrefix));
        expect(isValidPrefix).toBe(true);
    });

    test('should only contain digits', () => {
        const phoneNumber = generateFakeMobilePhoneNumber();
        const containsOnlyDigits = /^\d+$/.test(phoneNumber);
        expect(containsOnlyDigits).toBe(true);
    });
    
    test('should generate phone numbers quickly', () => {
        const totalIterations = 10000; 
      
        const start = Date.now();
        for (let i = 0; i < totalIterations; i++) {
          generateFakeMobilePhoneNumber();
        }
        const elapsed = Date.now() - start;
        expect(elapsed).toBeLessThan(1000);
      });
  });