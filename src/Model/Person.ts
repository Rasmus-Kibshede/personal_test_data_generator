import { AddressDTO } from "./Address";

export class Person {
    private _cpr: string;
    private _fullname: string;
    private _gender: string;
    private _dateOfBirth: string;
    private _address: AddressDTO;
    private _phoneNumber: string;

    constructor(fullname: string, gender: string) {
        this._fullname = fullname;
        this._gender = gender;
    }

    get cpr(): string {
        return this._cpr;
    }

    set cpr(value: string) {
        this._cpr = value;
    }

    get fullname(): string {
        return this._fullname;
    }

    set fullname(value: string) {
        this._fullname = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get address(): AddressDTO {
        return this._address;
    }

    set address(value: AddressDTO) {
        this._address = value;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
}
