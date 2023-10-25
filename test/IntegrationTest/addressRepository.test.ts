import 'dotenv/config';
import { connection } from '../../src/Repositories/data-source';
import { getAddressByPostalCode } from '../../src/Repositories/addressRepository';

afterAll(() => {
    // Closing the DB connection allows Jest to exit successfully.
    connection.end();
});

test('Testing Postalcode and City', async () => {
    const address = await getAddressByPostalCode(1301);
    expect(address.city).toBe("København K");
});