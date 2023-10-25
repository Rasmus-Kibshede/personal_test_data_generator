import { faker } from '@faker-js/faker';
import { AddressDTO } from '../Model/Address';
import { getRandomAddress, getAddressByPostalCode } from '../Repositories/addressRepository';

export const getAddress = async (postalCode: number) => {
  const address = await getAddressByPostalCode(postalCode);

  if (!address) {
    throw new Error('No address found');
  };

  return address;
};

export const setRandomAddress = async () => {
  const getCityAndPostalCode = await getRandomAddress();

  if (!getCityAndPostalCode) {
    throw new Error('No address found');
  };

  const address: AddressDTO = {
    postalCode: getCityAndPostalCode.postalCode,
    city: getCityAndPostalCode.city,
    street: await generateRandomStreetName(),
    houseNumber: await generateHouseNumber()
  }

  return address;
};

export const generateHouseNumber = async () => {
  const fiftyFifty = Math.floor(Math.random() * 2);

  if (fiftyFifty == 0) {
    return await generateRandomHouseNumber();
  } else {
    return await generateRandomHouseNumber() + await generateRandomFloor() + await generateRandomDoor();
  };
};

export const getCityAndPostalCode = async () => {
  const address = await getRandomAddress();

  if (!address) {
    throw new Error('No address found');
  }

  return address;
};

export const generateRandomFloor = async () => {
  const floor = Math.floor(Math.random() * 31).toString(); // Higest floor in Denmark is 30

  if (floor == '0') {
    return 'st';
  } else {
    return floor;
  }
};

export const generateRandomDoor = async () => {
  /* 40% th, 40% tv, 20% mf */
  const door = Math.floor(Math.random() * 15);
  if (door >= 0 && door <= 5) {
    return 'th';
  } else if (door >= 6 && door <= 11) {
    return 'tv';
  } else {
    return 'mf';
  }
};

export const generateRandomHouseNumber = async () => {
  const characters = 'ABCDEFGHIJKLMN';
  const randomNumber = Math.floor(Math.random() * 999) + 1;
  const fiftyFifty = Math.floor(Math.random() * 2);
  const charactersIndex = characters[Math.floor(Math.random() * characters.length)];

  if (fiftyFifty == 0) {
    return randomNumber.toString() + ',';
  } else {
    return randomNumber.toString() + charactersIndex + ',';
  }
};

export const generateRandomStreetName = async () => {
  const generateName = await generateStreetName()
  const generateVariation = await generateStreetVariation()

  return generateName + ' ' + generateVariation;
};

export const generateStreetName = async () => {
  const streetNames: string[] = [
    'Larsens', 'Jensens', 'Andersens', 'Peters',
    'Nielsens', 'Henriks', 'Oles', 'Sørens',
    'Mikkels', 'Kristians', 'Strand'
  ];
  return streetNames[Math.floor(Math.random() * streetNames.length)];;
};

export const generateStreetVariation = async () => {
  const streetVariations: string[] = [
    'Gade', 'Vej', 'Boulevard', 'Alle', 'Plads', 'Torv',
    'Stræde', 'Sti', 'Vænge', 'Mark', 'Eng', 'Bakke', 'Bred',
    'Bjerg', 'Skov', 'Høj', 'Kær', 'Mose', 'Sø', 'Hus', 'Haven',
    'Park', 'Vold', 'Grøft',
  ];
  return streetVariations[faker.number.int({ min: 0, max: streetVariations.length - 1 })];
};
