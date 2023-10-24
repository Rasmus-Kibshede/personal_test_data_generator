import 'dotenv/config';
import { connection } from '../../src/Repositories/data-source';
import { getPersonById } from '../../src/Repositories/personRepository';

test('Testing FullName', async () => {
    const personOne = await getPersonById(1);
    expect(personOne).not.toBe(null);
});

afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    connection.end()
});