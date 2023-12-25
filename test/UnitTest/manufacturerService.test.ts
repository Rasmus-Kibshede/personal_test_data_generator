import * as manufacturerService from '../../src/Services/manufacturerService'


/* ---------------------------------------- generateVehicleData ---------------------------------------- */


describe('generateVehicleData', () => {

    test('Vehicle data is an object', () => {
        const result = manufacturerService.generateVehicleData();
        expect(typeof result).toBe('object');
    });

    test('Vehicle data has make property', () => {
        const result = manufacturerService.generateVehicleData();
        expect(result).toHaveProperty('make');
        expect(typeof result.getMake()).toBe('string');
    });

    test('Vehicle data has model property', () => {
        const result = manufacturerService.generateVehicleData();
        expect(result).toHaveProperty('model');
        expect(typeof result.getModel()).toBe('string');
    });

    test('Vehicle data has year property', () => {
        const result = manufacturerService.generateVehicleData();
        expect(result).toHaveProperty('year');
        expect(typeof result.getYear()).toBe('number');
    });

    test('Vehicle data has valid year', () => {
        const result = manufacturerService.generateVehicleData();
        const currentYear = new Date().getFullYear();
        expect(result.getYear()).toBeGreaterThanOrEqual(2000);
        expect(result.getYear()).toBeLessThanOrEqual(currentYear);
    });

    test('Vehicle make is in the expected list', () => {
        const result = manufacturerService.generateVehicleData();
        const expectedMakes = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Tesla', 'BMW', 'Mercedes-Benz', 'Audi', 'Nissan', 'Hyundai'];
        expect(expectedMakes).toContain(result.getMake());
    });

    test('Vehicle model is in expected list', () => {
        const result = manufacturerService.generateVehicleData();
        const expextedModels = ['Camry', 'Accord', 'Mustang', 'Malibu', 'Model 3', 'X5', 'C-Class', 'A4', 'Altima', 'Elantra'];
        expect(expextedModels).toContain(result.getModel());
    });

    test('Vehicle data model is a string', () => {
        const result = manufacturerService.generateVehicleData();
        expect(typeof result.getModel()).toBe('string');
    });

    test('Vehicle data make is not null or undefined', () => {
        const result = manufacturerService.generateVehicleData();
        expect(result.getMake()).not.toBeNull();
        expect(result.getMake()).not.toBeUndefined();
    });

    test('Vehicle data model is not null or undefined', () => {
        const result = manufacturerService.generateVehicleData();
        expect(result.getModel()).not.toBeNull();
        expect(result.getModel()).not.toBeUndefined();
    });

    test('Vehicle data does not have duplicate models', () => {
        const models = new Set();
        for (let i = 0; i < 100; i++) {
            const result = manufacturerService.generateVehicleData();
            models.add(result.getModel());
        }
        expect(models.size).toBe(10);
    });

    test('Make greater or equal to 3', async () => {
        const result = manufacturerService.generateVehicleData();
        expect(result.getMake().length).toBeGreaterThanOrEqual(3);
      });
    
      test('Make less or equal to 9', async () => {
        const result = manufacturerService.generateVehicleData();
        expect(result.getMake().length).toBeLessThanOrEqual(13);
      });

      test('Model greater or equal to 2', async () => {
        const result = manufacturerService.generateVehicleData();
        expect(result.getModel().length).toBeGreaterThanOrEqual(2);
      });
    
      test('Model less or equal to 7', async () => {
        const result = manufacturerService.generateVehicleData();
        expect(result.getModel().length).toBeLessThanOrEqual(7);
      });
});
