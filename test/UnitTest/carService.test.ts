import * as carService from '../../src/Services/carService'

const expectedDoor = [3, 5]

/* ---------------------------------------- generateDoor ---------------------------------------- */
describe('generateDoor', () => {

    test('Doors lower boundary', () => {
      const result = carService.generateDoor();
      expect(result).toBeGreaterThanOrEqual(3);
    });

    test('Doors highest boundary', () => {
        const result = carService.generateDoor();
        expect(result).toBeLessThanOrEqual(5);
      });

      test('Doors is a number', () => {
        const result = carService.generateDoor();
        expect(typeof result).toBe('number');
      });

      test('Doors is a number', () => {
        const result = carService.generateDoor();
        expect(Number.isInteger(result)).toBe(true);
      });

      test('Doors not a string', () => {
        const result = carService.generateDoor();
        expect(result).not.toBe('string');
      });

      test('Doors positive integer', () => {
        const result = carService.generateDoor();
        expect(result).toBeGreaterThan(0);
      });

      test('Doors is not a floating-point number', () => {
        const result = carService.generateDoor();
        expect(result % 1).toBe(0);
      });

      test('Doors not null', () => {
        const result = carService.generateDoor();
        expect(result).not.toBeNull();
      });

      test('Doors not undefined', () => {
        const result = carService.generateDoor();
        expect(result).not.toBeUndefined();
      });

      test('Doors not 4', () => {
        const result = carService.generateDoor();
        expect(result).not.toBe(4);
      });

      test('Doors not 3', () => {
        const result = carService.generateDoor();
        expect(result).not.toBe(2);
      });

      test('Door is expected', () => {
        const result = carService.generateDoor();
        expect(expectedDoor).toContain(result);
      });
});