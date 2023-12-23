import { en } from "@faker-js/faker";
import { Chassis } from "./Chassis";
import { Engine } from "./Engine";
import { FuelStats } from "./FuelStats";
import { Gearbox } from "./Gearbox";
import { Registration } from "./Registration";

export class Vehicle {
  private vehicleId: number;
  private chassis: Chassis;
  private fuel: FuelStats;
  private registration: Registration;
  private engine: Engine;
  private gearbox: Gearbox;


  //FOR LANG!
  constructor(vehicleId: number, chassis: Chassis, fuel: FuelStats, registration: Registration, engine: Engine, gearbox: Gearbox) {
    this.vehicleId = vehicleId;
    this.chassis = chassis
    this.fuel = fuel
    this.registration = registration;
    this.engine = engine;
    this.gearbox = gearbox;
  }

  getVehicleId(): number {
    return this.vehicleId;
  }

  setVehicleId(value: number) {
    this.vehicleId = value;
  }

  getChassis(): Chassis{
    return this.chassis;
  }

  setChassis(value: Chassis){
    this.chassis = value;
  }

  getFuel(): FuelStats {
    return this.fuel;
  }

  setFuel(value: FuelStats) {
    this.fuel = value;
  }

  getRegistration(): Registration {
    return this.registration;
  }

  setRegistration(value: Registration) {
    this.registration = value;
  }

  getEngine(): Engine {
    return this.engine;
  }

  setEngine(value: Engine) {
    this.engine = value;
  }

  getGear(): Gearbox {
    return this.gearbox;
  }

  setGear(value: Gearbox) {
    this.gearbox = value;
  }
}

export class Car extends Vehicle {
  private make: string;
  private model: string;
  private door: number;
  private year: number

  //FOR LANG!
  constructor(make: string, model: string, year: number, door: number, vehicleId: number, chassis: Chassis, fuel: FuelStats, registration: Registration, engine: Engine, gearbox: Gearbox) {
    super(vehicleId, chassis, fuel, registration, engine, gearbox)
    this.make = make;
    this.model = model;
    this.year = year;
    this.door = door;
  }

  getMake(): string {
    return this.make
  }

  setMake(value: string) {
    this.make = value
  }

  getModel(): string {
    return this.model
  }

  setModel(value: string) {
    this.model = value
  }

  getDoor(): number {
    return this.door
  }

  setDoor(value: number) {
    this.door = value
  }

  getYear(): number {
    return this.year
  }

  setYear(value: number) {
    this.year = value
  }
};