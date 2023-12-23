export class Gearbox {
    private gearboxId: number; 
    private type: string; //Automat eller Manuel
    private gears: number; //Antal Gear
    private driveTrain: string; //AWD, 4WD, FrontWD, RearWD


    constructor(gearboxId: number, type: string, gears: number, driveTrain: string) {
        this.gearboxId = gearboxId;
        this.type = type;
        this.gears = gears;
        this.driveTrain = driveTrain;
    }

    setGearboxId(value: number) {
        this.gearboxId = value;
    }

    getGearboxId(): number {
        return this.gearboxId;
    }

    setType(value: string) {
        this.type = value;
    }

    getType(): string {
        return this.type;
    }

    setGears(value: number) {
        this.gears = value;
    }

    getGears(): number {
        return this.gears;
    }

    setDriveTrain(value: string) {
        this.driveTrain = value;
    }

    getDriveTrain(): string {
        return this.driveTrain;
    }
}