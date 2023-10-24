import "dotenv/config";
import { randomNumberPrefix, generateRandomDigits } from "../../src/Services/personService";

let prefix: string;
let randomDigits: string;


beforeAll(async () => {
    prefix = await randomNumberPrefix();
    randomDigits = await generateRandomDigits(prefix.length);
    console.log(prefix);
    console.log(randomDigits);
});

describe("testing generateFakeMobilePhoneNumber", () => {
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

    describe("testing valid prefix", () => {
        test("should be bigger than 0", () => {
            expect(prefix).toBeGreaterThan(0);
        });

        test("should be less than 9", () => {
            expect(prefix).toBeLessThanOrEqual(3);
        });
    });

    describe('Testing valid digtigts from all prefixes', () => {

    })
});
