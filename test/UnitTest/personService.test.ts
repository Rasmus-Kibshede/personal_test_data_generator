import 'dotenv/config';
import { getRandomNameAndGender } from '../../src/Services/personService';


test('Testing FullName', async () => {
    const person = await getRandomNameAndGender();

    expect(person.fullname.length).toBeGreaterThan(0);
    expect(person.gender.length).toBeGreaterThan(0);

    expect(person.fullname.length).toBeLessThan(2147483647);
    expect(person.gender.length).toBeLessThan(2147483647);

    expect(['male', 'female']).toContain(person.gender);
    expect(person.fullname).toContain(' ');

    expect(person.fullname).toMatch(/^[a-zA-Z\s]*$/);
});