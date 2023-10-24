import 'dotenv/config';
import { getPersonById } from '../../src/Repositories/personRepository';

test('Testing FullName', async () => {
    const personOne = await getPersonById(1);
    expect(personOne).not.toBe(null);
});