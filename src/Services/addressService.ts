import { AddressDTO } from '../Model/Address';
import { getRandomAddress, getAddressByPostalCode } from '../Repositories/addressRepository';

export const getAddress = async (postalCode: number) => {
    const address = await getAddressByPostalCode(postalCode);

    if (!address) {
        throw new Error("No address found");
    }

    console.log("Service Lag: " + address);

    return address;
}

// TODO: Integration testies
export const setRandomAddress = async () => {
    const getCityAndPostalCode = await getRandomAddress();

    if (!getCityAndPostalCode) {
        throw new Error("No address found");
    }

    const address: AddressDTO = {
        postalCode: getCityAndPostalCode.postalCode,
        city: getCityAndPostalCode.city,
        street: await generateRandomStreet(),
        houseNumber: await generateHouseNumber(),
    } 
    return address;
};

// TODO: Integration testies
export const generateHouseNumber = async () => {
    const fiftyFifty = Math.floor(Math.random() * 2);

    if (fiftyFifty == 0) {
        return await generateRandomNumberForDoor();
    } else {
        return await generateRandomNumberForDoor() + await generateRandomFloor() + await generateRandomDoor();
    } 
};

// TODO: Integration testies
export const getCityAndPostalCode = async () => {
    const address = await getRandomAddress();

    if (!address) {
        throw new Error("No address found");
    }

    return address;
};

// Tested
export const generateRandomFloor = async () => {
    const floor = Math.floor(Math.random() * 31).toString(); // Higest floor in Denmark is 30
  
    if (floor == "0") {
      return "st";
    } else {
      return floor;
    }
  };
  
  // Tested
  export const generateRandomDoor = async () => {
    /* 40% th, 40% tv, 20% mf */
    const door = Math.floor(Math.random() * 15);
    if (door >= 0 && door <= 5) {
      return "th";
    } else if (door >= 6 && door <= 11) {
      return "tv";
    } else {
      return "mf";
    }
  };
  
  // Tested 
  export const generateRandomNumberForDoor = async () => {
    const characters = "ABCDEFGHIJKLMN";
    const randomNumber = Math.floor(Math.random() * 999) + 1;
    const fiftyFifty = Math.floor(Math.random() * 2);
    const charactersIndex = characters[Math.floor(Math.random() * characters.length)];
  
    if (fiftyFifty == 0) {
      return randomNumber.toString();
    } else {
      return randomNumber.toString() + charactersIndex;
    }
  };
  
  //TODO: Integration testies
  export const generateRandomStreet = async () => {
    return generateStreetName() + " " + generateStreetVariation();
  };
  
  //Tested 
  export const generateStreetName = async () => {
    const streetNames: string[] = [
      "Larsens",
      "Jensens",
      "Andersens",
      "Peters",
      "Nielsens",
      "Henriks",
      "Oles",
      "Sørens",
      "Mikkels",
      "Kristians",
    ];
    return streetNames[Math.floor(Math.random() * streetNames.length)];;
  };
  
  // Tested
  export const generateStreetVariation = async () => {
    const streetVariations: string[] = [
      "Gade",
      "Vej",
      "Boulevard",
      "Alle",
      "Plads",
      "Torv",
      "Stræde",
      "Sti",
      "Vænge",
      "Mark",
      "Eng",
      "Bakke",
      "Bred",
      "Bjerg",
      "Skov",
      "Høj",
      "Kær",
      "Mose",
      "Sø",
      "Hus",
      "Haven",
      "Park",
      "Vold",
      "Grøft",
    ];
  
    return streetVariations[Math.floor(Math.random() * streetVariations.length)];
  };
  