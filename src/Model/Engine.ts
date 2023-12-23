export class Engine {
    private engineId: number;
    private type: string;
    private HP: number;
    private torque: number;
    private fuelType: string;

    constructor(engineId: number, type: string, HP: number, torque: number, fuelType: string) {
        this.engineId = engineId
        this.type = type;
        this.HP = HP;
        this.torque = torque;
        this.fuelType = fuelType;
    }

    getEngineId(): number {
        return this.engineId;
    }

    setEngineId(value: number){
        this.engineId = value;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    getHP(): number {
        return this.HP;
    }

    setHP(value: number) {
        this.HP = value;
    }

    getTorque(): number {
        return this.torque;
    }

    setTorque(value: number) {
        this.torque = value;
    }

    getFuelType(): string {
        return this.fuelType;
    }

    setFuelType(value: string) {
        this.fuelType = value;
    }
}