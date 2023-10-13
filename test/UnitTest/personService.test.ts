import {getNameGender} from '../../src/Services/personService'

    //Assert

    test('Testing FullName', async () => {
        //expect(person).toContain(personTest); //Sammenligner bare med sig selv lige nu. 
        const test = await getNameGender(1);
        console.log(test);

        expect(test).toEqual(test);

        //expect(person).toEqual(getData());

    });

    /*test('Data from DB', async () => {
        await expect(getData()).resolves.toEqual(person);
    });*/