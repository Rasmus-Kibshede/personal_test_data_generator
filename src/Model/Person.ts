import { AddressDTO } from './Address';

export class Person {
  private cpr: string;
  private fullname: string;
  private gender: string;
  private dateOfBirth: string;
  private address: AddressDTO;
  private phoneNumber: string;

  constructor(fullname: string, gender: string) {
    this.fullname = fullname;
    this.gender = gender;
  }

  getFullName(): string {
    return this.fullname;
  }

  setFullName(value: string) {
    this.fullname = value;
  }

  getGender(): string {
    return this.gender;
  }

  setGender(value: string) {
    this.gender = value;
  }

  getDateOfBirth(): string {
    return this.dateOfBirth;
  }

  getCpr(): string {
    return this.cpr;
  }

  setCpr(value: string) {
    this.cpr = value;
  }

  setDateOfBirth(value: string) {
    this.dateOfBirth = value;
  }

  getAddress(): AddressDTO {
    return this.address;
  }

  setAddress(value: AddressDTO) {
    this.address = value;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(value: string) {
    this.phoneNumber = value;
  }
}
