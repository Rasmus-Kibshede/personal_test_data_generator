import 'dotenv/config';
import {getNameGender} from '../../src/Services/personService'

    test('Testing FullName', async () => {
        const test = await getNameGender(1);

        expect(test).toEqual(test);
    });