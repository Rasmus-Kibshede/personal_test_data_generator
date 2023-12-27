import { Index } from "typeorm";
import { Registration } from "../../src/Model/Registration";
import * as registrationService from '../../src/Services/registrationService'

let registration: Registration

let registrations: Registration[] = [];
for (let i = 0; i < 10; i++) {
    const registration = registrationService.generateRegistration();
    registrations.push(registration);
  } 


test.each(registrations)('Testing registration typeOf Registration', (registration)=> {
    expect(registration).toBeInstanceOf(Registration)
})

