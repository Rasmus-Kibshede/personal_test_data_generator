import { Registration } from "../../src/Model/Registration";
import * as registrationService from '../../src/Services/registrationService'

let registration: Registration;

/*
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
];*/


/* ---------------------------------------- generateRegistration ---------------------------------------- */
describe('generateRegistration', () => {

  beforeEach(() => {
    registration = registrationService.generateRegistration();
  });

  test('Registration',()=>{
    expect(typeof registration).toBe('object')
  })

  test('Registration instanceOf Registration', () => {
    expect(registration).toBeInstanceOf(Registration);
  });

  test('Registration not null', () => {
    expect(registration).not.toBeNull();
  });

  test('Registration not undefined', () => {
    expect(registration).not.toBeUndefined();
  });

  test('RegistrationId not null', () => {
    expect(registration.getRegistrationId()).not.toBeNull();
  });

  test('RegistrationId not undefined', () => {
    expect(registration.getRegistrationId()).not.toBeUndefined();
  });

  test('Registration license not null', () => {
    expect(registration.getLicenseNumber()).not.toBeNull();
  });

  test('Registration license not undefined', () => {
    expect(registration.getLicenseNumber()).not.toBeUndefined();
  });

  test('Registration VIN not null', () => {
    expect(registration.getVIN()).not.toBeNull();
  });

  test('Registration VIN not undefined', () => {
    expect(registration.getVIN()).not.toBeUndefined();
  });

  /*test('Registration correct licensNumber', () => {
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

  test('RegistrationId not 0', () => {
    expect(registration.getRegistrationId()).not.toBe(0);
  });*/
});


/* ---------------------------------------- Registration setters ---------------------------------------- */

describe('Registration Setters', () => {

  beforeEach(() => {
    registration = registrationService.generateRegistration();
  });

  test('Registration setLicenseNumber',()=>{
    registration.setLicenseNumber('test');
    expect(registration.getLicenseNumber()).toBe('test')
  });

  test('Registration setVIN',()=>{
    registration.setVIN('test');
    expect(registration.getVIN()).toBe('test')
  });

  test('Registration setRegistrationId',()=>{
    registration.setRegistrationId(-1);
    expect(registration.getRegistrationId()).toBe(-1)
  });
});