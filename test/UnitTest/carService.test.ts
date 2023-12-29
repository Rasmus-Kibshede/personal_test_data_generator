import * as carService from '../../src/Services/carService'

const expectedDoor = [3, 5]

let doors: number;

/* ---------------------------------------- generateDoor ---------------------------------------- */
describe('generateDoor', () => {

  beforeEach(()=>{
doors = carService.generateDoor();
  })

    test('Door lower boundary', () => {
      expect(doors).toBeGreaterThanOrEqual(3);
    });

    test('Door highest boundary', () => {
        const doors = carService.generateDoor();
        expect(doors).toBeLessThanOrEqual(5);
      });

      test('Door is a number', () => {
        const doors = carService.generateDoor();
        expect(typeof doors).toBe('number');
      });

      test('Door is a number', () => {
        const doors = carService.generateDoor();
        expect(Number.isInteger(doors)).toBe(true);
      });

      test('Door not a string', () => {
        const doors = carService.generateDoor();
        expect(doors).not.toBe('string');
      });

      test('Door positive integer', () => {
        const doors = carService.generateDoor();
        expect(doors).toBeGreaterThan(0);
      });

      test('Door is not a floating-point number', () => {
        const doors = carService.generateDoor();
        expect(doors % 1).toBe(0);
      });

      test('Door not null', () => {
        const doors = carService.generateDoor();
        expect(doors).not.toBeNull();
      });

      test('Door not undefined', () => {
        const doors = carService.generateDoor();
        expect(doors).not.toBeUndefined();
      });

      test('Door not 4', () => {
        const doors = carService.generateDoor();
        expect(doors).not.toBe(4);
      });

      test('Door not 3', () => {
        const doors = carService.generateDoor();
        expect(doors).not.toBe(2);
      });

      test('Door is expected', () => {
        const doors = carService.generateDoor();
        expect(expectedDoor).toContain(doors);
      });
});