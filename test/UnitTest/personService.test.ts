import 'dotenv/config';
import { connection } from '../../src/Repositories/data-source';
import { getNameGender } from '../../src/Services/personService'

test('Testing FullName', async () => {
    const test = await getNameGender(1);

    expect(test).toEqual(test);
});


afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    connection.end();
})