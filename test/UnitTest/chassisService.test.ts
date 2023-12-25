import * as chassisService from '../../src/Services/chassisService'

/* ---------------------------------------- generateColor ---------------------------------------- */
describe('generateColor', () => {
    test('Color is expected from list', () => {
        const colors = [
            'Red',
            'Blue',
            'Green',
            'Yellow',
            'Purple',
            'Orange',
            'Pink',
            'Brown',
            'Gray',
            'Teal',
            'Black',
            'White'
        ];
        const generatedColor = chassisService.generateColor();
        expect(colors).toContain(generatedColor);
    });

    test('Color is a string', () => {
        const generatedColor = chassisService.generateColor();
        expect(typeof generatedColor).toBe('string');
    });

    test('Color is not an empty string', () => {
        const generatedColor = chassisService.generateColor();
        expect(generatedColor).not.toBe('');
    });

    test('Color is a string with the correct format', () => {
        const generatedColor = chassisService.generateColor();
        expect(/^[A-Z][a-z]+$/.test(generatedColor)).toBe(true);
    });

    test('Color is not null or undefined', () => {
        const result = chassisService.generateColor();
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
    });

    test('Color is not in the list of excluded colors', () => {
        const excludedColors = ['Magenta', 'Cyan', 'Lime'];
        const generatedColor = chassisService.generateColor();
        expect(excludedColors.includes(generatedColor)).toBe(false);
    });

    test('Color has a valid length', () => {
        const generatedColor = chassisService.generateColor();
        expect(generatedColor.length).toBeGreaterThan(3);
        expect(generatedColor.length).toBeLessThanOrEqual(6);
    });

    test('Color starts with an uppercase letter', () => {
        const generatedColor = chassisService.generateColor();
        const firstLetter = generatedColor.charAt(0);
        expect(firstLetter).toEqual(firstLetter.toUpperCase());
    });

    test('Color contains only alphabetic characters', () => {
        const generatedColor = chassisService.generateColor();
        expect(/^[a-zA-Z]+$/.test(generatedColor)).toBe(true);
    });
});

/* ---------------------------------------- generateCapacity ---------------------------------------- */

describe('generateCapacity', () => {
    test('Capacity is 2 for a 3-door car', () => {
        const capacity = chassisService.generateCapacity(3);
        expect(capacity).toBe(2);
    });

    test('Capacity is 5 for a car with a different number of doors', () => {
        const capacity = chassisService.generateCapacity(4);
        expect(capacity).toBe(5);
    });

    test('Capacity is a number', () => {
        const capacity = chassisService.generateCapacity(3);
        expect(typeof capacity).toBe('number');
    });

    test('Capacity is not undefined & not null', () => {
        const capacity = chassisService.generateCapacity(4);
        expect(capacity).not.toBeUndefined();
        expect(capacity).not.toBeNull();
    });

    test('Capacity has a valid length', () => {
        const generatedColor = chassisService.generateCapacity(4);
        expect(generatedColor).toBeGreaterThan(2);
        expect(generatedColor).toBeLessThanOrEqual(5);
    });

    test('Capacity is an integer', () => {
        const capacity = chassisService.generateCapacity(4);
        expect(Number.isInteger(capacity)).toBe(true);
      });

      test('Capacity is a positive number', () => {
        const result = chassisService.generateCapacity(3);
        expect(result).toBeGreaterThan(0);
      });
});


/* ---------------------------------------- generateWheel ---------------------------------------- */

describe('generateWheel', () => {
    test('Wheel number always 4', () => {
        const wheels = chassisService.generateWheel();
        expect(wheels).toBe(4);
      });
    
      test('Wheel number is a number', () => {
        const wheels = chassisService.generateWheel();
        expect(typeof wheels).toBe('number');
      });
    
      test('Wheel is not undefined & not null', () => {
        const capacity = chassisService.generateCapacity(4);
        expect(capacity).not.toBeUndefined();
        expect(capacity).not.toBeNull();
    });
    
      test('Wheel number is positive', () => {
        const wheels = chassisService.generateWheel();
        expect(wheels).toBeGreaterThan(0);
      });

      test('Generated number of wheels is consistent across multiple calls', () => {
        const wheelsArray = Array.from({ length: 100 }, chassisService.generateWheel);
        const uniqueWheels = new Set(wheelsArray);
        expect(uniqueWheels.size).toBe(1);
      });
});
