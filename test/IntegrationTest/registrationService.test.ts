import { Registration } from "../../src/Model/Registration";
import * as registrationService from '../../src/Services/registrationService'

let registration: Registration;

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
});