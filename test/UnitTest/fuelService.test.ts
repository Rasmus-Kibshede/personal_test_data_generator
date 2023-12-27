const expectedRangeData = [511, 672, 589, 764, 385, 824, 554, 389, 745, 551]
const expectedFuelTankData = [48, 55, 61, 57, 50, 59, 56, 52, 64, 53]

const dataProvider = expectedRangeData.map((range, index) => ({
  range,
  fuelTank: expectedFuelTankData[index]
}))

/* ---------------------------------------- generateRange ---------------------------------------- */
describe('generateRange', () => {

  test.each(dataProvider)('Range is a number', ({range}) => {
    expect(typeof range).toBe('number');
  });

  test.each(dataProvider)('Range is an integer', ({range}) => {
    expect(Number.isInteger(range)).toBe(true);
  });

  test.each(dataProvider)('Range is not null or undefined', ({range}) => {
    expect(range).not.toBeNull();
    expect(range).not.toBeUndefined();
  });

  test.each(dataProvider)('Range is within the expected range', ({range}) => {
    const expectedMin = 350;
    const expectedMax = 900;
    expect(range).toBeGreaterThanOrEqual(expectedMin);
    expect(range).toBeLessThanOrEqual(expectedMax);
  });

  test.each(dataProvider)('Range is an integer', ({range}) => {
    expect(range % 1).toBe(0);
  });

  test.each(dataProvider)('Range is a positive number', ({range}) => {
    expect(range).toBeGreaterThan(0);
  });

  test.each(dataProvider)('Range is less than 901', ({range}) => {
    expect(range).toBeLessThan(901);
  });

  test.each(dataProvider)('Range is not a floating-point number', ({range}) => {
    expect(range % 1).toBe(0);
  });


  test.each(dataProvider)('Range is less than 901 upper boundary', ({range}) => {
    expect(range).not.toBe(901);
    expect(range).toBeLessThan(901);
  });

  test.each(dataProvider)('Range greater than 349 lower boundary', ({range}) => {
    expect(range).toBeGreaterThan(349);
    expect(range).not.toBe(349);
  });

});

/* ---------------------------------------- generateFuelTank ---------------------------------------- */
describe('generateFuelTank', () => {

  test.each(dataProvider)('Fuel tank is a number', ({fuelTank}) => {
    expect(typeof fuelTank).toBe('number');
  });

  test.each(dataProvider)('Fuel tank is an integer', ({fuelTank}) => {
    expect(Number.isInteger(fuelTank)).toBe(true);
  });

  test.each(dataProvider)('Fuel tank is not null or undefined', ({fuelTank}) => {
    expect(fuelTank).not.toBeNull();
    expect(fuelTank).not.toBeUndefined();
  });

  test.each(dataProvider)('Fuel tank is an integer', ({fuelTank}) => {
    expect(fuelTank % 1).toBe(0);
  });

  test.each(dataProvider)('Fuel tank is within the expected range', ({fuelTank}) => {
    const expectedMin = 45;
    const expectedMax = 65;
    expect(fuelTank).toBeGreaterThanOrEqual(expectedMin);
    expect(fuelTank).toBeLessThanOrEqual(expectedMax);
  });

  test.each(dataProvider)('Fuel tank is a positive number', ({fuelTank}) => {
    expect(fuelTank).toBeGreaterThan(0);
  });

  test.each(dataProvider)('Fuel tank is less than 66 upper boundary', ({fuelTank}) => {
    expect(fuelTank).toBeLessThan(66);
    expect(fuelTank).not.toBe(66)
  });

  test.each(dataProvider)('Fuel tank is less than 44 lower boundary', ({fuelTank}) => {
    expect(fuelTank).toBeGreaterThan(44);
    expect(fuelTank).not.toBe(44)
  });

  test.each(dataProvider)('Fuel tank is not a floating-point number', ({fuelTank}) => {
    expect(fuelTank % 1).toBe(0);
  });
});