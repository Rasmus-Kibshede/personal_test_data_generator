import { Chassis } from "./Chassis";
import { Engine } from "./Engine";
import { FuelStats } from "./FuelStats";
import { Gearbox } from "./Gearbox";
import { Manufacturer } from "./Manufacturer";
import { Registration } from "./Registration";

export class Vehicle {
  private vehicleId: number;
  private chassis: Chassis;
  private fuel: FuelStats;
  private registration: Registration;
  private engine: Engine;
  private gearbox: Gearbox;


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

  getChassis(): Chassis {
    return this.chassis;
  }

  setChassis(value: Chassis) {
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
  private manufacturer: Manufacturer;
  private door: number;

  constructor(manufacturer: Manufacturer, door: number, vehicleId: number, chassis: Chassis, fuel: FuelStats, registration: Registration, engine: Engine, gearbox: Gearbox) {
    super(vehicleId, chassis, fuel, registration, engine, gearbox)
    this.manufacturer = manufacturer
    this.door = door;
  }

  getManufacturer(): Manufacturer {
    return this.manufacturer;
  }

  setManufacturer(value: Manufacturer) {
    this.manufacturer = value;
  }

  getDoor(): number {
    return this.door;
  }

  setDoor(value: number) {
    this.door = value;
  }
};