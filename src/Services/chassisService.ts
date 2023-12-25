import { faker } from "@faker-js/faker";
import { Chassis } from "../Model/Chassis"

export const generateChassis = (door: number) => {
    const chassis = new Chassis(-1, generateColor(), generateWheel(), generateCapacity(door));
    return chassis;
}

export const generateColor = () => {
    const colors = [
        'Red',
        'Blue',
        'Green',
        'Yellow',
        'Purple',
        'Orange',
        'Pink',
        'Brown',
        'Gray',
        'Teal',
        'Black',
        'White'
    ];

    return colors[faker.number.int({ min: 0, max: colors.length -1 })]
};

export const generateCapacity = (door: number) => {
    if (door === 3) {
        return 2
    } else {
        return 5
    }
};

export const generateWheel = () => {
    return 4;
}