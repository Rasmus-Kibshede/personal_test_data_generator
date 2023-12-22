import { Engine } from "./Engine";

export class Vehicle {
  private colorHex: string;
  private capacity: number;
  private licenseNumber: string;
  private range: number;
  private door: number;
  private engine: Engine;
  private fuelTank: number;
  private gear: number;
  private VIN: string;
  private wheel: number;

  constructor(colorHex: string, capacity: number, licenseNumber: string, range: number, door: number, engine: Engine, fuelTank: number, gear: number, VIN: string, wheel: number) {
    this.colorHex = colorHex;
    this.capacity = capacity;
    this.licenseNumber = licenseNumber;
    this.range = range;
    this.door = door;
    this.engine = engine;
    this.fuelTank = fuelTank;
    this.gear = gear;
    this.VIN = VIN;
    this.wheel = wheel
  }

  getColorHex(): string {
    return this.colorHex;
  }

  setColorHex(value: string) {
    this.colorHex = value;
  }

  getCapacity(): number {
    return this.capacity;
  }

  setCapacity(value: number) {
    this.capacity = value;
  }

  getLicenseNumber(): string {
    return this.licenseNumber;
  }

  setLicenseNumber(value: string) {
    this.licenseNumber = value;
  }

  getRange(): number {
    return this.range;
  }

  setRange(value: number) {
    this.range = value;
  }

  getDoor(): number {
    return this.door;
  }

  setDoor(value: number) {
    this.door = value;
  }

  getEngine(): Engine {
    return this.engine;
  }

  setEngine(value: Engine) {
    this.engine = value;
  }

  getFuelTank(): number {
    return this.fuelTank;
  }

  setFuelTank(value: number) {
    this.fuelTank = value;
  }

  getGear(): number {
    return this.gear;
  }

  setGear(value: number) {
    this.gear = value;
  }

  getVIN(): string {
    return this.VIN;
  }

  setVIN(value: string) {
    this.VIN = value;
  }

  getWheel(): number {
    return this.wheel
  }

  setWheel(value: number){
    this.wheel = value
  }
}