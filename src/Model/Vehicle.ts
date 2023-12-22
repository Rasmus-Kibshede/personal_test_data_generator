import { Engine } from "./Engine";

export class Vehicle {
  private color: string;
  private capacity: number;
  private licenseNumber: string;
  private range: number;
  private engine: Engine;
  private fuelTank: number;
  private gear: number;
  private VIN: string;
  private wheel: number;

  constructor(color: string, capacity: number, licenseNumber: string, range: number, engine: Engine, fuelTank: number, gear: number, VIN: string, wheel: number) {
    this.color = color;
    this.capacity = capacity;
    this.licenseNumber = licenseNumber;
    this.range = range;
    this.engine = engine;
    this.fuelTank = fuelTank;
    this.gear = gear;
    this.VIN = VIN;
    this.wheel = wheel
  }

  getColor(): string {
    return this.color;
  }

  setColor(value: string) {
    this.color = value;
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

export class Car extends Vehicle {
  private make: string;
  private model: string;
  private door: number;
  private year: number

  constructor(make: string, model: string, year: number, door: number, color: string, capacity: number, licenseNumber: string, range: number, engine: Engine, fuelTank: number, gear: number, VIN: string, wheel: number) {
    super(color, capacity, licenseNumber, range, engine, fuelTank, gear, VIN, wheel)
    this.make = make;
    this.model = model;
    this.year = year; 
    this.door = door;
  }

  getMake(): string {
    return this.make
  }

  setMake(value: string){
    this.make = value
  }

  getModel(): string {
    return this.model
  }

  setModel(value: string){
    this.model = this.model
  }

  getDoor(): number {
    return this.door
  }

  setDoor(value: number){
    this.door = value
  }

  getYear(): number {
    return this.year
  }

  setYear(value: number){
    this.year = value
  }
};