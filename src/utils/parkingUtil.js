import { searchCar, removeCar } from './helperUtil';
let Car = [];
let maxSize = 0;
let availableSlot = [];

export const createParkingLot = (noOfLot) => {
    try {
        maxSize = parseInt(noOfLot);
    } catch (e) {
        return "Parameter is not a number!";
    }

    for (let i = 1; i <= maxSize; i++) {
        availableSlot.push(i);
    }
    return `Created a parking lot with ${availableSlot.length} slots`;

}


export const park = (name) => {
    if (maxSize === 0) {
        return `parking lot is not initiated`;
    } else if (maxSize === Car.length) {
        return `Sorry, parking lot is full`;
    } else {
        let slot = availableSlot[0];
        Car.push({
            'slot': slot,
            'name': name
        });
        availableSlot.shift();
        return `Allocated slot number: ${slot}`
    }
}


export const leave = (slot) => {
    slot = parseInt(slot);
    if (maxSize === 0) {
        return "parking lot is not initiated";
    } else if (Car.length > 0) {

        if ( searchCar(slot, 'slot', Car)) {

            Car = removeCar(slot, 'slot', Car);

            availableSlot.push(slot);
            availableSlot.sort();
            return `Slot  numbmer ${slot} is free`;

        } else {
            return ` Slot ${slot} is already empty `;
        }
    } else {
        return `Parking lot is empty`
    }
}


export const status = () => {
    if (maxSize === 0) {
        return "parking lot is not initiated";
    } else if (Car.length > 0) {
        return Car;

    } else {
        return `Parking lot is empty`
    }

}