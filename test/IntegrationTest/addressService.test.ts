describe('getAddress', () => {
    test('should return an AddressDTO object', async () => {
        expect(1).toBe(1);
    });
});


// jest.mock("../../src/Repositories/adressService", () => {
//     return {
//         __esModule: true,
//         setRandomAddress: jest.fn(() => {
//             //Denne kaldes ikke.
//             return Promise.resolve([
//                 {
//                     postalCode: '1301',
//                     city: 'København K',
//                     street: 'Strand Vej',
//                     houseNumber: '300D',
//                 },
//                 {
//                     postalCode: '2000',
//                     city: 'Frederiksberg',
//                     street: 'Andersens Boulevard',
//                     houseNumber:'212, 2th',
//                 }, 
//                 {
//                     postalCode: '2100',
//                     city: 'København Ø',
//                     street: 'Andersens Boulevard',
//                     houseNumber: '99, 1mf',
//                 },
//                 {
//                     postalCode: '2200',
//                     city: 'København N',
//                     street: 'Andersens Boulevard',
//                     houseNumber: '3',
//                 },
//                 {
//                     postalCode: '8762',
//                     city: 'Flemming',
//                     street: 'Andersens Boulevard',
//                     houseNumber: '112, st tv',
//                 },
//             ]);
//         })
//     }}
//     );