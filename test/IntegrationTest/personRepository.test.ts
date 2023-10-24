import 'dotenv/config';
import { connection } from '../../src/Repositories/data-source';
import { getPersonById } from '../../src/Repositories/personRepository';

afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    connection.end();
});

test('Testing FullName', async () => {
    const personOne = await getPersonById(1);
    expect(personOne).not.toBe(null);
});