export class Person {
    private _cpr: string;
    private _fullname: string;
    private _gender: string;
    private _dateOfBirth: string;
    private _address: string;
    private _phoneNumber: number;

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

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get phoneNumber(): number {
        return this._phoneNumber;
    }

    set phoneNumber(value: number) {
        this._phoneNumber = value;
    }
}
