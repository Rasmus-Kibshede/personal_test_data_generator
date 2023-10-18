export class Person {
    private _cpr: number;
    private _fullName: string;
    private _gender: string;
    private _dateOfBirth: Date;
    private _address: string;
    private _phoneNumber: number;

    constructor(cpr: number, fullname: string, gender: string, dateOfBirth: Date, address: string, phoneNumber: number) {
        this._cpr = cpr;
        this._fullName = fullname;
        this._address = address;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._phoneNumber = phoneNumber;
    }

    get cpr(): number {
        return this._cpr;
    }

    set cpr(value: number) {
        this._cpr = value;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get dateOfBirth(): Date {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: Date) {
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
